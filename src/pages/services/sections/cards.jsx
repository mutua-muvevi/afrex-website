import PropTypes from "prop-types";
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import ModalComponent from "../../../components/modal/modal";
import Service from "../service/service";

const ServiceCards = ({items, backgroundImage }) => {
	const [ openService, setOpenService ] = useState(false)
	const [ serviceItem, setServiceItem ] = useState(null)
	const theme = useTheme();

	const handleOpenService = (item) => {
		console.log("The item", item)
		setServiceItem(item)
		setOpenService(true)
	}

	return (
		<>
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
					<Grid container spacing={3}>
						{
							items.map((item, index) => (
								<Grid key={index} item xs={12} sm={6} md={6} lg={4} xl={3}>
									<Card>
										<CardActionArea onClick={() => handleOpenService(item)}>
											<CardMedia
												component="img"
												image={item.image}
												alt={item.title}
												height={250}
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
										</CardActionArea>
									</Card>
								</Grid>
							))
						}
					</Grid>
				</Container>
			</div>

			<ModalComponent
				open={openService}
				setOpen={setOpenService}
				onClose={() => setOpenService(false)}
				title={serviceItem ? serviceItem.title : "Service Title"}
				height="70vh"
			>
				<Service onClose={() => setOpenService(false)} service={serviceItem} />
			</ModalComponent>
		</>
	);
};

ServiceCards.propTypes = {
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

export default ServiceCards;
