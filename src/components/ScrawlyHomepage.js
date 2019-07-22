import React, {Component} from 'react';

class ScrawlyHomepage extends Component {
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

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <h1><em>SCRAWLY</em></h1>
                    <div>
                        <label htmlFor="slug">Tape ton Slug et rejoints l'évènement !</label><br/>
                        <input type="text" name="slug" value={this.state.value}
                               onChange={event => this.handleChange(event)} placeholder="Slug du Scrawly"/>
                    <button type="submit" className="button button-primary">
                        <i>GO !</i>
                    </button>
                    </div>
                    <button type="submit" className="button button-primary">
                        <i>Créer un nouveau Scrawly</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default ScrawlyHomepage;