import {
	Alert,
	Button,
	Container,
	Grid,
	Stack,
	useMediaQuery,
} from "@mui/material";
import { alpha, useTheme } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import Textfield from "../../components/form/textfield/textfield";
import TitleSubtitle from "../title-subtitle";
import { useState } from "react";
import { postEmail } from "../../redux/slices/subscribe";
import { useDispatch } from "react-redux";

const Image =
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1704751564/afrex/homepage/beautiful-city-with-lights-close-its-busiest-highway-night_krgghi.jpg";
const Person =
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1704751700/afrex/homepage/business-man-banner-concept-with-copy-space_f1gecu.jpg";

const emailCapture = {
	title: "Join our mailing list",
	subtitle:
		"Subscribe to our newsletter to get the latest news, updates and amazing offers delivered directly to your inbox.",
};

const INITIAL_FORM_STATE = {
	email: "",
};

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string()
		.email("Please use a valid email")
		.min(5, "Too short email")
		.max(80, "Too long email")
		.required("Please add an email"),
});

const imageStyle = {
	width: "350px",
	position: "relative",
};

const Subscribe = () => {
	const [alertMessage, setAlertMessage] = useState("");
	const [alertSeverity, setAlertSeverity] = useState("info");

	const dispatch = useDispatch();
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));
	const theme = useTheme();

	const submitHandler = async (values, { resetForm }) => {
		try {
			const response = await dispatch(postEmail(values));
			// extract success message
			const { success, message } = response;

			// Set the alert message from the response and determine severity
			setAlertMessage(message);
			setAlertSeverity(success ? "success" : "error");

			// close the modal
			if (success) {
				setTimeout(() => {
					resetForm();
				}, 3000);
			}
		} catch (error) {
			setAlertMessage(error.error || "An error occurred.");
			setAlertSeverity("error");
		}
	};

	return (
		<>
			<Stack
				sx={{
					py: { md: 10, lg: 20 },
					position: "relative",
					backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.5), rgba(0,0,0,0.56)), url(${Image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
				}}
			>
				<Container
					maxWidth="xl"
					sx={{
						backgroundColor: alpha(
							theme.palette.background.default,
							0.7
						),
					}}
				>
					<Grid
						container
						spacing={3}
						sx={{ py: { xs: 10, lg: "0" } }}
					>
						<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
							<Stack
								direction="column"
								justifyContent="center"
								sx={{ height: "100%" }}
							>
								<Formik
									initialValues={{
										...INITIAL_FORM_STATE,
									}}
									validationSchema={FORM_VALIDATION}
									onSubmit={submitHandler}
								>
									<Form>
										<Stack direction="column" spacing={3}>
											<TitleSubtitle
												title={emailCapture.title}
												subtitle={emailCapture.subtitle}
												position="left"
											/>

											{alertMessage && (
												<Alert
													severity={alertSeverity}
													sx={{ mb: 2 }}
												>
													{alertMessage}
												</Alert>
											)}
											<Stack
												spacing={3}
												direction="row"
												alignItems="center"
												justifyContent="left"
											>
												{/* alert here */}
												<Textfield
													name="email"
													variant="standard"
													size="small"
													placeholder="Enter your email to subscribe"
													inputColor="primary"
												/>
												<Button
													variant="outlined"
													type="submit"
													color="primary"
													sx={{
														width: "250px",
													}}
												>
													Join us
												</Button>
											</Stack>
										</Stack>
									</Form>
								</Formik>
							</Stack>
						</Grid>
						{isDesktop && (
							<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
								<Stack
									justifyContent="center"
									alignItems="center"
								>
									<img
										src={Person}
										alt="Subscribe to Afrex Bridge Connections Mail List"
										style={imageStyle}
									/>
								</Stack>
							</Grid>
						)}
					</Grid>
				</Container>
			</Stack>
		</>
	);
};

export default Subscribe;
