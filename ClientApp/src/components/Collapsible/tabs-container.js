import React, {useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import './tab-container.scss';
import PropTypes from 'prop-types';
import TaskList from './task-list';
import AddTaskForm from './AddTaskForm';

const mockTaskObjects = [{
    username: "user 1",
    primaryTasks: [
    {name: "my first task", description: "this is my first task"}, 
    {name: "my second task", description: "this is my second task"}],
    secondaryTasks: [ {name: "wash dishes", description: "this is my first task"}, 
    {name: "walk dog", description: "this is my second task"}],
}];

const currentUser = "user 1";


function TabPanel (props) {
    const { children, value, index } = props;
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
        >
          {value === index && (
            <div>{children}</div>
          )}
        </div>
      );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
export default function TabsContainer (){
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const currentTaskList = mockTaskObjects.find(obj => obj.username === currentUser);
    return(
       <div className="tab-container">
           <AppBar style={{'backgroundColor': '#5A6A95'}} position="relative"> 
               <Tabs value={value} onChange={handleChange}>
                    <Tab label="Primary Tasks" />
                    <Tab label="Secondary Tasks" />
               </Tabs>
           </AppBar>
           <AddTaskForm/>
           <TabPanel value={value} index={0}>
                <TaskList list={currentTaskList.primaryTasks}/>
           </TabPanel>
           <TabPanel value={value} index={1}>
                <TaskList list={currentTaskList.secondaryTasks}/>
           </TabPanel>
       </div>
    );
}