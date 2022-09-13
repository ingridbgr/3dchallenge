import { useState } from "react";
interface ValueProps {
	isOpen: boolean;
	setIsOpen: (value: any) => void;
}

const Sidebar = ({ isOpen, setIsOpen}: ValueProps) => {
	let dropdown: any = document.getElementsByClassName("dropdown-btn");
	let i;

	for (i = 0; i < dropdown.length; i++) {
		dropdown[i].addEventListener("click", function (this: any) {
			this.classList.toggle("active");
			let dropdownContent = this.nextElementSibling;
			if (dropdownContent.style.display === "block") {
				dropdownContent.style.display = "none";
			} else {
				dropdownContent.style.display = "block";
			}
		});
	}
	const handleClick = () => {
		if (isOpen) {
      setIsOpen(false);
     }else{
       setIsOpen(true);
     } 
	};
	return (
		<div className={!isOpen ? "nav sidebar" : "nav sidebar expanded"}>
			<ul className="nav-list">
				<li className="mb-3 ">
					<button
						className="btn mx-2 btn-sidebar d-flex sidebar-heading "
						onClick={handleClick}
					>
						Tasks
						<span className="material-symbols-outlined">chevron_right</span>
					</button>
				</li>
				<li className="nav-list-item">
					<button className="btn btn-sidebar dropdown-btn">
						<span className="material-symbols-outlined">check_circle</span>
						<span className="badge badge-pill badge-info">1</span>
						<span className="sidebar-title">
							Finished Tasks
							<span className="material-symbols-outlined">expand_more</span>
						</span>
					</button>
					<div className="dropdown-container">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</li>
				<li className="nav-list-item">
					<button className="btn btn-sidebar dropdown-btn">
						<span className="material-symbols-outlined">check_circle</span>
						<span className="badge badge-pill badge-info">1</span>
						<span className="sidebar-title">
							Current Tasks
							<span className="material-symbols-outlined">expand_more</span>
						</span>
					</button>
					<div className="dropdown-container">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</li>
				<li className="nav-list-item">
					<button className="btn btn-sidebar dropdown-btn">
						<span className="material-symbols-outlined">check_circle</span>
						<span className="badge badge-pill badge-info">1</span>
						<span className="sidebar-title">
							Upcoming Tasks
							<span className="material-symbols-outlined">expand_more</span>
						</span>
					</button>
					<div className="dropdown-container">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
