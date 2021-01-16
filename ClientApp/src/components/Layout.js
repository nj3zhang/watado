import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import CollapsiblePanel from './Collapsible/collapsible-panel';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <CollapsiblePanel/>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
