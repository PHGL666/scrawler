import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";

class NewScrawlyEdit extends Component {

    componentDidMount() {
        const slug = /[^/]*$/.exec(this.props.location.pathname)[0];
        this.props.search(slug);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.choicesCreate({
                date: this.props.scrawl.choices,
                poll: this.props.scrawl["@id"],
            }
        );
    }


    render() {
        if (this.props.id) {
            return <Redirect to={"/Scrawly/ScrawlyMaster/" + this.props.slug}/>
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
                            <input type="date" name="date" value={this.props.scrawl.choices}
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