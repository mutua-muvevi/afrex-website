import { useSelector } from "../../../redux/store";
import ModalComponent from "../../../components/modal/modal";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { Box, Grid, Typography, Stack, Divider } from "@mui/material";

const FlightCard = ({ open, onClose }) => {
	const {
		theFlight: { data },
	} = useSelector((state) => state.flights);

	const theme = useTheme();

	const airplaneInfomation = [
		{
			name: "Aircraft",
			value: data?.airplane?.aircraft || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Airline",
			value: data?.airplane?.airline || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Airplane Registration Number",
			value: data?.airplane?.regNo || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
	];

	const arrivalTimeInfo = [
		{
			name: "Arrival Time",
			value: data?.arrivalTime?.time || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Arrival Date",
			value: data?.arrivalTime?.date || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Timezone",
			value: data?.arrivalTime?.timezone || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
	];

	const departureTimeInfo = [
		{
			name: "Departure Time",
			value: data?.departureTime?.time || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Departure Date",
			value: data?.departureTime?.date || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Timezone",
			value: data?.departureTime?.timezone || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
	];

	const originAirportInfo = [
		{
			name: "City",
			value: data?.originAirport?.city || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Country",
			value: data?.originAirport?.country || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Airport Code",
			value: data?.originAirport?.name || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
	];

	const destinationAirportInfo = [
		{
			name: "Airport Code",
			value: data?.destinationAirport?.name || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "City",
			value: data?.destinationAirport?.city || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Country",
			value: data?.destinationAirport?.country || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
	];

	const statusInfo = [
		{
			name: "Title",
			value: data?.status?.title || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Description",
			value: data?.status?.description || "",
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12,
		},
	];

	return (
		<>
			<ModalComponent
				open={open}
				onClose={onClose}
				height={600}
				title="Tracking flights"
			>
				{data && data.ref_number ? (
					<>
						<Stack direction="row" spacing={2} sx={{ pb: 1 }}>
							<Typography variant="h4" gutterBottom>
								Booking Reference Number :
							</Typography>
							<Typography
								variant="h4"
								gutterBottom
								color="primary"
							>
								{data?.ref_number}
							</Typography>
						</Stack>
						<Divider />
					</>
				) : null}

				{data && data.airplane ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid sx={{ pt: 10 }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Aircraft Information
								</Typography>
								<Divider />
							</Grid>

							{airplaneInfomation &&
								airplaneInfomation.map((el) => (
									<Grid
										item
										key={el.name}
										xl={el.xl}
										lg={el.lg}
										md={el.md}
										sm={el.sm}
										xs={el.xs}
									>
										<Typography variant="h6">
											{el.name}
										</Typography>
										<Box
											sx={{
												p: 1,
												backgroundColor:
													theme.palette.background
														.neutral,
											}}
										>
											<Typography variant="body1">
												{el.value && el.value.length > 0
													? el.value
													: "_________________"}
											</Typography>
										</Box>
									</Grid>
								))}
						</Grid>
					</Box>
				) : null}

				{data && data.originAirport ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid sx={{ pt: 10 }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Origin Airport
								</Typography>
								<Divider />
							</Grid>

							{originAirportInfo &&
								originAirportInfo.map((el) => (
									<Grid
										item
										key={el.name}
										xl={el.xl}
										lg={el.lg}
										md={el.md}
										sm={el.sm}
										xs={el.xs}
									>
										<Typography variant="h6">
											{el.name}
										</Typography>
										<Box
											sx={{
												p: 1,
												backgroundColor:
													theme.palette.background
														.neutral,
											}}
										>
											<Typography variant="body1">
												{el.value && el.value.length > 0
													? el.value
													: "_________________"}
											</Typography>
										</Box>
									</Grid>
								))}
						</Grid>
					</Box>
				) : null}

				{data && data.destinationAirport ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid sx={{ pt: 10 }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Destination Airport
								</Typography>
								<Divider />
							</Grid>

							{destinationAirportInfo &&
								destinationAirportInfo.map((el) => (
									<Grid
										item
										key={el.name}
										xl={el.xl}
										lg={el.lg}
										md={el.md}
										sm={el.sm}
										xs={el.xs}
									>
										<Typography variant="h6">
											{el.name}
										</Typography>
										<Box
											sx={{
												p: 1,
												backgroundColor:
													theme.palette.background
														.neutral,
											}}
										>
											<Typography variant="body1">
												{el.value && el.value.length > 0
													? el.value
													: "_________________"}
											</Typography>
										</Box>
									</Grid>
								))}
						</Grid>
					</Box>
				) : null}

				{data && data.arrivalTime ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid sx={{ pt: 10 }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Arrival
								</Typography>
								<Divider />
							</Grid>

							{arrivalTimeInfo &&
								arrivalTimeInfo.map((el) => (
									<Grid
										item
										key={el.name}
										xl={el.xl}
										lg={el.lg}
										md={el.md}
										sm={el.sm}
										xs={el.xs}
									>
										<Typography variant="h6">
											{el.name}
										</Typography>
										<Box
											sx={{
												p: 1,
												backgroundColor:
													theme.palette.background
														.neutral,
											}}
										>
											<Typography variant="body1">
												{el.value && el.value.length > 0
													? el.value
													: "_________________"}
											</Typography>
										</Box>
									</Grid>
								))}
						</Grid>
					</Box>
				) : null}

				{data && data.departureTime ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid sx={{ pt: 10 }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Departure
								</Typography>
								<Divider />
							</Grid>

							{departureTimeInfo &&
								departureTimeInfo.map((el) => (
									<Grid
										item
										key={el.name}
										xl={el.xl}
										lg={el.lg}
										md={el.md}
										sm={el.sm}
										xs={el.xs}
									>
										<Typography variant="h6">
											{el.name}
										</Typography>
										<Box
											sx={{
												p: 1,
												backgroundColor:
													theme.palette.background
														.neutral,
											}}
										>
											<Typography variant="body1">
												{el.value && el.value.length > 0
													? el.value
													: "_________________"}
											</Typography>
										</Box>
									</Grid>
								))}
						</Grid>
					</Box>
				) : null}

				{data && data.status ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid sx={{ pt: 10 }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Flighr Status
								</Typography>
								<Divider />
							</Grid>

							{statusInfo &&
								statusInfo.map((el) => (
									<Grid
										item
										key={el.name}
										xl={el.xl}
										lg={el.lg}
										md={el.md}
										sm={el.sm}
										xs={el.xs}
									>
										<Typography variant="h6">
											{el.name}
										</Typography>
										<Box
											sx={{
												p: 1,
												backgroundColor:
													theme.palette.background
														.neutral,
											}}
										>
											<Typography variant="body1">
												{el.value && el.value.length > 0
													? el.value
													: "_________________"}
											</Typography>
										</Box>
									</Grid>
								))}
						</Grid>
					</Box>
				) : null}


			</ModalComponent>
		</>
	);
};

FlightCard.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default FlightCard;
