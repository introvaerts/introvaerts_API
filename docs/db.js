{
  //----------------------------USER---
  users: {
    _id: String,
    email: String,
    password: String,
    subdomain_ids: [],
  },
//-------------------------SUBDOMAIN---
  subdomain: {
    _id: String,
    name: String,
    theme_id: String,
    galleries: [
      gallery: {
        name: String,
        images: [
          image: {
            caption: {
              title: String,
              technique: [],
              year: Number,
              dimensions: String,
            },
            alt_text: Sting,
            description: String,
            image_url: String,
          },
        ]
      }
    ],
    about: {
      about_image_url: String,
      tagline: String,
      description: String,
    },
    contact: {
      first_name: String,
      last_name: Sting,
      address: {
        street_and_number: String,
        postalcode: String,
        city: String,
        country: String,
      },
      contact_tagline: String,
    }
  },
//-----------------------------THEME---
  {
    themes: {
      _id: String,
      theme_name: String,
    }
  },
}