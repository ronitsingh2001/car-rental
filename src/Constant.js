import car1 from "./images/cars-big/audia1.jpg";
import car2 from "./images/cars-big/golf6.jpg";
import car3 from "./images/cars-big/toyotacamry.jpg";
import car4 from "./images/cars-big/bmw320.jpg";
import car5 from "./images/cars-big/benz.jpg";
import car6 from "./images/cars-big/passatcc.jpg";

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

// export default book;