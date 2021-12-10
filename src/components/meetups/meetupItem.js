import React from 'react'
import classes from './meetupItem.module.css'
import Card from '../ui/card'
import {useContext} from 'react'
import FavouratesContext from '../../store/favourates-context'

function MeetupItem(props){
    const Ctx = useContext(FavouratesContext)
    const isFavourate = Ctx.isFavourate(props.id)
    const thisItem = {
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image
    }
    function handleToggleFavourateStatus() {
        isFavourate ? Ctx.removeFavourates(props.id) : Ctx.addFavourates(thisItem);
    }
    return (
        <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={handleToggleFavourateStatus}>{isFavourate ? 'Remove from favourates' : 'Add to favourates'}</button>
            </div>
        </Card>
        </li>
    )
}
export default MeetupItem