import { Page } from "../../components/page";
import { TestimonialsList } from "../../constants/testimonial";
import ReusableBanner from "../../modules/banner/banner";
import ServiceCards from "./sections/cards";
import Testimonials from "./sections/testimonials";
import Timeline from "./sections/timeline";

const image =
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg";

const Services = () => {
	const servicePage = {
		banner: {
			title: "Our Services",
			subtitle:
				"We at Afrex Bridge Connection LLC offer various Business to Business services which include.",
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
				content: [
					{
						title: "Our role in Business Registration",
						items: [
							`It is not always easy to navigate through the formalities to register your business, filing of articles of association, registration with the Tax Department and registration with the Registrar of Companies. Carrying out business activities in Kenya is regulated by statutory laws which cannot be ignored by anyone who wishes to start a business or else face ineligibility. `,

							`Registration marks the date of acquiring the legal personality of your company and therefore the start of your activity. In Kenya, this was a long and tedious process that has been optimized both by legal reforms of the company act and by the advent of e-Citizen portal. The creation of a one-stop-shop, the Business Registration Service (BRS) made it possible in particular to offer the possibility of setting up a company in a few days by facilitating the transmission of documents.`,

							`When creating your company, the main formalities are creating an e-Citizen account, conduct name search and reservation of the company, drafting and adoption of the memorandum and articles of association, after which you register with the Registrar of Companies`,
						],
						list: [],
					},
					{
						title: "Our role in Business Facilitation",
						items: [
							`In our role of offering facilitations through the process of creating and registering companies on behalf of clients, our commitment is to ensure full assistance in the process. To do so, we observe and scrupulously meet the criteria and conditions in compliance with the Kenya Company Act 2015.`,

							`The Business Registration Service (BRS) is your first point of contact. It makes it possible to accomplish in the same place the procedures of creation, modification relating to the operation or termination of your business. The BRS provides several options depending on the legal nature and activity of your company.`,

							`Work with us for a fast and easy expansion to Kenya with total compliance. `,

							`The procedure of creation and registration of companies is more or less the same other countries we offer the same service.`,
						],
						list: [],
					},
					{
						title: `
							Identification of Business Premises
						`,
						items: [
							`
								We provide guidance to help clients to get office places, warehouses and workshops for lease or construction to carry out their business activities.
							`,
						],
						list: [],
					},
					{
						title: `
							Application for business permits and Licences
						`,
						items: [
							`
								While conducting business main activities, there are special licenses and permits related to specific operations that are required. We will take you through, in obtaining such permits and licenses with the relevant government bodies. 
							`,
						],
						list: [
							{
								title: `
									The following documents are required when applying for a business permit
								`,
								items: [
									`Business permit application form`,
									`Certificate of incorporation`,
									`Identity card`,
									`Company pin certificate`,
									`Approved business permit application form`,
									`Permit payment invoice`,
									`Payment invoice - category of business`,
								],
							},
						],
					},
				],
			},
			{
				title: "Company Registration",
				description: `AFREX covers the registration of companies from the start up to the
				registration of all business permits and licenses required for companies to be
				fully operational, including work permits for foreign residents, VAT and
				PIN with the Tax Department, Social Security and Health Insurance Certificates.
				We handle this process by doing the following.`,
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
				content: [
					{
						title: "Our role in company registration",
						items: [
							`
								AFREX covers the registration of companies from the start up to the registration of all business permits and licenses required for companies to be fully operational, including work permits for foreign residents, VAT and PIN with the Tax Department, Social Security and Health Insurance Certificates. We handle this process by doing the following
							`,
						],
						list: [
							{
								title: `
									Ecitizen account creation
								`,
								items: [
									`The registration is done either as a Kenya citizen, foreigner, foreigner resident, local company or foreign company.`,
								],
							},
							{
								title: `
									Business Name Search, Reservation and Registration
								`,
								items: [
									`The name search and reservation is the first step towards registering a business name, after which the reserved business name can be registered in one of the following categories: private or public (limited by shares or by guarantee), limited liability partnership and foreign company.`,
								],
							},
							{
								title: `
									Completion of Registration
								`,
								items: [
									`Following the registration of the company, there are required information.`,
								],
							},
							{
								title: `
									Application for Work Permit and Alien Card for Foreign Residents
								`,
								items: [
									`Foreign investors can also benefit from our service of guiding them through the process of applying for work permit. This process is done through the Department of Immigration Services Foreign Nationals portal.`,
								],
							},
							{
								title: `
									Application for PIN and VAT Certificates with the Tax Department
								`,
								items: [
									`The process for applying for PIN and VAT is done online via the KRA online tax portal, which we will assist you in creating. We will also inform you on the documents required before applying and take you through the process of registration until the certificate is issued.`,
									`The PIN certificate is important in filing returns and paying taxes as well as making other transactions.`,
								],
							},
							{
								title: `
									Application for National Social Security Fund (NSSF) & National Health Insurance Fund (NHIF) registration
								`,
								items: [
									`Registering with the NSSF & the NHIF is mandatory by law.`,
									`The NSSF provide basic financial security benefits to employees upon retirement, while the NHIF provides health insurance cover to employees.`,
								],
							},
						],
					},
				],
			},
			{
				title: "Professional Expertise",
				description: `AFREX connects you with highly experience professionals to
				(advice, recommending, doing market research, business plan, referrals,
				compliance issues, conception of projects, project management, risk management,
				marketing strategies, web design, IT management, web application).`,
				link: "/services/professional-expertise",
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
				content: [
					{
						title: `Legal Compliance Experts`,
						items: [
							`Compliance is a key aspect of any regulated business. Businesses strive to meet complex compliance requirements that are in tune with current global and domestic regulatory standards. Our legal team will deliver compliance advisory and consultancy services focusing on regulatory and quality standards compliance, assisting businesses of all sizes across all business sectors and helping companies avoid missteps that could result in hefty fines, legal ramifications and reputation damage.`,
							`We at AFREX connect you with highly experienced legal compliance professionals responsible for ensuring the company complies with governments regulations.`,
							`We offer a wild range of regulatory compliance and regulatory issues in Kenya relating to different regulatory bodies.`,
						],
						list: [],
					},
					{
						title: `Associate partners`,
						items: [
							`While conducting business main activities, there are special licenses and permits related to specific operations that are required. We will take you through, in obtaining such permits and licenses with the relevant government bodies.`,
						],
						list: [],
					},
					{
						title: "Financial and Commercial Experts",
						items: [
							`AFREX’s financial and commercial experts help investors best utilize their available resources and achieve important monetary goals. We maintain the confidentiality of clients’ information. With strategic advice, we perform activities with regard to market research, project management, business plan, marketing strategy, business development, …`,
							`While conducting business main activities, there are special licenses and permits related to specific operations that are required. We will take you through, in obtaining such permits and licenses with the relevant government bodies. `,
						],
						list: [],
					},
				],
			},
			{
				title: "Administrative and Business Support",
				description: `We assign teams of seasoned/experienced specialists while respecting
				your budget and your project deadlines. Our recruitment services can
				respond to a specific request for a given period, or be part of a framework
				agreement often comprising several categories and profiles.`,
				link: "/services/adminstrative-and-business-support",
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
				content: [
					{
						title: "Business Address",
						items: [
							`
								AFREX offers guidance for purchase or lease of premises for physical office address, at affordable price, including prestigious head office locations that suit each size of business.
							`,
						],
						list: [],
					},
					{
						title: "Virtual Office Services",
						items: [
							`
								We offer virtual office solutions that cover the office administrative and secretarial tasks including but not limited to customer service, diary management, telephone and email communications, social media management, recruitment, human resources, database management, record keeping, etc. 
							`,
						],
						list: [],
					},
					{
						title: "More on Administrative and business support",
						items: [
							`We offer virtual office solutions that cover the office administrative and secretarial tasks including but not limited to customer service, diary management, telephone and email communications, social media management, recruitment, human resources, database management, record keeping, etc. `,
							`A business address in the right place and a local contact number answered in your company name can make all the difference to the image of your business prospects.`,
							`But there are many reasons for not needing a physical office space on a permanent basis since many home workers, entrepreneurial startups and companies looking to expand into new markets want the address without the office.`,
							`Given today’s global economy, mobile work trends and the vast internet market place, you can work from anywhere with the use of offered virtual office services. With virtual office you can easily associate your company with a great business address to project instant credibility, benefit from administrative support with the supply of cost-effective professional support with team answering and forwarding your calls and handling your mails.`,
							`We assign teams of seasoned/experienced specialists while respecting your budget and your project deadlines. Our recruitment services can respond to a specific request for a given period, or be part of a framework agreement often comprising several categories and profiles.`,
						],
						list: [],
					},
				],
			},
			{
				title: "Connection to business opportunity",
				description: `If you want to build your business connections and accelerate your international growth,
				then you have found the right place. Our industry knowledge on international network will
				give you a chance to connect with leading international companies that will help you spur
				the growth of your company and open doors and opportunities in the global market...`,
				link: "/services/connection-to-business-opportunity",
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
				content: [
					{
						title: "Our role in connection to business opportunity",
						items: [
							`
								If you want to build your business connections and accelerate your international growth, then you have found the right place. Our industry knowledge on international network will give you a chance to connect with leading international companies that will help you spur the growth of your company and open doors and opportunities in the global market. We will connect you to the right opportunities for your company that will resonate with your company’s needs.
								We provide practical assistance and support to facilitate swift start-up for business and connect investors to the appropriate industry players.			
							`,
						],
						list: [],
					},
				],
			},
			{
				title: "Business Support Services",
				description: `The setting up and creation of companies is a very laborious procedure which, at times,
				requires the establishment of adequate structures for its normal functioning.
				AFREX is here to also offer professional administrative services to companies or owners of
				businesses that do not have registered offices or places to carry out their activities.`,
				link: "/services/business-support",
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
				content: [
					{
						title: "More about our business support service",
						items: [
							`The setting up and creation of companies is a very laborious procedure which, at times, requires the establishment of adequate structures for its normal functioning. AFREX is here to also offer professional administrative services to companies or owners of businesses that do not have registered offices or places to carry out their activities. We provide to our clients’ back-up administrative and business support services that suit their needs in ensuring that they are met throughout regardless of their locations. Our team of qualified, skilled and experienced professionals, of all aspects of business development, are put to task to do the job.`,
						],
						list: [
							{
								title: "With Afrex virtual office services you can get",
								items: [
									`a great city address`,
									`work space`,
									`co-working space`,
									`receptionists`,
									`access to conference/meeting rooms`,
									`drop-in business lounges`,
									`membership plan`,
									`mail forwarding and handling`,
								],
							},
							{
								title: "Afrex offers",
								items: [
									`Furnished office (Co-working space or private office)`,
									`Meeting/Conference rooms`,
									`Receptionist. Make sure your business never misses a call with AFREX receptionist providing a full call answering and forwarding service. Our live call answering service offers you the flexibility to capture all your important business calls from any external location without the cost of maintaining a full time receptionist.`,
									`Mail Forwarding. Take advantage of AFREX's premium address and mail forwarding package designed to provide flexible options for mobile operations. Our team ensure your packages, letters and faxes get where they need to be no matter which state, territory or continent you may be travelling through.`,
									`Answering services (Receptionist and web chat services). We give a dedicated local business telephone number and call answering and forwarding services. This includes company voice mail and messages passed to you by phone, fax or SMS. If your business requires an operational business line with a local telephone number and dedicated receptionist, you need our telephone answering service. Our live telephone answering service ensuring you capture all of your business opportunities with a friendly, professional dedicated receptionist. Options include receptionists, furnished offices with high-speed internet, display of company name in reception areas`,
									`Accounting and Marketing which include Organize and keep the accounts correctly, Filing tax returns, Advertising materials (flyers, pamphlets, banners, billboards), Business cards`,
								],
							},
						],
					},
				],
			},
			{
				title: "Airport Transport Services",
				description: `We provide air transport services for international deliveries by cargo freight and chartered aircraft with
				major destinations around the world. Very often, in order to ensure secure deliveries by avoiding
				countless transshipments for deliveries to distant destinations, we offer charter flights for direct
				transport.`,
				link: "/services/airport-leasing",
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
				content: [
					{
						title: "Air Transport and Logistics Services",
						items: [
							`We provide air transport services for international deliveries by cargo freight and chartered aircraft with
							major destinations around the world. Very often, in order to ensure secure deliveries by avoiding
							countless transshipments for deliveries to distant destinations, we offer charter flights for direct
							transport.`,
							`Thanks to the development of our network we can offer you a full range of services to and from
							anywhere in the world. By referring to blue chip airlines, we are able to control transit times, space
							allocation and offer greater flexibility allowing us to provide premium service to you and your
							customers. Our international network and our extensive international agency will always find the right
							solution to get your product where it needs to be.`,
							`To make the air cargo transport operations easy, we work with providers who have air cargo facilities
							conveniently located near airports, thereby streamlining the movement of urgent air cargo shipments.
							With their support, we are ensuring a smooth transition on the ground for all last mile delivery
							requirements. As a chain service for picking up cargo from the place of departure to the final
							destination, we offer:`,
						],
						list: [
							{
								title: "We do air plane leasing services for:",
								items: [
									`Airport to airport services`,
									`Door to airport services`,
									`Airport to door services`,
									`Tailored solutions taking into account the particularity of the cargo and the wishes of the customer.`,
								],
							},
						],
					},
					{
						title: "Shipment Tracking",
						items: [
							`We understand that air freight is a service that must meet deadlines. We therefore ensure through our
							online portal the visibility of the movement of our shipments with real-time data anywhere in the world.`,
						],
						list: [
							{
								title: "",
								items: [],
							},
						],
					},
					{
						title: "Afrex as a Contracting Agency",
						items: [
							`With an extensive air operation for the last two years Afrex Bridge Connections is currently a contracting
							agent for the United Nations by outsourcing for air operators to provide air transport solutions that
							support various United Nations programs with regard to the distribution of relief foods and the
							deployment of personnel and equipment to established peace missions in the Central and Eastern
							African region. We have established ourselves as a trusted bridge for handling the selection of providers
							of aircraft leasing services on behalf of the United Nations. Our commitment to high standards on
							safety, reliability, and cost-effectiveness is a requirement.`,
						],
						list: [
							{
								title: "Therefore, Afrex Bridge Connections Ltd contracts aircraft providers for the following services:",
								items: [
									`Transportation of humanitarian aid and relief supplies to areas affected by natural disasters, armed
									conflicts, or other emergencies.`,
									`Evacuation of civilians or UN personnel from areas of conflict or disaster.`,
									`Provision of logistical support for peacekeeping missions, including the transport of troops,
									equipment, and supplies`,
									`Support for diplomatic missions, including the transport of diplomats and their staff.`,
									`Aerial reconnaissance and surveillance of conflict zones or areas of interest.`,
									`Provision of medical evacuation services for UN personnel or civilians in areas with limited or no
									access to medical facilities.`,
									`Transport of equipment and supplies for development projects, such as infrastructure or
									environmental initiatives.`,
									`Support for research and data collection projects, including aerial surveys or remote sensing
									activities.`,
									`Provision of air transport services for conferences, workshops, or other events organized by the
									United Nations or its affiliated agencies.`,
									`Provision of VIP transport services for high-level UN officials or visiting dignitaries.`,
								],
							},
						],
					},
				],
			},
		],
		timeline: {
			title: "Afrex Facilitation Dynamics",
			subtitle:
				"Facilitation concerns itself with all the tasks needed to reach a productive  and impartial meeting outcome that reflects the agreed objectives and deliverables defined upfront by the meeting owner or client.",
			backgroundImage: image,
			items: [
				{
					title: `Setting ground rules`,
					description: `
						We as Afrex Business Connection setting ground rules is a key component of 
						the facilitation process especially in meetings convened to discuss difficult 
						problems or for training.
					`,
				},
				{
					title: `Consulting with the client`,
					description: `
						We as Afrex Bridge Connection work with clients (Individuals or organization)
						to understand the purpose and outcome of the meeting by discussing it with the client.
					`,
				},
				{
					title: `Making arrangements for the meeting`,
					description: `
						We arrange and manage practical arrangements considering in detail the location and layout of the room. We research the 
						meeting beforehand to understand why it is being held and that all stakeholders are 
						invited and able to attend.
					`,
				},
				{
					title: `Understanding group norms and dynamics`,
					description: `
						We do not make assumptions about the way people interact and will try to adapt to the ways 
						of different cultures and organisations. Whilst tackling the practical aspects of a meeting we also remain aware 
						of undercurrents, both verbal and non-verbal, which may indicate problems the group is having.
					`,
				},
			],
		},
		testimonials: {
			title: "Testimonials",
			subtitle: "What Our Customers Say About Us",
			backgroundImage: image,
			items: TestimonialsList,
		},
	};
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
