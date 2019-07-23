import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


class ScrawlyHomepage extends Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.add({
            value: this.state.value,
            done: false
        });
        this.setState({value: ""}); // remet la valeur à vide
    }

    render() {
        return (
            <div className="homepage bg-blue">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <h1><em>SCRAWLY</em></h1>
                    <div>
                        <label htmlFor="slug">Tape ton Slug et rejoints l'évènement !</label><br/>
                        <input type="text" name="slugduscrawly" value={this.props.slug} onChange={event => this.props.updateSlug(event.target.value)} placeholder="Slug de l'évènement"/>
                    <NavLink to='SCRAWLY' type="submit" className="button button-primary">
                        <i>GO !</i>
                    </NavLink>
                    </div>
                    <NavLink to='ScrawlyInitiate' type="submit" className="button btn">
                        <i className="fa fa-plus"> <strong>Créer un nouveau Scrawly</strong></i>
                    </NavLink>
                </form>
            </div>
        );
    }
}

export default ScrawlyHomepage;
