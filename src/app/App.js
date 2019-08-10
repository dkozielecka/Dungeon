import React, { useEffect } from 'react';
import Player from "./components/player/Player";
import { GlobalStyles } from "../config/GlobalStyles";
import { Map } from "./components/map/Map";
import { Tile } from "./components/map/Tile";
import {
    ITEMS,
    TILE_SET
} from "../config/constans";
import { tileParser } from "./components/parsers/tileParser";
import {
    dispatchItemTile,
    dispatchTick,
    dispatchTile
} from "../duck/actions/mapActions";
import { connect } from "react-redux";
import { itemsParser } from "./components/parsers/itemsParser";
import Menu from "./components/menu/Menu";

const mapStateToProps = ( state ) => ( {
    tiles: state.map.tiles,
    items: state.map.items,
    traps: state.map.traps,
    game: state.game
} );

const App = ( { tiles, items, game } ) => {
    useEffect( () => {
        dispatchTile( TILE_SET );
        dispatchItemTile( ITEMS );
    }, [] );

    useEffect( () => {
        if ( !game.isStart ) {
            return
        }
        const intervalRef = setInterval( dispatchTick, 700 );
        return () => clearInterval( intervalRef );
    } );

    return (
        <>
            <GlobalStyles/>
            { !game.isStart ?
                <Menu/> :
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
                </Map> }
        </>
    )
};

export default connect( mapStateToProps )( App );