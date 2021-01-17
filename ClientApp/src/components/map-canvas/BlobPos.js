import React from 'react';
import './CirclePos.scss';
import './BlobPos.scss';
import BlueBlob from '../photos/Blue_Blob.png';
import RedBlob from '../photos/Red_Blob.png';
import YellowBlob from '../photos/Yellow_Blob.png';
import GreenBlob from '../photos/Green_Blob.png';


const BlobPos = ({left, top, player, num}) => {
        if (player == null)
            return <div></div>;

        console.log("color " + player.color + " name "  +player.username + " num " + num);
        if (player.color === "blue"){
            return (
                <div className="mainBlob-pos" style={{left: `${left}px`, top: `${top-50}px`}}>
                    <img alt="" src={BlueBlob} width='200px' height='190px'/>
                </div>
            );
        
        } else if (player.color === "red"){
            return (
                <div className="leftBlob-pos" style={{left: `${left-50}px`, top: `${top-50}px`}}>
                    <img alt="" src={RedBlob} width='200px' height='190px'/>
                </div>
            );
        
        } else if (player.color === "green"){
            return (
                <div className="leftBlob-pos" style={{left: `${left-50}px`, top: `${top-50}px`}}>
                    <img alt="" src={GreenBlob} width='200px' height='190px'/>
                </div>
            );
        } else {
            return (
                <div className="leftBlob-pos" style={{left: `${left-50}px`, top: `${top-50}px`}}>
                    <img alt="" src={YellowBlob} width='200px' height='190px'/>
                </div>
            );
        }
    
    

}

export default BlobPos;