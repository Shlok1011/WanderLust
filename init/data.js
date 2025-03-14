const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {url:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    filename:"listingimage",
  },price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename:"listingimage",
    }, price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:{url:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename:"listingimage",
    },price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {url:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    filename:"listingimage",
  },price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {url:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename:"listingimage",
    },price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {url:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    filename:"listingimage",
  },
  price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename:"listingimage",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {url:"https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    filename:"listingimage",
  },price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {url:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename:"listingimage",
    },price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {url:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    filename:"listingimage",
    },
  price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {url:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename:"listingimage",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {url:"https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename:"listingimage",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:"Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {url:"https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename:"listingimage",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:"Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {url:"https://images.unsplash.com/photo-1566550737854-b348bf1653ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename:"listingimage",
    },   
    price: 2000,
    location: "Boston",
    country: "United States",
  },

  {
   title: "Waterfront Villa in Bali",
    description: "Indulge in luxury living in this stunning waterfront villa with private access to a serene beach.",
    image: {url:"https://plus.unsplash.com/premium_photo-1730046886079-442765ad75b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename:"listingimage",
    },
    price: 4500,
    location: "Bali",
    country: "Indonesia"
  },  {
   title :"Countryside Chateau in Provence",
    description: "Experience the elegance of Provence in this spacious countryside chateau surrounded by lavender fields.",
    image: {url:"https://plus.unsplash.com/premium_photo-1729957404071-7f976fa8582e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename:"listingimage",
    },
    price: 3500,
    location: "Provence",
    country: "France"
  },  {
   title: "Island Escape in the Maldives",
    description: "A private overwater bungalow in the Maldives for the ultimate tropical vacation.",
    image: {url:"https://plus.unsplash.com/premium_photo-1678286769656-009c133e6f89?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename:"listingimage",
    },
    price: 8000,
    location: "Maldives",
    country: "Maldives"
  },  {
   title: "Luxury Ranch in Montana",
    description: "Experience authentic Western living on a sprawling luxury ranch with horseback riding and hiking.",
    image: {
      url:"https://images.unsplash.com/photo-1718644342133-0dbb056cb7fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename:"listingimage",
    },
    price: 3200,
    location: "Montana",
    country: "United States"
  },  {
   title: "Penthouse with Ocean View in Sydney",
    description: "Stay in this luxury penthouse with spectacular views of the Sydney Opera House and Harbour Bridge.",
    image: {
      url:"https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename:"listingimage",
    },
    price: 4000,
    location: "Sydney",
    country: "Australia"
  },  {
   title: "Desert Oasis in Arizona",
    description: "A secluded desert retreat with breathtaking views of the Arizona desert landscape.",
    image: {
      url:"https://images.unsplash.com/photo-1614451153800-c141e95b9054?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename:"listingimage",
    },
    price: 1200,
    location: "Sedona",
    country: "United States"
  },  {
   title: "Tropical Villa in Costa Rica",
    description: "Experience paradise in this stunning villa surrounded by lush jungle and steps away from the beach.",
    image:{ 
    url:"https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    filename:"listingimage",
    },
    price: 2500,
    location: "Costa Rica",
    country: "Costa Rica"
  },  {
   title: "Chic Apartment in Barcelona",
    description: "A modern, stylish apartment in the heart of Barcelona, close to all the city's iconic landmarks.",
    image: {
      url :"https://images.unsplash.com/photo-1711111038517-f5d61fe63008?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename:"listingimage",
    },
    price: 1600,
    location: "Barcelona",
    country: "Spain"
  },  {
   title: "Beachfront Estate in Seychelles",
    description: "A luxurious beachfront estate with panoramic views of the Indian Ocean.",
    image: {
      url:"https://plus.unsplash.com/premium_photo-1676485829691-1b6d55651540?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename:"listingimage",
    },
    price: 5000,
    location: "Seychelles",
    country: "Seychelles"
  },  {
   title: "Luxury Treehouse in Costa Rica",
    description: "Live among the treetops in this luxurious treehouse with panoramic views of the rainforest.",
    image: {
      url:"https://images.unsplash.com/photo-1718606267789-de728d02f064?q=80&w=1009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename:"listingimage",
    },
    price: 2800,
    location: "Costa Rica",
    country: "Costa Rica"
  },  {
   title: "Modern House with Lake Views",
    description: "A sleek and modern home with stunning views of the serene lake and surrounding mountains.",
    image: {
      url:"https://images.unsplash.com/photo-1711470623168-885d5b054e57?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D",
      filename:"listingimage",
    },
      price: 1800,
    location: "Lake Geneva",
    country: "Switzerland",
  }
 
];
module.exports = { data: sampleListings };