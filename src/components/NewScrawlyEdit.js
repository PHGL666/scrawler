import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";

class NewScrawlyEdit extends Component {
    // 2 il faut un state pour gérer la valeur de l'input donc on créer le constructor
    constructor(props) {
        super(props);
        this.state = {value: ""};
    }

    // 3 le handleChange est toujours pareil. Permet juste de récupérer la valeur saisie dans le formulaire
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    // 5 on crée le handleSUbmit qui gère lorsqu'on clique sur le bouton submit
    handleSubmit(event) {
        event.preventDefault();
        if (!this.props.loading) {
            this.props.createScrawl({
                title: this.props.title,
                slug: this.props.slug
            });
            this.setState({value: ""}); // remet la valeur à vide
        }
    }

    render() {
        if (this.props.id) {
            return <Redirect to={"/ScrawlyMaster/" + this.props.slug}/>
        }
        return (
            <div>
                <section className="bg-blue">
                    <h1>EDITER LE SCRAWLY</h1>
                </section>
                <section className="container form-new">
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <div>
                            <label htmlFor="title">Titre</label>
                            <input type="text" name="title" value={this.state.value}
                                   onChange={event => this.handleChange(event)} placeholder="Anniversaire de Johny"/>
                        </div>
                        <div>
                            <p>Proposez des dates pour votre évènement :</p>
                            <ul>
                                <li>dates ajoutées</li>
                                <li>dates ajoutées</li>
                                <li>dates ajoutées</li>
                            </ul>
                            <input type="date" name="date" value={this.state.value}
                                   onChange={event => this.addDate(event)}/>
                        </div>
                        <div>
                            <button type="submit" className="button button-primary"><i className="fa fa-plus"> <strong>Ajouter une date</strong></i></button>
                        </div>
                        <NavLink to="/ScrawlyMaster" type="submit" className="button btn"><i className="fa fa-check"> <strong>VALIDER</strong></i></NavLink>
                    </form>
                </section>

            </div>
        );
    }
}

export default NewScrawlyEdit;