import React, { useState, useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
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
        
        useEffect(()=>{
            const collapsibleButton = document.getElementById("collapsible-button");
            collapsibleButton.addEventListener('mousedown', () => {
                setIsCollapsed(true);
            });
        },[])
    return (
        <React.Fragment key="left">
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