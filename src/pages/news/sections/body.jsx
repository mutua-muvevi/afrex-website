import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { sentenceCase } from "change-case";
import { truncateStr } from "../../../utils/format-string";
import { useState } from "react";
import { newsList } from "../../../constants/news";
import ModalComponent from "../../../components/modal/modal";
import SingleNews from "../single/single";


const NewsBody = () => {
	const [open, setOpen] = useState(false);
	const [newsItem, setNewsItem] = useState({});

	const handleOpen = (item) => {
		setOpen(true);
		setNewsItem(item);
	};

	return (
		<>
			<Stack sx={{ py: { xs: 5, md: 10 } }}>
				<Container maxWidth="xl">
					<div>
						<Grid container spacing={3}>
							{newsList.map((item, index) => {
								return (
									<Grid
										item
										xs={12}
										md={6}
										lg={4}
										key={index}
									>
										<Card>
											<CardActionArea
												onClick={() => handleOpen(item)}
											>
												<CardMedia
													src={item.thumbnail}
													component="img"
													alt="Contemplative Reptile"
													height={300}
												/>
												<CardContent
													sx={{ height: 300 }}
												>
													<Typography
														gutterBottom
														variant="h5"
														component="div"
													>
														{item && item.title
															? truncateStr(
																item.title,
																	50
															)
															: ""}
													</Typography>
													<Typography
														variant="body1"
														color="text.secondary"
														textAlign="justify"
													>
														{item && item.intro
															? truncateStr(
																	sentenceCase(
																		item.intro
																	),
																	280
															  )
															: ""}
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
								);
							})}
						</Grid>
					</div>
				</Container>
			</Stack>

			<ModalComponent
				open={open}
				setOpen={setOpen}
				title={newsItem.title}
				onClose={() => setOpen(false)}
				maxWidth="xl"
				height="75vh"
			>
				<SingleNews
					newsItem={newsItem}
					onClose={() => setOpen(false)}
				/>
			</ModalComponent>
		</>
	);
};

export default NewsBody;
