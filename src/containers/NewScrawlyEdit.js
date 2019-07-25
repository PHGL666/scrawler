import {connect} from "react-redux";
import NewScrawlyEdit from "../components/NewScrawlyEdit";
import {updateChoices} from "../actions/scrawly";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateChoices: choices => dispatch(updateChoices(choices)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewScrawlyEdit)