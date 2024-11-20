import React from 'react';

type tRedesMini =
{
    title?: string,
    Ancor?: string ,  
    mini?: boolean, 
}

function Redes({Ancor = '', title = '', mini=false}: tRedesMini) {
    return(
        <div>
            <a href={`${Ancor}`} target='_blank' rel='noreferrer' >
                {`${title}`}
            </a>
        </div>
    )
}

export default Redes
export {Redes}