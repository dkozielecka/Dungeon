import React from 'react';
import { Character } from "./style";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => ( {
    ...state,
    player: state.player
} );

const Player = ( { player } ) => {
    const { position } = player;
    return (
        <Character x={ position.x }
                   y={ position.y }/>
    )
};

export default connect( mapStateToProps )( Player );