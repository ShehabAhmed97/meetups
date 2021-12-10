import React from 'react'
import {createContext, useState} from 'react'

const FavouratesContext = createContext({
    favourates: [],
    totalFavourates: 0,
    addFavourates: (meetup) => {},
    removeFavourates: (meetupId) => {},
    isFavourate: (meetupId) => {}
})

export function FavouratesContextsProviders(props) {
    
        const [userFavourates, setUserFavourates] = useState([]);

        function handleAddFavourates(meetup) {
            setUserFavourates(prevFavourates => {
                return [...prevFavourates, meetup]
            })
        }
        function handleRemoveFavourates(meetupId) {
            setUserFavourates(prevFavourates => {
                return prevFavourates.filter(meetup => {
                    return meetup.id !== meetupId
                })
            })
        }
        function handleIsFavourate(meetupId) {
            return userFavourates.some(meetup => meetup.id === meetupId)
        }
        const context = {
            favourates: userFavourates,
            totalFavourates: userFavourates.length,
            addFavourates: handleAddFavourates,
            removeFavourates: handleRemoveFavourates,
            isFavourate: handleIsFavourate
        }

        return (
            <FavouratesContext.Provider value={context}>
                {props.children}
            </FavouratesContext.Provider>
        )
    }

export default FavouratesContext