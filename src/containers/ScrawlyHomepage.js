import {connect} from "react-redux";
import {updateSlug, searchScrawl} from "../actions/scrawly";
import ScrawlyHomepage from "../components/ScrawlyHomepage";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        slug: state.scrawly.scrawl.slug,
        id: state.scrawly.scrawl["@id"],
        error: state.scrawly.error
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    search: slug => dispatch(searchScrawl(slug))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlyHomepage)