import axios from 'axios';
import config from 'config';
class Api {
	url;

	constructor() {
		this.url =
			config.env === 'production'
				? config.apiUrl
				: 'http://localhost:8080';
	}

	get(endPoint) {
		let path = `${this.url}/api/${endPoint}`;
		return axios
			.get(path)
			.then(res => res.data)
			.catch(err => console.log('err', `${path}:: ${err}`));
	}
}

export default Api;
