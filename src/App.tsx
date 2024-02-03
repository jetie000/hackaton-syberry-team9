import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import { RouteList } from "./service/router/RouteList";
import { UI_KIT } from "./theme";

function App() {
	return (
		<div className="App">
			<Header />
			<Container maxWidth="lg" sx={{ mt: `calc(${UI_KIT.headerHeight} + 20px)` }}>
				<RouteList />
			</Container>
		</div>
	);
}

export default App;
