import {
	Card,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import TitleSubtitle from "../../../modules/title-subtitle";
import Iconify from "../../../components/iconify";

const Offices = ({ title, subtitle, offices }) => {
	return (
		<div>
			<Container maxWidth="xl" sx={{ py: 10 }}>
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						title={title}
						subtitle={subtitle}
						position="left"
					/>

					<div>
						<Grid container spacing={3}>
							{offices.map((item, index) => (
								<Grid key={index} item xs={12} sm={6} md={4} lg={3}>
									<Card>
										<CardContent sx={{ height: 300 }}>
											<Stack direction="column" spacing={3}>
												<Typography variant="h5">
													{item.country}
												</Typography>
												{item.cities.map((city, index) => (
													<Stack
														key={index}
														direction="row"
														justifyContent="left"
													>
														<Iconify icon="mdi:check" />
														<Typography variant="body1">
															{city}
														</Typography>
													</Stack>
												))}
											</Stack>
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</div>
				</Stack>
			</Container>
		</div>
	);
};

Offices.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	offices: PropTypes.arrayOf(
		PropTypes.shape({
			country: PropTypes.string.isRequired,
			cities: PropTypes.array,
		})
	).isRequired,
};

export default Offices;
