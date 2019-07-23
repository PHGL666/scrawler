import React, {Component} from 'react';

class Scrawly_2_scrawlySelections extends Component {

    render() {
        return (
            <div>
                <td>
                    <div className="user-container">
                        <img src="GRAVATAR" alt="x"/>
                        <span>FULL NAME</span>
                    </div>
                </td>
                <td className="available"><i className="fa fa-3x fa-check-circle"> SELECTIONS CASE </i></td>
                <td><a href="EDITER LA SELECTION"><i className="fa fa-2x fa-edit"> </i></a> </td>
            </div>
        );
    }
}

export default Scrawly_2_scrawlySelections;