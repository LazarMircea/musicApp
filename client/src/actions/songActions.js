import axios from 'axios';
import { GET_SONGS, ADD_SONG } from './types';

export const getSongs = () => dispatch => {
	axios
		.get('/songs')
		.then(res => 
			dispatch({
				type: GET_SONGS,
				payload: res.data,
			})
		)
};