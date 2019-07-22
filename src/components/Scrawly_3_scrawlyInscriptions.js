import React, {Component} from 'react';

class Scrawly_3_scrawlyInscriptions extends Component {
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

            </div>
        );
    }
}

export default Scrawly_3_scrawlyInscriptions;