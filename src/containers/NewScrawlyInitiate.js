import {connect} from "react-redux";
import {createScrawl, updateSlug, updateTitle} from "../actions/scrawly";
import NewScrawlyInitiate from "../components/NewScrawlyInitiate";


// Envoyer des données du state au composant
const mapStateToProps = state => {
    return {
        scrawl: state.scrawly.scrawl,
        slug: state.scrawly.scrawl.slug,
        title: state.scrawly.scrawl.title,
        loading: state.scrawly.createScrawlLoading,
        id: state.scrawly.scrawl["@id"],
        error: state.scrawly.error
    }
};

// Envoyer des actions au composant
const mapDispatchToProps = dispatch => ({
    updateSlug: slug => dispatch(updateSlug(slug)),
    updateTitle: title => dispatch(updateTitle(title)),
    createScrawl: scrawl => dispatch(createScrawl(scrawl)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewScrawlyInitiate)
