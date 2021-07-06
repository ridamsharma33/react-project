import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
	function addMeetupHandler(meetupData) {
		fetch(
			"https://react-project-5f828-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetupData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
}

export default NewMeetup;
