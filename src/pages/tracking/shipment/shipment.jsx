import { Alert, Button, Stack } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "../../../redux/store";
import { useState } from "react";
import Textfield from "../../../components/form/textfield/textfield";
import ShipmentCard from "./card";
import { fetchShipment } from "../../../redux/slices/shipment";
import CircularProgress from '@mui/material/CircularProgress';

//initial value
const initialValues = {
	track_number: "",
};

const validationSchema = Yup.object({
	track_number: Yup.string().required("Required"),
});

const TrackShipment = () => {
	const dispatch = useDispatch();

	const [alertMessage, setAlertMessage] = useState("");
	const [alertSeverity, setAlertSeverity] = useState("info");

	const [openModal, setOpenModal] = useState({});
	const [data, setData] = useState({});

	const handleSubmit = async (values) => {
		try {
			const response = await dispatch(fetchShipment(values.track_number));
			// extract success message
			const { success, message, data } = response;

			if (success) {
				setData(data);
				setOpenModal(true);
			}

			// Set the alert message from the response and determine severity
			setAlertMessage(message);
			setAlertSeverity(success ? "success" : "error");

			// close the modal
			if (success) {
				setTimeout(() => {
					setAlertMessage("");
					setAlertSeverity("info");
				}, 5000);
			}
		} catch (error) {
			setAlertMessage(error.error || "An error occurred.");
			setAlertSeverity("error");
		}
	};
	return (
		<Stack direction="column" spacing={3} sx={{ pb: 5 }}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form>
						<Stack direction="column" spacing={2}>
							{alertMessage && (
								<Alert severity={alertSeverity} >
									{alertMessage}
								</Alert>
							)}
							<Textfield
								name="track_number"
								label="Track Number"
								variant="outlined"
								type="text"
							/>
							<Button
								variant="contained"
								color="primary"
								type="submit"
								disabled={isSubmitting}
								startIcon={isSubmitting ? <CircularProgress size={24} /> : null}
							>
								{isSubmitting ? "Tracking, Please Wait..."  : "Submit"}
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>

			{data && data.track_number ? (
				<ShipmentCard
					open={openModal}
					onClose={() => setOpenModal(false)}
					theShipment={data}
				/>
			) : (
				""
			)}
		</Stack>
	);
};

export default TrackShipment;
