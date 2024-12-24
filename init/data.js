const sampleListings = [
  {
    title: "Grand Hotel",
    description: "Luxurious hotel with stunning views and modern amenities.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/74/45/8a/exterior.jpg?w=700&h=-1&s=1",
    price: 250,
    location: "London",
    country: "UK",
  },
  {
    title: "Seaside A Lifestyle Resort ",
    description:
      "Beautiful resort located on the beach with excellent facilities.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/390822683.jpg?k=48c1a8b31712953b008f37a26a358dcb4ad76d7b8fa7668c7fe6b3f63880bdee&o=&hp=1",
    price: 300,
    location: "Brighton",
    country: "UK",
  },
  {
    title: "The Mountain Inn",
    description:
      "Cozy inn located in the mountains, perfect for a relaxing getaway.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/140901860.jpg?k=36b52e6b203d07c27c9b1cad39e6551a60824068983a83ca5345549030eb4c8d&o=&hp=1",
    price: 150,
    location: "Snowdonia",
    country: "UK",
  },
  {
    title: "The Raleigh",
    description: "Conveniently located hotel in the heart of the city.",
    image:
      "https://hips.hearstapps.com/clv.h-cdn.co/assets/16/33/1471831386-flraleighhighrise.JPG?crop=0.8610086100861009xw:1xh;center,top&resize=980:*",
    price: 200,
    location: "Manchester",
    country: "UK",
  },
  {
    title: "Anchorage Hotel",
    description:
      "Stay in a beautifully preserved historic building with modern comforts.",
    image:
      "https://cdn.savingplaces.org/2017/04/19/15/54/42/964/Fairmont-Copley-Plaza.jpg",
    price: 275,
    location: "Edinburgh",
    country: "UK",
  },
  {
    title: "LALITA BOUTIQUE HOTEL & SPA NINH BINH",
    description:
      "Charming boutique hotel with personalized service and unique rooms.",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/74/13/35/lalita-boutique-hotel.jpg",
    price: 220,
    location: "Bath",
    country: "UK",
  },
  {
    title: "Luxury Suites Amsterdam",
    description: "Opulent suites with top-notch amenities and services.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ff/34/e5/luxury-suites-amsterdam.jpg?w=700&h=-1&s=1",
    price: 500,
    location: "Leeds",
    country: "UK",
  },
  {
    title: "Airport Hotel",
    description:
      "Convenient hotel located near the airport with shuttle service.",
    image:
      "https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/lodging/2000000/1080000/1079900/1079861/34f110a7_z.jpg?_src=imagekit&tr=c-at_max,h-280,q-40,w-740",
    price: 180,
    location: "Heathrow",
    country: "UK",
  },
  {
    title: "Eco Lodge",
    description: "Environmentally friendly lodge with sustainable practices.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/0d/a4/79/eco-lodge.jpg?w=700&h=-1&s=1",
    price: 130,
    location: "Lake District",
    country: "UK",
  },
  {
    title: "Yorkshire Spa Retreat",
    description:
      "Relaxing spa retreat with various wellness treatments available.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/27/02/ab/yorkshire-spa-retreat.jpg?w=1200&h=-1&s=1",
    price: 350,
    location: "Cotswolds",
    country: "UK",
  },
  {
    title: "B Business Hotel & Spa",
    description:
      "Ideal for business travelers with conference rooms and office facilities.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max500/86558434.jpg?k=f9c9c27e866980ffb4c2940704497ab0411b740791a318666fbf56a5527926f3&o=&hp=1",
    price: 210,
    location: "Birmingham",
    country: "UK",
  },
  {
    title: "Blackaddie",
    description: "Charming country house hotel set in beautiful countryside.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5ce5569be9faf7000186657b/1630052485203-9F0VCS80YFCGVXZEF5BB/2C6D06E9-6095-4A07-84ED-747B212D258A.jpeg?format=1500w",
    price: 240,
    location: "Yorkshire",
    country: "UK",
  },
  {
    title: "Beach Hotel",
    description:
      "Relaxing hotel located right on the beach with sea view rooms.",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1b/11/ce/96/gulfside-and-poolview.jpg",
    price: 290,
    location: "Cornwall",
    country: "UK",
  },
  {
    title: "Urban Hotel",
    description: "Stylish urban hotel with contemporary design and facilities.",
    image: "https://www.urban-hotel.fr/imagecache/fullwidth/notfound.jpg",
    price: 260,
    location: "Glasgow",
    country: "UK",
  },
  {
    title: "Dolby Hotel",
    description:
      "Affordable hotel with basic amenities for budget-conscious travelers.",
    image:
      "https://content.r9cdn.net/rimg/himg/e2/18/e7/expediav2-185012-6d8a6c-592123.jpg",
    price: 100,
    location: "Liverpool",
    country: "UK",
  },
  {
    title: "Mandarin Oriental",
    description:
      "Family-friendly hotel with activities and facilities for children.",
    image:
      "https://www.boutiquehotelier.com/cloud/2023/04/03/royal-family-hotels-mandarin-oriental.jpg",
    price: 230,
    location: "Cardiff",
    country: "UK",
  },
  {
    title: "Algentario Golf & Wellness Resort",
    description:
      "Resort with a world-class golf course and luxurious amenities.",
    image:
      "https://cxgveiouca.cloudimg.io/familyhotelfinder.com/wp-content/uploads/Tuscany-Argentario-Golf-Resort2-DFS.jpg",
    price: 320,
    location: "St Andrews",
    country: "UK",
  },
  {
    title: "Lough Eske Castle",
    description:
      "Experience staying in a real castle with historic charm and modern comforts.",
    image:
      "https://media.cntraveler.com/photos/59ef747885f4523b0e5276a6/master/pass/Exterior1-LoughEskeCastle-Ireland-CRHotel.jpg",
    price: 400,
    location: "Wales",
    country: "UK",
  },
  {
    title: "The Bohemian Hotel Savannah Riverfront",
    description: "Beautiful hotel located on the riverbank with scenic views.",
    image:
      "https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1350176.jpg",
    price: 270,
    location: "Oxford",
    country: "UK",
  },
  {
    title: "The Lensfield Hotel",
    description: "Hotel located near major cultural landmarks and attractions.",
    image:
      "https://www.lensfieldhotel.co.uk/wp-content/uploads/2024/03/Lensfield-Exterior-1366x768-fp_mt-fpoff_0_0.jpg",
    price: 250,
    location: "Cambridge",
    country: "UK",
  },
];

module.exports = { data: sampleListings };
