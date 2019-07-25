import {connect} from "react-redux";
import NewScrawlyEdit from "../components/NewScrawlyEdit";
import {updateChoices, searchScrawl, choicesCreate} from "../actions/scrawly";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
        poll: state.scrawly.scrawl["@id"],
        error: state.scrawly.error,
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateChoices: choices => dispatch(updateChoices(choices)),
    search: slug => dispatch(searchScrawl(slug)),
    choicesCreate: choices => dispatch(choicesCreate(choices))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewScrawlyEdit)