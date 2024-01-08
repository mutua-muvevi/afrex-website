import { Page } from "../../components/page";
import { TestimonialsList } from "../../constants/testimonial";
import ReusableBanner from "../../modules/banner/banner";
import ServiceCards from "./sections/cards";
import Testimonials from "./sections/testimonials";
import Timeline from "./sections/timeline";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg"

const Services = () => {
	const servicePage = {
		banner: {
			title: "Our Services",
			subtitle: "We at Afrex Bridge Connection LLC offer various Business to Business services which include.",
			type: "image",
			src: image,
			height: "70vh",
		},
		services: [
			{
				title: "Business Registration",
				description: `In our role of offering facilitations through the process of creating
				and registering companies on behalf of clients, our commitment is to ensure
				full assistance in the process. To do so, we observe and scrupulously meet
				the criteria and conditions in compliance with the Kenya Company Act 2015...`,
				link: "/services/business-registration",
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			},
			{
				title: "Company Registration",
				description: `AFREX covers the registration of companies from the start up to the
				registration of all business permits and licenses required for companies to be
				fully operational, including work permits for foreign residents, VAT and
				PIN with the Tax Department, Social Security and Health Insurance Certificates.
				We handle this process by doing the following.`,
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			},
			{
				title: "Professional Expertise",
				description: `AFREX connects you with highly experience professionals to
				(advice, recommending, doing market research, business plan, referrals,
				compliance issues, conception of projects, project management, risk management,
				marketing strategies, web design, IT management, web application).`,
				link: "/services/professional-expertise",
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			},
			{
				title: "Administrative and Business Support",
				description: `We assign teams of seasoned/experienced specialists while respecting
				your budget and your project deadlines. Our recruitment services can
				respond to a specific request for a given period, or be part of a framework
				agreement often comprising several categories and profiles.`,
				link: "/services/adminstrative-and-business-support",
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			},
			{
				title: "Connection to business opportunity",
				description: `If you want to build your business connections and accelerate your international growth,
				then you have found the right place. Our industry knowledge on international network will
				give you a chance to connect with leading international companies that will help you spur
				the growth of your company and open doors and opportunities in the global market...`,
				link: "/services/connection-to-business-opportunity",
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			},
			{
				title: "Business Support Services",
				description: `The setting up and creation of companies is a very laborious procedure which, at times,
				requires the establishment of adequate structures for its normal functioning.
				AFREX is here to also offer professional administrative services to companies or owners of
				businesses that do not have registered offices or places to carry out their activities.`,
				link: "/services/business-support",
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			},
			{
				title: "Airport Transport Services",
				description: `We provide air transport services for international deliveries by cargo freight and chartered aircraft with
				major destinations around the world. Very often, in order to ensure secure deliveries by avoiding
				countless transshipments for deliveries to distant destinations, we offer charter flights for direct
				transport.`,
				link: "/services/airport-leasing",
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			},
		],
		timeline: {
			title: "Afrex Facilitation Dynamics",
			subtitle: "Facilitation concerns itself with all the tasks needed to reach a productive  and impartial meeting outcome that reflects the agreed objectives and deliverables defined upfront by the meeting owner or client.",
			backgroundImage: image,
			items: [
				{
					title: `Setting ground rules`,
					description: `
						We as Afrex Business Connection setting ground rules is a key component of 
						the facilitation process especially in meetings convened to discuss difficult 
						problems or for training.
					`
				},
				{
					title: `Consulting with the client`,
					description: `
						We as Afrex Bridge Connection work with clients (Individuals or organization)
						to understand the purpose and outcome of the meeting by discussing it with the client.
					`
				},
				{
					title: `Making arrangements for the meeting`,
					description: `
						We arrange and manage practical arrangements considering in detail the location and layout of the room. We research the 
						meeting beforehand to understand why it is being held and that all stakeholders are 
						invited and able to attend.
					`
				},
				{
					title: `Understanding group norms and dynamics`,
					description: `
						We do not make assumptions about the way people interact and will try to adapt to the ways 
						of different cultures and organisations. Whilst tackling the practical aspects of a meeting we also remain aware 
						of undercurrents, both verbal and non-verbal, which may indicate problems the group is having.
					`
				},
			]
		},
		testimonials: {
			title: "Testimonials",
			subtitle: "What Our Customers Say About Us",
			backgroundImage: image,
			items: TestimonialsList
		}
	}
	return (
		<Page title="Our Services">
			<ReusableBanner
				title={servicePage.banner.title}
				subtitle={servicePage.banner.subtitle}
				type="image"
				src={servicePage.banner.src}
				height="70vh"
			/>
			<ServiceCards
				title={servicePage.banner.title}
				subtitle={servicePage.banner.subtitle}
				items={servicePage.services}
			/>
			<Timeline
				title={servicePage.timeline.title}
				subtitle={servicePage.timeline.subtitle}
				items={servicePage.timeline.items}
				backgroundImage={servicePage.timeline.backgroundImage}
			/>
			<Testimonials
				title={servicePage.testimonials.title}
				subtitle={servicePage.testimonials.subtitle}
				items={servicePage.testimonials.items}
				backgroundImage={servicePage.testimonials.backgroundImage}
			/>
		</Page>
	);
};

export default Services;
