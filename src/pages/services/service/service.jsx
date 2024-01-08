import { Stack, Typography } from "@mui/material";
import Iconify from "../../../components/iconify";
import PropTypes from "prop-types";

const Service = ({ service }) => {
	return (
		<div>
			<Stack direction="column" spacing={3} sx={{ pb: 5 }}>
				<Typography variant="h6">{service.description}</Typography>
				{service.content.map((item, index) => (
					<Stack key={index} direction="column" spacing={3}>
						<Typography variant="h5" color="primary">
							{item.title}
						</Typography>
						{item.items && (
							<Stack direction="column" spacing={3}>
								{item.items.map((subItem, subIndex) => (
									<Typography key={subIndex} variant="body1">
										{subItem}
									</Typography>
								))}
							</Stack>
						)}
						<div>
							{item.list && (
								<Stack direction="column" spacing={3}>
									{item.list.map((subItem, subIndex) => (
										<Stack
											direction="column"
											spacing={2.4}
											key={subIndex}
										>
											<Typography
												key={subIndex}
												variant="subtitle1"
												color="primary"
											>
												{subItem.title}
											</Typography>

											{subItem.items.map(
												(listItem, listIndex) => (
													<Stack
														direction="row"
														spacing={3}
														key={listIndex}
														alignItems="center"
														textAlign="left"
													>
														<Iconify icon="mdi:check" />
														<Typography variant="body1">
															{listItem}
														</Typography>
													</Stack>
												)
											)}
										</Stack>
									))}
								</Stack>
							)}
						</div>
					</Stack>
				))}
			</Stack>
		</div>
	);
};

Service.propTypes = {
	service: PropTypes.object.isRequired,
};

export default Service;
