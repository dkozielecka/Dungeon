import {
    ItemTile,
    Flag,
    Torch,
    Arrow,
    Flamethrower,
    Peaks,
    animationFrame
} from "./style";
import { itemsTileset } from "./tileset";
import React from "react";

export const itemsParser = ( item, index ) => {
    switch ( item.value ) {
        default: {
            return <ItemTile value={ itemsTileset( item.value ) }
                             x={ item.x }
                             y={ item.y }
                             key={ index }/>
        }
        case 1: {
            return <Flag value={ itemsTileset( item.value ) }
                         x={ item.x }
                         y={ item.y }
                         key={ index }/>
        }
        case 5: {
            return <Torch value={ itemsTileset( item.value ) }
                          x={ item.x }
                          y={ item.y }
                          key={ index }/>
        }
        case 13: {
            return <Flamethrower value={ animationFrame( item.value ) }
                                 x={ item.x }
                                 y={ item.y }
                                 key={ index }/>
        }
        case 12: {
            return <Arrow value={ animationFrame( item.value ) }
                          x={ item.x }
                          y={ item.y }
                          key={ index }/>
        }
        case 6: {
            return <Peaks value={ animationFrame( item.value ) }
                          x={ item.x }
                          y={ item.y }
                          key={ index }/>
        }
    }
};