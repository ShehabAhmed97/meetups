import React from 'react'
import MeetupList from '../components/meetups/meetupList'
import { useState } from "react"
import { useEffect } from "react"

function AllMeetups() {
    const [isLoading, setIsLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        fetch("https://react-meetups-b5778-default-rtdb.firebaseio.com/meetups.json")
        .then(response => response.json())
        .then((data) => {
            setIsLoading(false);
            const meetupsArray = []
            for(let key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetupsArray.push(meetup)
            }
            setMeetups(meetupsArray);
        })
    },
        []
    )
    return (
        <div>
            <h2>All Meetups</h2>
            {isLoading && <section><p>Loading...</p></section>}
            <MeetupList 
                meetups={meetups}
            />
        </div>
    )
}
export default AllMeetups 