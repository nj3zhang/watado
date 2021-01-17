import React, { useState, useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import './collapsible-panel.scss';

export default function UserStats() {
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
             <div className="user-top-bar"> User Statistics </div>   
          </div>
      );
        
      const openPanel = () => {
        setIsCollapsed(true);
      }
        
        useEffect(()=>{
            const collapsibleButton = document.getElementById("user-stats-button");
            collapsibleButton.addEventListener('mousedown', openPanel);
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