const sm = require('sitemap');
const path = require('path');
const Page = require('./models/pageModel');
const fs  = require('fs');

const sitemap = sm.createSitemap({
	hostname: 'https://rocki2000ltd.herokuapp.com',
	cacheTime: 6000000 // 6000 sec - cache purge period
});

function setup(server) {
    
    /** 
     * Build Pages
     */
    Page.find({}).then(pages => {
		pages.forEach(page => {
            
            if(page.parent) {
                sitemap.add({
                    url: `/subject/${page.link}`,
                    changefreq: 'daily',
                    priority: 1
                });
            } else {
                sitemap.add({
                    url: `/page/${page.link}`,
                    changefreq: 'daily',
                    priority: 1
                });
            }
            
		});
	});

	/**
	 * Add Static Routes ( Components )
	 */
    sitemap.add({
		url: '/about',
		changefreq: 'monthly',
		priority: 0.2
    });

    
	sitemap.add({
		url: '/page',
		changefreq: 'daily',
		priority: 1
	});

	sitemap.add({
		url: '/subject',
		changefreq: 'daily',
		priority: 1
    });
    
    fs.writeFileSync(path.join(__dirname, '../static/sitemap.xml'), sitemap.toString());

	/**
	 * Build Sitemap.xml &b Robots.txt
	 */
	server.get('/sitemap.xml', (req, res) => {
		sitemap.toXML((err, xml) => {
			if (err) {
				res.status(500).end();
				return;
			}

			res.header('Content-Type', 'application/xml');
			res.send(xml);
		});
	});

	server.get('/robots.txt', (req, res) => {
		res.sendFile(path.join(__dirname, '../static', 'robots.txt'));
	});
}

module.exports = setup;
