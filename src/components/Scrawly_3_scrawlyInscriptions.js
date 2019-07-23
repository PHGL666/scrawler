import React, {Component} from 'react';

class Scrawly_3_scrawlyInscriptions extends Component {

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Scrawly_3_scrawlyInscriptions;