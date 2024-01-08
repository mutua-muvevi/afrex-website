import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	postContact: null,
	postContactError: null,
};

//the slice
const slice = createSlice({
	name: "contact",
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

		//POST CONTACT
		postContact(state, action) {
			state.isLoading = false;
			state.postContact = action.payload;
		},

		postContactError(state, action) {
			state.isLoading = false;
			state.postContactError = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stopLoading } = slice.actions;

// ----------------------------------------------------------------------
// POST CONTACT
// ----------------------------------------------------------------------
export function postContact(values) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.post(
				`http://localhost:9900/api/lead/post`,
				values,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			const data = await response.data;
			dispatch(slice.actions.postContact(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.postContactError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}