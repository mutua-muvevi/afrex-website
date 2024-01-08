import { Card, CardContent, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import TitleSubtitle from "../../../modules/title-subtitle";

const Testimonials = ({ title, subtitle, items, backgroundImage }) => {
	const theme = useTheme();

	return (
		<div
			style={{
				backgroundImage: backgroundImage
					? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
					: "",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				color: backgroundImage ? "#fff" : theme.palette.text.primary,
			}}
		>
			<Container maxWidth="xl" sx={{ py: 10 }}>
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						title={title}
						subtitle={subtitle}
						position="left"
					/>
					<div>
						<Grid container spacing={3}>
							{items.map((item, index) => (
								<Grid key={index} item xs={12} sm={6} md={6} lg={3}>
									<Card>
										<CardContent sx={{ height: 400 }}>
											<Stack
												direction="column"
												spacing={3}
												alignItems="center"
											>
												<Typography variant="h5">
													{item.title}
												</Typography>
												<Typography
													variant="body1"
													textAlign="justify"
												>
													{item.description}
												</Typography>
												<img src={item.image} alt={item.title} style={{
													width: 150,
													height: 150,
													clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)"
												}}/>
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
Testimonials.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
		})
	).isRequired,
	backgroundImage: PropTypes.string,
};

export default Testimonials;
