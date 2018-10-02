import { fetchClients } from '../services/api';

import { GET_CLIENTS_SUCCESS, TOGGLE_LOADER } from '../constants';

export const getClientsSuccess = (data) => ({type: GET_CLIENTS_SUCCESS, data});
export const toggleLoader = (loader) => ({type: TOGGLE_LOADER, loader});
export const getClients = () => async (dispatch) => {
	dispatch(toggleLoader(true));
	try {
		const response = await fetchClients();
		dispatch(getClientsSuccess(response));
		dispatch(toggleLoader(false));
	} catch (e) {
		dispatch(toggleLoader(true));
	}
};

