import {connect} from "react-redux";
import {updateSlug, updateTitle} from "../actions/scrawly";
import NewScrawlyInitiate from "../components/NewScrawlyInitiate";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        slug: state.scrawly.scrawl.slug,
        title: state.scrawly.scrawl.title
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateTitle: title => dispatch(updateTitle(title)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewScrawlyInitiate)