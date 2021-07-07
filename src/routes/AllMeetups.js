import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
	const [loading, setLoading] = useState(true);
	const [meetups, setMeetups] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch(
			"https://react-project-5f828-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};

					meetups.push(meetup);
				}

				setLoading(false);
				setMeetups(meetups);
			});
	}, []);

	if (loading) {
		return (
			<section>
				<p>Wait for it...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={meetups} />
		</section>
	);
}

export default AllMeetups;
