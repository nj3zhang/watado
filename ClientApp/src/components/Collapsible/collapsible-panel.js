import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import './collapsible-panel.scss';
import TabContainer from './tabs-container';

export default function CollapsiblePanel() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setIsCollapsed(open);
      };

      const list = () => (
          <div
            role="presentation"
            onClick={toggleDrawer(true)}
            onKeyDown={toggleDrawer(true)}
            className="list" 
            >   
                <TabContainer></TabContainer>
          </div>
      );
    return (
        <React.Fragment key="left">
            <Button onClick={toggleDrawer(true)}>click me</Button>
            <Drawer
                anchor="left"
                open={isCollapsed}
                onClose={toggleDrawer(false)}
                className="drawer"
            >
                    {list()}
            </Drawer>
        </React.Fragment>
    );
}