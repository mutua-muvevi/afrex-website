import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	//shipment
	shipment: null,
	shipmentError: null,
};

//the slice
const slice = createSlice({
	name: "shipment",
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

		//SET SHIPMENT
		fetchShipment(state, action) {
			state.isLoading = false;
			state.shipment = action.payload;
		},

		fetchShipmentError(state, action) {
			state.isLoading = false;
			state.shipmentError = action.payload;
		},

		//SHIPMENT
		getShipmentSuccess(state, action) {
			state.isLoading = false;
			state.shipment = action.payload;
		},

		getShipmentError(state, action) {
			state.isLoading = false;
			state.shipmentError = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stopLoading } = slice.actions;

// ----------------------------------------------------------------------
export function fetchShipment(track_number) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.get(
				`http://localhost:9900/api/shipment/fetch/track/${track_number}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.getShipmentSuccess(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.getShipmentError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}