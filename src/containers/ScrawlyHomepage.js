import {connect} from "react-redux";
import {scrawlyAdd, scrawlyRemove, updateSlug} from "../actions/scrawly";
import ScrawlyHomepage from "../components/ScrawlyHomepage";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawlies: state.scrawly.scrawlies,
        slug: state.scrawly.scrawl.slug
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    add: scrawly => dispatch(scrawlyAdd(scrawly)),
    remove: scrawly => dispatch(scrawlyRemove(scrawly)),
    updateSlug: slug => dispatch(updateSlug(slug)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrawlyHomepage)