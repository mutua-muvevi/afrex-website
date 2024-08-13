import { Alert, Button, Stack } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "../../../redux/store";
import { useState } from "react";
import Textfield from "../../../components/form/textfield/textfield";
import { fetchFlights } from "../../../redux/slices/flights";
import FlightCard from "./card";
import CircularProgress from '@mui/material/CircularProgress';

const initialValues = {
	ref_number: "",
}

const validationSchema = Yup.object({
	ref_number: Yup.string().required("Required"),
})

const Flight = () => {
	const dispatch = useDispatch();

	const [alertMessage, setAlertMessage] = useState("");
	const [alertSeverity, setAlertSeverity] = useState("info");

	const [openModal, setOpenModal] = useState({});
	const [data, setData] = useState({});

	const handleSubmit = async (values) => {
		try {
			const response = await dispatch(fetchFlights(values.ref_number));
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
	}
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
								<Alert severity={alertSeverity}>{alertMessage}</Alert>
							)}
							<Textfield
								name="ref_number"
								label="Booking reference number"
								placeholder="Search by booking reference number"
								type="text"
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								startIcon={isSubmitting ? <CircularProgress size={24} /> : null}
								disabled={isSubmitting}
							>
								{isSubmitting ? "Tracking, Please Wait..."  : "Submit"}
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>
			
			{data && data.length > 0 ? (
				<FlightCard
					open={openModal}
					onClose={() => setOpenModal(false)}
					theFlights={data}
				/>
			) : null}
		</Stack>
	)
}

export default Flight
