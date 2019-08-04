import React, { useEffect } from 'react';
import Player from "../player/Player";
import { GlobalStyles } from "../../config/GlobalStyles";
import {
    Map
} from "../map/Map";
import { Tile } from "../map/Tile";
import {
    ITEMS,
    TILE_SET
} from "../../config/constans";
import {
    tileParser
} from "../parsers/tileParser";
import {
    dispatchItemTile,
    dispatchTile
} from "../../duck/actions/mapActions";
import { connect } from "react-redux";
import { itemsParser } from "../parsers/itemsParser";
import {
    requestAnimationArrow,
    requestAnimationFlamethrower,
    requestAnimationPeaks
} from "./requestAnimationFrame";
import store from "../../duck/store/store"

const mapStateToProps = ( state ) => ( {
    tiles: state.map.tiles,
    items: state.map.items
} );

const World = ( { tiles, items } ) => {
    dispatchTile( TILE_SET );
    dispatchItemTile( ITEMS );

    useEffect( () => {
        requestAnimationFlamethrower( store.getState().map.traps.flamethrower.frame );
        requestAnimationArrow( store.getState().map.traps.arrow.frame );
        requestAnimationPeaks( store.getState().map.traps.peaks.frame );
    } );

    return (
        <>
            <GlobalStyles/>
            <Map>
                {
                    tiles.map( ( row ) => row.map( ( column ) =>
                        <Tile value={ tileParser( column ) }
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