import {connect} from "react-redux";
import Scrawly_1_master from "../components/Scrawly/Scrawly_1_master";
import {searchScrawl} from "../actions/scrawly";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    search: slug => dispatch(searchScrawl(slug))
    });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Scrawly_1_master)


