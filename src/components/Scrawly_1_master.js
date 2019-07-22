import React, {Component} from 'react';

class Scrawly_1_master extends Component {
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
                <section className="bg-blue">
                    <h1>SCRAWLY</h1>
                    </section>

                <section className="container">
                    <table className="poll">
                        <thead>
                        <tr>
                            <th>
                                <div className="date-container">
                                    <div className="month">MOIS</div>
                                    <div className="date">DATE</div>
                                    <div className="day">JOUR</div>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className="user-container">
                                    <img src="GRAVATAR" alt="x"/>
                                    <span>FULL NAME</span>
                                </div>
                            </td>
                            <td className="available"><i className="fa fa-3x fa-check-circle"> SELECTIONS CASE </i></td>
                            <td><a href="EDITER LA SELECTION"><i className="fa fa-2x fa-edit"> </i></a> </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-form-container">
                                    <input type="text" name="title" value={this.state.value}
                                           onChange={event => this.handleChange(event)} placeholder="Fullname"/>

                                    <input type="email" name="email" value={this.state.value}
                                           onChange={event => this.addDate(event)} placeholder="Email"/>
                                </div>
                            </td>
                            <td>
                                <input type="checkbox"/>
                            </td>
                        </tr>
                        <td>
                            <button type="submit" className="button button-primary">
                                <i className="fa fa-2x fa-save"> </i>
                            </button>
                        </td>
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}

export default Scrawly_1_master;