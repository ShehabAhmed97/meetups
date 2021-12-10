import React from "react"
import Card from "../ui/card"
import classes from "./newmeetupform.module.css"
function NewMeetupForm(props) {
    const titleInputRef = React.useRef()
    const imageInputRef = React.useRef()
    const addressInputRef = React.useRef()
    const descInputRef = React.useRef()

    function handleSubmition(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const meetupData ={
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDesc
        }
        props.onAdd(meetupData)
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmition}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup title</label>
                    <input type="text" id="title" required ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup image</label>
                    <input type="url" id="image" required ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup address</label>
                    <input type="text" id="address" required ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="desc">Meetup description</label>
                    <textarea type="text" id="desc" rows="5" required ref={descInputRef} ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add</button>
                </div>
            </form>
        </Card>
    )
}
export default NewMeetupForm