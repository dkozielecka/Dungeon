import React from 'react';
import { Wrapper } from "./Wrapper";
import {
    ListItem,
    List
} from "./List";
import { Header } from "./Header";
import { Arrow } from "./Arrow";

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

    handleKeyUp = (e) => {
        console.log('działa');
      if ( e.key === 'Enter'){
          console.log('działa')
      }
    };

    render() {
        const { start, settings, instruction } = this.state;
        return (
            <Wrapper>
                <Header>Dungeon game</Header>
                <List>
                    <ListItem onKeyUp={(e) => this.handleKeyUp(e)}><Arrow className={start.isActive && 'active'}/>Start</ListItem>
                    <ListItem><Arrow className={settings.isActive && 'active'}/>Settings</ListItem>
                    <ListItem><Arrow className={instruction.isActive && 'active'}/>Instruction</ListItem>
                </List>
            </Wrapper>
        )
    }
};

export default Menu;
