import {
    UPDATE_SLUG,
    UPDATE_TITLE,
    SEARCH_SCRAWL_SUCCESS,
    SEARCH_SCRAWL_ERROR,
    CREATE_SCRAWL_LOADING,
    CREATE_SCRAWL_SUCCESS,
    CREATE_SCRAWL_ERROR, EDIT_ADD_DATE,

} from '../actions/scrawly';
import slugify from "slugify";

const initialState = {
    scrawl: {
        title: "",
        slug: "",
        choices: [],
        persons: []
    },
    error: "",
    scrawlLoading: false,
    createScrawlLoading: false
};

function scrawlyApp(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SLUG:
            return {
                ...state,
                scrawl: {...state.scrawl, slug: slugify(action.payload, {lower: true})}
            };
        case UPDATE_TITLE:
            return {
                ...state,
                scrawl: {...state.scrawl, title: action.payload, slug: slugify(action.payload, {lower: true})}
            };
        case SEARCH_SCRAWL_SUCCESS:
            return {
                ...state,
                scrawl: action.payload,
                error: ""
            };
        case SEARCH_SCRAWL_ERROR:
            return {
                ...state,
                error: "Ce scrawly est introuvable banane !"
            };
        case CREATE_SCRAWL_LOADING:
            return {
                ...state,
                createScrawlLoading: true
            };
        case CREATE_SCRAWL_SUCCESS:
            return {
                ...state,
                scrawl: action.payload,
                createScrawlLoading: false
            };
        case CREATE_SCRAWL_ERROR:
            return {
                ...state,
                error: "Erreur lors de la création du Scrawly",
                createScrawlLoading: false
            };
        case EDIT_ADD_DATE:
            return {
                ...state,
                editAddDate: action.payload
            };
        default:
            return state;// en entre il prend le state initale, il modifie le state, et renvoie le state modifié.
    }
}

export default scrawlyApp;
