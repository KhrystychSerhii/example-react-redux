import { Http } from '../utils';

export const fetchClients = () => {
	return new Promise((resolve, reject) => {
		const clients = require('../example-data/clients.json');
		setTimeout(() => {
			resolve(clients);
		}, 1000);
	})
};