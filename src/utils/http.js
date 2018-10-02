import axios from 'axios';

class Http {
	baseURL = '';

	constructor() {}

	get() {
		const url = '';
		return axios.get(url);
	}

	post() {
		const url = '';
		return axios.post(url);
	}
}

export default new Http();