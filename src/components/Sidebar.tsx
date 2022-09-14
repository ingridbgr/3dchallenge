interface ValueProps {
	isOpen: boolean;
	setIsOpen: (value: any) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: ValueProps) => {
	let dropdown: any = document.getElementsByClassName("dropdown-btn");
	let i;

	for (i = 0; i < dropdown.length; i++) {
		dropdown[i].addEventListener("click", function (this: any) {
			this.classList.toggle("active");
			let dropdownContent = this.nextElementSibling;
			if (dropdownContent.style.display === "flex" || !isOpen) {
				dropdownContent.style.display = "none";
			} else if (dropdownContent.style.display === "flex") {
				dropdownContent.style.display = "none";	
			} else {
				dropdownContent.style.display = "flex";
			}
		});
	}
	const handleClick = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
	return (
		<div className={!isOpen ? "nav sidebar" : "nav sidebar expanded"}>
			<ul className="nav-list">
				<li className="mb-3">
					<button
						className="btn mx-2 btn-sidebar d-flex sidebar-heading "
						onClick={handleClick}
					>
						{isOpen ? (
							<span className="material-symbols-outlined">chevron_left</span>
						) : (
							""
						)}
						Tasks
						{!isOpen ? (
							<span className="material-symbols-outlined">chevron_right</span>
						) : (
							""
						)}
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
					<div className="dropdown-container" aria-labelledby="dropdownMenuLink">
						<a className="dropdown-link tasks" href="#">
							Task 1
						</a>
					</div>
				</li>
				<li className="nav-list-item">
					<button className="btn btn-sidebar dropdown-btn">
						<span className="material-symbols-outlined">task</span>
						<span className="badge badge-pill badge-info">4</span>
						<span className="sidebar-title">
							Current Tasks
							<span className="material-symbols-outlined">expand_more</span>
						</span>
					</button>
					<div className="dropdown-container">
						<a className="  tasks" href="#">
							Task 1
						</a>
						<a className="  tasks" href="#">
							Task 2
						</a>
						<a className="  tasks" href="#">
							Task 3
						</a>
						<a className="  tasks" href="#">
							Task 4
						</a>
					</div>
				</li>
				<li className="nav-list-item">
					<button className="btn btn-sidebar dropdown-btn">
						<span className="material-symbols-outlined">calendar_month</span>
						<span className="badge badge-pill badge-info">3</span>
						<span className="sidebar-title">
							Upcoming Tasks
							<span className="material-symbols-outlined">expand_more</span>
						</span>
					</button>
					<div className="dropdown-container">
						<a className="  tasks" href="#">
							Task 1
						</a>
						<a className="  tasks" href="#">
							Task 2
						</a>
						<a className="  tasks" href="#">
							Task 3
						</a>
					</div>
				</li>
			</ul>
			<li className="nav-list-item">
			<button className="btn chat-btn btn-sidebar">
				<span className="material-symbols-outlined">chat</span>
				<span className="badge badge-pill badge-info">4</span>
				<span className="sidebar-title">
					Chat
				</span>
			</button>
			</li>
		</div>
	);
};

export default Sidebar;
