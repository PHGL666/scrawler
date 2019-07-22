import {connect} from "react-redux";
import {scrawlyAdd} from "../actions/todo";
import NewScrawly from "../components/NewScrawly";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {}// accolade vide renvoie un objet vide ne psoe pas de probleme
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    add: scrawly => dispatch(scrawlyAdd(scrawly))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewScrawly)