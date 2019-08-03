import React from 'react';
import Player from "../player/Player";
import { GlobalStyles } from "../../config/GlobalStyles";
import {
    Tile,
    Map,
    ItemTile
} from "./style";
import {
    ITEMS_TILE_SET,
    TILE_SET
} from "../../config/constans";
import {
    tileset,
    itemsTileset
} from "./tileset";
import {
    dispatchItemTile,
    dispatchTile
} from "../../duck/actions/mapActions";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => ( {
    tiles: state.map.tiles,
    itemsTiles: state.map.itemsTiles
} );

const World = ( { tiles, itemsTiles } ) => {
    dispatchTile( TILE_SET );
    dispatchItemTile( ITEMS_TILE_SET );

    console.log( ITEMS_TILE_SET );
    // console.log(tiles, itemsTiles);

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
                    itemsTiles.map( row => row.map( column =>
                        <ItemTile value={ itemsTileset( column ) }
                                  key={ Math.random() * 1000 }/> ) )
                }
                <Player/>
            </Map>

        </>
    )
};

export default connect( mapStateToProps )( World );