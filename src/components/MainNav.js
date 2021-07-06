import React from "react";
import { Link } from "react-router-dom";

import classes from "./layout/MainNav.module.css";

function MainNav() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to="/">All Meetups</Link>
					</li>
					<li>
						<Link to="/new-meetup">Add New Meetup</Link>
					</li>
					<li>
						<Link to="/fav">Favorites</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNav;
