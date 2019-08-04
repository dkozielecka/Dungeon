import React from 'react';
import Player from "../player/Player";
import { GlobalStyles } from "../../config/GlobalStyles";
import {
    Tile,
    Map
} from "./style";
import {
    ITEMS,
    TILE_SET
} from "../../config/constans";
import {
    tileset
} from "./tileset";
import {
    dispatchItemTile,
    dispatchTile
} from "../../duck/actions/mapActions";
import { connect } from "react-redux";
import { itemsParser } from "./itemsParser";

const mapStateToProps = ( state ) => ( {
    tiles: state.map.tiles,
    items: state.map.items
} );

const World = ( { tiles, items } ) => {
    dispatchTile( TILE_SET );
    dispatchItemTile( ITEMS );

    return (
        <>
            <GlobalStyles/>
            <Map>
                {
                    tiles.map( ( row ) => row.map( ( column ) =>
                        <Tile value={ tileset( column ) }
                              key={ Math.random() * 1000 }/> ) )
                }
                {
                    items.map( ( item, index ) =>
                        itemsParser( item, index ) )
                }

                <Player/>
            </Map>

        </>
    )
};

export default connect( mapStateToProps )( World );