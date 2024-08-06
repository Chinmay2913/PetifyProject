import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import '../cssFiles/carouselSlides.css'

export default function Example(props) {
    var items = [
        {
            id: "Random Name #1",
            image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: "Random Name #2",
            image: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1722858351~exp=1722861951~hmac=02bb6ad5c0ed3493518416d4b789182f7ef6274f450fd7792d58c35b4c03824a&w=996"
        },
        {
            id: "Random Name #3",
            image: "https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg"
        }
    ];

    return (
        <Carousel
            autoPlay
            interval={3000}
            animation="slide"
            indicators={false}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    );
}

function Item(props) {
    return (
        <Paper>
            <img src={props.item.image} alt={props.item.id} className="carousel-image" />
            
        </Paper>
    );
}