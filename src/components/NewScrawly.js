import React, {Component} from 'react';

class NewScrawly extends Component {
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
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div>
                        <label htmlFor="title">Titre</label>
                        <input type="text" name="title" value={this.state.value}
                               onChange={event => this.handleChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor="slug">Slug</label>
                        <input type="text" name="slug" value={this.state.value}
                               onChange={event => this.handleChange(event)}/>
                    </div>
                    <button type="submit" className="button button-primary">
                        <i>Créer un nouveau Scrawly et ajouter des dates !</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default NewScrawly;