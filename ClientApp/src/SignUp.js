import React, {useEffect} from 'react';
import blueBlobIconPNG from './components/Blue_Blob.png';
import greenBlobIconPNG from './components/Green_Blob.png';
import redBlobIconPNG from './components/Red_Blob.png';
import yellowBlobIconPNG from './components/Yellow_Blob.png';



import './SignUp.scss';
import { Link } from 'react-router-dom';


export default function SignUp () {

    const handleSelect = (e) => {
        if(e.target.alt === "1" || e.target.alt === "2" || e.target.alt === "3"|| e.target.alt === "4"){
            e.target.style.opacity = 0.3;
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', (e) => handleSelect(e));

        return window.removeEventListener('mousedown', (e) => handleSelect(e));
    },[]);
    
    return (
        <div className="signup-container">
            <h3> Select your blob </h3>

            <div className="blob-container">
                <img  className="blob" alt="1" src={blueBlobIconPNG}></img>
                <img  className="blob" alt="2" src={greenBlobIconPNG}></img>
                <img  className="blob" alt="3" src={redBlobIconPNG}></img>
                <img  className="blob" alt="4" src={yellowBlobIconPNG}></img>
            </div>
            <Link to="/"> 
                <button className="submit">Submit</button>
            </Link>
            
        </div>
    );
}
