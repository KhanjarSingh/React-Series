import React from "react";
import { useParams } from "react-router-dom";

export default function Users() {
    const { userId } = useParams();
    return(
        <>
            <h1 className="bg-gray-700 text-white text-3xl p-5">User : {userId}</h1>
        </>

    )
}
