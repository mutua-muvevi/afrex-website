import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Stack,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import TitleSubtitle from "../../../modules/title-subtitle";
import { sentenceCase } from "change-case";
import { truncateStr } from "../../../utils/format-string";
import Iconify from "../../../components/iconify";
import { newsList } from "../../../constants/news";
import { useState } from "react";
import ModalComponent from "../../../components/modal/modal";
import SingleNews from "../../news/single/single";
import { useNavigate } from "react-router-dom";

const content = newsList;

const HomeNews = () => {
	const [open, setOpen] = useState(false);
	const [newsItem, setNewsItem] = useState({});

	const theme = useTheme();
	const isXl = useMediaQuery(theme.breakpoints.up("xl"));
	const isLg = useMediaQuery(theme.breakpoints.up("lg"));
	const isMd = useMediaQuery(theme.breakpoints.up("md"));

	let displayedContent = content;
	if (isXl) {
		displayedContent = content.slice(0, 3);
	} else if (isLg) {
		displayedContent = content.slice(0, 3);
	} else if (isMd) {
		displayedContent = content.slice(0, 2);
	}

	const handleOpen = (item) => {
		setOpen(true);
		setNewsItem(item);
	};

	const navigate = useNavigate();

	return (
		<>
			<Stack sx={{ py: { xs: 5, md: 10 } }}>
				<Container maxWidth="xl">
					<Stack spacing={3}>
						<TitleSubtitle
							title="News and Articles"
							subtitle="Inside Afrex Bridge Connections: Your Gateway to Exclusive News and Articles – Stay Informed, Stay Inspired"
						/>
						<div>
							<Grid container spacing={3}>
								{displayedContent.map((item, index) => {
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
																		sentenceCase(
																			item.title
																		),
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

						<Button
							variant="contained"
							endIcon={<Iconify icon="entypo:arrow-right" />}
							onClick={() => navigate("/main/news")}
						>
							See more
						</Button>
					</Stack>
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

export default HomeNews;
