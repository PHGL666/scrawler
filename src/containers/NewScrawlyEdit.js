import {connect} from "react-redux";
import NewScrawlyEdit from "../components/NewScrawlyEdit";
import {editAddDate} from "../actions/scrawly";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    editAddDate: date => dispatch(editAddDate(date)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewScrawlyEdit)