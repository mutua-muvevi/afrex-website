import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import TitleSubtitle from "../../../modules/title-subtitle";

const HomeServices = ({ title, subtitle, items, backgroundImage }) => {
	const theme = useTheme();
	return (
		<div
			style={{
				backgroundImage: backgroundImage
					? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
					: "",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				color: backgroundImage ? "#fff": theme.palette.text.primary,
			}}
		>
			<Container maxWidth="xl" sx={{py:10}}>
				<Stack direction="column" spacing={3}>
					<TitleSubtitle title={title} subtitle={subtitle} position="left" />
					
					<div>
						<Grid container spacing={3}>
							{
								items.map((item, index) => (
									<Grid key={index} item xs={12} sm={6} md={6} lg={4}>
										<Card>
											<CardMedia
												component="img"
												image={item.image}
												alt={item.title}
												height={300}
											/>
											<CardContent sx={{height:300}}>
												<Stack direction="column" spacing={3}>
													<Typography variant="h5" >
														{item.title}
													</Typography>
													<Typography variant="body1" textAlign="justify">
														{item.description}
													</Typography>
												</Stack>
											</CardContent>
										</Card>
									</Grid>
								))
							}
						</Grid>
					</div>
				</Stack>
			</Container>
		</div>
	);
};

HomeServices.propTypes = {
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

export default HomeServices;
