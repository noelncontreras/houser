import React, {Component} from "react";
import House from "../House/House";
import {Link} from "react-router-dom";

import "./Dashboard.css";
import axios from "axios";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
        }
    };

    
    componentDidMount() {
        axios
            .get("/api/houses")
            .then(response => this.setState({houses: response.data}))
            .catch(error => alert(`You have CDM ${error}`))
    };

    render() {
        const housesMapped = this.state.houses.map(house => {
            return (
            <House 
                id={house.house_id}
                propertyName={house.property_name}
                address={house.address}
                city={house.city}
                state={house.state}
                zip={house.zip}
                key={house.house_id} />
            )
        })
        return (
            <section className = "dashboard-container">
                <div className = "dashboard-title">
                    <h1>Dashboard</h1>
                    <Link to="/wizard"><button>Add New Property</button></Link>
                </div>
                <div>
                    {housesMapped}
                </div>
            </section>
        )
    };
};