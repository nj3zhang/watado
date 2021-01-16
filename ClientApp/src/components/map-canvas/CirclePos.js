import React, {useRef, useEffect} from 'react';
import Circle from './Dotted_Circle.svg';
import './CirclePos.scss';

const CirclePos = ({left, top, playerData, num}) => {
    // TODO: Add check to see where other players are at here!
    const playerCurrPos = num == playerData.tasksDone;
    
    return (
        <div className="circle-pos"
            style={{backgroundImage: `url(${Circle})`, left: `${left}px`, top: `${top}px`}}
        >
            <div className="name-section">{playerCurrPos && playerData.name}</div>
            
        </div>
    );
}

export default CirclePos;
