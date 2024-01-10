import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import Subscribe from "../../modules/subscribe/subscribe";
import NewsBody from "./sections/body";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1704895216/afrex/news/blogimage1_zmgpta.png"

const News = () => {
	return (
		<Page title="News">
			<ReusableBanner
				title="News"
				subtitle="The latest news from Afrex Bridge Connections"
				type="image"
				src={image}
				height="70vh"
			/>
			<NewsBody/>
			<Subscribe/>
		</Page>
	);
};

export default News;
