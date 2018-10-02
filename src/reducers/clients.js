import {
	GET_CLIENTS_SUCCESS,
	SELECT_CLIENT_INDEX,
	TOGGLE_LOADER
} from '../constants';

const initialState = {
	clients: [],
	selectedIndex: null,
	loader: false
};
export default function clients(state = initialState, action) {
	switch (action.type) {
		case SELECT_CLIENT_INDEX:
			return Object.assign({}, state, { selectedIndex: action.selectedIndex });

		case GET_CLIENTS_SUCCESS:
			return Object.assign({}, state, { clients: action.data });

		case TOGGLE_LOADER:
			return Object.assign({}, state, { loader: action.loader });

		default:
			return state;
	}
};