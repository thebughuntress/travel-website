import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return(
    <div className='cards'>
        <h1> Checkout these EPIC destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amayon Jungle"
                        label="Adventure"
                        path="/services">
                    </CardItem>
                    <CardItem
                        src="images/img-2.jpg"
                        text="Travel through the Islands of Bali in a private Cruise"
                        label="Luxury"
                        path="/services">
                    </CardItem>
                    <CardItem
                        src="images/img-8.jpg"
                        text="Ride through the Sahara dessert on a guided camel tour"
                        label="Adventure"
                        path="/services">
                    </CardItem>
                    <CardItem
                        src="images/img-4.jpg"
                        text="Experience Football on Top of the Himilayan Mountains"
                        label="Sports"
                        path="/services">
                    </CardItem>
                    <CardItem
                        src="images/img-3.jpg"
                        text="Set Sail in the Atlantic Ocean visiting unchartered Waters"
                        label="Mystery"
                        path="/services">
                    </CardItem>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Cards