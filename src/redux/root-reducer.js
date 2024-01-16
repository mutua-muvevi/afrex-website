import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";


import StorageReducer from "./slices/storage";
import ShipmentReducer from "./slices/shipment";
import FlightsReducer from "./slices/flights";

// ----------------------------------------------------------------------

const config = {
	key: "root",
	storage,
	whitelist: [
		"services",
		"events",
		"storage",
		"shipment",
		"flights",
	],
	blacklist: [],
};

export const rootReducer = combineReducers({
	storage: StorageReducer,
	shipment: ShipmentReducer,
	flights: FlightsReducer,
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;
