import { useState, useEffect } from 'react';

function UseCurrencyInfo(currency) {
    const [data, setData] = useState({});

        useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((dat) => {
                setData(dat[currency]);
                console.log(dat[currency])
            })
        },[currency])
        return (data)
}

export default UseCurrencyInfo;