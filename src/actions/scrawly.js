// Création de constantes pour stocker le nom des actions
export const SCRAWLY_ADD = 'SCRAWLY_ADD';
export const SCRAWLY_REMOVE = 'SCRAWLY_REMOVE';
export const UPDATE_SLUG = "UPDATE_SLUG";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const SEARCH_SCRAWL_SUCCESS = "SEARCH_SCRAWL_SUCCESS";
export const SEARCH_SCRAWL_ERROR = "SEARCH_SCRAWL_ERROR";


// Action pour ajouter un scrawly
export function scrawlyAdd(scrawly) {
    return {
        type: SCRAWLY_ADD,
        payload: scrawly
    };
}

// Action pour supprimer un scrawly
export function scrawlyRemove(scrawly) {
    return {
        type: SCRAWLY_REMOVE,
        payload: scrawly
    };
}

// Action pour updater le slug
export function updateSlug(slug) {
    return {
        type: UPDATE_SLUG,
        payload: slug
    };
}

// Action pour updater le titre et le slug
export function updateTitle(title) {
    return {
        type: UPDATE_TITLE,
        payload: title
    };
}

// cette function native fetch (on peut aussi utiliser axios) appelle la base de donnée
export function searchScrawl(slug) {
    return dispatch => {
        fetch(process.env.REACT_APP_API + '/polls?slug=' + slug)
            .then(response => response.json()) // on appelle une répnonse qu'on convertie en json
            .then(data => {
                if (data["hydra:member"].length > 0) {
                    dispatch(searchScrawlSuccess(data["hydra:member"][0]));
                } else {
                    dispatch(searchScrawlError());
                }
            });
    };
}

export function searchScrawlSuccess(scrawl) {
    return {
        type: SEARCH_SCRAWL_SUCCESS,
        payload: scrawl
    }
}

export function searchScrawlError() {
    return {
        type: SEARCH_SCRAWL_ERROR,
        payload: null
    }
}