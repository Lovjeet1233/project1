const express = require('express');
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const { urlencoded } = require('express');
const session = require('express-session');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const app = express();

app.engine("ejs", ejsMate);
const MONGO_URL = 'mongodb://127.0.0.1:27017/Wanderlust';

app.use(methodOverride('_method'));
app.use(urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "/public")));

// Configure express-session middleware
app.use(session({
    secret: 'your_secret_key', // Change this to a secure key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using https
}));

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to set a user variable for all views
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}
main();

// Middleware to check if the user is logged in
function isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

// Middleware to check if the user is the owner of the listing
async function isOwner(req, res, next) {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.owner.equals(req.user._id)) {
        return res.redirect('/listings');
    }
    next();
}

app.post("/signup", async (req, res, next) => {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    try {
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            return res.redirect("/listings");
        });
    } catch (err) {
        return next(err);
    }
});

app.get('/signup', (req, res) => {
    res.render('users/signup');
});

app.get('/login', (req, res) => {
    res.render('users/login');
});

app.post("/login", passport.authenticate('local', {
    failureRedirect: "/login"
}), (req, res) => {
    res.redirect("/listings");
});

app.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/listings");
    });
});

app.get('/privacy', (req, res) => {
    res.render('listings/privacy');
});

app.get('/listings', async (req, res) => {
    try {
        const listings = await Listing.find({});
        res.render('listings/index', { listings });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/listings/new', isLoggedIn, (req, res) => {
    res.render('listings/new');
});

app.get('/listings/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const listing = await Listing.findById(id).populate("owner");
        res.render('listings/show', { listing });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/listings', isLoggedIn, async (req, res) => {
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    res.redirect('/listings');
});

app.get('/listings/:id/edit', isLoggedIn, isOwner, async (req, res) => {
    const { id } = req.params;
    try {
        const listing = await Listing.findById(id);
        res.render('listings/edit', { listing });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.put('/listings/:id', isLoggedIn, isOwner, async (req, res) => {
    const { id } = req.params;
    try {
        await Listing.findByIdAndUpdate(id, req.body.listing);
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/listings/:id', isLoggedIn, isOwner, async (req, res) => {
    const { id } = req.params;
    try {
        await Listing.findByIdAndDelete(id);
        res.redirect('/listings');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/',isLoggedIn, async (req, res) => {
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    res.redirect('/listings');
});
app.get("/calculator",(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

})

app.listen(3020, () => {
    console.log('server is listening on port 3020');
});

// Catch-all route for handling 404 errors
app.use((req, res) => {
    res.status(404).send("Page not found");
});
