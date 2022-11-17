import React from 'react';
import axios from "axios";
import {useState , useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../redux/Slices/Forcast";
import styles from "../index.css"
import pic1 from "../pic/1pic.png"
import pic2 from "../pic/pic2.png"
import pic3 from "../pic/pic3.png"

const FetchingHere = () => {

    const dispatch = useDispatch()
    const forcast = useSelector(state => state.weather.forcast.weather)
    const status = useSelector(state => state.weather.forcast.status)

    const isWeatherLoading = status === "loading"

    useEffect(()=>{
        dispatch(fetchWeather())
    },[])

    console.log(forcast)


    class WeatherReport{
        data = []
        base = []
        temp = []
        coords = []
        constructor(data1) {
                    this.data = data1[0]
                    if(!isWeatherLoading){
                        this.base=(data1[0].base)
                        this.temp=(data1[0].wind)
                        this.coords = (data1[0].coord)
                    }
        }
        get_base = () => this.base
        get_wind = () => this.temp
        get_cords = () => this.coords

    }

    const currForcast = new WeatherReport(forcast)





    return (
        <div className="  flex justify-center mt-40 gap-36  ">
            <div className="flex flex-col  items-center w-2/12 h-96 border-solid border-sky-300 border-4 rounded-2xl text-sky-300 text-center pt-5 text-2xl ">
                <div className="border-solid border-sky-300 border-b-2 rounded w-3/4 mb-36 pb-2">Base</div>
                <div className="flex flex-row  justify-around  w-3/4 items-center">
                <img src={pic1}/>
                {isWeatherLoading ? "Loading" : currForcast.get_base()}
                </div>
            </div>
            <div className="flex flex-col items-center w-2/12 border-solid border-sky-300 border-4 rounded-2xl text-sky-300 text-center pt-5 text-2xl">
                <div className="border-solid border-sky-300 border-b-2 rounded w-3/4 mb-36 pb-2">Wind</div>
                <div className="flex flex-row  justify-around  w-3/4 items-center">
                    <img src={pic2}/>
                Speed : {isWeatherLoading ? "Loading" : currForcast.get_wind()}
                </div>
            </div>
            <div className="flex  flex-col items-center w-2/12 border-solid border-sky-300 border-4 rounded-2xl text-sky-300 text-center pt-5 text-2xl">
                <div className="border-solid border-sky-300 border-b-2 rounded w-3/4 mb-36 pb-2">Coords</div>
                <div className="flex flex-row  justify-around  w-3/4 items-center">
                    <img src={pic3}/>
                Lon : {isWeatherLoading ? "Loading" : currForcast.get_cords()}
                </div>
            </div>
        </div>
    );
};

export default FetchingHere;