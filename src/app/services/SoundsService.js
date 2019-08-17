import React from "react";
import Sound from 'react-sound';
import {loop} from '../../assets/sounds/loop.mp3'

class SoundService extends React.PureComponent {
    state = {
        isActive: true
    }

    switchSounds(value) {
        this.setState((prev) => ({
            ...prev,
            isActive: value
        }))
    }

    render() {
        const {isActive} = this.state;
        return (
            <Sound loop={true} playStatus={isActive ? 'PLAYING' : 'STOPPED'} url={loop}/>
        )
    }
}

export const SoundServiceContext = React.createContext();

export {SoundService}