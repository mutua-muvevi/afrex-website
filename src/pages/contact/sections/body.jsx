import {
	Card,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import Iconify from "../../../components/iconify";
import Iframe from "../../../components/iframe";

const contactItems = [
	{
		icon: "material-symbols:mark-email-read-rounded",
		title: "Email",
		subtitle: "info@afrexbridgeconnectionscom, admin@afrexbridgeconnectionscom",
		text: "Email us anytime",
	},
	{
		icon: "tabler:phone-filled",
		title: "Call us",
		subtitle: "0207906611",
		text: "Call us during business hours",
	},
	{
		icon: "zondicons:location",
		title: "Location",
		subtitle: "Nairobi, Kenya",
		text: "Bosto Rd, off Langata Road, Karen",
	},
];

const ContactUpperBody = () => {
	const mapSource =
		"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.710567481948!2d36.74756930611083!3d-1.3501827626411362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f058b47391ff7%3A0x34ad2d106c6f6c37!2sAfrex%20Bridge%20Connections%20LLC!5e0!3m2!1sen!2ske!4v1706701001061!5m2!1sen!2ske";

	return (
		<div>
			<Container maxWidth="xl" sx={{ py: 10 }}>
				<Stack direction="column" spacing={3}>
					<div>
						<Grid container spacing={3}>
							{contactItems.map((item, index) => (
								<Grid item xs={12}  md={4} key={index}>
									<Card sx={{minHeight: 250}}>
										<CardContent>
											<Stack
												direction="column"
												spacing={3}
											>
												<Iconify
													icon={item.icon}
													width={45}
												/>
												<Stack direction="column">
													<Typography variant="h5">
														{item.title}
													</Typography>
													<Typography
														variant="h6"
														color="text.secondary"
													>
														{item.subtitle}
													</Typography>
												</Stack>
												<Typography variant="body1">
													{item.text}
												</Typography>
											</Stack>
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</div>

					<Card>
						<Iframe
							src={mapSource}
							title="Afrex Bridge Connections Kenya Location"
							style={{
								height: "50vh",
								border: "0",
								width: "100%",
							}}
						/>
					</Card>
				</Stack>
			</Container>
		</div>
	);
};

export default ContactUpperBody;
