import { useState } from "react";
import NavbarMenu from "./components/NavbarMenu";
import SectionInfo from "./components/SectionInfo";
import Sidebar from "./components/Sidebar";
import SidebarNav from "./components/SidebarNav";
import SurgeonPage from "./pages/SurgeonPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
	return (
		<div className="App">
			<NavbarMenu />
			<SectionInfo />
			<div className="c-flex-container">
				<Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
				<SurgeonPage isOpen={isOpen}/>
			</div>
		</div>
	);
}

export default App;
