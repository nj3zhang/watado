import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import MapCanvas from './components/map-canvas/MapCanvas';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import {Login} from "./Login";
import {SignUp} from "./SignUp";
import {Button} from "@material-ui/core";

import './custom.scss'

// For testing:
import TestData from "./tests/playersTestData.json"

// SignalR real-time connection:
import { HubConnectionBuilder } from '@microsoft/signalr';


const App = () => {
  const [ connection, setConnection ] = useState(null);
  const [ testCntr, setTestCntr ] = useState(0);
  const latestPlayersData = useRef([]);

  useEffect(() => {
      const newConnection = new HubConnectionBuilder()
          .withUrl(window.location.origin + '/playerhub')
          .withAutomaticReconnect()
          .build();

      setConnection(newConnection);
  }, []);

  useEffect(() => {
      if (connection) {
          connection.start()
              .then(result => {
                  console.log('Connected!');
  
                  connection.on('ReceivePlayerData', data => {
                      console.log("received data:");
                      console.log(data);
                      let insertPlayer = true;
                      let updatedData = latestPlayersData.current.map((oldData => {
                        if (oldData.userId === data.userId) {
                          console.log(insertPlayer)
                          insertPlayer = false;
                          return data;
                        } else { 
                          return oldData;
                        }
                      }));
                      
                      if (insertPlayer) {
                        updatedData.push(data);
                      }
                      latestPlayersData.current = updatedData;
                      console.log(updatedData);
                  });
              })
              .catch(e => console.log('Connection failed: ', e));
      }
  }, [connection]);

  const sendData = async (user) => {
    const data = {
        userId: user.id,
        name: user.name,
        tasksDone: user.tasksDone
    };

    if (connection.connectionStarted) {
        try {
            await connection.send('SendPlayerData', data);
            console.log("sent data");
            console.log(data);
        }
        catch(e) {
            console.error(e);
        }
    }
    else {
        alert('No connection to server yet.');
    }
}

  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
      <Layout>
        <Route exact path='/' render={(props) => (
          <>
          <MapCanvas {...props} playersData={TestData} />
          {/* TODO: This is just a test implementation. Remove and tie this to any state change in current player data. */}
          <Button onClick={() => {
            sendData(TestData[testCntr]);
            setTestCntr((testCntr + 1) % 4)
          }}>Hello!</Button>
          </>
        )} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    </Switch>
    
  );
}


export default App;