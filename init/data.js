const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage1",
      url: "https://images.pexels.com/photos/1738994/pexels-photo-1738994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Tranquil Hillside Retreat",
    description: "Unwind in this peaceful hillside retreat with stunning mountain views and serene surroundings.",
    image: {
      filename: "listingimage2",
      url: "https://images.pexels.com/photos/220484/pexels-photo-220484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Luxurious Urban Apartment",
    description: "Experience the best of city living in this luxurious urban apartment with modern amenities and a central location.",
    image: {
      filename: "listingimage3",
      url: "https://images.pexels.com/photos/1115809/pexels-photo-1115809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Serene Riverside Cottage",
    description: "Relax in this serene riverside cottage with beautiful views of the river and surrounding nature.",
    image: {
      filename: "listingimage4",
      url: "https://images.pexels.com/photos/3716398/pexels-photo-3716398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Elegant Heritage Bungalow",
    description: "Step back in time with this elegant heritage bungalow featuring classic architecture and antique furnishings.",
    image: {
      filename: "listingimage5",
      url: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Mountain View Cabin",
    description: "Enjoy breathtaking mountain views from this cozy cabin, perfect for a quiet retreat in nature.",
    image: {
      filename: "listingimage6",
      url: "https://images.pexels.com/photos/3764606/pexels-photo-3764606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Modern City Loft",
    description: "Stay in this modern city loft with stylish decor and easy access to shopping, dining, and entertainment.",
    image: {
      filename: "listingimage7",
      url: "https://images.pexels.com/photos/164716/pexels-photo-164716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Rustic Farmhouse",
    description: "Experience the charm of rural life in this rustic farmhouse surrounded by fields and greenery.",
    image: {
      filename: "listingimage8",
      url: "https://images.pexels.com/photos/1738994/pexels-photo-1738994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Beachside Villa",
    description: "Indulge in luxury at this beachside villa with private access to the beach and stunning sea views.",
    image: {
      filename: "listingimage9",
      url: "https://images.pexels.com/photos/1738994/pexels-photo-1738994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Desert Oasis Tent",
    description: "Discover the beauty of the desert in this luxurious tent, complete with modern comforts and a unique experience.",
    image: {
      filename: "listingimage10",
      url: "https://images.pexels.com/photos/1738994/pexels-photo-1738994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Lakefront Cottage",
    description: "Relax by the lake in this charming cottage with stunning water views and peaceful surroundings.",
    image: {
      filename: "listingimage11",
      url: "https://images.pexels.com/photos/1738994/pexels-photo-1738994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Countryside Villa",
    description: "Escape to this countryside villa for a peaceful retreat surrounded by nature and tranquility.",
    image: {
      filename: "listingimage12",
      url: "https://images.pexels.com/photos/1687068/pexels-photo-1687068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Spacious Downtown Loft",
    description: "Experience urban living at its finest in this spacious downtown loft, featuring contemporary design and convenient access to city attractions.",
    image: {
      filename: "listingimage13",
      url: "https://images.pexels.com/photos/1738994/pexels-photo-1738994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Secluded Cabin in the Woods",
    description: "Get away from it all in this secluded cabin in the woods, perfect for nature lovers and adventurers.",
    image: {
      filename: "listingimage14",
      url: "https://images.pexels.com/photos/2067712/pexels-photo-2067712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
  {
    title: "Charming City Apartment",
    description: "Stay in the heart of the city in this charming apartment, offering comfort and convenience for urban explorers.",
    image: {
      filename: "listingimage15",
      url: "https://images.pexels.com/photos/2869608/pexels-photo-2869608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    owner: "66a83ad4b0c55af8675a5939",
  },
];


  module.exports = { data: sampleListings };