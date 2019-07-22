import React from 'react';

function ScrawlyList(props) {
    const scrawlies = props.scrawlies.map(
        (scrawly, key) => <li key={key}>
            {scrawly.value}
            <button onClick={() => props.remove(scrawly)}>Supprimer le scrawly</button>
        </li>
    );// pour créer le boutton de suppression d'un scrawlies il suffit juste de la ligne 7
    return (
        <ul>
            {scrawlies}
        </ul>
    );
}

export default ScrawlyList;
