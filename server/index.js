const express = require("express");
const dotenv = require('dotenv');
const https = require('https');
const next = require("next");
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');


const PORT = process.env.PORT || 4200;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();


dotenv.load({ path: '.env' });

// const sslOptions = {
//   key: fs.readFileSync(path.join(process.env.CERT_ROOT, 'key.pem')),
//   cert: fs.readFileSync(path.join(process.env.CERT_ROOT, 'cert.pem'))
// };

// const sslOptions = {
//   'key': fs.readFileSync(path.join(__dirname, '/../.https/key.pem')),
//   'cert': fs.readFileSync(path.join(__dirname, '/../.https/cert.pem'))
// };

app
  .prepare()
  .then(() => {
  
    const expressApp = express();

    expressApp.use(morgan('dev'));
    
    // expressApp.all(/.*/, (req, res, next) => {
    //   const host = req.header('host');

    //   if (host.match(/^www\..*/i)) {
    //       if (req.protocol === 'http') {
    //           res.redirect(301, 'http://' + host + req.url);
    //       }
    //       next();
    //   } else {
    //       res.redirect(301, 'http://www.' + host + req.url);
    //   }
    // });


    const apiRoutes = require("./routes/index.js");
    
    apiRoutes(expressApp);
    
    
    expressApp.get("*", (req, res) => {
      return handle(req, res);
    });

    expressApp.listen(PORT, () => console.log(`Rocki2000ltd listening on port ${PORT}`));


    // Https Server
    // const httpsServer = https.createServer(sslOptions, expressApp);
    
    // httpsServer.listen(PORT,(err) =>{
    //   if (err) throw err;
    //     console.log(`> Express server Ready on ${PORT}`);
    // });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });