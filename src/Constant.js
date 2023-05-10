import car1 from "./images/cars-big/audia1.jpg";
import car2 from "./images/cars-big/golf6.jpg";
import car3 from "./images/cars-big/toyotacamry.jpg";
import car4 from "./images/cars-big/bmw320.jpg";
import car5 from "./images/cars-big/benz.jpg";
import car6 from "./images/cars-big/passatcc.jpg";

import test1 from "./images/testimonials/pfp1.jpg"
import test2 from "./images/testimonials/pfp2.jpg"

export const fleet = [
    {
        id: 1,
        name: "Audi A1 S-Line",
        rent: 45,
        img: car1,
        details: {
            model: "Audi",
            mark: "A1",
            year: 2018,
            door: "4/5",
            ac: "Yes",
            transmission: "Manual",
            fuel: "Petrol",
        },
    },
    {
        id: 2,
        name: "VW Golf 6",
        rent: 37,
        img: car2,
        details: {
            model: "Golf 6",
            mark: "Volkswagen",
            year: 2010,
            door: "4/5",
            ac: "Yes",
            transmission: "Manual",
            fuel: "Petrol",
        },
    },
    {
        id: 3,
        name: "BMW 320 ModernLine",
        rent: 35,
        img: car4,
        details: {
            model: "320",
            mark: "BMW",
            year: 2015,
            door: "4/5",
            ac: "Yes",
            transmission: "Manual",
            fuel: "Diesel",
        },
    },
    {
        id: 4,
        name: "Toyota Camry",
        rent: 30,
        img: car3,
        details: {
            model: "Camry",
            mark: "Toyota",
            year: 2022,
            door: "4/5",
            ac: "Yes",
            transmission: "Manual",
            fuel: "Hybrid",
        },
    },
    {
        id: 5,
        name: "VW Passat CC",
        rent: 25,
        img: car6,
        details: {
            model: "Passat CC",
            mark: "Volkswagen",
            year: 2008,
            door: "4/5",
            ac: "Yes",
            transmission: "Automatic",
            fuel: "Petrol",
        },
    },
    {
        id: 6,
        name: "Mercedes-Benz GLK",
        rent: 50,
        img: car5,
        details: {
            model: "Benz GLK",
            mark: "Mercedes",
            year: 2009,
            door: "4/5",
            ac: "Yes",
            transmission: "Manual",
            fuel: "Diesel",
        },
    },
];

export const book = {
    cars: fleet.map(i => i.name),
    pickUp: [
        "Belgrade",
        "Novi Sad",
        "Nis",
        "Kragujevac",
        "Subotica"
    ],
    dropOff: [
        "Novi Sad",
        "Belgrade",
        "Nis",
        "Kragujevac",
        "Subotica"
    ]
}

export const faq = [
    {
        id: 1,
        question: "1. What is special about comparing rental car deals?",
        answere: "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money.By comparing various options, you can find deals that offer lower prices, additional services, or better car models.You can find car rental deals by researching online and comparing prices from different rental companies."
    },
    {
        id: 2,
        question: "2. How do I find the car rental deals?", answere: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions."
    }, {
        id: 3,
        question: "3. How do I find such low rental car prices?",
        answere: "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices."
    }
]

export const testimonials = [
    {
        name: "Rohan Mathur",
        city: "Delhi",
        review: "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. ",
        img:test1
    },
    {
        name: "Vaibhav Nigam",
        city: "Delhi",
        review: "The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
        img:test2
    }
]