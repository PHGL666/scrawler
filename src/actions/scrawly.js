// Création de constantes pour stocker le nom des actions
export const UPDATE_SLUG = "UPDATE_SLUG";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const SEARCH_SCRAWL_SUCCESS = "SEARCH_SCRAWL_SUCCESS";
export const SEARCH_SCRAWL_ERROR = "SEARCH_SCRAWL_ERROR";
export const CREATE_SCRAWL_LOADING = "CREATE_SCRAWL_LOADING";
export const CREATE_SCRAWL_SUCCESS = "CREATE_SCRAWL_SUCCESS";
export const CREATE_SCRAWL_ERROR = "CREATE_SCRAWL_ERROR";

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


//CREATE SCRAWLY
export function createScrawl(scrawl) {
    return dispatch => {
        dispatch(createScrawlLoading());
        fetch(process.env.REACT_APP_API + '/polls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scrawl) // stringify modifie en chaîne de caractère
        })
            .then(response => response.json()) // on appelle une répnonse qu'on convertie en json
            .then(data => {
                if (data["@type"] !== "hydra:Error") {
                    dispatch(createScrawlSuccess(data)
                    )
                } else {
                    dispatch(createScrawlError());
                }
            });
    };
}

export function createScrawlSuccess(scrawl) {
    return {
        type: CREATE_SCRAWL_SUCCESS,
        payload: scrawl
    }
}

export function createScrawlError() {
    return {
        type: CREATE_SCRAWL_ERROR};
}

export function createScrawlLoading() {
    return {
        type: CREATE_SCRAWL_LOADING};
}