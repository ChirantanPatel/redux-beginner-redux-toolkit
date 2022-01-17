//https://www.youtube.com/watch?v=k68j9xlbHHk

import React from 'react';
import ChangeColor from './components/ChangeColor';
import Login from './components/Login';
import Profile from './components/Profile';
import UpdateUserForm from './components/userForm';
import { useSelector } from 'react-redux';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import UseContextComponentC from './components/useContext/UseContextComponentC';
import './App.css';
import CounterOne from './components/CounterOne';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
    const user = useSelector((state) => state.user.value);
    return (
        <div className="App"> 
            <Profile/>
            <Login/> <br/>
            <ChangeColor/> <br/><br/>
            {user.name ? 
                <UpdateUserForm/> : null
            } <br/><br/>
            <MouseContainer/>  <br/><br/>
            <IntervalHookCounter/> <br/><br/>
            <CounterOne/>  <br/><br/>
            <UserContext.Provider value={'Chirantan'}>
                <ChannelContext.Provider value={'Codevolution'}>
                    <UseContextComponentC/>
                </ChannelContext.Provider>
            </UserContext.Provider>

            <DataFetching/> <br/><br/>

            
        </div>
    );
}

export default App;
