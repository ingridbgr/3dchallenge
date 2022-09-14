import { upload } from "@testing-library/user-event/dist/upload";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

interface ValueProps {
	isOpen: any;
}
const SurgeonPage = ({ isOpen }: ValueProps) => {
	const renderTooltip = (props: any) => (
		<Tooltip id="button-tooltip" {...props}>
			You need to add files to continue
		</Tooltip>
	);
	return (
		<section className={isOpen ? "surgeon-page collapsed" : "surgeon-page"}>
			<div className="page-container">
				<div className="page-header">
					<h2>Pre-Operative Surgeon</h2>
					<button className="btn-primary">
						<span className="material-symbols-outlined mx-3"> visibility</span>
						See Files
					</button>
				</div>
				<hr></hr>
				<section className="main-content">
					<label className="file-uploader">
						* Scapula:
						<input
							className="base-input"
							type="file"
							ngf-select
							ng-model="new_files"
							ng-change="fs.uploadFiles(new_files)"
							multiple
						/>
						<span className="input-uploads">Upload files</span>
					</label>
					<label className="file-uploader">
						* Humerus:
						<input
							className="base-input"
							type="file"
							ngf-select
							ng-model="new_files"
							ng-change="fs.uploadFiles(new_files)"
							multiple
						/>
						<span className="input-uploads">Upload files</span>
					</label>
					<label className="file-uploader">
						* CT:
						<input
							className="base-input"
							type="file"
							ngf-select
							ng-model="new_files"
							ng-change="fs.uploadFiles(new_files)"
							multiple
						/>
						<span className="input-uploads">Upload files</span>
					</label>
					<label className="file-uploader">
						* Segmentation:
						<input
							className="base-input"
							type="file"
							ngf-select
							ng-model="new_files"
							ng-change="fs.uploadFiles(new_files)"
							multiple
						/>
						<span className="input-uploads">Upload files</span>
					</label>
					<div className="button-area">
						<button className="btn-primary" disabled>
							<OverlayTrigger
								placement="top"
								delay={{ show: 100, hide: 200 }}
								overlay={renderTooltip}
							>
								<span className="d-inline-block"> Preview Surgeon </span>
							</OverlayTrigger>
						</button>

						<button className="btn-primary" disabled>
							<OverlayTrigger
								placement="top"
								delay={{ show: 100, hide: 200 }}
								overlay={renderTooltip}
							>
								<span className="d-inline-block"> 
							Create Surgeon </span>
							</OverlayTrigger>
						</button>
					</div>
				</section>
			</div>
		</section>
	);
};

export default SurgeonPage;
