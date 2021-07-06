import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetups from "./routes/AllMeetups";
import Fav from "./routes/Fav";
import NewMeetup from "./routes/NewMeetup";

function App() {
	return (
		<Layout>
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
		</Layout>
	);
}

export default App;
