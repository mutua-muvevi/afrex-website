import { CardMedia, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const SingleNews = ({ newsItem }) => {
	
	return (
		<Stack direction="column" spacing={3} sx={{pb:10}}>
			<CardMedia
				component="img"
				height="500"
				image={newsItem.thumbnail}
				alt="green iguana"
			/>
			<Typography variant="h4" color="primary">
				{newsItem.title}
			</Typography>
			{newsItem.intro && (
				<Typography variant="body1">{newsItem.intro}</Typography>
			)}
			{newsItem.date && (
				<Typography variant="body1">Date: {newsItem.date}</Typography>
			)}
			{newsItem.author && (
				<Typography variant="body1">
					Author: {newsItem.author}
				</Typography>
			)}
			{newsItem.article
				? newsItem.article.map((item, index) => (
						<Stack key={index} direction="column" spacing={3}>
							{item.image ? (
								<CardMedia
									component="img"
									height="500"
									image={item.images}
									alt="green iguana"
								/>
							) : null}
							<Typography variant="h5" color="primary">
								{item.title}
							</Typography>
							{
								item.items? item.items.map((item, index) => (
									<Typography key={index} variant="body1">
										{item}
									</Typography>
								)) : null
							}
							{
								item.list ? (
									<Stack  key={index} deirection="column" spacing={3}>
										<Typography variant="body1">
											{item.title}
										</Typography>
										{
											item.items && item.items.length > 0 ? item.items.map((item, index) => (
												<Typography key={index} variant="body1">
													{item}
												</Typography>
											)) : null
										}
									</Stack>
								) : null
							}
						</Stack>
				  ))
				: ""}
		</Stack>
	);
};

SingleNews.propTypes = {
	newsItem: PropTypes.object.isRequired,
};

export default SingleNews;
