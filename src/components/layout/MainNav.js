import React, { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNav() {
	const favoritesContext = useContext(FavoritesContext);

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
						<Link to="/fav">
							Favorites
							<span className={classes.badge}>
								{favoritesContext.totalFavorites}
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNav;
