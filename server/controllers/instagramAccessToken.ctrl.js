
const axios = require('axios');

// Instagram application manage
// https://www.instagram.com/developer/clients/manage/?edited=rocki2000ltdGallery

// https://github.com/totemstech/instagram-node

// https://elfsight.com/blog/2016/05/how-to-get-instagram-access-token/
// https://github.com/stevenschobert/instafeed.js

const createCtrl = (app) => {
    const INSTAGRAM_CLIENT_ID ="d3a2f6b39ac248d696c1d4b6ddc987bc";
    const INSTAGRAM_CLIENT_SECRET ="92622dc7bcc9487b9320156b339e301c";
    const INSTAGRAM_REDIRECT_URI ="http://localhost:3000/api/instagram-access-token";
    
    const instegramUrl = `https://www.instagram.com/oauth/authorize/?client_id=d3a2f6b39ac248d696c1d4b6ddc987bc&redirect_uri=https://rocki2000ltd.herukoapp.com/api/instagram-access-token&response_type=code`;
 
    const factory = {};
    

    factory.get = (req, res, next) => {

    };

    return factory;
};

module.exports = createCtrl;