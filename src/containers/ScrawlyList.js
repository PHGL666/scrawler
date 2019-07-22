import {connect} from "react-redux";
import {scrawlyAdd, scrawlyRemove} from "../actions/todo";
import ScrawlyList from "../components/ScrawlyList";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawlies: state.todo.scrawlies
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    add: scrawly => dispatch(scrawlyAdd(scrawly)),
    remove: scrawly => dispatch(scrawlyRemove(scrawly))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlyList)