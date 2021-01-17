import React, { useState, useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import './collapsible-panel.scss';
import mockUsersObject from '../../mockObj.json';
import TaskList from './task-list';
import './task-list.scss'
export default function UserStats() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setIsCollapsed(open);
      };
      
      const currentUser = "user 1";
      const list = (user, index) => (
          <div
          key={0}
            role="presentation"
            onClick={toggleDrawer(true)}
            onKeyDown={toggleDrawer(true)}
            className="list" 
            >   
             <div className={"user"+index}>
                <h2 className="username">{user.username}</h2>
                <span className="title">Primary Tasks</span>
                <TaskList list={user.primaryTasks}/>
                <span className="title">Secondary Tasks</span>
                <TaskList list={user.secondaryTasks}/>
            </div>
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
              <div className="user-top-bar"> User Statistics </div>  
               { mockUsersObject.usersObject.map((user, index) => {
                  if (user.username !== currentUser){
                    return list(user, index);
                  }
                  return undefined;
                 })}
            </Drawer>
        </React.Fragment>
    );
}