import React from 'react';
import Player from "../player/Player";
import { GlobalStyles } from "../../config/GlobalStyles";
import {
    Tile,
    Map
} from "./style";
import { TILE_SET } from "../../config/constans";
import tileset from "./tileset";
import { dispatchTile } from "../../duck/actions/mapActions";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => ( {
    tiles: state.map.tiles
} );

const World = ( { tiles } ) => {
    dispatchTile( TILE_SET );

    return (
        <>
            <GlobalStyles/>
            <Map>
                <Player/>
                {
                    tiles.map( ( row ) => row.map( ( column ) =>
                        <Tile value={ tileset( column ) }
                              key={ Math.random() * 1000 }/> ) )
                }
            </Map>

        </>
    )
};

export default connect( mapStateToProps )( World );