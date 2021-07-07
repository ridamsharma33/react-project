import { createContext, useState } from "react";

const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
});

export function FavoritesContextProvider(props) {
	const [favorites, setFavorites] = useState([]);

	function addFavoriteHandler(favoriteMeetup) {
		setFavorites((prevFavorites) => prevFavorites.concat(favoriteMeetup));
	}

	function removeFavoriteHandler(meetupId) {
		setFavorites((prevFavorites) =>
			prevFavorites.filter((meetup) => meetup.id !== meetupId)
		);
	}

	function isFavoriteHandler(meetupId) {
		return favorites.some((meetup) => meetup.id === meetupId);
	}

	const context = {
		favorites: favorites,
		totalFavorites: favorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		isFavorite: isFavoriteHandler,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{props.children}
		</FavoritesContext.Provider>
	);
}

export default FavoritesContext;
