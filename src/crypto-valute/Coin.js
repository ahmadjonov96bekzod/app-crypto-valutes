import React, {useEffect, useState, Component} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import PacmanLoader from 'react-spinners/PacmanLoader'
import '../cryptoValuteStyle.scss'

const Coin = () =>{

    const [coins, setCoins] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res=> {


                toast.success("Muaommo yo'q");
                setCoins(res.data);
                console.log(res.data);
                setLoader(false)
            })
            .catch(error => toast.error("Internetni tekshiring"))

    }, []);

    return(
        <div className="container">
            <div className="row ">
                <div className="col-12 ">

                    <h1 className="text-center text-white mb-5">Barcha Cripto valyutalrni Online narxi va o'sish darajasi</h1>

                    {loader ? <div className="page-loader"><PacmanLoader loading={setLoader}/></div>:"" }

                    <table className="table w-100 t-dark table-striped table-hover mb-5">
                        <thead>
                        <tr>
                            <th>№</th>
                            <th className="text-center">Logo</th>
                            <th className="text-center">Nomi</th>
                            <th className="text-center">Joriy narxi</th>
                            <th className="text-center">Birjadagi narxini o'zgarishi</th>
                            <th className="text-center">Birjadagi kapitali darajasi</th>
                        </tr>
                        </thead>


                        {coins.map((coin, index)=>{
                            return(

                                <tbody>
                                <tr>
                                    <td className="text-center">{index+1}</td>
                                    <td className="text-center"><img src={coin.image} alt=""/></td>
                                    <td className="text-center">{coin.name}</td>
                                    <td className="text-center">{coin.current_price} USD</td>

                                    {coin.market_cap_change_percentage_24h < 0 ? (
                                        <td className="text-danger text-center">{coin.market_cap_change_percentage_24h.toFixed(2)}%</td> )

                                    : ( <td className="text-success text-center">{coin.market_cap_change_percentage_24h.toFixed(2)}%</td>

                                        )}

                                    <td className="text-center">{coin.market_cap_rank}</td>

                                </tr>
                                </tbody>

                            )
                        })}






                    </table>
                </div>
            </div>
        </div>
    )
}

export default Coin;