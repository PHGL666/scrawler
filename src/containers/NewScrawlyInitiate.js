import {connect} from "react-redux";
import {createScrawl, updateSlug, updateTitle, createScrawlError} from "../actions/scrawly";
import NewScrawlyInitiate from "../components/NewScrawlyInitiate";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        slug: state.scrawly.scrawl.slug,
        title: state.scrawly.scrawl.title,
        loading: state.scrawly.createScrawlLoading,
        id: state.scrawly.scrawl["@id"],
        error: state.scrawly.createScrawlError
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateTitle: title => dispatch(updateTitle(title)),
    createScrawl: scrawl => dispatch(createScrawl(scrawl)),
    createScrawlError: error => dispatch(createScrawlError(error))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewScrawlyInitiate)
