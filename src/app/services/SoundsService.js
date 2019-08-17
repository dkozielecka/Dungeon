import React from "react";
import Sound from 'react-sound';

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
            <Sound loop={true} playStatus={isActive ? 'PLAYING' : 'STOPPED'}/>
        )
    }
}

export const SoundServiceContext = React.createContext();

export {SoundService}