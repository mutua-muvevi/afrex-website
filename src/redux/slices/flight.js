import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "flights",
	initialState: {
		data: [],
		loading: false,
		error: null,
	},
	reducers: {
		startLoading: (state) => {
			state.loading = true;
		},
		stopLoading: (state) => {
			state.loading = false;
		},
		fetchFlights: (state, action) => {
			state.data = action.payload;
			state.error = null;
		},
		fetchFlightsError: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const { startLoading, stopLoading } = slice.actions;
export default slice.reducer;

// Fetch Flight Thunk
export const fetchFlights = (origin, destination) => async (dispatch) => {
	dispatch(startLoading());
	try {
		const response = await axios.get(
			`http://localhost:9900/api/flight/fetch/airport?originAirport=${origin}&destinationAirport=${destination}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = response.data;
		dispatch(slice.actions.fetchFlights(data));
		return data;

	} catch (error) {
		dispatch(slice.actions.fetchFlightsError(error));
		throw error;

	} finally {
		dispatch(stopLoading());
	}
};
