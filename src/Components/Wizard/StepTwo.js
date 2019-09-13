import React, {Component} from "react";
import store, {STEP_TWO} from "../../store";  



export default class StepTwo extends Component {
    constructor() {
        super();
        const reduxStore = store.getState();
        this.state = {
            image: reduxStore.image
        }
    }

    componentDidMount() {
        const reduxStore = store.getState();
        store.subscribe(() => {
            this.state({
                image: reduxStore.image
            })
        })
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }



    render() {
        return (
            <section className="wizard-container">
                <div className="wizard-inputs">
                    <label>Image URL:</label>
                    <input 
                    name="image"
                    value={this.state.image}
                    onChange={this.handleChange}/>
                </div>
            </section>
        )
    }
}