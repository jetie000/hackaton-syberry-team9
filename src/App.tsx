import "./App.css";
import Header from "./components/Header";
import LoginPopup from "./components/LoginPopup/loginPopup.component";
import { RouteList } from "./service/router/RouteList";

function App() {
	return (
		<div className="App">
			<Header />
       <RouteList/>
		</div>
	);
}

export default App;
