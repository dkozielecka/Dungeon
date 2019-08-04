import {
    ItemTile,
    Flag,
    Torch
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
    }
};