import React, {useRef, useEffect} from 'react';
import './MapCanvas.scss';
import Map from './tado_path.svg';
import CirclePos from "./CirclePos";
import BlobPos from "./BlobPos";


const hardPos = [
    {left: 120, top: 620},
    {left: 510, top: 550},
    {left: 350, top: 310},
    {left: 800, top: 380},
    {left: 760, top: 110},
    {left: 1110, top: 110},
]

// TODO: Pass in props such as player data etc.
const MapCanvas = ({playersData}) => {
    // Update size of map based on browser window size.
    const mapRef = useRef(null);
    useEffect(() => {
        const handleResize = () => {
            const scale = Math.min((window.innerWidth-30) / mapRef.current.offsetWidth, (window.innerHeight-100) / mapRef.current.offsetHeight);
            mapRef.current.style.transform = `scale(${scale})`;
        }

        window.addEventListener('resize', handleResize);
        handleResize();
    });

    return (
        <div ref={mapRef} className="map-canvas" style={{backgroundImage: `url(${Map})`}}>
            {/* Hardcoded cuz y not */}
            {hardPos.map((pos, i) => {
                // Only render players in current position onto circles:
                const matchedPlayers = playersData.filter((data) => data.tasksDone === i+1);
                return (
                    [<CirclePos key={i} left={pos.left} top={pos.top} players={matchedPlayers} num={i+1}/>,
                     <BlobPos key={i} left={pos.left} top={pos.top} player={matchedPlayers[0]} num={i+1} />]
                 );
            })}

            {/* <CirclePos left={150} top={620} playerData={playerData} num={1} />
            <CirclePos left={510} top={550} playerData={playerData} num={2} />
            <CirclePos left={350} top={260} playerData={playerData} num={3} />
            <CirclePos left={780} top={390} playerData={playerData} num={4} />
            <CirclePos left={760} top={70} playerData={playerData}  num={5} />
            <CirclePos left={1130} top={60} playerData={playerData} num={6} /> */}
        </div>
    );
}

export default MapCanvas;
