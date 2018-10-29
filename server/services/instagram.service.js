const axios = require('axios');
const errors = require('../utils/errors');
const winston = require('winston');


class InstagramService  {

    constructor() {
        this.INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID;
        this.INSTAGRAM_CLIENT_SECRET = process.env.INSTAGRAM_CLIENT_SECRET;
        this.INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
        this.INSTAGRAM_REDIRECT_URI = process.env.INSTAGRAM_REDIRECT_URI;
        this.INSTAGRAM_API_TAGS = "https://api.instagram.com/v1/tags";
        this.INSTAGRAM_API_OAUTH = "https://www.instagram.com/oauth/authorize/";
    }


    async getTag(name) {
        const url  = `${this.INSTAGRAM_API_TAGS}/${name}/media/recent?access_token=${this.INSTAGRAM_ACCESS_TOKEN}`;
        return await axios.get(url).then((response) => response.data).catch((err) => {
            throw new errors.NotFoundError(`Can't find tag '${name}', Err:: ${err}`);
        });
    }
    
	async getTags(tags) {
        
        const tags_collection = tags.map(tag =>  this.getTag(tag));

        for(let i = 0; i < tags_collection.length; i++){
            tags_collection[i] = await tags_collection[i];
        }

        return tags_collection;    
    }
    
    async oauth() {
        const url  = `${this.INSTAGRAM_API_OAUTH}?client_id=${this.INSTAGRAM_CLIENT_ID}/media/recent?access_token=${this.INSTAGRAM_ACCESS_TOKEN}&redirect_uri=${this.INSTAGRAM_REDIRECT_URI}&response_type=token&scope=public_content`;
        return await axios.get(url).then((response) => response.data).catch((err) => {
            throw new errors.NotFoundError(`Can't find tag '${name}', Err:: ${err}`);
        });
    }
}

module.exports = InstagramService;