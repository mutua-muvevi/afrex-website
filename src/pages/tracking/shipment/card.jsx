import {
	Box,
	Divider,
	Grid,
	Stack,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useSelector } from "../../../redux/store";
import ModalComponent from "../../../components/modal/modal";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import { fDate } from "../../../utils/format-time";
import { useTheme } from "@emotion/react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "rgba(18, 18, 18, 0.78)",
		border: "none",
		color: theme.palette.text.primary,
		width: "200px",
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		backgroundColor: theme.palette.background.paper,
		color: "rgba(220, 220, 220, 0.8)",
		border: "none",
	},
}));

const ShipmentCard = ({ open, onClose }) => {
	const {
		shipment: { data: theShipment },
	} = useSelector((state) => state.shipment);

	const theme = useTheme()

	const sortedList = theShipment.events.sort((a, b) => {
		return b.number - a.number;
	});
	const lastItem = sortedList[0];

	const headerTitleList = [
		{
			name: "Track / Reference Number :",
			value: theShipment && theShipment ? theShipment.track_number : "",
		},
		{
			name: "Current Status :",
			value: lastItem ? lastItem.description : "",
		},
	];

	const shipperInformation = [
		{
			name: "Shipper's Fullname",
			value: theShipment?.shipper?.fullname || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Shipper's Email",
			value: theShipment?.shipper?.email || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Shipper's Telephone",
			value: theShipment?.shipper?.telephone || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Shipper's Company",
			value: theShipment?.shipper?.company || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Shipper's Address",
			value: theShipment?.shipper?.address || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
	];

	const cosigneeInformation = [
		{
			name: "Cosignee's Fullname",
			value: theShipment?.cosignee?.fullname || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Cosignee's Email",
			value: theShipment?.cosignee?.email || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Cosignee's Telephone",
			value: theShipment?.cosignee?.telephone || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Cosignee's Company",
			value: theShipment?.cosignee?.company || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Cosignee's Address",
			value: theShipment?.cosignee?.address || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
	];

	const collectorInformation = [
		{
			name: "Collector's Fullname",
			value: theShipment?.collector?.fullname || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Collector's Email",
			value: theShipment?.collector?.email || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Collector's Telephone",
			value: theShipment?.collector?.telephone || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Collector's Company",
			value: theShipment?.collector?.company || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Collector's Address",
			value: theShipment?.collector?.address || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
	];

	const departureInformation = [
		{
			name: "Departure Date",
			value: theShipment?.departure?.departure_date || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Departure Time",
			value: theShipment?.departure?.departure_time || "",
			xl: 6,
			lg: 6,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Departure Address",
			value: theShipment?.departure?.address || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Airport Code",
			value: theShipment?.departure?.airport_code || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
	];

	const arrivalInformation = [
		{
			name: "Destination Date",
			value: theShipment?.arrival?.date || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Destination Time",
			value: theShipment?.arrival?.time || "",
			xl: 6,
			lg: 6,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Destination Address",
			value: theShipment?.arrival?.address || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
		{
			name: "Destination Airport Code",
			value: theShipment?.arrival?.airport_code || "",
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12,
		},
	];

	return (
		<div>
			<ModalComponent
				open={open}
				onClose={onClose}
				height={600}
				title="Tracking Shipment"
			>
				{theShipment && theShipment.track_number ? (
					<Grid container spacing={3} sx={{ my: 3 }}>
						{headerTitleList.map((item, index) => (
							<Grid
								item
								key={index}
								sm={12}
								xs={12}
								sx={{ p: 3 }}
							>
								<Stack
									direction="row"
									spacing={2}
									sx={{ pb: 1 }}
								>
									<Typography variant="h4" gutterBottom>
										{item.name}
									</Typography>
									<Typography
										variant="h4"
										gutterBottom
										color="primary"
									>
										{item.value}
									</Typography>
								</Stack>
								<Divider />
							</Grid>
						))}
					</Grid>
				) : null}

				{theShipment && theShipment.shipper ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid sx={{ pt: 10 }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Shipper's Information
								</Typography>
								<Divider />
							</Grid>

							{shipperInformation &&
								shipperInformation.map((el) => (
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
										<Box sx={{p:1, backgroundColor: theme.palette.background.neutral}}>
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

				{theShipment && theShipment.cosignee ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid sx={{ pt: 10 }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Cosignee's Information
								</Typography>
								<Divider />
							</Grid>

							{cosigneeInformation &&
								cosigneeInformation.map((el) => (
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
										<Box sx={{p:1, backgroundColor: theme.palette.background.neutral}}>
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

				{theShipment && theShipment.collector ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid sx={{ pt: 10 }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Collector's Information
								</Typography>
								<Divider />
							</Grid>

							{collectorInformation &&
								collectorInformation.map((el) => (
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
										<Box sx={{p:1, backgroundColor: theme.palette.background.neutral}}>
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

				{theShipment && theShipment.departure ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Typography variant="h4" gutterBottom>
									Departure Information
								</Typography>
								<Divider />
							</Grid>

							{departureInformation &&
								departureInformation.map((el) => (
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
										<Box sx={{p:1, backgroundColor: theme.palette.background.neutral}}>
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

				{theShipment && theShipment.arrival ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Typography variant="h4" gutterBottom>
									Destination Information
								</Typography>
								<Divider />
							</Grid>

							{arrivalInformation &&
								arrivalInformation.map((el) => (
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
										<Box sx={{p:1, backgroundColor: theme.palette.background.neutral}}>
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

				{theShipment && theShipment.items ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Typography variant="h4" gutterBottom>
									Items
								</Typography>
								<Divider />
							</Grid>

							{theShipment.items &&
								theShipment.items
									.sort((a, b) => {
										return b.number - a.number;
									})
									.map((el, i) => (
										<TableContainer
											key={i}
											sx={{
												borderRadius: 4,
												marginLeft: "30px",
												marginTop: "30px"
											}}
										>
											<Table aria-label="shipment event table">
												<TableHead>
													<TableRow>
														{[
															"Amount",
															"Weight",
															"Unit",
															"Description",
														].map((cell, i) => (
															<StyledTableCell
																key={i}
																align="left"
															>
																{cell}
															</StyledTableCell>
														))}
													</TableRow>
												</TableHead>

												<TableBody>
													<TableRow>
														{[
															el.amount,
															el.weight,
															el.unit,
															el.description,
														].map((cell, i) => (
															<StyledTableCell
																key={i}
															>
																{cell}
															</StyledTableCell>
														))}
													</TableRow>
												</TableBody>
											</Table>
										</TableContainer>
									))}
						</Grid>
					</Box>
				) : null}

				{theShipment && theShipment.events ? (
					<Box sx={{ my: 3 }}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Typography variant="h4" gutterBottom>
									Events
								</Typography>
								<Divider />
							</Grid>

							{theShipment.events &&
								theShipment.events
									.sort((a, b) => {
										return b.number - a.number;
									})
									.map((el, i) => (
										<TableContainer
											key={i}
											sx={{
												borderRadius: 4,
												marginLeft: "30px",
												marginTop: "30px"
											}}
										>
											<Table aria-label="shipment event table">
												<TableHead>
													<TableRow>
														{[
															"Time",
															"Date",
															"Location",
															"Status",
															"Observation",
														].map((cell, i) => (
															<StyledTableCell
																key={i}
																align="left"
															>
																{cell}
															</StyledTableCell>
														))}
													</TableRow>
												</TableHead>

												<TableBody>
													<TableRow>
														{[
															el.time,
															fDate(el.date),
															el.status,
															el.address,
															el.description,
														].map((cell, i) => (
															<StyledTableCell
																key={i}
															>
																{cell}
															</StyledTableCell>
														))}
													</TableRow>
												</TableBody>
											</Table>
										</TableContainer>
									))}
						</Grid>
					</Box>
				) : null}

				<Box sx={{ pb: 5 }}></Box>
			</ModalComponent>
		</div>
	);
};

ShipmentCard.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
};

export default ShipmentCard;
