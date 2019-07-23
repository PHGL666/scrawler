// Création de constantes pour stocker le nom des actions
export const SCRAWLY_ADD = 'SCRAWLY_ADD';
export const SCRAWLY_REMOVE = 'SCRAWLY_REMOVE';
export const UPDATE_SLUG = "UPDATE_SLUG";
export const UPDATE_TITLE= "UPDATE_TITLE";

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