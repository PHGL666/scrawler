import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Redirect} from "react-router-dom";


class ScrawlyHomepage extends Component {

    handleSubmit(event) {
        event.preventDefault(); // pour annuler l'action par défaut du formulaire s'il est vide
        this.props.search(this.props.slug); // appelle la fonction search dans le container du composant
        //this.setState({value: ""}); // remet la valeur à vide
    }

    render() {

        if (this.props.id) {
            return <Redirect to={"/ScrawlyMaster/" + this.props.slug}/>
        }

        return (
            <div className="homepage bg-blue">
                    <h1><em>SCRAWLY</em></h1>
                <form onSubmit={event => this.handleSubmit(event)}>
                        <label htmlFor="slug">Tape ton Slug et rejoints l'évènement !</label><br/>
                        <input type="text"
                               value={this.props.slug}
                               onChange={event => this.props.updateSlug(event.target.value)} placeholder="Slug de l'évènement"/>
                    <input type="submit" value="GO !"/>
                </form>
                <p>{this.props.error}</p>
                    <NavLink to='ScrawlyInitiate' type="submit" className="button btn">
                        <i className="fa fa-plus"> <strong>Créer un nouveau Scrawly</strong></i>
                    </NavLink>
            </div>
        );
    }
}

export default ScrawlyHomepage;
