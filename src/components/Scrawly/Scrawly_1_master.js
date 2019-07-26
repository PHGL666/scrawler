import React, {Component} from 'react';
import md5 from 'md5';
import {NavLink} from "react-router-dom";


class Scrawly_1_master extends Component {

    componentDidMount() {
        const slug = /[^/]*$/.exec(this.props.location.pathname)[0];
        this.props.search(slug);
    }

    render() {

        let gravatar = 'https://www.gravatar.com/avatar/' + md5('email du state ici') + '?s=32&d=robohash';

        return (
            <div>
                <section className="bg-blue">
                    <h1>{this.props.title}</h1>
                </section>

                <section className="container">
                    <table className="poll">
                        <thead>
                        <tr>
                            <th>
                                APPELLE LE COMPOSANT SCRAWLY 2 DATE
                            </th>
                        </tr>
                        </thead>
                        <tbody>

                        <img src={gravatar} alt="Avatar"/>

                        <tr>
                            APPELE LE COMPOSANT SCRAWLY 2 SELECTION
                        </tr>
                        <tr>
                            APPEL LE COMPOSANT SCRAWLY 3 INSCRIPTION
                        </tr>
                        <td>
                            <button type="submit" className="button button-primary">
                                <i className="fa fa-2x fa-save"> </i>
                            </button>
                        </td>
                        </tbody>
                    </table>
                    <NavLink to='/' type="submit" className="button btn">
                        <i className="fa"> <strong>Retourner à la Homepage</strong></i>
                    </NavLink>
                </section>

            </div>
        );
    }
}

export default Scrawly_1_master;