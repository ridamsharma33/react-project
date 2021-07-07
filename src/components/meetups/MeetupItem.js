import React, { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem({ id, title, description, image, address }) {
	const favoritesContext = useContext(FavoritesContext);
	const isFavorite = favoritesContext.isFavorite(id);

	function favoriteStatusHandler() {
		if (isFavorite) {
			favoritesContext.removeFavorite(id);
		} else {
			favoritesContext.addFavorite({
				id,
				title,
				description,
				image,
				address,
			});
		}
	}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={image} alt={title} />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={favoriteStatusHandler}>
						{isFavorite ? "Remove from Favorites" : "Add to Favorites"}
					</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
