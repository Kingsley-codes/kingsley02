import { useState } from "react";

function NewCar() {
    const [car, setCar] = useState({
        brand: "Mercedes",
        model: "GLE 450",
        year: "2023",
        color: "Black"
    });

const updateColor = () => {
    setCar(previousState => {
        return {...previousState, color: "Red"}
    });
}

return (
    <>
        <h1>My {car.brand}</h1>
        <p>
            It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
        type="button"
        onClick={updateColor}
        >Red</button>
    </>
)
}

export default NewCar