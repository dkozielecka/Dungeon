import React from 'react';
import { Wrapper } from "./Wrapper";
import {
    ListItem,
    List
} from "./List";
import { Header } from "./Header";
import { Arrow } from "./Arrow";
import { connect } from "react-redux";
import { dispatchStart } from "../../../duck/actions/gameActions";

class Menu extends React.PureComponent {
    state = {
        start: {
            isActive: true
        },
        settings: {
            isActive: false
        },
        instruction: {
            isActive: false
        }
    };

    mapStateToProps = ( state ) => ( {
        game: state.game
    } );

    componentDidMount() {
        document.addEventListener( 'keyup', this.handleKeyUp )
    }

    componentWillUnmount() {
        document.removeEventListener( 'keyup', this.handleKeyUp )
    }

    handleKeyUp = ( e ) => {
        if ( e.key === 'Enter' ) {
            dispatchStart( true )
        }
    };

    render() {
        const { start, settings, instruction } = this.state;
        return (
            <Wrapper>
                <Header>Dungeon game</Header>
                <List>
                    <ListItem><Arrow active={ start.isActive }/>Start</ListItem>
                    <ListItem><Arrow active={ settings.isActive }/>Settings</ListItem>
                    <ListItem><Arrow active={ instruction.isActive }/>Instruction</ListItem>
                </List>
            </Wrapper>
        )
    }
};

export default connect( this.mapStateToProps )( Menu );
