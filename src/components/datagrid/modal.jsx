import React from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
	DialogActions,
	Button,
	useTheme,
	IconButton,
	ButtonGroup,
	Stack,
} from "@mui/material";
import PropTypes from "prop-types";
import Iconify from "../iconify";
import Scrollbar from "../scrollbar";
import { sentenceCase } from "change-case";
import TableComponent from "../table/table";

const ModalComponent = ({
	selectedRow,
	open,
	onClose,
	title,
	actions,
	maxWidth,
}) => {
	const theme = useTheme();

	// Omit _id and __v properties
	const filteredRow = Object.fromEntries(
		Object.entries(selectedRow || {}).filter(
			([key]) =>
				key !== "_id" &&
				key !== "__v" &&
				key !== "createdAt" &&
				key !== "updatedAt"
		)
	);

	// Function to render table for array values
	const renderArrayTable = (array) => {
		const columns = array.length > 0 ? Object.keys(array[0]) : [];
		return <TableComponent columns={columns} array={array} />;
	};

	return (
		<Dialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth>
			<DialogTitle
				sx={{
					backgroundColor: theme.palette.primary.main,
					paddingTop: 2,
					paddingBottom: 2,
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography
						variant="sibtitle1"
						sx={{ color: theme.palette.primary.contrastText }}
					>
						{title ? title : "Row Details"}
					</Typography>
					<IconButton onClick={onClose}>
						<Iconify
							icon="mdi:close"
							sx={{ color: theme.palette.primary.contrastText }}
						/>
					</IconButton>
				</Stack>
			</DialogTitle>

			<DialogContent sx={{ marginTop: 3 }}>
				<Scrollbar sx={{ height: 500 }}>
					<Stack direction="column" spacing={3}>
						{filteredRow &&
							Object.entries(filteredRow).map(([key, value]) => (
								<Stack
									key={key}
									direction="column"
									spacing={1.5}
								>
									<Typography
										variant="h6"
										sx={{
											color: theme.palette.primary.main,
											marginBottom: { xs: 1, lg: 0 },
										}}
									>
										{key ? sentenceCase(key) : "No data"}
									</Typography>
									{Array.isArray(value) ? (
										renderArrayTable(value)
									) : (
										<Typography variant="subtitle1">
											{typeof value === "string"
												? sentenceCase(value.toString())
												: null}
										</Typography>
									)}

									{/* if the value is an object and if it has nested properties render them in terms of title subtitle */}
									{typeof value === "object" &&
										Object.entries(value)
											.filter(
												([nestedKey]) =>
													nestedKey !== "_id" &&
													nestedKey !== "__v"
											)
											.map(([nestedKey, nestedValue]) => (
												<Stack
													key={nestedKey}
													direction="row"
													spacing={3}
												>
													<Typography
														variant="subtitle2"
														sx={{
															color: theme.palette
																.primary.main,
															marginBottom: {
																xs: 1,
																lg: 0,
															},
														}}
													>
														{nestedKey
															? sentenceCase(
																	nestedKey
															  )
															: "No data"}
													</Typography>
													<Typography variant="subtitle2">
														<span
															style={{
																color: theme
																	.palette
																	.primary
																	.main,
															}}
														>
															: &nbsp;
														</span>{" "}
														{sentenceCase(
															nestedValue.toString()
														)}
													</Typography>
												</Stack>
											))}
								</Stack>
							))}
					</Stack>
				</Scrollbar>
			</DialogContent>

			<DialogActions>
				<ButtonGroup variant="contained">
					<Button
						onClick={onClose}
						endIcon={<Iconify icon="mdi:close" />}
					>
						Close
					</Button>
					{actions &&
						actions.map((action, index) => (
							<Button
								key={index}
								onClick={() => action.onClick(selectedRow)}
								endIcon={<Iconify icon={action.icon} />}
								color={action.color ? action.color : "primary"}
							>
								{action.label}
							</Button>
						))}
				</ButtonGroup>
			</DialogActions>
		</Dialog>
	);
};

ModalComponent.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	selectedRow: PropTypes.object,
	title: PropTypes.string,
	actions: PropTypes.array,
	maxWidth: PropTypes.string,
};

export default ModalComponent;
