import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "../../../redux/store";
import ModalComponent from "../../../components/modal/modal";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

const StorageCard = ({ open, onClose }) => {
	const {
		storage: { data: theStorage },
	} = useSelector((state) => state.storage);
	const theme = useTheme();
	
	const headerTitleList = [
		{
			name: "Track / Reference Number",
			value: theStorage.track_number,
		},
	];

	const depositorInformation = [
		{
			name: "Depositor's Fullname",
			value: theStorage?.depositor?.fullname || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Depositor's Email",
			value: theStorage?.depositor?.email || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Depositor's Telephone",
			value: theStorage?.depositor?.telephone || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Depositor's Company",
			value: theStorage?.depositor?.company || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Depositor's Address",
			value: theStorage?.depositor?.address || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
	];

	const ownerInformation = [
		{
			name: "Owner's Fullname",
			value: theStorage?.owner?.fullname || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Owner's Email",
			value: theStorage?.owner?.email || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Owner's Telephone",
			value: theStorage?.owner?.telephone || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Owner's Company",
			value: theStorage?.owner?.company || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Owner's Address",
			value: theStorage?.owner?.address || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
	];

	const acceptance = [
		{
			name: "Accepted From Date",
			value: theStorage?.acceptance?.from?.date || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Accepted From Time",
			value: theStorage?.acceptance?.from?.time || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
	];

	const otherDetails = [
		{
			name: "Private marks, if any",
			value: theStorage?.privateMarks || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Assured for",
			value: theStorage?.assuredFor || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Storage Rate / Handling Charges",
			value: theStorage?.handlingCharges || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Product Origin",
			value: theStorage?.productOrigin || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Receipt Number",
			value: theStorage?.receiptNumber || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Receipt Valid Up To",
			value: theStorage?.receiptValidUpTo || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Warehouse Location",
			value: theStorage?.wareHouseLocation || "",
			xl: 4,
			lg: 4,
			md: 4,
			sm: 12,
			xs: 12,
		},
		{
			name: "Received by",
			value: theStorage?.receivedBy || "",
			xl: 4,
			lg: 4,
			md: 4,
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
				title="Tracking Storage"
			>
				{theStorage.track_number ? (
					<Grid container spacing={3}>
						{headerTitleList.map((item, index) => (
							<Grid
								item
								key={index}
								sm={12}
								xs={12}
								sx={{ p: 5 }}
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

				{theStorage.depositor ? (
					<Box>
						<Grid container spacing={3}>
							<Grid sx={{ p: 5 }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Depositor's Information
								</Typography>
								<Divider />
							</Grid>

							{depositorInformation &&
								depositorInformation.map((el) => (
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
										<Box  sx={{p:1, backgroundColor: theme.palette.background.neutral}}>
											<Typography variant="body1">
												{el.value && el.value.length > 1
													? el.value
													: "_________________"}
											</Typography>
										</Box>
									</Grid>
								))}

							<Grid sx={{ marginTop: "20px" }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Owner's Information
								</Typography>
								<Divider />
							</Grid>

							{ownerInformation &&
								ownerInformation.map((el) => (
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
										<Box  sx={{p:1, backgroundColor: theme.palette.background.neutral}}>
											<Typography variant="body1">
												{el.value && el.value.length > 1
													? el.value
													: "_________________"}
											</Typography>
										</Box>
									</Grid>
								))}

							<Grid sx={{ marginTop: "20px" }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Deposit Duration
								</Typography>
								<Divider />
							</Grid>

							{acceptance &&
								acceptance.map((el) => (
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
										<Box  sx={{p:1, backgroundColor: theme.palette.background.neutral}}>
											<Typography variant="body1">
												{el.value && el.value.length > 1
													? el.value
													: "_________________"}
											</Typography>
										</Box>
									</Grid>
								))}

							<Grid sx={{ marginTop: "20px" }} item xs={12}>
								<Typography variant="h4" gutterBottom>
									Other Important Information
								</Typography>
								<Divider />
							</Grid>

							{otherDetails &&
								otherDetails.map((el) => (
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
										<Box  sx={{p:1, backgroundColor: theme.palette.background.neutral}}>
											<Typography variant="body1">
												{el.value && el.value.length > 1
													? el.value
													: "_________________"}
											</Typography>
										</Box>
									</Grid>
								))}
						</Grid>
					</Box>
				) : null}
				<Box sx={{ pb: 5 }}></Box>
			</ModalComponent>
		</div>
	);
};

StorageCard.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func,
};

export default StorageCard;
