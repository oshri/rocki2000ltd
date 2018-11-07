import axios from 'axios';
import config from 'config';

axios.interceptors.response.use((response) =>  { return response}, (error) => {
    return Promise.reject(error.response);
});

class Api {
	url;

	constructor() {
		this.url =
			config.env === 'production'
				? ''
				: 'http://localhost:8080';
	}

	get(endPoint) {
		let path = `${this.url}/api/${endPoint}`;
		return axios
			.get(path)
			.then(res => res.data);
	}

	post(endPoint, data) {
		let path = `${this.url}/api/${endPoint}`;
		return axios
			.post(path, data)
			.then(res => res.data);
	}
}

export default Api;
