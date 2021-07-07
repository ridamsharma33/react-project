import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Fav() {
	const favoritesContext = useContext(FavoritesContext);

	let content;

	if (favoritesContext.totalFavorites === 0) {
		content = (
			<p>You have no favorites. Add Meetups to favorites from Meetup list.</p>
		);
	} else {
		content = <MeetupList meetups={favoritesContext.favorites} />;
	}

	return (
		<section>
			<h1>My Favorites</h1>
			{content}
		</section>
	);
}

export default Fav;
