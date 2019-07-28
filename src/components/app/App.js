import React from 'react';
import Player from "../player/Player";
import { GlobalStyles } from "../../config/GlobalStyles";
import {
    Tile,
    Map
} from "./style";
import { TILE_SET } from "../../config/constans";
import tileset from "./tileset";

const App = () => {
    return (
        <>
            <GlobalStyles/>
            <Map>
                <Player/>
                {
                    TILE_SET.map( ( row ) => row.map( ( column ) =>
                        <Tile value={ tileset( column ) }
                              key={ Math.random() * 1000 }/> ) )
                }
            </Map>

        </>
    )
};

export default App;