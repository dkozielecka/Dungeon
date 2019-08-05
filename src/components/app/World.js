import React, {useEffect} from 'react';
import Player from "../player/Player";
import {GlobalStyles} from "../../config/GlobalStyles";
import {Map} from "../map/Map";
import {Tile} from "../map/Tile";
import {ITEMS, TILE_SET} from "../../config/constans";
import {tileParser} from "../parsers/tileParser";
import {dispatchItemTile, dispatchTick, dispatchTile} from "../../duck/actions/mapActions";
import {connect} from "react-redux";
import {itemsParser} from "../parsers/itemsParser";

const mapStateToProps = (state) => ({
    tiles: state.map.tiles,
    items: state.map.items,
    traps: state.map.traps
});

const World = ({tiles, items}) => {

    useEffect(() => {
        dispatchTile(TILE_SET);
        dispatchItemTile(ITEMS);
    }, []);

    useEffect(() => {
        const intervalRef = setInterval(dispatchTick, 700);
        return () => clearInterval(intervalRef);
    }, []);

    return (
        <>
            <GlobalStyles/>
            <Map>
                {
                    tiles.map((row) => row.map((column) =>
                        <Tile value={tileParser(column)}
                              key={Math.random() * 1000}/>))
                }
                {
                    items.map((item, index) =>
                        itemsParser(item, index))
                }

                <Player/>
            </Map>

        </>
    )
};

export default connect(mapStateToProps)(World);