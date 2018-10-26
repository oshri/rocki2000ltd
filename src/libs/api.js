import fetch from 'isomorphic-fetch';

// var paramsString = "q=URLUtils.searchParams&topic=api";
// var searchParams = new URLSearchParams(paramsString);

class Api {

    constructor({url}) {
        this.url = url;
        this.endpoints = {};
    }

    createEntity(entity) {
        this.endpoints[entity.name] = this.createBasicCrudEndPoint(entity);
    }

    createBasicCrudEndPoint({name}) {
        const endPoints = {};
        const resourceUrl = `${this.url}/${name}`;

        endPoints.getAll = (query) => fetch(resourceUrl);
        
    }

}

export default Api;