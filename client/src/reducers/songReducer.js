import { GET_SONGS, ADD_SONG } from '../actions/types';

const initialState = {
	songs: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
	switch(action.type) {
		case GET_SONGS:
			return {
				...state,
				songs: action.payload,
			}
		default:
			return state
	}
}