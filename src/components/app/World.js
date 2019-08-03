import React from 'react';
import Player from "../player/Player";
import { GlobalStyles } from "../../config/GlobalStyles";
import {
    Tile,
    Map,
    ItemTile
} from "./style";
import {
    ITEMS,
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
                        <ItemTile value={ itemsTileset( item.value ) }
                                  x={ item.x }
                                  y={ item.y }
                                  key={ index }/> )
                }

                <Player/>
            </Map>

        </>
    )
};

export default connect( mapStateToProps )( World );