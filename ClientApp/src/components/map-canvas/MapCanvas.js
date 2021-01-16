import React, {useRef, useEffect} from 'react';
import './MapCanvas.scss';
import Map from './tado_path.svg';
import CirclePos from "./CirclePos";

// TODO: Pass in props such as player data etc.
const MapCanvas = () => {
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
            <CirclePos left={190} top={630} num={1} />
            <CirclePos left={530} top={570} num={2} />
            <CirclePos left={200} top={200} num={3} />
            <CirclePos left={200} top={200} num={4} />
            <CirclePos left={200} top={200} num={5} />
            <CirclePos left={200} top={200} num={6} />
        </div>
    );
}

export default MapCanvas;