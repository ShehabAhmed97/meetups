import React from 'react'
import { useContext } from 'react'
import MeetupList from '../components/meetups/meetupList'
import FavouratesContext from '../store/favourates-context'
function Favourates() {
    const Ctx = useContext(FavouratesContext)
    const favorites = Ctx.favourates;
    return (
        <div>
            <h2>Favorites</h2>
            <MeetupList meetups={favorites}/>
        </div>
    )
}
export default Favourates 