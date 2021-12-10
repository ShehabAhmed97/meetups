import React from 'react'
import NewMeetupForm from "../components/meetups/newmeetupform"
import { useNavigate } from "react-router-dom" 
function NewMeetups() {
    const navigate = useNavigate()
    function handleOnAdd (data) {
        fetch( "https://react-meetups-b5778-default-rtdb.firebaseio.com/meetups.json",
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
        ).then(() => {navigate('/')})
    }
    return (
        <section>
        <h2>Add new meetup</h2>
        <NewMeetupForm onAdd={handleOnAdd} />
        </section>
    )
}
export default NewMeetups 