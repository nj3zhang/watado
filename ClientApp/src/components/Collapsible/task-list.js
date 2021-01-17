import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import './task-list.scss';

export default function TaskList (props) {
// Match the user object;
   const {list} = props;
   const [state, setState] = useState([false, false, false, false, false, false]);

   const handleChange = (index, event) => {
       const newState = [...state];
       newState[index] = event.target.checked;
       setState(newState);
  };

  const listComponent = list.map((task, index) => {
      return (
          <li key={task.id}>
              <Checkbox
                    checked={state[index]}
                    onChange={(e) => handleChange(index, e)}
                    name={"Checked"+ index.toString()}
                    color="primary"
                />
                {task.name}
          </li>
      );
  })

    return(
        <div className="list-container">
            <ul className="list">
                {listComponent}
            </ul>
        </div>
    );
}

TaskList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.any),

};