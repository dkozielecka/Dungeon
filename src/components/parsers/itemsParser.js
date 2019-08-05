import {ItemTile} from "../map/ItemTile";
import {itemsTileParser} from "./tileParser";
import {Torch} from "../items/Torch";
import {Flag} from "../items/Flag";
import {Arrow} from "../items/Arrow";
import {Flamethrower} from "../items/Flamethrower";
import {Peaks} from "../items/Peaks";
import {animationParser} from "./animationParser";
import React from "react";

export const itemsParser = (item, index) => {
    switch (item.value) {
        default: {
            return <ItemTile value={itemsTileParser(item.value)}
                             x={item.x}
                             y={item.y}
                             key={index}/>
        }
        case 1: {
            return <Flag value={itemsTileParser(item.value)}
                         x={item.x}
                         y={item.y}
                         key={index}/>
        }
        case 5: {
            return <Torch value={itemsTileParser(item.value)}
                          x={item.x}
                          y={item.y}
                          key={index}/>
        }
        case 13: {
            return <Flamethrower value={animationParser(item.value)}
                                 x={item.x}
                                 y={item.y}
                                 key={index}/>
        }
        case 12: {
            return <Arrow value={animationParser(item.value)}
                          x={item.x}
                          y={item.y}
                          key={index}/>
        }
        case 6: {
            return <Peaks value={animationParser(item.value)}
                          x={item.x}
                          y={item.y}
                          key={index}/>
        }
    }
};