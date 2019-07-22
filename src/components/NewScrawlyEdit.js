import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

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
        this.props.add({
            value: this.state.value,
            done: false
        });
        this.setState({value: ""}); // remet la valeur à vide
    }

    /* 1 ligne 30 on crée le formulaire*/

    /* 4 ligne 34 on rajoute la valeur et dans dans le handlechange on appelle l'evenenent event et on l'envoie au handlechange(event) pour se renouveller */
    render() {
        return (
            <div>
                <section className="bg-blue">
                    <h1>EDITER LE SCRAWLY</h1>
                </section>
                <section className="container form-new">
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <div>
                            <label htmlFor="title">Titre</label><br/>
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
                            <button type="submit" className="button button-primary"><i className="fa fa-plus"> Ajouter une date</i></button>
                        </div>
                        <NavLink to="/ScrawlyMaster" type="submit" className="button btn"><i className="fa fa-check"> VALIDER</i></NavLink>
                    </form>
                </section>

            </div>
        );
    }
}

export default NewScrawlyEdit;