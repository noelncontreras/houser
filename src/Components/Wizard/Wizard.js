import React from "react";
import store, {CLEAR_INPUT} from "../../store";
import {Link, Route, Switch} from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";


import "./Wizard.css";


export default function Wizard(props) {

    const handleCancel = () => {
        store.dispatch({
            type: CLEAR_INPUT
        })
    };
    return (
        <section className="wizard-container">
            <div className="wizard-title">
                <h1>{props.match.params.wizard}</h1>
                <Link to="/"><button onCancel={handleCancel}>Cancel</button></Link>
            </div>
            <Switch>
                <Route path="/wizard/step1" component={StepOne} />
                <Route path="/wizard/step2" component={StepTwo} />
                <Route path="/wizard/step3" component={StepThree} />
            </Switch>
        </section>
    )
};