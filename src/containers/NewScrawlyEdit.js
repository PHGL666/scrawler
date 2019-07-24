import {connect} from "react-redux";
import NewScrawlyEdit from "../components/NewScrawlyEdit";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {}// accolade vide renvoie un objet vide ne psoe pas de probleme
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewScrawlyEdit)