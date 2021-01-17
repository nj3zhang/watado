import React from 'react';
import BlobIconPNG from './components/blob.png';
import './SignUp.scss';
import Button from '@material-ui/core/Button';

export default function SignUp () {
    return (
        <div className="signup-container">
            <h3> Please select your blob </h3>

            <div className="blob-container">
                <img alt="" src={BlobIconPNG}></img>
                <img alt="" src={BlobIconPNG}></img>
                <img alt="" src={BlobIconPNG}></img>
                <img alt="" src={BlobIconPNG}></img>
            </div>
        </div>
    );
}
