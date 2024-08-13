import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "flights",
	initialState: {
		data: [],
		isLoading: false,
		error: null,

		flight: null,
		flightError: null,
	},
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		stopLoading: (state) => {
			state.isLoading = false;
		},
		fetchFlights: (state, action) => {
			state.data = action.payload;
			state.error = null;
		},
		fetchFlightsError: (state, action) => {
			state.error = action.payload;
		},
		

		//SET FLIGHT
		setFlight(state, action) {
			state.isLoading = false;
			state.flight = action.payload;
		},

		setFlightError(state, action) {
			state.isLoading = false;
			state.flightError = action.payload;
		},
	},
});

export const { startLoading, stopLoading } = slice.actions;
export default slice.reducer;

// Fetch Flight Thunk
export const fetchFlights = (ref_number) => async (dispatch) => {
	dispatch(startLoading());
	try {
		const response = await axios.get(
			`https://afrex-bridge-connections-server.onrender.com/api/flight/fetch/ref_number/${ref_number}`,
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


//---------------------------set flight--------------------------------
export function setFlight(flight) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			dispatch(slice.actions.setFlight(flight));
			return flight;
		} catch (error) {
			dispatch(slice.actions.setFlightError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	}
}
