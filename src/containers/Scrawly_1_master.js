import {connect} from "react-redux";
import Scrawly_1_master from "../components/Scrawly_1_master";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawl
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    });

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Scrawly_1_master)


