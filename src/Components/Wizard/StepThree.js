import React, {Component} from "react";


import store from "../../store";
import axios from "axios";

export default class StepThree extends Component {
    constructor() {
        super();
        this.state = {
            monthlyMortgage: 0,
            desiredRent: 0
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleAdd = () => {
        axios
            .post("/api/house")
            .then(this.props.history.push("/"))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <section className="wizard-container">
                <div className="wizard-inputs">
                    <label>Monthly Mortgage Amount:</label>
                    <input 
                    name="monthlyMortgage"
                    value={this.state.monthlyMortgage}
                    onChange={this.handleChange}/>
                    <br />
                    <label>Desired Monthly Rent:</label>
                    <input 
                    name="desiredRent"
                    value={this.state.desiredRent}
                    onChange={this.handleChange}/>
                    <br />
                    <button onClick={() => {this.props.history.push("/")}}>Complete</button>
                </div>
            </section>
        )
    }
}