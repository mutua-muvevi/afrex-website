import {
	Alert,
	Button,
	Container,
	Grid,
	InputAdornment,
	Stack,
	useMediaQuery,
} from "@mui/material";
import { alpha, useTheme } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../../../components/form/textfield/textfield";
import SelectField from "../../../components/form/select/select";
import { countries } from "../../../constants/country";
import Iconify from "../../../components/iconify";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "../../../redux/store";
import { postContact } from "../../../redux/slices/contact";
import { useState } from "react";

const servicesOptions = [
	{
		label: "Business Registration",
		name: "business-registration",
	},
	{
		label: "Company Registration",
		name: "company_registration",
	},
	{
		label: "Professional Expertise",
		name: "professional_expertise",
	},
	{
		label: "Administrative and Business Support",
		name: "administrative_and_business_support",
	},
	{
		label: "Connection to Business Opportunities",
		name: "connection_to_business_opportunities",
	},
	{
		label: "Business Support Services",
		name: "business_support_services",
	},
	{
		label: "Air Transport Services",
		name: "air_transport_services",
	},
];

const INITIAL_FORM_STATE = {
	fullname: "",
	email: "",
	city: "",
	country: "",
	leadSource: "Contact Form",
	service: "",
	message: "",
};

const FORM_VALIDATION = Yup.object().shape({
	fullname: Yup.string()
		.min(5, "Minimum characters required for fullname is 5")
		.required("Fullname is required"),
	email: Yup.string()
		.min(5, "Minimum characters required for email is 5")
		.required("Email is required"),
	leadSource: Yup.string()
		.min(5, "Minimum characters required for Lead Source is 5")
		.required("Lead source is required"),
	service: Yup.string()
		.min(5, "Minimum characters required for service is 5")
		.required("Service is required"),
	country: Yup.string()
		.min(4, "Minimum characters required for country is 4")
		.required("Country is required"),
	message: Yup.string()
		.min(20, "Minimum characters required for message is 20")
		.required("Message is required"),
	city: Yup.string()
		.min(3, "Minimum characters required for city is 3")
		.required("City is required"),
});

const ContactForm = () => {
	const [alertMessage, setAlertMessage] = useState("");
	const [alertSeverity, setAlertSeverity] = useState("info");

	const dispatch = useDispatch();

	const submitHandler = async (values, { resetForm }) => {
		try {
			const response = await dispatch(postContact(values));
			// extract success message
			const { success, message } = response;

			// Set the alert message from the response and determine severity
			setAlertMessage(message);
			setAlertSeverity(success ? "success" : "error");

			// close the modal
			if (success) {
				setTimeout(() => {
					resetForm()
				}, 3000);
			}
		} catch (error) {
			setAlertMessage(error.error || "An error occurred.");
			setAlertSeverity("error");
		}
	};

	return (
		<div>
			<Container maxWidth="xl" sx={{ pb: 20 }}>
				<Stack direction="column" spacing={3}>
					{alertMessage && (
						<Alert severity={alertSeverity} sx={{ mb: 2 }}>
							{alertMessage}
						</Alert>
					)}
					<Formik
						initialValues={{
							...INITIAL_FORM_STATE,
						}}
						validationSchema={FORM_VALIDATION}
						onSubmit={submitHandler}
					>
						{({ values, errors, touched, isSubmitting }) => (
							<Form>
								<Grid container spacing={3}>
									<Grid item xs={12} md={6}>
										<Textfield
											fullWidth
											label="Email"
											name="email"
											type="email"
											size="large"
											value={values.email}
											error={
												touched.email &&
												Boolean(errors.email)
											}
											helperText={
												touched.email && errors.email
											}
											variant="outlined"
										/>
									</Grid>

									<Grid item xs={12} md={6}>
										<Textfield
											fullWidth
											label="Fullname"
											name="fullname"
											type="text"
											size="large"
											value={values.fullname}
											error={
												touched.fullname &&
												Boolean(errors.fullname)
											}
											helperText={
												touched.fullname &&
												errors.fullname
											}
											variant="outlined"
										/>
									</Grid>

									<Grid item xs={12} md={6}>
										<Textfield
											fullWidth
											label="City"
											name="city"
											type="text"
											size="large"
											value={values.city}
											error={
												touched.city &&
												Boolean(errors.city)
											}
											helperText={
												touched.city && errors.city
											}
											variant="outlined"
										/>
									</Grid>

									<Grid item xs={12} md={6}>
										<SelectField
											name="country"
											label="Country"
											size="large"
											options={countries}
											defaultValue=""
											MenuProps={{}}
											variant="outlined"
										/>
									</Grid>

									<Grid item xs={12} md={12}>
										<SelectField
											name="service"
											label="Service"
											size="large"
											options={servicesOptions}
											defaultValue=""
											MenuProps={{}}
											variant="outlined"
										/>
									</Grid>

									<Grid item xs={12} md={12}>
										<Textfield
											fullWidth
											label="Message"
											name="message"
											type="text"
											size="large"
											value={values.message}
											error={
												touched.message &&
												Boolean(errors.message)
											}
											helperText={
												touched.message &&
												errors.message
											}
											variant="outlined"
											multiline
											rows={6}
										/>
									</Grid>

									<Grid item xs={12} md={12}>
										<LoadingButton
											type="submit"
											variant="contained"
											loading={isSubmitting}
											size="large"
											color="primary"
											loadingPosition="end"
											sx={{
												width: "250px",
											}}
											endIcon={
												<Iconify icon="mdi:send" />
											}
										>
											Send
										</LoadingButton>
									</Grid>
								</Grid>
							</Form>
						)}
					</Formik>
				</Stack>
			</Container>
		</div>
	);
};

export default ContactForm;
