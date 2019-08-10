import React from 'react'
import { Wrapper } from "./Wrapper";
import { Heart } from "./Heart";

export const HeartsBar = ( { health } ) => {
    return (
        <Wrapper>
            { Array( 10 )
                .fill( '' )
                .map( ( _, i ) => <Heart active={ i < health }
                                         key={ i }/> ) }
        </Wrapper>
    )
};

