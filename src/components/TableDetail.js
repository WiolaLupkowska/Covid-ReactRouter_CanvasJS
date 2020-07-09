import React, {Component, useState, useEffect} from 'react';
import './styles/App.css';
import Nav from './Nav';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import CanvasJSReact from "../lib/canvasjs.react";
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

function TableDetail({match}) {

    useEffect(() => {
        fetchCountry();
        fetchWorld();
        console.log(match);
    },[]);

    const[country,setCountry] = useState({});
    const[world,setWorld] = useState({});

    const fetchCountry = async () =>{
        const fetchCountry = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${match.params.country}`);
    const country = await fetchCountry.json();
    setCountry(country);
        console.log(country);

    }

    const fetchWorld = async () =>{
        const fetchWorld = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/World`);
        const world = await fetchWorld.json();
        setWorld(world);
        console.log(world);

    }
    const options2 = {
        animationEnabled: true,
        title: {
            text: ""
        },
        subtitles: [{
            text: "Global recoveries",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            dataPoints: [
                { name: "Rest of world", y: 100-(country.cases*100/world.cases)},
                { name: "Country", y: country.cases*100/world.cases},
            ]
        }]
    }

    const options = {
        theme: "light",
        animationEnabled: true,
        exportFileName: "cases",
        exportEnabled: true,
        title:{
            text: "Global cases"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            indexLabel: "{y}%",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabelPlacement: "inside",
            dataPoints: [
                { y: 100-(country.cases*100/world.cases), label: "Rest of world"},
                { y: country.cases*100/world.cases, label: "Country" },

            ]
        }]
    }



    return(
        <div>
            <h1>{country.country}</h1>
            <h2>deaths: {country.deaths}</h2>
            <CanvasJSChart options = {options}
            />
            <CanvasJSChart options = {options2}
             />
        </div>

    );

}

export default TableDetail;
