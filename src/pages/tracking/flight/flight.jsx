import { Alert, Button, Stack } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "../../../redux/store";
import { useState } from "react";
import Textfield from "../../../components/form/textfield/textfield";
import { fetchFlights } from "../../../redux/slices/flight";

const initialValues = {
	originAirport: "",
	destinationAirport: "",
}

const validationSchema = Yup.object({
	originAirport: Yup.string().required("Required"),
	destinationAirport: Yup.string().required("Required"),
})

const Flight = () => {
	const dispatch = useDispatch();

	const [alertMessage, setAlertMessage] = useState("");
	const [alertSeverity, setAlertSeverity] = useState("info");

	const [openModal, setOpenModal] = useState({});
	const [data, setData] = useState({});

	const handleSubmit = async (values) => {
		try {
			const response = await dispatch(fetchFlights(values.originAirport, values.destinationAirport));
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
								name="originAirport"
								label="Origin Airport"
								type="text"
							/>
							<Textfield
								name="destinationAirport"
								label="Destination Airport"
								type="text"
							/>
							<Button
								type="submit"
								variant="contained"
								disabled={isSubmitting}
							>
								Submit
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>

			{data && data.originAirport ? (
				<Alert severity="success">Flight found!</Alert>
			) : null}
		</Stack>
	)
}

export default Flight
