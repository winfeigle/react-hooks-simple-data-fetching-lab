// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [imgSrc, setImgSrc] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                setImgSrc(data.message);
                setIsLoading(false);
            });
    },[]);

    if (isLoading) return <p>Loading...</p>;

    return(
        <div>
            <img src={imgSrc} alt="Dog"/>
        </div>
    );
}

export default App