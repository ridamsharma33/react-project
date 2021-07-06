import React from "react";
import { Route, Switch } from "react-router-dom";
import MainNav from "./components/MainNav";
import AllMeetups from "./routes/AllMeetups";
import Fav from "./routes/Fav";
import NewMeetup from "./routes/NewMeetup";

function App() {
	return (
		<div>
			<MainNav />
			<Switch>
				<Route path="/" exact>
					<AllMeetups />
				</Route>
				<Route path="/new-meetup">
					<NewMeetup />
				</Route>
				<Route path="/fav">
					<Fav />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
