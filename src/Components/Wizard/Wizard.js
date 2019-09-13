import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./Wizard.css";

export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        // console.log(e.target.value); <-- checking if input fields were getting value typed/passed in to input fields
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <section className="wizard-container">
                <div className="wizard-title">
                    <h1>Add New Listing</h1>
                    <Link to="/"><button>Cancel</button></Link>
                </div>
                <div className="wizard-inputs">
                    <label>Name:</label>
                    <input 
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}/>
                    <br />
                    <label>Address:</label>
                    <input 
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}/>
                    <br />
                    <label>City:</label>
                    <input 
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}/>
                    <br />
                    <label>State:</label>
                    <input 
                    name="state"
                    value={this.state.state}
                    onChange={this.handleChange}/>
                    <br />
                    <label>Zip:</label>
                    <input 
                    name="zip"
                    value={this.state.zip}
                    onChange={this.handleChange}/>
                    <br />
                </div>
            </section>
        )
    }
}