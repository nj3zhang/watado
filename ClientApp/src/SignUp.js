import React, {useEffect} from 'react';
import BlobIconPNG from './components/blob.png';
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
                <img  className="blob" alt="1" src={BlobIconPNG}></img>
                <img  className="blob" alt="2" src={BlobIconPNG}></img>
                <img  className="blob" alt="3" src={BlobIconPNG}></img>
                <img  className="blob" alt="4" src={BlobIconPNG}></img>
            </div>
            <Link to="/"> 
                <button className="submit">Submit</button>
            </Link>
            
        </div>
    );
}
