import React from 'react'
import MeetupItem from './meetupItem'
import classes from './meetupList.module.css'
function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map(meetup => {
                return(
                <MeetupItem 
                    key={meetup.id}
                    id={meetup.id}
                    title={meetup.title}
                    description={meetup.description}
                    image={meetup.image}
                    address={meetup.address}
                />
                )
                })}
        </ul>
    )
}
export default MeetupList