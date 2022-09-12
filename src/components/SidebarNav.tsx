import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

const SidebarNav = () => {
	return (
		<nav className="nav__cont">
			<ul className="nav mt-2">
				<span className="sidebar-heading">TASKS</span>
				<li className="nav__items">
					<Dropdown className="sidebar-dropdown" drop="down">
						<DropdownToggle variant="sidebar">
							<span className="material-symbols-outlined">check_circle</span>
							<span className="badge badge-pill badge-info">1</span>
							<span className="sidebar-title">
								Finished Tasks
								<span className="material-symbols-outlined">
									expand_more
								</span>
							</span>
						</DropdownToggle>
						<DropdownMenu>
							<Dropdown.Item className="dropdown-menu" href="#">
								Task 1
							</Dropdown.Item>
						</DropdownMenu>
					</Dropdown>
				</li>
				<li className="nav__items ">
					<Dropdown className="sidebar-dropdown">
						<DropdownToggle variant="sidebar">
							<span className="material-symbols-outlined">task</span>
							<span className="badge badge-pill badge-info">3</span>
							<span className="sidebar-title">
								Current Tasks
								<span className="material-symbols-outlined">expand_more</span>
							</span>
						</DropdownToggle>
						<DropdownMenu>
							<Dropdown.Item className="dropdown-menu" href="#">
								Task 1
							</Dropdown.Item>
							<Dropdown.Item className="dropdown-menu" href="#">
								Task 2
							</Dropdown.Item>
							<Dropdown.Item className="dropdown-menu" href="#">
								Task 3
							</Dropdown.Item>
						</DropdownMenu>
					</Dropdown>
				</li>

				<li className="nav__items ">
					<Dropdown className="sidebar-dropdown">
						<DropdownToggle variant="sidebar">
							<span className="material-symbols-outlined">calendar_month</span>
							<span className="badge badge-pill badge-info">2</span>
							<span className="sidebar-title">
								Upcoming Tasks
								<span className="material-symbols-outlined">expand_more</span>
							</span>
						</DropdownToggle>
						<DropdownMenu>
							<Dropdown.Item className="dropdown-menu" href="#">
								Task 1
							</Dropdown.Item>
							<Dropdown.Item className="dropdown-menu" href="#">
								Task 2
							</Dropdown.Item>
						</DropdownMenu>
					</Dropdown>
				</li>
			</ul>
		</nav>
	);
};

export default SidebarNav;
