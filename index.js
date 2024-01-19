const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://animenewsnetwork.p.rapidapi.com/api.xml',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'animenewsnetwork.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
//coding...
document.addEventListener('DOMContentLoaded', function() {
  //  hover effects
  const navigationButtons = document.querySelectorAll('.navigation-button');
  const contactIcons = document.querySelectorAll('.contact a img');

  navigationButtons.forEach(button => {
      button.addEventListener('mouseover', () => {
          button.style.backgroundColor = '#00FF00';
      });

      button.addEventListener('mouseout', () => {
          button.style.backgroundColor = 'transparent';
      });
  });

  contactIcons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
          icon.style.border = '1px solid #000';
      });

      icon.addEventListener('mouseout', () => {
          icon.style.border = '1px solid transparent';
      });
  });
});
