import React from 'react';

class Sounds extends React.PureComponent {
    state = {};

    render() {
        const SoundsContext = React.createContext( {
            loop: true
        } );
        return (
            <SoundsContext.Provider></SoundsContext.Provider>
        )
    }
}

export default Sounds
