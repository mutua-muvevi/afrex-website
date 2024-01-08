import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	//storage
	storage: null,
	storageError: null,
};

//the slice
const slice = createSlice({
	name: "storage",
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

		//SET STORAGE
		fetchStorage(state, action) {
			state.isLoading = false;
			state.storage = action.payload;
		},

		fetchStorageError(state, action) {
			state.isLoading = false;
			state.storageError = action.payload;
		},

		//STORAGE
		getStorageSuccess(state, action) {
			state.isLoading = false;
			state.storage = action.payload;
		},

		getStorageError(state, action) {
			state.isLoading = false;
			state.storageError = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stopLoading } = slice.actions;

// ----------------------------------------------------------------------
export function fetchStorage(track_number) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.get(
				`http://localhost:9900/api/storage/fetch/track/${track_number}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.getStorageSuccess(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.getStorageError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

// ----------------------------------------------------------------------