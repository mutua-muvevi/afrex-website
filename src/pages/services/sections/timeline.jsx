import PropTypes from "prop-types";
import { Container, Stack, Typography, useTheme } from "@mui/material";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TitleSubtitle from "../../../modules/title-subtitle";

const Timeline = ({ title, subtitle, items, backgroundImage }) => {
	const theme = useTheme();

	return (
		<div
			style={{
				backgroundImage: backgroundImage
					? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
					: "",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				color: backgroundImage ? "#fff" : theme.palette.text.primary,
			}}
		>
			<Container maxWidth="xl" sx={{ py: 10 }}>
				<Stack direction="column" spacing={3} alignItems="center">
					<TitleSubtitle
						title={title}
						subtitle={subtitle}
						position="left"
					/>

					<VerticalTimeline>
						{items.map((item, index) => (
							<VerticalTimelineElement
								key={index}
								className="vertical-timeline-element--work"
								contentStyle={{
									background: theme.palette.background.paper,
									color: theme.palette.text.primary,
								}}
								contentArrowStyle={{
									borderRight: `7px solid  ${theme.palette.background.paper}`,
								}}
								date={item.date}
								iconStyle={{
									background: theme.palette.primary.main,
									color: "#fff",
								}}
								icon={
									<i className={`mdi mdi-${item.icon}`}></i>
								}
							>
								<Typography variant="h5">
									{item.title}
								</Typography>
								<Typography
									variant="subtitle1"
									sx={{ fontWeight: 500 }}
								>
									{item.description}
								</Typography>
							</VerticalTimelineElement>
						))}
					</VerticalTimeline>
					<div></div>
				</Stack>
			</Container>
		</div>
	);
};

Timeline.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
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

export default Timeline;
