import React, {Component} from 'react';
import md5 from "md5";

class Scrawly_2_scrawlyDates extends Component {

    render() {

        let gravatar = 'https://www.gravatar.com/avatar/' + md5('email du state ici') + '?s=32&d=robohash';
        return (
            <div className="date-container">
                <div className="month">MOIS</div>
                <div className="date">DATE</div>
                <div className="day">JOUR</div>
            </div>
        );
    }
}

export default Scrawly_2_scrawlyDates;