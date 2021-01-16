import React, {useRef, useEffect} from 'react';
import Circle from './Dotted_Circle.svg';
import './CirclePos.scss';

const CirclePos = ({left, top, num}) => {
    // const circleRef = useRef(null);
    // useEffect(() => {
    //     circleRef.current.style.backgroundImage = `url(${Circle})`;
    //     circleRef.current.style.left = stylesRef[num];
    //     circleRef.current.style.top = stylesRef[num];
    
        
        
    // }, []);
    
    return (
        <div className="circle-pos"
            // ref={circleRef}
            style={{backgroundImage: `url(${Circle})`, left: `${left}px`, top: `${top}px`}}
        >
            {num}
        </div>
    );
}

export default CirclePos;
