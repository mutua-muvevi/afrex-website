import DataGridCustom from "../../../components/datagrid/custom";
import { useSelector } from "../../../redux/store";
import ModalComponent from "../../../components/modal/modal";

const FlightCard = ({ open, onClose }) => {
	const {
		data: { data: allFlight },
	} = useSelector((state) => state.flights);

	return (
		<>
			<ModalComponent
				open={open}
				onClose={onClose}
				height={600}
				title="Tracking flights"
			>
				<DataGridCustom
					data={allFlight}
					title="Table"
					modalTitle="Flight Details"
					height={500}
					maxWidth="md"
				/>
			</ModalComponent>
		</>
	);
};

export default FlightCard;
