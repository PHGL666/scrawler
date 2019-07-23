import {SCRAWLY_ADD, SCRAWLY_REMOVE, UPDATE_SLUG, UPDATE_TITLE} from '../actions/scrawly';
import slugify from "slugify";

const initialState = {
    scrawl: {
        title: "",
        slug: "",
        choices: [

        ],
        persons: [

        ]
    }
};

function scrawlyApp(state = initialState, action) {
    switch (action.type) {
        case SCRAWLY_ADD:
            return {scrawlies: [...state.scrawlies, action.payload]};// tu prends tous les items existant (...) et tu rajoutes le dernier item crée. Le spread operator permet de ne pas recréer un tableau dans un tableau.
        case SCRAWLY_REMOVE:
            return {scrawlies: state.scrawlies.filter(i => i !== action.payload)};
        case UPDATE_SLUG:
            return {
                ...state,
                scrawl: { ...state.scrawl, slug: slugify(action.payload) }
            };
        case UPDATE_TITLE:
            return {
                ...state,
                scrawl: { ...state.scrawl, title: action.payload, slug: slugify(action.payload) }
            };
        default:
            return state;// en entre il prend le state initale, il modifie le state, et renvoie le state modifié.
    }
}

export default scrawlyApp;
