import React from "react";
import {
    Howl
} from 'howler';
import loop from '../../assets/sounds/loop.mp3'

class SoundService {

    constructor() {
        this.isActive = true;
        this.loop = new Howl( {
            src: [ loop ],
            volume: 0.5,
            loop: true
        } )
    }

    switchSounds( value ) {
        this.setState( ( prev ) => ( {
            ...prev,
            isActive: value
        } ) )
    }

    init() {
        this.isActive && this.loop.once( 'load',  () => {
            console.log( 'play' );
            this.loop.play();
        } );
    }
}

export const SoundServiceContext = React.createContext();

export { SoundService }
