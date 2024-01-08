import { Alert, Button, Grow, Paper, Stack } from "@mui/material";
{
	/* Track the storage by entering track_number in an input ans submiting it with the fetchStorage action */
}
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { fetchStorage } from "../../../redux/slices/storage";
import { useDispatch } from "../../../redux/store";
import { useState } from "react";
import Textfield from "../../../components/form/textfield/textfield";
import StorageCard from "./card";
import LoadingScreen from "../../../components/loading-screen";

//initial value
const initialValues = {
	track_number: "",
};

const validationSchema = Yup.object({
	track_number: Yup.string().required("Required"),
});

const TrackStorage = () => {
	const dispatch = useDispatch();

	const [alertMessage, setAlertMessage] = useState("");
	const [alertSeverity, setAlertSeverity] = useState("info");

	const [ openModal, setOpenModal ] = useState({});

	


	const handleSubmit = async (values) => {
		try {
			const response = await dispatch(fetchStorage(values.track_number));
			// extract success message
			const { success, message, data } = response;

			if (success) {
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
		<Stack direction="column" spacing={3} sx={{pb:5}}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form>
						<Stack direction="row" spacing={2}>
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
							>
								Submit
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>
			{alertMessage && (
				<Alert severity={alertSeverity} sx={{ mb: 2 }}>
					{alertMessage}
				</Alert>
			)}

			{
				openModal ? (
					// <Grow in timeout={1000}>
						<StorageCard open={openModal} onClose={() => setOpenModal(false)} />
					// </Grow>
				) : ""
			}
		</Stack>
	);
};

export default TrackStorage;