import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import '../cssFiles/carouselSlides.css';
import petdetails from '../assets/banners/Know your pets.png';
import getall from '../assets/banners/Product Details.png';
export default function Example(props) {
    var items = [
        {
            id: "Random Name #1",
            image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            link: "https://example.com/page1" // External link
        },
        {
            id: "Random Name #2",
            image: petdetails,
            link: "/petinfo" // Internal link
        },
        {
            id: "Random Name #3",
            image: getall ,
            link: "/products" // Internal link
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
            {props.item.id === "Random Name #1" ? (
                <a href={props.item.link} target="_blank" rel="noopener noreferrer">
                    <img src={props.item.image} alt={props.item.id} className="carousel-image" />
                </a>
            ) : (
                <Link to={props.item.link}>
                    <img src={props.item.image} alt={props.item.id} className="carousel-image" />
                </Link>
            )}
        </Paper>
    );
}


/*

Main Component and Variables:
        Example: The main functional component that defines the carousel.
        items: An array of objects where each object represents a carousel item. Each item contains:
        id: A unique identifier for the carousel item.
        image: The URL of the image to be displayed in the carousel.
        link: The URL to which the item will redirect when clicked. This can be an external or internal link.

Key Functions:
    Example(props):
        Renders the carousel with the provided items.
        Uses the Carousel component to display the images with specific properties:
            autoPlay: Enables automatic scrolling through the items.
            interval: Sets the time interval (3000ms) for each image to be displayed before sliding to the next.
            animation: Specifies the type of animation (slide) used between transitions.
            indicators: Hides the navigation indicators (dots).
        Maps through the items array and renders each Item component for the carousel.

Item(props):
    Renders an individual carousel item using the Paper component.
    Checks if the id of the item is "Random Name #1":
        If true, it wraps the image in an <a> tag for an external link, opening in a new tab.
        If false, it wraps the image in a Link component for internal navigation within the app.
    props.item: Contains the data (id, image, link) passed down from the Example component to render each item.


Usage
The Example component can be used to display a rotating banner of images with clickable links, commonly used on 
landing pages or feature sections of a website. The carousel is flexible enough to handle both internal and external 
links, enhancing navigation and user experience.


*/