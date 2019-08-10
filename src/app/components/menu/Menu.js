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

export class Menu extends React.PureComponent {
    state = {
        start: {
            index: 0,
            isActive: true
        },
        instruction: {
            index: 1,
            isActive: false
        },
        settings: {
            index: 2,
            isActive: false
        },
        credits: {
            index: 3,
            isActive: false
        }
    };

    componentDidMount() {
        document.addEventListener( 'keyup', this.handleKeyUp )
    }

    componentWillUnmount() {
        document.removeEventListener( 'keyup', this.handleKeyUp )
    }

    handleKeyUp = ( e ) => {
        const { start } = this.state;
        const prev = Object.values( this.state )
            .filter( item => item.isActive )[ 0 ].index;

        switch ( e.key ) {
            case 'Enter': {
                return start.isActive ? dispatchStart( true ) : null
            }
            case 'ArrowUp': {
                const next = prev === 0 ? 3 : prev - 1;
                return this.activateNewItem( next )
            }
            case 'ArrowDown': {
                const next = prev < 3 ? prev + 1 : 0;
                return this.activateNewItem( next )
            }
            default: {
                return null
            }
        }
    };

    activateNewItem( next ) {
        const newState = Object.entries( this.state )
            .map( item => {
                item[ 1 ].index === next
                    ? item[ 1 ].isActive = true
                    : item[ 1 ].isActive = false;
                return item
            } );

        this.setState( prev => ( {
            state: Object.fromEntries( newState )
        } ) );
    }

    render() {
        const { start, settings, instruction, credits } = this.state;
        return (
            <Wrapper>
                <Header>Dungeon game</Header>
                <List>
                    <ListItem><Arrow active={ start.isActive }/>Start</ListItem>
                    <ListItem><Arrow active={ instruction.isActive }/>Instruction</ListItem>
                    <ListItem><Arrow active={ settings.isActive }/>Settings</ListItem>
                    <ListItem><Arrow active={ credits.isActive }/>Credits</ListItem>
                </List>
            </Wrapper>
        )
    }
}

const mapStateToProps = ( state ) => ( {
    game: state.game
} );

connect( mapStateToProps )( Menu );
