import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	//postEmail
	postEmail: null,
	postEmailError: null,
};

//the slice
const slice = createSlice({
	name: "subscribe",
	initialState,
	reducers: {
		// START LOADING
		startLoading(state) {
			state.isLoading = true;
		},

		// STOP LOADING
		stopLoading(state) {
			state.isLoading = false;
		},

		// POST EMAIL
		postEmailSuccess(state, action) {
			state.isLoading = false;
			state.postEmail = action.payload;
		},

		postEmailError(state, action) {
			state.isLoading = false;
			state.postEmailError = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stopLoading } = slice.actions;

// ----------------------------------------------------------------------
// POST EMAIL

export function postEmail(values) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.post(
				`https://afrex-bridge-connections-server.onrender.com/api/email/post`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.postEmailSuccess(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.postEmailError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}