import React, {useRef, useEffect} from 'react';
import Circle from './Dotted_Circle.svg';
import './CirclePos.scss';

const CirclePos = ({left, top, players, num}) => {
    // TODO: Fix positions of other players if you have time. 
    const playerNames = players.map((player) => {
        return player.name + (player.currPlayer ? " (You)" : "");
    }).join(' + ');

    return (
        <div className="circle-pos"
            style={{backgroundImage: `url(${Circle})`, left: `${left}px`, top: `${top}px`}}
        >
            {/* <div className="filler"></div> */}
            <div className="name-section">{playerNames}</div>
            
        </div>
    );
}

export default CirclePos;
