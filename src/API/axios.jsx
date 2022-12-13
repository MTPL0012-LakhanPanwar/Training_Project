import { useState, useEffect } from "react";
import axios from "axios";

function API()  {

    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    const getMyPostData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setMyData(res.data);
            console.log(res.data);
        } 
        catch (error) {
            setIsError(error.message);
            console.log("Error");
        }
    };

    useEffect(() => {
        getMyPostData();
    }, []);

    return (
        <>
            <h1>Call API with  Axios </h1>
            {isError !== "" && <h2>{isError}</h2>}

            <div className="grid">

                {myData.slice(0, 15).map((post) => {

                    const { body, id, title } = post;
                    return (

                        <div key={id} className="card">

                            <h2>{title.slice(0, 15).toUpperCase()}</h2>

                            <p>{body.slice(0, 100)}</p>

                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default API;