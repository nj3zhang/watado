import React, { useState } from 'react';
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';


import Ghost from'./assets/Pacman_Ghost_Orange.png'

export default function Login(){
    const [lobbyInput, setlobbyInput] = useState('');
    const [nameInput, setNameInput] = useState('');

    const getData = () => {
        // create a new XMLHttpRequest
        console.log("Hello...it's me");
        var xhr = new XMLHttpRequest();
    
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
          // update the state of the component with the result here
          console.log(xhr.responseText);
        });
        // open the request with the verb and the url

        xhr.open('Post', '/PlayerData');
        console.log(lobbyInput);
        //var jsonString = `{"name":"${nameInput}","lobby":"${lobbyInput}"}`
        //var jsonString = {"{\"name\":\"" + nameInput + "\"lobby\":\"" + lobbyInput + "}"}
        
        var jsonString = JSON.stringify({ name: nameInput, lobby: lobbyInput})
        console.log(jsonString)
        // send the request
        
        // const response = await fetch('/PlayerData',
        //      {
        //          method: 'post',
        //          headers: {
        //          'Accept': 'application/json, text/plain, */*',
        //          'Content-Type': 'application/json'
        //          },
        //          body: jsonString
        //      })
        //      .then(response => {
        //      })
        
        xhr.send(jsonString)
    }

    const handleOnChangeLobby = (event) =>  {
        setlobbyInput(event.target.value);
    }

    const handleOnChangeName = (event) =>  {
        setNameInput(event.target.value);
    }

    return (
            <>
            <h1>Welcome to Tado!</h1>
            <div className="top">
                
                <img alt="" src={Ghost}></img>
                <div className= "verticalLine">
                    <div className= "userInput">
                        <TextField
                            id="Lobby ID"
                            label="Lobby ID"
                            defaultValue="ABCDEF"
                            onChange={handleOnChangeLobby}
                            InputProps={{
                        }}/> 
                        
                        <TextField style={{marginTop: "100px"}}
                            id="standard-read-only-input"
                            label="Name"
                            defaultValue="Jeff"
                            onChange={handleOnChangeName}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                      <AccountCircle />
                                    </InputAdornment>
                                  ),
                        }}/> 

                        <Button variant="contained" color="primary" onClick={getData}>
                            Submit
                        </Button>

                    </div>
                </div>
                
            </div>
            </>
        );
}


