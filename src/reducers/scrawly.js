import {
    UPDATE_SLUG,
    UPDATE_TITLE,
    UPDATE_CHOICES,
    SEARCH_SCRAWL_SUCCESS,
    SEARCH_SCRAWL_ERROR,
    CREATE_SCRAWL_LOADING,
    CREATE_SCRAWL_SUCCESS,
    CREATE_SCRAWL_ERROR,
    CHOICES_CREATE_SUCCESS,
    CHOICES_CREATE_ERROR,
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
        case UPDATE_CHOICES:
            return {
                ...state,
                scrawl: {...state.scrawl, choices: action.payload}
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
        case CHOICES_CREATE_SUCCESS:
                return {
                    ...state,
                choices: action.payload,
            };
        case CHOICES_CREATE_ERROR:
            return {
                ...state,
                error: "La date a déjà été sélectionnée !",
            };


        default:
            return state;// en entre il prend le state initale, il modifie le state, et renvoie le state modifié.
    }
}

export default scrawlyApp;
