import { useState, useEffect } from 'react';

export default 
function CoinTracker() {
    const [ loading, setLoading ] = useState(true);
    const [ coins, setCoins ] = useState([]);

    function getData() {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then(res => res.json())
        .then(json => {            
            setCoins(json);
            setLoading(false);
        });
    }
    useEffect(getData, []);    

    return (
        <div>
            <h1>CoinTracker { loading ? '' : `(${coins.length})` }</h1>
            { 
                loading 
                ? <strong>Loading...</strong>  
                :             
                <ul>
                    {   
                        coins.map(item => 
                            <li key={item.id}>
                                {item.name} ({item.symbol}): ${item.quotes.USD.price} USD
                            </li>
                        )
                    }
                </ul>
            }
        </div>
    );
}