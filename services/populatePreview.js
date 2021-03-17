module.exports = (subdomainName, user) => {
  return {
    name: `${subdomainName}-preview`,
    page_title: 'Your page title',
    about: {
      tagline: 'Your tagline',
      description: 'Your description',
    },
    contact: {
      first_name: 'Your first name',
      last_name: 'Your last name',
      address: {
        street_and_number: 'Your street 100',
        postalcode: '10999',
        city: 'Your city',
        country: 'Your country',
      },
      phone_number: 'Your phone number',
      business_email: `${user.email}`,
      contact_tagline: 'Your tagline',
    },
  };
};
