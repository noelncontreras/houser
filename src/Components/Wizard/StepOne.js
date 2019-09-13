import React, {Component} from "react";
import {Link} from "react-router-dom";
import store, {STEP_ONE} from "../../store";

import "./Wizard.css";

export default class StepOne extends Component {
    constructor() {
        super()
        const reduxStore = store.getState();
        this.state = {
            name: reduxStore.name,
            address: reduxStore.address,
            city: reduxStore.city,
            state: reduxStore.state,
            zip: reduxStore.zip
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        const reduxStore = store.getState();
        store.subscribe(() => {
            this.setState({
                name: reduxStore.name,
                address: reduxStore.address,
                city: reduxStore.city,
                state: reduxStore.state,
                zip: reduxStore.zip
            })
        })
    }

    handleNext() {
        store.dispatch({
            type: STEP_ONE,
            payload: this.state
        });
    }

    handleChange(e) {
        // console.log(e.target.value); <-- checking if input fields were getting value typed/passed in to input fields
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <section className="wizard-container">
                <div className="wizard-inputs">
                    <label>Property Name:</label>
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
                <div>
                    <Link to="/wizard/step2"><button onClick={() => this.handleNext()}>Next Step</button></Link>
                </div>
            </section>
        )
    }
} 