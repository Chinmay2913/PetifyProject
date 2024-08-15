import React, { useState } from "react";
import { Button, ButtonGroup, Typography, Card, CardContent, CardMedia, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

// Rename the local data to avoid conflict
const localBreedsData = {
    dog: [
        {
            name: 'golden',
            image: '/breeds/dog/golden.avif',
            info: `
                <h2>About Golden Retriever</h2>
                <p>Golden Retrievers are one of the most popular dog breeds in the world, known for their friendly, tolerant attitudes, and intelligence. Originally bred for retrieving game during hunting, they are now widely cherished as family pets, service dogs, and therapy animals. They have a dense, water-repellent coat, typically golden in color, and are medium to large-sized dogs. Golden Retrievers are known for their strong build, keen sense of smell, and love for outdoor activities, making them excellent companions for active families.</p>
                <ul>
                    <li><strong>Size:</strong> 55 to 75 pounds (25 to 34 kg)</li>
                    <li><strong>Height:</strong> 21.5 to 24 inches (55 to 61 cm) at the shoulder</li>
                    <li><strong>Life Expectancy:</strong> 10 to 12 years</li>
                    <li><strong>Temperament:</strong> Friendly, reliable, trustworthy, and loving</li>
                    <li><strong>Energy Level:</strong> High; they require regular exercise</li>
                </ul>
                <h2>Diet</h2>
                <p>A balanced diet is crucial for maintaining the health and well-being of a Golden Retriever. Their diet should be rich in protein, fats, and essential nutrients to support their active lifestyle.</p>
                <ul>
                    <li><strong>Protein:</strong> Should be the primary ingredient in their diet. High-quality dog food with meat as the first ingredient is recommended.</li>
                    <li><strong>Fats:</strong> Healthy fats from fish oil or flaxseed help maintain a shiny coat and healthy skin.</li>
                    <li><strong>Carbohydrates:</strong> Whole grains like brown rice, barley, or oats provide energy.</li>
                    <li><strong>Vegetables and Fruits:</strong> Can be included for additional vitamins, minerals, and fiber.</li>
                    <li><strong>Portion Control:</strong> Adult Golden Retrievers typically require 2 to 3 cups of high-quality dry food per day, divided into two meals. Portion sizes should be adjusted based on activity level and age.</li>
                    <li><strong>Avoid:</strong> Foods high in artificial preservatives, fillers, and excessive fats.</li>
                </ul>
                <h2>Training</h2>
                <p>Golden Retrievers are highly trainable due to their intelligence and eagerness to please. Positive reinforcement techniques work best with this breed.</p>
                <ul>
                    <li><strong>Start Early:</strong> Begin training as early as possible, ideally when the dog is a puppy.</li>
                    <li><strong>Basic Commands:</strong> Focus on teaching basic commands such as sit, stay, come, and heel.</li>
                    <li><strong>Socialization:</strong> Expose your Golden Retriever to different environments, people, and other animals to promote good behavior and reduce anxiety.</li>
                    <li><strong>Consistency:</strong> Consistency in commands and routines helps Golden Retrievers learn faster.</li>
                    <li><strong>Mental Stimulation:</strong> Incorporate puzzle toys and interactive games to challenge their minds.</li>
                    <li><strong>Crate Training:</strong> Can be effective for house training and providing a safe space for your dog.</li>
                    <li><strong>Obedience Classes:</strong> Consider enrolling in professional obedience classes for structured training.</li>
                </ul>
                <h2>Grooming</h2>
<p>Golden Retrievers have a double coat that requires regular grooming to keep it healthy and free from matting.</p>

<h3>Grooming Requirements:</h3>
<ul>
    <li><strong>Brushing:</strong> Brush their coat at least twice a week to remove loose hair and prevent tangles. During shedding season (spring and fall), daily brushing may be needed.</li>
    <li><strong>Bathing:</strong> Bathe your Golden Retriever every 6 to 8 weeks or as needed. Use a dog-specific shampoo to avoid drying out their skin.</li>
    <li><strong>Ear Cleaning:</strong> Check and clean their ears weekly to prevent infections. Golden Retrievers are prone to ear infections due to their floppy ears.</li>
    <li><strong>Nail Trimming:</strong> Trim their nails every 3 to 4 weeks, or as needed. Overgrown nails can cause discomfort and lead to injury.</li>
    <li><strong>Teeth Cleaning:</strong> Brush their teeth regularly with dog toothpaste to maintain oral health and prevent dental issues.</li>
    <li><strong>Shedding:</strong> Golden Retrievers shed moderately year-round, with more significant shedding during spring and fall. Regular grooming helps manage this.</li>
</ul>           
            `
        },
        {
            name: 'german', 
            image: '/breeds/dog/german.avif',
            info: `
                <h2>About German Shepherd</h2>
                <p>German Shepherds are one of the most popular dog breeds in the world, known for their intelligence, loyalty, and versatility. Originally bred as working dogs, they excel in roles such as police, military, and service dogs, but are also beloved family pets. German Shepherds are large, strong, and muscular dogs with a dense double coat. They are highly trainable and have a protective nature, making them excellent guardians.</p>
                <ul>
                    <li><strong>Size:</strong> 50 to 90 pounds (22 to 40 kg)</li>
                    <li><strong>Height:</strong> 22 to 26 inches (55 to 65 cm) at the shoulder</li>
                    <li><strong>Life Expectancy:</strong> 9 to 13 years</li>
                    <li><strong>Temperament:</strong> Loyal, courageous, confident, and intelligent</li>
                    <li><strong>Energy Level:</strong> High; they require regular exercise and mental stimulation</li>
                </ul>
        
                <h2>Diet</h2>
                <p>A balanced and nutritious diet is essential for maintaining the health and vitality of a German Shepherd. Their diet should support their active lifestyle and help prevent common health issues such as hip dysplasia.</p>
                <ul>
                    <li><strong>Protein:</strong> High-quality protein from meat sources is crucial for muscle development and maintenance.</li>
                    <li><strong>Fats:</strong> Healthy fats from sources like fish oil help support coat health and brain function.</li>
                    <li><strong>Carbohydrates:</strong> Whole grains, such as brown rice and oats, provide energy and fiber.</li>
                    <li><strong>Vitamins and Minerals:</strong> Essential vitamins and minerals from vegetables and fruits support overall health.</li>
                    <li><strong>Portion Control:</strong> German Shepherds typically need 3 to 4 cups of high-quality dry food per day, divided into two meals. Adjust portions based on age, activity level, and health.</li>
                    <li><strong>Avoid:</strong> Foods with fillers, artificial preservatives, and excessive amounts of grains.</li>
                </ul>
        
                <h2>Training</h2>
                <p>German Shepherds are highly intelligent and eager to learn, making them one of the easiest breeds to train. Early socialization and consistent training are key to ensuring they grow into well-behaved adults.</p>
                <ul>
                    <li><strong>Start Early:</strong> Begin training and socialization as soon as possible, ideally during puppyhood.</li>
                    <li><strong>Basic Commands:</strong> Focus on essential commands like sit, stay, come, and heel.</li>
                    <li><strong>Positive Reinforcement:</strong> Use rewards like treats, praise, and playtime to encourage good behavior.</li>
                    <li><strong>Socialization:</strong> Expose your German Shepherd to different environments, people, and other animals to build confidence and reduce aggression.</li>
                    <li><strong>Obedience Classes:</strong> Consider professional training classes to establish a strong foundation of obedience.</li>
                    <li><strong>Advanced Training:</strong> German Shepherds excel in advanced training such as agility, tracking, and protection work.</li>
                </ul>
        
                <h2>Grooming</h2>
                <p>German Shepherds have a dense double coat that requires regular grooming to maintain its health and appearance. Proper grooming also helps to reduce shedding and prevent skin issues.</p>
                <ul>
                    <li><strong>Brushing:</strong> Brush their coat 2 to 3 times a week to remove loose hair and prevent mats. During shedding season (spring and fall), daily brushing may be required.</li>
                    <li><strong>Bathing:</strong> Bathe your German Shepherd every 3 to 4 months or as needed. Use a dog-specific shampoo to avoid stripping the coat of its natural oils.</li>
                    <li><strong>Ear Cleaning:</strong> Check and clean their ears weekly to prevent infections, especially since they have upright ears prone to dirt accumulation.</li>
                    <li><strong>Nail Trimming:</strong> Trim their nails every 4 to 6 weeks to prevent overgrowth and discomfort.</li>
                    <li><strong>Teeth Cleaning:</strong> Brush their teeth regularly using dog toothpaste to maintain oral hygiene and prevent dental diseases.</li>
                    <li><strong>Shedding:</strong> German Shepherds shed year-round, with heavier shedding during the spring and fall. Regular grooming helps to manage shedding.</li>
                </ul>
            `
        },
        {
            name: 'Doberman', 
            image: '/breeds/dog/Doberman.webp',
            info: `
                <h2>About Doberman</h2>
                <p>The Doberman Pinscher, often simply called the Doberman, is a sleek, powerful, and intelligent breed known for its loyalty and protective nature. Originally bred in Germany as a guard dog, the Doberman is a highly trainable breed that excels in roles such as police work, military roles, and as a personal protection dog. They are also loving family companions, known for their affectionate nature towards their owners. Dobermans are medium to large-sized dogs with a short, shiny coat, typically black, red, blue, or fawn with rust markings.</p>
                <ul>
                    <li><strong>Size:</strong> 60 to 100 pounds (27 to 45 kg)</li>
                    <li><strong>Height:</strong> 24 to 28 inches (61 to 71 cm) at the shoulder</li>
                    <li><strong>Life Expectancy:</strong> 10 to 12 years</li>
                    <li><strong>Temperament:</strong> Loyal, alert, fearless, and intelligent</li>
                    <li><strong>Energy Level:</strong> High; they require regular exercise and mental stimulation</li>
                </ul>
        
                <h2>Diet</h2>
                <p>A well-balanced diet is essential for the Doberman to maintain its muscular physique and overall health. Their diet should be high in quality proteins and fats to support their active lifestyle.</p>
                <ul>
                    <li><strong>Protein:</strong> High-quality protein from sources like chicken, beef, and fish is crucial for muscle maintenance and energy.</li>
                    <li><strong>Fats:</strong> Healthy fats such as omega-3 and omega-6 fatty acids from fish oil support coat health and cognitive function.</li>
                    <li><strong>Carbohydrates:</strong> Whole grains like brown rice and oats provide energy and aid digestion.</li>
                    <li><strong>Vitamins and Minerals:</strong> Ensure the diet includes essential vitamins and minerals from fruits and vegetables to support overall well-being.</li>
                    <li><strong>Portion Control:</strong> Dobermans typically need 2.5 to 3.5 cups of high-quality dry food per day, divided into two meals. Adjust portions based on age, activity level, and health.</li>
                    <li><strong>Avoid:</strong> Foods with artificial preservatives, excessive grains, and fillers.</li>
                </ul>
        
                <h2>Training</h2>
                <p>Dobermans are highly intelligent and respond well to training, making them one of the most trainable dog breeds. Early training and socialization are vital to harness their protective instincts and ensure they develop into well-rounded adults.</p>
                <ul>
                    <li><strong>Start Early:</strong> Begin training and socialization as early as possible, ideally during the puppy stage.</li>
                    <li><strong>Basic Commands:</strong> Teach basic commands such as sit, stay, come, and heel to establish control and communication.</li>
                    <li><strong>Positive Reinforcement:</strong> Use rewards such as treats, praise, and play to reinforce good behavior and encourage learning.</li>
                    <li><strong>Socialization:</strong> Introduce your Doberman to a variety of people, environments, and other animals to build confidence and reduce the risk of aggression.</li>
                    <li><strong>Obedience Classes:</strong> Enrolling in professional obedience classes can be beneficial for structured training and socialization.</li>
                    <li><strong>Advanced Training:</strong> Dobermans excel in advanced training for activities like obedience trials, agility, and protection work.</li>
                </ul>
        
                <h2>Grooming</h2>
                <p>Dobermans have a short, sleek coat that requires minimal grooming, but regular care is still necessary to keep them looking their best and to maintain good health.</p>
                <ul>
                    <li><strong>Brushing:</strong> Brush their coat once a week to remove loose hair and keep it shiny.</li>
                    <li><strong>Bathing:</strong> Bathe your Doberman every 6 to 8 weeks or as needed, using a dog-specific shampoo to maintain their coat’s natural oils.</li>
                    <li><strong>Ear Cleaning:</strong> Regularly check and clean their ears to prevent infections, especially if they have cropped ears.</li>
                    <li><strong>Nail Trimming:</strong> Trim their nails every 3 to 4 weeks to prevent overgrowth and discomfort.</li>
                    <li><strong>Teeth Cleaning:</strong> Brush their teeth regularly with dog toothpaste to prevent dental issues and maintain oral health.</li>
                    <li><strong>Shedding:</strong> Dobermans shed moderately year-round, so regular brushing helps to manage shedding and maintain their coat.</li>
                </ul>
            `
        },
        
        {
            name: 'Husky', 
            image: '/breeds/dog/Husky.webp',
            info: `
                <h2>About Husky</h2>
                <p>The Siberian Husky is a medium-sized working dog breed known for its endurance, energy, and striking appearance. Originally bred by the Chukchi people of Siberia as sled dogs, Huskies are highly active and independent. They are known for their thick double coat, erect triangular ears, and distinctive markings, often including bright blue or multicolored eyes. Huskies are friendly, outgoing, and good with children, making them popular family pets, though they require plenty of exercise and mental stimulation.</p>
                <ul>
                    <li><strong>Size:</strong> 35 to 60 pounds (16 to 27 kg)</li>
                    <li><strong>Height:</strong> 20 to 23.5 inches (51 to 60 cm) at the shoulder</li>
                    <li><strong>Life Expectancy:</strong> 12 to 15 years</li>
                    <li><strong>Temperament:</strong> Friendly, outgoing, mischievous, and energetic</li>
                    <li><strong>Energy Level:</strong> High; they require regular, intense exercise and mental stimulation</li>
                </ul>
        
                <h2>Diet</h2>
                <p>Huskies are energetic dogs that require a diet that meets their high activity levels. Their diet should be rich in protein, healthy fats, and essential nutrients to keep them strong and healthy.</p>
                <ul>
                    <li><strong>Protein:</strong> High-quality protein from sources like chicken, fish, and lamb is essential for muscle maintenance and energy.</li>
                    <li><strong>Fats:</strong> Healthy fats, such as those from fish oil, support coat health and provide energy.</li>
                    <li><strong>Carbohydrates:</strong> Whole grains like brown rice and sweet potatoes offer sustained energy and fiber.</li>
                    <li><strong>Vitamins and Minerals:</strong> Ensure their diet includes essential vitamins and minerals from vegetables and fruits for overall well-being.</li>
                    <li><strong>Portion Control:</strong> Huskies typically need 2 to 3 cups of high-quality dry food per day, divided into two meals. Adjust portions based on activity level and age.</li>
                    <li><strong>Avoid:</strong> Foods with artificial preservatives, excessive grains, and fillers.</li>
                </ul>
        
                <h2>Training</h2>
                <p>Huskies are intelligent and independent, which can make training a challenge. Consistent training, early socialization, and positive reinforcement are key to managing their strong-willed nature.</p>
                <ul>
                    <li><strong>Start Early:</strong> Begin training and socialization as early as possible, ideally during the puppy stage.</li>
                    <li><strong>Basic Commands:</strong> Teach essential commands such as sit, stay, come, and heel.</li>
                    <li><strong>Positive Reinforcement:</strong> Use rewards like treats, praise, and play to encourage good behavior.</li>
                    <li><strong>Socialization:</strong> Expose your Husky to different environments, people, and other animals to build confidence and reduce stubbornness.</li>
                    <li><strong>Exercise:</strong> Huskies need plenty of physical exercise, so incorporate activities like running, hiking, and interactive play into their routine.</li>
                    <li><strong>Obedience Classes:</strong> Consider enrolling in professional obedience classes for structured training.</li>
                    <li><strong>Advanced Training:</strong> Huskies excel in activities like agility, sledding, and skijoring, which cater to their working dog instincts.</li>
                </ul>
        
                <h2>Grooming</h2>
                <p>Huskies have a thick double coat that requires regular grooming to keep it healthy and reduce shedding. Their grooming needs increase during shedding seasons when they blow their coat.</p>
                <ul>
                    <li><strong>Brushing:</strong> Brush their coat 2 to 3 times a week to remove loose hair and prevent mats. During shedding season (spring and fall), daily brushing may be necessary.</li>
                    <li><strong>Bathing:</strong> Bathe your Husky every 6 to 8 weeks or as needed, using a dog-specific shampoo that maintains the coat’s natural oils.</li>
                    <li><strong>Ear Cleaning:</strong> Check and clean their ears weekly to prevent infections.</li>
                    <li><strong>Nail Trimming:</strong> Trim their nails every 3 to 4 weeks to prevent overgrowth and discomfort.</li>
                    <li><strong>Teeth Cleaning:</strong> Brush their teeth regularly with dog toothpaste to maintain oral hygiene and prevent dental issues.</li>
                    <li><strong>Shedding:</strong> Huskies shed heavily during shedding seasons, so regular grooming is essential to manage the shedding.</li>
                </ul>
            `
        },
        
        {
            name: 'Labrador', 
            image: '/breeds/dog/Labrador.avif',
            info: `
                <h2>About Labrador</h2>
                <p>Labrador Retrievers are one of the most popular dog breeds globally, known for their friendly, outgoing nature and versatility. Originally bred as retrieving gun dogs, Labradors are now cherished as family pets, service dogs, and companions. They are medium to large-sized dogs with a short, dense coat that is water-resistant. Labradors are known for their intelligence, gentle temperament, and love for people, making them ideal family pets.</p>
                <ul>
                    <li><strong>Size:</strong> 55 to 80 pounds (25 to 36 kg)</li>
                    <li><strong>Height:</strong> 21.5 to 24.5 inches (55 to 62 cm) at the shoulder</li>
                    <li><strong>Life Expectancy:</strong> 10 to 12 years</li>
                    <li><strong>Temperament:</strong> Friendly, outgoing, even-tempered, and intelligent</li>
                    <li><strong>Energy Level:</strong> High; they require regular exercise and mental stimulation</li>
                </ul>
        
                <h2>Diet</h2>
                <p>A balanced diet is crucial for maintaining the health and well-being of a Labrador. Their diet should be rich in high-quality protein, fats, and essential nutrients to support their active lifestyle.</p>
                <ul>
                    <li><strong>Protein:</strong> High-quality protein from meat sources is essential for muscle development and maintenance.</li>
                    <li><strong>Fats:</strong> Healthy fats, such as those from fish oil, support coat health and brain function.</li>
                    <li><strong>Carbohydrates:</strong> Whole grains like brown rice and oats provide energy and fiber.</li>
                    <li><strong>Vitamins and Minerals:</strong> Essential vitamins and minerals from vegetables and fruits support overall health.</li>
                    <li><strong>Portion Control:</strong> Labradors typically need 2.5 to 3 cups of high-quality dry food per day, divided into two meals. Adjust portions based on age, activity level, and health.</li>
                    <li><strong>Avoid:</strong> Foods with fillers, artificial preservatives, and excessive amounts of grains.</li>
                </ul>
        
                <h2>Training</h2>
                <p>Labradors are highly trainable due to their intelligence and eagerness to please. Positive reinforcement and consistency are key to successful training.</p>
                <ul>
                    <li><strong>Start Early:</strong> Begin training and socialization as soon as possible, ideally during puppyhood.</li>
                    <li><strong>Basic Commands:</strong> Focus on essential commands like sit, stay, come, and heel.</li>
                    <li><strong>Positive Reinforcement:</strong> Use treats, praise, and playtime as rewards for good behavior.</li>
                    <li><strong>Socialization:</strong> Expose your Labrador to different environments, people, and other animals to build confidence and prevent behavioral issues.</li>
                    <li><strong>Exercise:</strong> Labradors need plenty of physical activity, so incorporate activities like fetch, swimming, and long walks into their routine.</li>
                    <li><strong>Obedience Classes:</strong> Consider enrolling in professional obedience classes for structured training.</li>
                    <li><strong>Advanced Training:</strong> Labradors excel in advanced training such as agility, search and rescue, and therapy work.</li>
                </ul>
        
                <h2>Grooming</h2>
                <p>Labradors have a short, dense coat that requires regular grooming to keep it healthy and minimize shedding. Their grooming needs are relatively low-maintenance compared to other breeds.</p>
                <ul>
                    <li><strong>Brushing:</strong> Brush their coat at least once a week to remove loose hair and keep their coat shiny. During shedding season, more frequent brushing may be needed.</li>
                    <li><strong>Bathing:</strong> Bathe your Labrador every 6 to 8 weeks or as needed, using a dog-specific shampoo to maintain their coat’s natural oils.</li>
                    <li><strong>Ear Cleaning:</strong> Check and clean their ears weekly to prevent infections, as Labradors are prone to ear problems due to their floppy ears.</li>
                    <li><strong>Nail Trimming:</strong> Trim their nails every 3 to 4 weeks to prevent overgrowth and discomfort.</li>
                    <li><strong>Teeth Cleaning:</strong> Brush their teeth regularly with dog toothpaste to maintain oral hygiene and prevent dental diseases.</li>
                    <li><strong>Shedding:</strong> Labradors shed year-round, with more significant shedding during spring and fall. Regular grooming helps manage this shedding.</li>
                </ul>
            `
        },
        
        {
            name: 'Pug', 
            image: '/breeds/dog/Pug.webp',
            info: `
                <h2>About Pug</h2>
                <p>The Pug is a small, sturdy dog breed known for its distinctive wrinkled face and large, expressive eyes. Originating from China, Pugs are famous for their charming personality and affectionate nature. They are compact, muscular dogs with a smooth, short coat that comes in a variety of colors including fawn, black, and silver. Pugs are known for their playful and loving demeanor, making them excellent companions for families, singles, and seniors alike. Despite their small size, they have a strong personality and can be quite mischievous.</p>
                <ul>
                    <li><strong>Size:</strong> 14 to 18 pounds (6 to 8 kg)</li>
                    <li><strong>Height:</strong> 10 to 12 inches (25 to 30 cm) at the shoulder</li>
                    <li><strong>Life Expectancy:</strong> 12 to 15 years</li>
                    <li><strong>Temperament:</strong> Affectionate, playful, friendly, and charming</li>
                    <li><strong>Energy Level:</strong> Moderate; they enjoy playtime but also appreciate lounging</li>
                </ul>
        
                <h2>Diet</h2>
                <p>A balanced diet is crucial for maintaining the health of a Pug. Their diet should support their moderate energy levels and help prevent obesity, a common issue in the breed.</p>
                <ul>
                    <li><strong>Protein:</strong> High-quality protein from sources like chicken, lamb, and fish is important for muscle maintenance and overall health.</li>
                    <li><strong>Fats:</strong> Healthy fats from sources like fish oil support coat health and provide necessary energy.</li>
                    <li><strong>Carbohydrates:</strong> Whole grains such as brown rice and sweet potatoes provide energy and fiber.</li>
                    <li><strong>Vitamins and Minerals:</strong> Include essential vitamins and minerals from fruits and vegetables to support overall health.</li>
                    <li><strong>Portion Control:</strong> Pugs typically need 1 to 1.5 cups of high-quality dry food per day, divided into two meals. Adjust portions based on age, activity level, and health.</li>
                    <li><strong>Avoid:</strong> Foods high in fillers, artificial preservatives, and excessive fats.</li>
                </ul>
        
                <h2>Training</h2>
                <p>Pugs are intelligent and eager to please, which makes them relatively easy to train. However, they can be stubborn, so consistency and positive reinforcement are key.</p>
                <ul>
                    <li><strong>Start Early:</strong> Begin training and socialization as early as possible, ideally during puppyhood.</li>
                    <li><strong>Basic Commands:</strong> Focus on teaching essential commands like sit, stay, come, and heel.</li>
                    <li><strong>Positive Reinforcement:</strong> Use rewards such as treats, praise, and play to encourage good behavior.</li>
                    <li><strong>Socialization:</strong> Expose your Pug to various people, animals, and environments to build confidence and reduce shyness.</li>
                    <li><strong>Exercise:</strong> Pugs require regular exercise to maintain a healthy weight and prevent boredom, but their exercise needs are moderate compared to more active breeds.</li>
                    <li><strong>Obedience Classes:</strong> Consider professional training classes for structured learning and socialization.</li>
                </ul>
        
                <h2>Grooming</h2>
                <p>Pugs have a short, smooth coat that is relatively low-maintenance but requires regular grooming to keep them looking their best and to maintain their skin health.</p>
                <ul>
                    <li><strong>Brushing:</strong> Brush their coat weekly to remove loose hair and keep it smooth and shiny.</li>
                    <li><strong>Bathing:</strong> Bathe your Pug every 4 to 6 weeks or as needed, using a dog-specific shampoo that maintains their skin’s natural oils.</li>
                    <li><strong>Ear Cleaning:</strong> Check and clean their ears regularly to prevent infections, as Pugs can be prone to ear issues.</li>
                    <li><strong>Nail Trimming:</strong> Trim their nails every 3 to 4 weeks to prevent overgrowth and discomfort.</li>
                    <li><strong>Teeth Cleaning:</strong> Brush their teeth regularly with dog toothpaste to maintain oral hygiene and prevent dental problems.</li>
                    <li><strong>Shedding:</strong> Pugs shed year-round, so regular brushing helps manage shedding and keep their coat healthy.</li>
                </ul>
            `
        },
        
        { name: 'Rottweiler', image: '/breeds/dog/Rottweiler.avif', info: 'Poodles are intelligent and active.' }

    ],
    cat: [
        {
            "name": "Siamese",
            "image": "/breeds/cats/Siamese.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Siamese cats are distinguished by their sleek, slender bodies, large ears, and almond-shaped, vivid blue eyes. Their short, fine coats are typically cream or fawn with darker points on the ears, face, paws, and tail.</li>
                <li><strong>Personality:</strong> Siamese cats are highly social, affectionate, and form strong bonds with their owners. They are often described as "dog-like" in their loyalty and enjoy being involved in household activities. They are also known for their talkative nature.</li>
                <li><strong>Behavior:</strong> These cats are active, playful, and intelligent. They thrive in environments where they receive plenty of attention and mental stimulation. Siamese cats can be prone to separation anxiety if left alone for long periods.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Protein-Rich Diet:</strong> Siamese cats require a diet high in quality animal protein to support their muscular bodies and energetic nature.</li>
                <li><strong>Portion Control:</strong> Due to their slender physique, Siamese cats can be prone to weight gain if overfed. It's important to follow recommended portion sizes and avoid excessive treats.</li>
                <li><strong>Wet vs. Dry Food:</strong> A mix of wet and dry food can be beneficial. Wet food helps maintain hydration, while dry food can aid in dental health.</li>
                <li><strong>Avoid Human Food:</strong> Siamese cats should not be fed human food, especially items like chocolate, onions, garlic, and certain artificial sweeteners, which can be toxic to cats.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Minimal Shedding:</strong> Siamese cats have a short, fine coat that does not shed excessively.</li>
                <li><strong>Weekly Brushing:</strong> While their grooming needs are minimal, a weekly brush can help remove loose hairs and keep their coat shiny.</li>
                <li><strong>Ear Cleaning:</strong> Regularly check and clean their ears with a vet-approved solution to prevent buildup of wax or debris.</li>
                <li><strong>Dental Care:</strong> Regular dental care is essential. Brush your cat’s teeth with a cat-specific toothbrush and toothpaste to prevent dental issues.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Litter Box Training:</strong> Siamese cats are typically easy to litter train. Provide a clean, accessible litter box and they will usually take to it naturally.</li>
                <li><strong>Leash Training:</strong> Siamese cats can be trained to walk on a leash. Start with a harness and leash, and use positive reinforcement to get them accustomed to walking outside.</li>
                <li><strong>Interactive Play:</strong> Siamese cats enjoy toys that challenge them mentally, such as puzzle feeders or interactive laser pointers. Regular play sessions are important for keeping them stimulated and preventing boredom.</li>
                <li><strong>Positive Reinforcement:</strong> Use treats, praise, and play to encourage good behavior. Siamese cats respond well to positive reinforcement and can learn tricks or commands like "sit," "stay," and "fetch."</li>
            </ul>
            `
        },
        
        {
            "name": "Bengal",
            "image": "/breeds/cats/Bengal.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Bengal cats are known for their striking, wild appearance, which resembles that of a leopard. They have a sleek, muscular build, with short to medium-length fur that is soft to the touch. Their coat patterns typically include rosettes, spots, or marbling in shades of brown, gold, orange, or snow.</li>
                <li><strong>Personality:</strong> Bengal cats are highly energetic, curious, and playful. They are known for their intelligence and love of climbing, making them adventurous and sometimes mischievous. Bengals are also affectionate and enjoy spending time with their human companions.</li>
                <li><strong>Behavior:</strong> These cats are active and require plenty of mental and physical stimulation. They enjoy interactive toys, climbing trees, and even playing in water. Without enough engagement, they can become bored and exhibit destructive behavior.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>High-Protein Diet:</strong> Bengal cats benefit from a diet rich in animal protein to support their muscular bodies and active lifestyle. Look for high-quality cat food that lists meat as the primary ingredient.</li>
                <li><strong>Raw or Wet Food:</strong> Many Bengal owners prefer feeding raw or wet food to mimic a more natural diet. However, this should be done under the guidance of a veterinarian to ensure balanced nutrition.</li>
                <li><strong>Portion Control:</strong> Like all cats, Bengals require portion-controlled feeding to maintain a healthy weight. Overfeeding can lead to obesity, which can cause various health issues.</li>
                <li><strong>Hydration:</strong> Ensure your Bengal has constant access to fresh water, especially if they are fed primarily dry food.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Low-Maintenance Coat:</strong> The short, dense coat of a Bengal requires minimal grooming. Weekly brushing helps remove loose hairs and keeps their coat shiny.</li>
                <li><strong>Bathing:</strong> Although not necessary, occasional bathing can help keep a Bengal's coat in top condition. Some Bengals enjoy water, making bathing easier compared to other breeds.</li>
                <li><strong>Nail Care:</strong> Regular nail trimming is important, especially for indoor Bengals. Providing scratching posts can help keep their nails in good condition naturally.</li>
                <li><strong>Dental Care:</strong> Like all cats, Bengals benefit from regular dental care, including tooth brushing with cat-specific toothpaste and providing dental treats or toys.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Litter Box Training:</strong> Bengal cats are typically easy to litter train. Providing a clean, easily accessible litter box is key.</li>
                <li><strong>Leash Training:</strong> Due to their adventurous nature, many Bengals can be trained to walk on a leash. Use a harness and positive reinforcement techniques to help them get accustomed to walking outdoors.</li>
                <li><strong>Interactive Play:</strong> Bengals thrive on interactive play that challenges their intelligence and satisfies their hunting instincts. Toys like laser pointers, feather wands, and puzzle feeders are ideal.</li>
                <li><strong>Behavioral Training:</strong> Bengals are highly trainable due to their intelligence. Use positive reinforcement to teach them commands, tricks, and appropriate behavior.</li>
            </ul>
            `
        },
        
        {
            "name": "British Shorthair",
            "image": "/breeds/cats/BritishShorthair.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> British Shorthair cats are known for their round faces, dense and plush coats, and large, round eyes, typically in shades of copper or gold. They have a sturdy, muscular build, with a broad chest and a strong, thick tail. Their coats come in a variety of colors and patterns, with the blue (grey) variant being particularly popular.</li>
                <li><strong>Personality:</strong> British Shorthairs are calm, affectionate, and loyal cats. They tend to be less demanding and more independent compared to other breeds, making them ideal for owners who prefer a more low-maintenance pet. They are known for their quiet demeanor and are generally not very vocal.</li>
                <li><strong>Behavior:</strong> These cats are known for their easygoing and relaxed nature. They enjoy lounging around the house and are not typically very active, although they do enjoy playtime, especially with interactive toys. British Shorthairs are great with children and other pets, making them excellent family cats.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Balanced Diet:</strong> British Shorthairs require a balanced diet that includes a good mix of protein, fats, and carbohydrates. High-quality commercial cat food, whether dry or wet, is suitable for this breed.</li>
                <li><strong>Weight Management:</strong> Due to their less active nature, British Shorthairs can be prone to weight gain. It's important to monitor their food intake and provide portion-controlled meals to prevent obesity.</li>
                <li><strong>Hydration:</strong> Ensure your British Shorthair has access to fresh water at all times. If feeding primarily dry food, consider supplementing with wet food to help maintain hydration.</li>
                <li><strong>Avoid Overfeeding:</strong> Treats should be given sparingly, and human food should be avoided to maintain a healthy weight.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Dense Coat Care:</strong> British Shorthairs have thick, plush coats that benefit from regular brushing to remove loose hairs and prevent matting. Weekly brushing is usually sufficient, but more frequent grooming may be needed during shedding seasons.</li>
                <li><strong>Minimal Bathing:</strong> Bathing is not typically required unless the cat gets particularly dirty. Their dense coat is generally low-maintenance in terms of cleanliness.</li>
                <li><strong>Eye and Ear Care:</strong> Regularly check and clean their eyes and ears to prevent any buildup of discharge or debris.</li>
                <li><strong>Dental Hygiene:</strong> Regular dental care, including brushing their teeth with cat-specific toothpaste, is recommended to prevent dental issues.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Litter Box Training:</strong> British Shorthairs are easy to litter train, often naturally taking to the litter box with minimal guidance. Keeping the litter box clean and accessible is key.</li>
                <li><strong>Leash Training:</strong> While not as common, some British Shorthairs can be trained to walk on a leash, though they may be less enthusiastic about it than other breeds. Patience and positive reinforcement are crucial.</li>
                <li><strong>Interactive Play:</strong> Although they are not the most active breed, British Shorthairs enjoy playtime with interactive toys. Short, regular play sessions can help keep them stimulated and maintain a healthy weight.</li>
                <li><strong>Behavioral Training:</strong> British Shorthairs respond well to positive reinforcement and can be trained to follow basic commands. However, they are generally laid-back and may not be as eager to learn tricks as more active breeds.</li>
            </ul>
            `
        },
        
        {
            "name": "Maine Coon",
            "image": "/breeds/cats/mainecoon.jpg",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Maine Coon cats are one of the largest domesticated cat breeds, known for their robust, muscular build and long, bushy tails. They have a distinctive ruff of fur around their neck, tufted ears, and large, expressive eyes. Their coats are thick and water-resistant, suitable for harsh weather conditions, and come in a variety of colors and patterns.</li>
                <li><strong>Personality:</strong> Maine Coons are often referred to as "gentle giants" due to their friendly, affectionate, and playful nature. They are sociable and enjoy the company of their human family, often following them around the house. Maine Coons are also known for being relatively quiet, communicating with soft chirps and trills rather than loud meows.</li>
                <li><strong>Behavior:</strong> These cats are intelligent and curious, making them excellent problem-solvers. They enjoy interactive toys and puzzles that challenge their minds. Maine Coons are also known for their love of water, a trait not commonly found in other cat breeds.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>High-Protein Diet:</strong> Maine Coons require a diet high in quality animal protein to support their large size and active lifestyle. Look for cat food that lists meat as the primary ingredient.</li>
                <li><strong>Portion Control:</strong> Due to their large size, Maine Coons may require larger portions, but it’s important to manage their diet to prevent obesity. Follow your vet's recommendations for portion sizes.</li>
                <li><strong>Hydration:</strong> Ensure your Maine Coon has constant access to fresh water. If feeding primarily dry food, consider supplementing with wet food to maintain proper hydration.</li>
                <li><strong>Avoid Overfeeding:</strong> Treats should be given in moderation, and human food should be avoided to maintain a healthy weight and prevent digestive issues.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Thick Coat Care:</strong> Maine Coons have a long, thick coat that requires regular grooming. Brush their coat several times a week to prevent matting and remove loose hairs, especially during shedding seasons.</li>
                <li><strong>Bathing:</strong> While Maine Coons enjoy water, regular bathing is not necessary unless they get particularly dirty. When bathing, use a cat-specific shampoo to maintain the coat's natural oils.</li>
                <li><strong>Nail Trimming:</strong> Regular nail trimming is important, especially for indoor Maine Coons. Providing scratching posts can help keep their nails in good condition.</li>
                <li><strong>Dental Care:</strong> Regular dental care, including brushing with cat-specific toothpaste, is essential to prevent dental issues in Maine Coons.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Litter Box Training:</strong> Maine Coons are typically easy to litter train. Providing a clean, easily accessible litter box is key to successful training.</li>
                <li><strong>Leash Training:</strong> Due to their size and temperament, many Maine Coons can be trained to walk on a leash. Use a harness and positive reinforcement techniques to get them accustomed to walking outdoors.</li>
                <li><strong>Interactive Play:</strong> Maine Coons are playful and enjoy interactive play that engages their intelligence and satisfies their hunting instincts. Toys like laser pointers, feather wands, and puzzle feeders are ideal.</li>
                <li><strong>Behavioral Training:</strong> Maine Coons are intelligent and respond well to positive reinforcement. They can learn commands, tricks, and good behavior with consistent training and rewards.</li>
            </ul>
            `
        },
        
        {
            "name": "Sphynx",
            "image": "/breeds/cats/Sphynx.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Sphynx cats are known for their distinctive appearance, primarily characterized by their hairless bodies, large ears, and prominent cheekbones. Despite their lack of fur, they often have a fine layer of down on their skin, which can make them feel warm to the touch. Their skin is wrinkled, particularly around the shoulders, and comes in a variety of colors and patterns.</li>
                <li><strong>Personality:</strong> Sphynx cats are affectionate, outgoing, and highly social. They are known for their curious and playful nature, often seeking out attention and interaction from their human companions. These cats are also very vocal, communicating with a variety of meows, chirps, and purrs.</li>
                <li><strong>Behavior:</strong> Sphynx cats are active and enjoy being the center of attention. They thrive in environments where they are frequently engaged and can become lonely or bored if left alone for too long. Sphynx cats are known to be very loyal and form strong bonds with their owners.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>High-Calorie Diet:</strong> Due to their lack of fur, Sphynx cats have a higher metabolism to maintain their body heat, so they require a diet that is rich in high-quality protein and fats.</li>
                <li><strong>Frequent Meals:</strong> Sphynx cats may benefit from more frequent, smaller meals throughout the day to help maintain their energy levels and body condition.</li>
                <li><strong>Hydration:</strong> Ensure your Sphynx has access to fresh water at all times. If feeding primarily dry food, consider supplementing with wet food to maintain hydration.</li>
                <li><strong>Avoid Overfeeding:</strong> Monitor their food intake closely, as overfeeding can lead to weight gain, which is detrimental to their health, given their unique physiology.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Skin Care:</strong> Sphynx cats require regular bathing to remove the natural oils that accumulate on their skin. A gentle, cat-specific shampoo should be used, and baths should be given every one to two weeks.</li>
                <li><strong>Ear Cleaning:</strong> Sphynx cats are prone to wax buildup in their large ears, so regular cleaning with a vet-approved solution is necessary to prevent infections.</li>
                <li><strong>Eye Care:</strong> Without eyelashes, Sphynx cats can accumulate debris around their eyes, so gently wiping their eyes with a damp cloth can help keep them clean.</li>
                <li><strong>Nail Care:</strong> Regular nail trimming is important, as Sphynx cats do not have fur to absorb oils, leading to greasy residue on their nails.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Litter Box Training:</strong> Sphynx cats are generally easy to litter train, often taking to it naturally. A clean and accessible litter box is essential.</li>
                <li><strong>Leash Training:</strong> Sphynx cats can be trained to walk on a leash. Start with a comfortable harness and use positive reinforcement to help them get accustomed to outdoor walks.</li>
                <li><strong>Interactive Play:</strong> Sphynx cats are playful and energetic, enjoying toys that challenge their intelligence and provide physical activity. Interactive toys, like feather wands and laser pointers, are ideal.</li>
                <li><strong>Behavioral Training:</strong> Sphynx cats are intelligent and respond well to positive reinforcement. They can learn commands, tricks, and appropriate behavior with consistent training and rewards.</li>
            </ul>
            `
        },
        
        {
            "name": "Persian",
            "image": "/breeds/cats/persian.jpg",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Persian cats are known for their luxurious, long coats, round faces, and large, expressive eyes. They have a distinctive flat face, short muzzle, and a sturdy, compact body. Their thick, flowing fur comes in various colors and patterns, including solid, tabby, and bi-color.</li>
                <li><strong>Personality:</strong> Persians are gentle, affectionate, and typically calm cats. They enjoy a quiet, relaxed environment and are known for their sweet and docile nature. Persians are loyal to their owners and often prefer to spend time lounging rather than engaging in vigorous activity.</li>
                <li><strong>Behavior:</strong> Persian cats are known for their laid-back and easygoing behavior. They are not very active or playful but enjoy short bursts of playtime. Persians prefer a serene environment and can be sensitive to loud noises and disruptions.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Balanced Diet:</strong> Persian cats require a balanced diet rich in protein to support their overall health. High-quality commercial cat food that lists meat as the primary ingredient is ideal for this breed.</li>
                <li><strong>Hairball Control:</strong> Due to their long fur, Persians are prone to hairballs. Feeding them a diet that includes hairball control formulas or providing specialized treats can help reduce the occurrence of hairballs.</li>
                <li><strong>Portion Control:</strong> Persians are not very active, so it's important to monitor their food intake to prevent obesity. Follow recommended portion sizes and avoid overfeeding.</li>
                <li><strong>Hydration:</strong> Ensure your Persian has constant access to fresh water. Wet food can be beneficial for maintaining hydration and preventing urinary tract issues.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Daily Brushing:</strong> Persian cats require daily grooming to maintain their long, thick coats. Regular brushing helps prevent matting and tangles, as well as reduces shedding.</li>
                <li><strong>Bathing:</strong> Regular bathing is recommended for Persians to keep their coat clean and reduce the accumulation of oils. Use a gentle, cat-specific shampoo and condition their fur as needed.</li>
                <li><strong>Eye Care:</strong> Due to their flat faces, Persians are prone to tear staining. Gently wipe their eyes daily with a damp cloth to keep the area clean and free from debris.</li>
                <li><strong>Nail Trimming:</strong> Regular nail trimming is essential for Persians, especially if they are primarily indoor cats. Provide scratching posts to help keep their nails healthy.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Litter Box Training:</strong> Persian cats are generally easy to litter train. Provide a clean and easily accessible litter box, and they will usually take to it naturally.</li>
                <li><strong>Leash Training:</strong> While not as common, some Persians can be trained to walk on a leash. Use a harness and positive reinforcement to get them accustomed to outdoor walks.</li>
                <li><strong>Interactive Play:</strong> Persians enjoy gentle, interactive play, but they are not as energetic as other breeds. Toys like feather wands or soft balls can provide them with enough stimulation without overwhelming them.</li>
                <li><strong>Behavioral Training:</strong> Persians respond well to positive reinforcement, though they are less likely to engage in complex training. Focus on reinforcing good behavior and providing a calm, supportive environment.</li>
            </ul>
            `
        },
        

    ],
    bird: [
        {
            "name": "Budgerigar",
            "image": "/breeds/birds/Budgerigar.webp",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Budgerigars, also known as parakeets, are small, colorful birds with vibrant plumage typically featuring shades of green, yellow, blue, and white. They have a slender build, a long tail, and a wavy pattern on their feathers. Their beaks are curved, and they have small, intelligent eyes.</li>
                <li><strong>Personality:</strong> Budgerigars are social, playful, and highly active birds. They are known for their cheerful and curious nature, often mimicking sounds and even human speech if properly trained. These birds thrive on interaction and enjoy the company of both humans and other birds.</li>
                <li><strong>Behavior:</strong> Budgerigars are energetic and require plenty of mental and physical stimulation. They enjoy exploring their surroundings, playing with toys, and engaging in activities that challenge their intelligence. Budgerigars are also known for their vocalizations, including chirps, whistles, and the ability to learn words or phrases.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Seed Mix:</strong> A balanced seed mix is a staple of a Budgerigar's diet, typically including millet, canary seed, and other small seeds. Ensure the mix is fresh and free from dust or mold.</li>
                <li><strong>Fresh Fruits and Vegetables:</strong> Budgerigars benefit from a variety of fresh fruits and vegetables, such as apples, carrots, spinach, and broccoli. These should be offered daily in small, manageable portions.</li>
                <li><strong>Pellets:</strong> Commercial pellets can be included in their diet as a supplement to seeds, providing essential nutrients that seeds alone may lack.</li>
                <li><strong>Calcium and Mineral Supplements:</strong> Providing a cuttlebone or mineral block is important for calcium intake and beak health. These supplements help ensure they receive the necessary minerals for their overall well-being.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Feather Maintenance:</strong> Budgerigars preen their feathers regularly to keep them in good condition. You can support this by offering a shallow dish of water for occasional baths or a misting with a spray bottle to help them clean their feathers.</li>
                <li><strong>Beak and Nail Care:</strong> Provide natural wood perches and toys that help your Budgerigar maintain its beak and nails naturally. In some cases, nails may need to be trimmed by a vet or an experienced bird owner.</li>
                <li><strong>Wing Clipping:</strong> If desired, wing clipping should be done carefully by a professional to prevent escape while still allowing the bird to glide safely.</li>
                <li><strong>Cage Cleaning:</strong> Regularly clean the bird’s cage, including perches, toys, and food and water dishes, to maintain a hygienic environment and prevent the spread of disease.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Hand Taming:</strong> Start by slowly getting your Budgerigar accustomed to your hand. Offer treats and speak softly to build trust. With patience, your bird will likely step onto your finger.</li>
                <li><strong>Speech Training:</strong> Budgerigars are capable of learning words and phrases. Repetition, patience, and rewarding with treats can encourage them to mimic sounds and words.</li>
                <li><strong>Trick Training:</strong> Budgerigars can learn simple tricks, such as stepping up onto a perch, ringing a bell, or retrieving a small object. Use positive reinforcement and consistent practice for best results.</li>
                <li><strong>Social Interaction:</strong> Regular interaction with your Budgerigar is key to its happiness and well-being. Spend time talking, playing, and engaging with your bird daily to keep it stimulated and bonded to you.</li>
            </ul>
            `
        },
        
        {
            "name": "Cockatiel",
            "image": "/breeds/birds/Cockatiel.jpeg",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Cockatiels are medium-sized parrots with a distinctive crest on their heads, a variety of colors including gray, white, and yellow, and a vibrant orange patch on their cheeks. They have a sturdy body, a long tail, and a friendly expression with expressive eyes.</li>
                <li><strong>Personality:</strong> Cockatiels are known for their affectionate and sociable nature. They are playful, curious, and enjoy interacting with their human companions. They are often very vocal, producing a range of sounds including whistles and chirps. Cockatiels are also known for their ability to form strong bonds with their owners.</li>
                <li><strong>Behavior:</strong> Cockatiels are active and enjoy engaging in various activities. They love to explore their environment, play with toys, and solve puzzles. Social interaction is crucial for them, and they thrive on being part of family activities and receiving attention from their owners.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Seed Mix:</strong> A balanced seed mix should form the base of a Cockatiel's diet. It typically includes a variety of seeds such as millet, canary seed, and sunflower seeds. Ensure the mix is fresh and free from contaminants.</li>
                <li><strong>Fresh Fruits and Vegetables:</strong> Cockatiels should be provided with fresh fruits and vegetables daily. Suitable options include apples, carrots, peas, and leafy greens. Avoid feeding them avocado, which is toxic to birds.</li>
                <li><strong>Pellets:</strong> Supplementing with commercial pellets can help ensure your Cockatiel gets a balanced diet with essential nutrients. Pellets should complement the seed mix rather than replace it entirely.</li>
                <li><strong>Calcium and Mineral Supplements:</strong> A cuttlebone or mineral block should be provided to support calcium intake and maintain beak health. These supplements are important for overall well-being.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Feather Maintenance:</strong> Cockatiels will preen their feathers regularly. Provide a shallow dish of water or use a spray bottle to mist them for occasional baths. This helps them maintain their plumage and hygiene.</li>
                <li><strong>Beak and Nail Care:</strong> Natural wood perches and toys will help your Cockatiel maintain its beak and nails. Regular check-ups with a vet may be necessary for nail trimming.</li>
                <li><strong>Wing Clipping:</strong> If needed, wing clipping should be performed by a professional to ensure your Cockatiel cannot fly away but can still glide safely.</li>
                <li><strong>Cage Cleaning:</strong> Clean the cage regularly, including perches, toys, and dishes, to maintain a hygienic environment and reduce the risk of illness.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Hand Taming:</strong> Begin by gently getting your Cockatiel used to your hand. Offer treats and speak softly to build trust. With patience, your bird will become comfortable stepping onto your finger.</li>
                <li><strong>Speech Training:</strong> Cockatiels can learn to mimic sounds and words with consistent repetition and positive reinforcement. Use treats and praise to encourage speech development.</li>
                <li><strong>Trick Training:</strong> Cockatiels can be taught simple tricks such as stepping up, ringing a bell, or retrieving objects. Positive reinforcement and patience are key to successful trick training.</li>
                <li><strong>Social Interaction:</strong> Regular interaction is essential for a Cockatiel’s well-being. Spend time talking, playing, and engaging with your bird to keep it happy and well-adjusted.</li>
            </ul>
            `
        },
        
        {
            "name": "Java Sparrow",
            "image": "/breeds/birds/JavaSparrow.webp",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Small, robust bird with a distinctive black and white head, pinkish-brown body, and a bright red beak.</li>
                <li><strong>Personality:</strong> Java Sparrows are sociable, active, and enjoy being in pairs or groups. They are known for their cheerful chirping and playful behavior.</li>
                <li><strong>Behavior:</strong> They are energetic and require interaction and stimulation. They enjoy foraging, bathing, and exploring their environment.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Seed Mix:</strong> A mix of millet, canary seeds, and other small seeds.</li>
                <li><strong>Fresh Fruits and Vegetables:</strong> Offer a variety of fruits and vegetables like apples, carrots, and greens.</li>
                <li><strong>Pellets:</strong> Supplement their diet with commercial pellets for balanced nutrition.</li>
                <li><strong>Calcium Supplements:</strong> Provide a cuttlebone or mineral block for calcium and mineral intake.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Feather Maintenance:</strong> Java Sparrows preen regularly. Provide water for bathing and occasional misting.</li>
                <li><strong>Beak and Nail Care:</strong> Natural perches help with beak and nail maintenance. Check nails regularly.</li>
                <li><strong>Wing Clipping:</strong> If needed, wing clipping should be done by a professional.</li>
                <li><strong>Cage Cleaning:</strong> Clean the cage and accessories regularly to prevent disease.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Hand Taming:</strong> Slowly get your Java Sparrow used to your hand with treats and gentle handling.</li>
                <li><strong>Speech Training:</strong> Java Sparrows are not known for mimicking speech but can learn some sounds.</li>
                <li><strong>Trick Training:</strong> Training should focus on positive reinforcement and can include simple tasks or tricks.</li>
                <li><strong>Social Interaction:</strong> They thrive on social interaction and should be engaged daily.</li>
            </ul>
            `
        },
        
        {
            "name": "Lovebird",
            "image": "/breeds/birds/Lovebird.jpeg",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Small, vibrant parrot with bright colors such as green, peach, or yellow. They have a round face and a short tail.</li>
                <li><strong>Personality:</strong> Lovebirds are affectionate, playful, and highly social. They form strong bonds with their partners and can be very loving with their owners.</li>
                <li><strong>Behavior:</strong> Active and curious, they enjoy playing, climbing, and exploring. Lovebirds are known for their playful antics and vocalizations.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Seed Mix:</strong> Offer a balanced mix of seeds, including millet, canary seed, and sunflower seeds.</li>
                <li><strong>Fresh Fruits and Vegetables:</strong> Provide daily servings of fruits and vegetables like apples, carrots, and leafy greens.</li>
                <li><strong>Pellets:</strong> Include commercial pellets in their diet for complete nutrition.</li>
                <li><strong>Calcium Supplements:</strong> Use a cuttlebone or mineral block to ensure adequate calcium intake.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Feather Maintenance:</strong> Lovebirds will preen themselves. Offer a shallow dish for bathing or mist them with water.</li>
                <li><strong>Beak and Nail Care:</strong> Provide natural perches for beak and nail maintenance. Regularly check and trim nails if needed.</li>
                <li><strong>Wing Clipping:</strong> If necessary, wing clipping should be done by a professional to ensure safety.</li>
                <li><strong>Cage Cleaning:</strong> Maintain a clean cage environment by regularly cleaning perches, toys, and dishes.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Hand Taming:</strong> Gently introduce your Lovebird to your hand using treats and patience.</li>
                <li><strong>Speech Training:</strong> Lovebirds can learn to mimic some sounds with consistent repetition and rewards.</li>
                <li><strong>Trick Training:</strong> Train them in simple tricks using positive reinforcement and practice.</li>
                <li><strong>Social Interaction:</strong> Engage with your Lovebird daily to keep it happy and well-adjusted.</li>
            </ul>
            `
        },
        
        {
            "name": "Parrot",
            "image": "/breeds/birds/Parrot.webp",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Parrots are medium to large-sized birds with vibrant, varied plumage that can include colors like green, blue, red, and yellow. They have strong, curved beaks and long tails.</li>
                <li><strong>Personality:</strong> Parrots are intelligent, social, and curious. They are known for their ability to mimic human speech and other sounds. They thrive on interaction and mental stimulation.</li>
                <li><strong>Behavior:</strong> Parrots are highly active and require ample space to move around. They enjoy playing with toys, solving puzzles, and engaging in interactive activities.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Seed Mix:</strong> A varied mix including seeds such as sunflower, safflower, and millet. Ensure it is fresh and free from mold.</li>
                <li><strong>Fresh Fruits and Vegetables:</strong> Offer a variety of fruits and vegetables like apples, carrots, and leafy greens. Avoid avocado and caffeine.</li>
                <li><strong>Pellets:</strong> Provide high-quality pellets to ensure a balanced diet with essential nutrients.</li>
                <li><strong>Calcium Supplements:</strong> Offer a cuttlebone or mineral block to support beak health and calcium intake.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Feather Maintenance:</strong> Parrots preen their feathers. Offer a shallow dish for baths or mist them occasionally.</li>
                <li><strong>Beak and Nail Care:</strong> Provide natural perches and toys. Regularly check and trim nails if needed.</li>
                <li><strong>Wing Clipping:</strong> Wing clipping should be done by a professional if needed to prevent escape while allowing safe flight.</li>
                <li><strong>Cage Cleaning:</strong> Regularly clean the cage, perches, toys, and dishes to maintain hygiene.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Hand Taming:</strong> Use treats and patience to help your parrot become comfortable with your hand.</li>
                <li><strong>Speech Training:</strong> Parrots can learn words and phrases with repetition and positive reinforcement.</li>
                <li><strong>Trick Training:</strong> Teach simple tricks using rewards and consistent practice.</li>
                <li><strong>Social Interaction:</strong> Engage in daily activities and interactions to keep your parrot stimulated and happy.</li>
            </ul>
            `
        },
        
        {
            "name": "Parrotlet",
            "image": "/breeds/birds/Parrotlet.jpg",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Parrotlets are small parrots with vibrant colors like green, blue, and yellow. They have a stocky build, a short tail, and a strong beak.</li>
                <li><strong>Personality:</strong> Parrotlets are known for their bold and playful personalities. Despite their small size, they have a big personality and can be very interactive and affectionate.</li>
                <li><strong>Behavior:</strong> They are energetic and enjoy climbing, playing, and exploring. They can be quite independent but also enjoy social interaction.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Seed Mix:</strong> A mix of seeds such as millet and canary seed. Ensure it is fresh and free from contaminants.</li>
                <li><strong>Fresh Fruits and Vegetables:</strong> Provide small amounts of fruits and vegetables like apples, carrots, and leafy greens daily.</li>
                <li><strong>Pellets:</strong> Use high-quality pellets to provide balanced nutrition and essential nutrients.</li>
                <li><strong>Calcium Supplements:</strong> A cuttlebone or mineral block will help with calcium intake and beak health.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Feather Maintenance:</strong> Parrotlets preen their feathers regularly. Offer a shallow dish for bathing or mist them with water.</li>
                <li><strong>Beak and Nail Care:</strong> Provide natural perches to help maintain beak and nail health. Regularly check and trim nails if necessary.</li>
                <li><strong>Wing Clipping:</strong> Wing clipping, if needed, should be done by a professional.</li>
                <li><strong>Cage Cleaning:</strong> Maintain a clean cage environment by regularly cleaning perches, toys, and dishes.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Hand Taming:</strong> Use treats and gentle handling to help your Parrotlet get used to your hand.</li>
                <li><strong>Speech Training:</strong> Parrotlets can learn to mimic sounds and words with consistent practice and positive reinforcement.</li>
                <li><strong>Trick Training:</strong> Teach simple tricks using rewards and patience.</li>
                <li><strong>Social Interaction:</strong> Engage with your Parrotlet daily to keep it happy and mentally stimulated.</li>
            </ul>
            `
        },       
    ],
    fish: [
        {
            "name": "Betta",
            "image": "/breeds/fishes/Betta.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Bettas are small, colorful fish with long, flowing fins and tails. They come in various colors, including red, blue, and purple, and have a distinctive, graceful swimming style.</li>
                <li><strong>Personality:</strong> Betta fish are known for their vibrant personalities and territorial nature. Males are particularly aggressive towards each other and should be housed separately.</li>
                <li><strong>Behavior:</strong> Bettas are active and enjoy exploring their environment. They are surface feeders and require a tank with a lid as they can jump out of the water.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Pellets:</strong> High-quality Betta pellets should form the main part of their diet.</li>
                <li><strong>Live or Frozen Food:</strong> Supplement with live or frozen foods like brine shrimp or bloodworms to provide variety.</li>
                <li><strong>Avoid Overfeeding:</strong> Feed small amounts once or twice a day and remove any uneaten food to prevent water pollution.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Water Quality:</strong> Regularly change the water in the tank and use a water conditioner to remove toxins.</li>
                <li><strong>Tank Cleaning:</strong> Clean the tank and equipment regularly to maintain a healthy environment.</li>
                <li><strong>Monitor Health:</strong> Watch for signs of illness such as changes in behavior or appearance and address any issues promptly.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Interaction:</strong> Bettas can be trained to recognize their owner and respond to feeding times.</li>
                <li><strong>Tricks:</strong> Basic training can include teaching them to follow your finger or swim through hoops.</li>
            </ul>
            `
        },
        
        {
            "name": "Goldfish",
            "image": "/breeds/fishes/Goldfish.webp",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Goldfish are typically orange but can also be gold, white, or a mix of colors. They have a variety of fin shapes and body types, from round and bulbous to sleek and elongated.</li>
                <li><strong>Personality:</strong> Goldfish are generally calm and social. They enjoy interacting with their environment and can be quite active, especially in a larger tank or pond.</li>
                <li><strong>Behavior:</strong> Goldfish are bottom feeders and enjoy foraging for food. They prefer a well-maintained tank with space to swim.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Pellets:</strong> Use high-quality goldfish pellets that are specifically formulated for their dietary needs.</li>
                <li><strong>Vegetables:</strong> Supplement with vegetables like blanched peas or lettuce to provide fiber.</li>
                <li><strong>Avoid Overfeeding:</strong> Feed small amounts once or twice a day and remove any uneaten food to prevent water quality issues.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Water Quality:</strong> Maintain good water quality with regular changes and use a water conditioner to remove toxins.</li>
                <li><strong>Tank Cleaning:</strong> Regularly clean the tank, filter, and decorations to ensure a healthy environment.</li>
                <li><strong>Monitor Health:</strong> Check for signs of illness or stress and address any issues promptly.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Interaction:</strong> Goldfish can be trained to recognize feeding times and perform simple tricks like swimming through hoops.</li>
                <li><strong>Tricks:</strong> Basic tricks include responding to visual cues and following a target within the tank.</li>
            </ul>
            `
        },
        
        {
            "name": "Guppy",
            "image": "/breeds/fishes/Guppy.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Guppies are known for their vibrant colors and varied patterns. Males are especially colorful with large, flowing tails, while females are generally less colorful and smaller.</li>
                <li><strong>Personality:</strong> Guppies are active and social fish. They thrive in groups and enjoy exploring their environment.</li>
                <li><strong>Behavior:</strong> Guppies are top swimmers and often swim near the surface. They are also known for their breeding habits and can reproduce rapidly.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Flakes:</strong> Use high-quality guppy flakes that provide balanced nutrition.</li>
                <li><strong>Live/Frozen Foods:</strong> Supplement with live or frozen foods like brine shrimp or daphnia for variety.</li>
                <li><strong>Avoid Overfeeding:</strong> Feed small amounts once or twice a day and remove any uneaten food to maintain water quality.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Water Quality:</strong> Maintain good water quality with regular changes and use a water conditioner to remove toxins.</li>
                <li><strong>Tank Cleaning:</strong> Regularly clean the tank, filter, and decorations to ensure a healthy environment.</li>
                <li><strong>Monitor Health:</strong> Check for signs of illness or stress and address any issues promptly.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Interaction:</strong> Guppies can be trained to recognize feeding times and respond to visual cues.</li>
                <li><strong>Tricks:</strong> Basic tricks include following a target within the tank.</li>
            </ul>
            `
        },
        
        {
            "name": "Molly",
            "image": "/breeds/fishes/Molly.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Mollies come in a variety of colors, including black, white, orange, and spotted. They have a sleek body and a fan-shaped tail.</li>
                <li><strong>Personality:</strong> Mollies are peaceful and social fish. They do well in community tanks with other non-aggressive species.</li>
                <li><strong>Behavior:</strong> Mollies are mid-level swimmers and enjoy exploring their surroundings. They are also livebearers, meaning they give birth to live young.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Flakes/Pellets:</strong> Use high-quality molly flakes or pellets for balanced nutrition.</li>
                <li><strong>Vegetables:</strong> Supplement with vegetables like blanched spinach or zucchini for fiber.</li>
                <li><strong>Avoid Overfeeding:</strong> Feed small amounts once or twice a day and remove any uneaten food to maintain water quality.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Water Quality:</strong> Maintain good water quality with regular changes and use a water conditioner to remove toxins.</li>
                <li><strong>Tank Cleaning:</strong> Regularly clean the tank, filter, and decorations to ensure a healthy environment.</li>
                <li><strong>Monitor Health:</strong> Check for signs of illness or stress and address any issues promptly.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Interaction:</strong> Mollies can be trained to recognize feeding times and respond to visual cues.</li>
                <li><strong>Tricks:</strong> Basic tricks include following a target within the tank.</li>
            </ul>
            `
        },
        
        {
            "name": "Platies",
            "image": "/breeds/fishes/Platies.webp",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Platies are small, colorful fish that come in a variety of hues including red, yellow, orange, and blue. They have a compact, rounded body with a fan-shaped tail.</li>
                <li><strong>Personality:</strong> Platies are peaceful and social fish, making them great for community tanks. They are active swimmers and enjoy exploring their environment.</li>
                <li><strong>Behavior:</strong> Platies are livebearers and can reproduce quickly. They are mid-level swimmers and prefer well-planted tanks with plenty of hiding spots.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Flakes/Pellets:</strong> Use high-quality platy flakes or pellets for balanced nutrition.</li>
                <li><strong>Vegetables:</strong> Supplement with vegetables like blanched spinach or zucchini for fiber.</li>
                <li><strong>Avoid Overfeeding:</strong> Feed small amounts once or twice a day and remove any uneaten food to maintain water quality.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Water Quality:</strong> Maintain good water quality with regular changes and use a water conditioner to remove toxins.</li>
                <li><strong>Tank Cleaning:</strong> Regularly clean the tank, filter, and decorations to ensure a healthy environment.</li>
                <li><strong>Monitor Health:</strong> Check for signs of illness or stress and address any issues promptly.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Interaction:</strong> Platies can be trained to recognize feeding times and respond to visual cues.</li>
                <li><strong>Tricks:</strong> Basic tricks include following a target within the tank.</li>
            </ul>
            `
        },
        
        {
            "name": "Swordtail",
            "image": "/breeds/fishes/Swordtail.webp",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Swordtails are named for the distinctive sword-like extension on the lower part of their tail fin. They come in various colors, including red, green, and orange.</li>
                <li><strong>Personality:</strong> Swordtails are active and social fish that do well in community tanks. Males can be territorial, so it's best to have more females than males.</li>
                <li><strong>Behavior:</strong> Swordtails are livebearers and can breed rapidly. They are mid to top-level swimmers and prefer tanks with plenty of swimming space and hiding spots.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Flakes/Pellets:</strong> Use high-quality swordtail flakes or pellets for balanced nutrition.</li>
                <li><strong>Vegetables:</strong> Supplement with vegetables like blanched spinach or zucchini for fiber.</li>
                <li><strong>Avoid Overfeeding:</strong> Feed small amounts once or twice a day and remove any uneaten food to maintain water quality.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Water Quality:</strong> Maintain good water quality with regular changes and use a water conditioner to remove toxins.</li>
                <li><strong>Tank Cleaning:</strong> Regularly clean the tank, filter, and decorations to ensure a healthy environment.</li>
                <li><strong>Monitor Health:</strong> Check for signs of illness or stress and address any issues promptly.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Interaction:</strong> Swordtails can be trained to recognize feeding times and respond to visual cues.</li>
                <li><strong>Tricks:</strong> Basic tricks include following a target within the tank.</li>
            </ul>
            `
        }
        

    ],
    other: [
        {
            "name": "Hamster",
            "image": "/breeds/others/Hamster.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Hamsters are small rodents with a variety of fur colors and patterns. They have short tails, large cheek pouches, and round, furry bodies.</li>
                <li><strong>Personality:</strong> Hamsters are solitary and nocturnal animals, meaning they are most active at night. They can be very playful and enjoy running on wheels and exploring tubes.</li>
                <li><strong>Behavior:</strong> Hamsters are known for their burrowing behavior and love to dig and create nests.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Pellets/Seeds:</strong> A balanced diet of hamster pellets and seeds.</li>
                <li><strong>Fruits/Vegetables:</strong> Supplement with small amounts of fruits and vegetables like carrots, apples, and leafy greens.</li>
                <li><strong>Avoid Overfeeding:</strong> Remove any uneaten food to prevent spoilage.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Clean Cage:</strong> Regularly clean the cage and change the bedding to maintain hygiene.</li>
                <li><strong>Monitor Health:</strong> Check for signs of illness or stress and address any issues promptly.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Interaction:</strong> Hamsters can be trained to use a litter box and come when called.</li>
                <li><strong>Tricks:</strong> They can learn to navigate mazes and follow simple commands with patience and positive reinforcement.</li>
            </ul>
            `
        },
        
        {
            "name": "Rabbit",
            "image": "/breeds/others/Rabbit.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Rabbits come in various breeds, each with different sizes, fur colors, and ear types. They have long ears, fluffy tails, and strong hind legs.</li>
                <li><strong>Personality:</strong> Rabbits are social and can be very affectionate. They enjoy companionship, both from humans and other rabbits.</li>
                <li><strong>Behavior:</strong> Rabbits are known for their playful and curious nature. They need plenty of space to hop around and explore.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Hay:</strong> The main part of a rabbit's diet should be high-quality hay.</li>
                <li><strong>Pellets:</strong> Supplement with rabbit pellets for balanced nutrition.</li>
                <li><strong>Fresh Vegetables:</strong> Provide a variety of leafy greens and other vegetables.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Brushing:</strong> Regular brushing is necessary, especially for long-haired breeds.</li>
                <li><strong>Clean Litter Box:</strong> Maintain a clean litter box to ensure hygiene.</li>
                <li><strong>Monitor Health:</strong> Check for signs of illness or stress and address any issues promptly.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Litter Training:</strong> Rabbits can be litter trained with patience and consistency.</li>
                <li><strong>Tricks:</strong> They can learn to respond to their name, follow commands, and even perform tricks like jumping through hoops.</li>
            </ul>
            `
        },
        
        {
            "name": "Guinea Pig",
            "image": "/breeds/others/GuineaPig.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Guinea pigs have stout bodies, short legs, and no tails. They come in various breeds, each with different fur types and colors.</li>
                <li><strong>Personality:</strong> Guinea pigs are social and gentle animals that enjoy the company of other guinea pigs and humans.</li>
                <li><strong>Behavior:</strong> They are known for their vocalizations and enjoy exploring their surroundings. They require a spacious cage with plenty of hiding spots and things to chew on.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Hay:</strong> The main part of a guinea pig's diet should be high-quality hay.</li>
                <li><strong>Pellets:</strong> Supplement with guinea pig pellets for balanced nutrition.</li>
                <li><strong>Fresh Vegetables:</strong> Provide a variety of vegetables, especially leafy greens.</li>
                <li><strong>Vitamin C:</strong> Guinea pigs need a source of vitamin C, such as bell peppers or a vitamin C supplement.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Brushing:</strong> Regular brushing is necessary, especially for long-haired breeds.</li>
                <li><strong>Clean Cage:</strong> Maintain a clean cage to ensure hygiene.</li>
                <li><strong>Monitor Health:</strong> Check for signs of illness or stress and address any issues promptly.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Interaction:</strong> Guinea pigs can be trained to respond to their name and perform simple tricks like navigating mazes.</li>
                <li><strong>Tricks:</strong> With patience and positive reinforcement, they can learn to follow commands and use a litter box.</li>
            </ul>
            `
        },
        
        {
            "name": "Ferret",
            "image": "/breeds/others/Ferret.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Ferrets have long, slender bodies, short legs, and a bushy tail. They come in various colors, including sable, albino, and black.</li>
                <li><strong>Personality:</strong> Ferrets are playful, curious, and mischievous. They enjoy interacting with their owners and exploring their surroundings.</li>
                <li><strong>Behavior:</strong> Ferrets are known for their high energy levels and need plenty of time outside their cage to play and explore. They are also adept at squeezing through small spaces.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>High-Protein Diet:</strong> Ferrets require a high-protein diet, typically provided through commercial ferret food or high-quality cat food.</li>
                <li><strong>Raw Meat:</strong> Supplement with raw meat or specially formulated ferret treats.</li>
                <li><strong>Avoid Sugary Foods:</strong> Avoid feeding ferrets fruits, vegetables, and sugary foods.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Brushing:</strong> Regular brushing helps keep their coat clean and reduces shedding.</li>
                <li><strong>Bathing:</strong> Occasional baths may be necessary, but not too frequently to avoid skin dryness.</li>
                <li><strong>Clean Cage:</strong> Maintain a clean cage and litter box to ensure hygiene.</li>
                <li><strong>Monitor Health:</strong> Check for signs of illness or stress and address any issues promptly.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Litter Training:</strong> Ferrets can be litter trained with patience and consistency.</li>
                <li><strong>Tricks:</strong> They can learn to respond to their name, follow commands, and perform tricks like fetching toys.</li>
            </ul>
            `
        },
        {
            "name": "Turtle",
            "image": "/breeds/others/Turtle.avif",
            "info": `
            <h3>About</h3>
            <ul>
                <li><strong>Appearance:</strong> Turtles have a hard, protective shell and come in various sizes and colors. They have webbed feet or flippers, depending on the species.</li>
                <li><strong>Personality:</strong> Turtles are generally calm and slow-moving. They are not very social but can recognize their owners.</li>
                <li><strong>Behavior:</strong> Turtles are mostly aquatic but need a dry area to bask. They require a tank with both water and land areas.</li>
            </ul>
        
            <h3>Diet</h3>
            <ul>
                <li><strong>Pellets:</strong> Use high-quality turtle pellets for balanced nutrition.</li>
                <li><strong>Fresh Foods:</strong> Supplement with fresh vegetables, fruits, and occasional protein like insects or fish.</li>
                <li><strong>Calcium:</strong> Provide a calcium supplement to ensure strong shell and bone development.</li>
            </ul>
        
            <h3>Grooming</h3>
            <ul>
                <li><strong>Clean Water:</strong> Maintain clean water by using a good filtration system and performing regular water changes.</li>
                <li><strong>Shell Care:</strong> Inspect the shell regularly for any signs of damage or infection. Gently clean the shell if needed.</li>
                <li><strong>Tank Maintenance:</strong> Regularly clean the tank, including the basking area and decorations, to ensure a healthy environment.</li>
                <li><strong>Monitor Health:</strong> Check for signs of illness or stress, such as changes in appetite, lethargy, or unusual behavior, and consult a vet if needed.</li>
            </ul>
        
            <h3>Training</h3>
            <ul>
                <li><strong>Interaction:</strong> Turtles can learn to recognize their owners and respond to feeding times. They may also follow your hand movements in the tank.</li>
                <li><strong>Enrichment:</strong> Provide enrichment activities such as floating toys, live food to hunt, and varied tank decor to stimulate their natural behaviors.</li>
            </ul>
            `
        }

    ]
    // Add other categories like bird, fish, other
};

// Styled component for oval images
const OvalImage = styled(CardMedia)({
    borderRadius: '50%',
    height: 140, // Adjust size as needed
    width: 140,  // Adjust size as needed
    objectFit: 'cover',
});

const BreedsInfo = ({ breedsData }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBreed, setSelectedBreed] = useState('');

    const combinedBreedsData = { ...localBreedsData, ...breedsData };
    const categoryBreeds = combinedBreedsData[selectedCategory];
    const breed = categoryBreeds?.find(b => b.name === selectedBreed);

    return (
        <Box sx={{ padding: 10 }}>
            <ButtonGroup variant="contained" aria-label="category buttons" sx={{ marginBottom: 2 }}>
                {Object.keys(combinedBreedsData).map(category => (
                    <Button 
                        key={category} 
                        onClick={() => {
                            setSelectedCategory(category);
                            setSelectedBreed('');
                        }}
                    >
                        {category}
                    </Button>
                ))}
            </ButtonGroup>
            
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2}>
                    <Box sx={{ marginBottom: 2 }}>
                        {categoryBreeds?.map(b => (
                            <Button
                                key={b.name}
                                variant="outlined"
                                onClick={() => setSelectedBreed(b.name)}
                                fullWidth
                                sx={{ marginBottom: 1 }}
                            >
                                {b.name}
                            </Button>
                        ))}
                    </Box>
                </Grid>

                <Grid item xs={12} sm={8}>
                    {breed ? (
                        <Card>
                            <OvalImage component="img" image={breed.image} alt={breed.name} />
                            <CardContent>
                                <Typography variant="h5">{breed.name}</Typography>
                                <Box dangerouslySetInnerHTML={{ __html: breed.info }} />
                            </CardContent>
                        </Card>
                    ) : (
                        <Typography>Select a breed to see details.</Typography>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default BreedsInfo;
