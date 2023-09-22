
function Car(props) {
    return <li>Hi, I am a {props.brand} Car!</li>;
}

function Garage() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'Toyota'},
        {id: 3, brand: 'BMW'},
        {id: 4, brand: 'Audi'},
    ];
    return (
        <>
        <h1>Who lives in my garage?</h1>
        
        <ul>
        {cars.map((car) => <Car key = {car.id} brand = {car.brand} />)}
        </ul>
        </>
    );
} 

export default Garage;
