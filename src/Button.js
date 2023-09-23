import { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState("red");

    return(
        <>
            <h1>My favorite color is {color}! </h1>
            <button
                type="button"
                onClick={() => setColor("pink")}
                >Blue</button>
        </>
    )
}


export default FavoriteColor;