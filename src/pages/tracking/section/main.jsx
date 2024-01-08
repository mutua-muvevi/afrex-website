import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";
import ModalComponent from "../../../components/modal/modal";
import TrackStorage from "../storage/storage";
import TrackShipment from "../shipment/shipment";

const MainTracking = () => {
	const [openTrackStorage, setOpenTrackStorage] = useState(false);
	const [openTrackShipment, setOpenTrackShipment] = useState(false);

	const handleOpenTrackStorage = () => {
		setOpenTrackStorage(true);
	};

	const handleTrackShipment = () => {
		setOpenTrackShipment(true);
	};

	return (
		<>
			<Box sx={{ my: 5 }}>
				<Container maxWidth="xl">
					<Stack direction="column" spacing={3}>
						<Typography variant="h4">Track</Typography>
						<div>
							<Grid container spacing={3}>
								<Grid item xs={12} md={6}>
									<Card sx={{ minHeight: 500 }}>
										<CardActionArea
											onClick={handleTrackShipment}
											sx={{ height: 500 }}
										>
											<CardContent>
												<Stack
													direction="column"
													justifyContent="center"
													alignItems="center"
													spacing={3}
												>
													<Typography variant="h1">
														Track your Shipment
													</Typography>
												</Stack>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid>

								<Grid item xs={12} md={6}>
									<Card>
										<CardActionArea
											onClick={handleOpenTrackStorage}
											sx={{ height: 500 }}
										>
											<CardContent>
												<Stack
													direction="column"
													justifyContent="center"
													alignItems="center"
													spacing={3}
												>
													<Typography variant="h1">
														Track your Storage
													</Typography>
												</Stack>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid>
							</Grid>
						</div>
					</Stack>
				</Container>
			</Box>

			<ModalComponent
				maxWidth="sm"
				height={200}
				open={openTrackStorage}
				title="Track your Storage"
				onClose={() => setOpenTrackStorage(false)}
			>
				<TrackStorage onClose={() => setOpenTrackStorage(false)} />
			</ModalComponent>

			<ModalComponent
				maxWidth="sm"
				height={200}
				open={openTrackShipment}
				title="Track your Shipment"
				onClose={() => setOpenTrackShipment(false)}
			>
				<TrackShipment onClose={() => setOpenTrackShipment(false)} />
			</ModalComponent>
		</>
	);
};

export default MainTracking;
