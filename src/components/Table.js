import React, {Component, useState, useEffect} from 'react';
import './styles/App.css';
import Nav from './Nav';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

function Table() {

    useEffect(() => {
        fetchItnes();
    },[]);

    const[items,setItems] = useState([]);

    const fetchItnes=async()=>{
        const data = await fetch(`https://coronavirus-19-api.herokuapp.com/countries`
        );
        const items = await data.json();
        console.log(items);
        setItems(items);


    };





    return(
        <div>
            <h1>Corona Worldwide</h1>
                {/*{items.map(item=>(*/}
                {/*    <h1 key={item.country}>*/}
                {/*        <Link to={`/info/${item.country}`}>{item.country}</Link>*/}
                {/*    </h1>*/}
                {/*))}*/}


            <table border={2} cellPadding={5} >
                <thead>
                <tr>
                    <td>Country</td>
                    <td>Cases</td>
                    <td>Today cases</td>
                    <td>Deaths</td>
                    <td>Today deaths</td>
                    <td>Recovered</td>
                    <td>Active</td>
                    <td>Critical</td>
                    <td>Cases/1m</td>
                    <td>Deaths/1m</td>
                    <td>Total tests</td>
                    <td>Tests/1m</td>
                </tr>
                </thead>
                <tbody>

                {/*{items.map(item=>(*/}
                {/*    <tr>*/}
                {/*    <td key={items.country}>*/}
                {/*        <Link to={`/info/${items.country}`}>{item.country}</Link>*/}
                {/*    </td>*/}

                        {items.map(item=>(
                            <tr>
                            <td key={item.country}>
                                <Link to={`/info/${item.country}`}>{item.country}</Link>
                            </td>

                    <td>{item.cases}</td>
                        <td>{item.todayCases}</td>
                        <td>{item.deaths}</td>
                        <td>{item.todayDeaths}</td>
                        <td>{item.recovered}</td>
                        <td>{item.active}</td>
                        <td>{item.critical}</td>
                        <td>{item.casesPerOneMillion}</td>
                        <td>{item.deathsPerOneMillion}</td>
                        <td>{item.totalTests}</td>
                        <td>{item.testsPerOneMillion}</td>

                    </tr>
                        ))}

                </tbody>
            </table>

        </div>

    );

}

export default Table;
