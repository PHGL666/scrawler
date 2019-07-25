import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";

class NewScrawlyEdit extends Component {
    handleSubmit(event) {
        event.preventDefault();
        this.props.choicesShow({
                choices: this.props.scrawl.choices,
                title: this.props.scrawl.title
            }
        );
    }


    render() {
        if (this.props.id) {
            return <Redirect to={"/ScrawlyMaster/" + this.props.slug}/>
        }
        return (
            <div>
                <section className="bg-blue">
                    <h1>TITRE : {this.props.scrawl.title}</h1>
                </section>

                <section className="container form-new">
                    <ul>
                        <p>Proposez des dates pour votre évènement :</p>
                            <li>{this.props.scrawl.choices}</li>
                    </ul>

                    <form onSubmit={event => this.handleSubmit(event)}>
                        <div>

                            <input type="date" name="date" value={this.props.date}
                                   onChange={event => this.props.updateChoices(event.target.value)}/><br/>
                            <button type="submit" className="button button-primary"><i className="fa fa-plus"> <strong>Ajouter
                                une date</strong></i></button>
                        </div>
                        <div>
                        </div>
                        <NavLink to="/ScrawlyMaster" type="submit" className="button btn"><i className="fa fa-check">
                            <strong>VALIDER</strong></i></NavLink>
                    </form>
                </section>

            </div>
        );
    }
}

export default NewScrawlyEdit;