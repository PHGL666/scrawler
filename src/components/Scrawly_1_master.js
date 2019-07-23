import React, {Component} from 'react';


class Scrawly_1_master extends Component {

    render() {
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
                </section>
            </div>
        );
    }
}

export default Scrawly_1_master;