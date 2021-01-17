import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import CollapsiblePanel from './Collapsible/collapsible-panel';
import UserStats from './Collapsible/user-stats';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <CollapsiblePanel/>
        <UserStats/>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
