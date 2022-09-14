import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

import { userInfo } from "../mocks/mocks";

const SectionInfo = () => {
	return (
		<section className="info-panel">
			<div className="button-area">
				<button className="btn-primary">
					<span className="material-symbols-outlined">arrow_back_ios</span>
					Return
				</button>
				<button className="btn-primary">
					<span className="material-symbols-outlined"> visibility</span>Preview
				</button>
			</div>
			<div className="patient-info">
				<div className="patient-data">{userInfo.patient.id}</div>
				<div className="patient-data">
					<span className="material-symbols-outlined">medical_information</span>
					{userInfo.user}
				</div>
                    <div className="patient-data">
					<span className="material-symbols-outlined">local_hospital</span>
					{userInfo.patient.hospital}
				</div>
                <div className="patient-data">
					<span className="material-symbols-outlined">personal_injury</span>
					{userInfo.patient.name}
				</div>
                <div className="patient-data">
					<span className="material-symbols-outlined">calendar_month</span>
					{userInfo.patient.date}
				</div>
			</div>
            <button className="btn-primary">Tools
            <span className="material-symbols-outlined">expand_more</span>
			</button>
		</section>
	);
};
export default SectionInfo;
