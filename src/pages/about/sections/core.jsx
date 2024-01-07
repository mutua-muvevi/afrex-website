import { Card, CardContent, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import TitleSubtitle from "../../../modules/title-subtitle";
import Iconify from "../../../components/iconify";

const CoreValues = ({ title, subtitle, content, backgroundImage }) => {
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
					<TitleSubtitle title={title} subtitle={subtitle} position="left" />

					<div>
						<Grid container spacing={3}>
							{content.map((item, index) => (
								<Grid key={index} item xs={12} sm={6} md={6} lg={3}>
									<Card>
										<CardContent sx={{ height: 480 }}>
											<Stack direction="column" spacing={3}>
												<Iconify icon={item.icon} width={100}/>
												<Typography variant="h5">{item.title}</Typography>
												<Typography variant="body1" textAlign="justify">
													{item.description}
												</Typography>
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

CoreValues.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	content: PropTypes.arrayOf({
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}),
	backgroundImage: PropTypes.string,
};

export default CoreValues;
