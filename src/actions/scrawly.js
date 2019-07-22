// Création de constantes pour stocker le nom des actions
export const SCRAWLY_ADD = 'SCRAWLY_ADD';
export const SCRAWLY_REMOVE = 'SCRAWLY_REMOVE';


// Action pour ajouter un scrawly
export function scrawlyAdd(scrawly) {
    return {
        type: SCRAWLY_ADD,
        payload: scrawly
    };
}

// Action pour supprimer un item
export function scrawlyRemove(scrawly) {
    return {
        type: SCRAWLY_REMOVE,
        payload: scrawly
    };
}