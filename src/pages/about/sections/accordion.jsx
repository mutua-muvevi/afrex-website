import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Container,
	Typography,
	useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import PropTypes from "prop-types";
import TitleSubtitle from "../../../modules/title-subtitle";
import Iconify from "../../../components/iconify";

const AboutAccordion = ({ title, subtitle, content, backgroundImage }) => {
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
				minHeight: "80vh"
			}}
		>
			<Container maxWidth="xl" sx={{ py: 10 }}>
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						title={title}
						subtitle={subtitle}
						position="left"
					/>

					{content.map((item, index) => (
						<Accordion
							key={index}
							sx={{
								backgroundColor:
									theme.palette.background.default,
							}}
						>
							<AccordionSummary
								expandIcon={<Iconify icon="mdi:chevron-down" />}
							>
								<Stack
									direction="row"
									justifyContent="space-between"
									sx={{ width: "100%" }}
								>
									<Typography variant="h4">
										{item.title}
									</Typography>
								</Stack>
							</AccordionSummary>
							<AccordionDetails
								sx={{
									backgroundColor:
										theme.palette.background.default,
								}}
							>
								{
									item.description.map((text, i) => (
										<Typography
											key={i}
											sx={{ mb: 3 }}
											variant="h5"
											textAlign="justify"
										>
											{text}
										</Typography>
									))
								}
							</AccordionDetails>
						</Accordion>
					))}
				</Stack>
			</Container>
		</div>
	);
};

AboutAccordion.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	content: PropTypes.arrayOf({
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}),
	backgroundImage: PropTypes.string,
};

export default AboutAccordion;
