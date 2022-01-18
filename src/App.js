// https://www.youtube.com/watch?v=k68j9xlbHHk
// https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=1

import React , { useReducer } from 'react';
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
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ReducerExA from './components/reducer-context-example/ReducerExA';
import ReducerExB from './components/reducer-context-example/ReducerExB';
import ReducerExC from './components/reducer-context-example/ReducerExC';
import DataFetchingOne from './components/data-fetch/DataFetchingOne';
import DataFetchingTwo from './components/data-fetch/DataFetchingTwo';
import ParentComponent from './components/useCallback/ParentComponent';
import UseMemoCounter from './components/useMemo/UseMemoCounter';
import FocusInput from './components/useRef/FocusInput';
import ClassTimer from './components/useRef/ClassTimer';
import HookTimer from './components/useRef/HookTimer';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    
    switch(action) {
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' :   
            return initialState;
        default :
            return state 
    }

}

function App() {
    const user = useSelector((state) => state.user.value);

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App"> 
            <h2>Example 1</h2>
            <Profile/>
            <Login/> <br/> <br/>

            <h2>Example 2</h2>
            <ChangeColor/> <br/><br/>
            {user.name ? 
                <UpdateUserForm/> : null
            } <br/><br/>

            <h2>Example 3</h2>
            <MouseContainer/>  <br/><br/>

            <h2>Example 4</h2>
            <IntervalHookCounter/> <br/><br/>

            <h2>Example 5</h2>
            <CounterOne/>  <br/><br/>
            <CounterTwo/>  <br/><br/>
            <CounterThree/>  <br/><br/>

            <h2>Example 6</h2>
            <UserContext.Provider value={'Chirantan'}>
                <ChannelContext.Provider value={'Codevolution'}>
                    <UseContextComponentC/>
                </ChannelContext.Provider>
            </UserContext.Provider>

            <h2>Example 7 (useReducer with useContext)</h2>
            <CountContext.Provider value={{ countState : count, countDispatch : dispatch }}>  
            
                    Count - {count}
                    <ReducerExA/>
                    <ReducerExB/>
                    <ReducerExC/>
               
            </CountContext.Provider>

            <h2>Example 8</h2>
            <DataFetching/> <br/><br/>

            <h2>Example 9 (Fetching data with useReducer)</h2>
            <b> Example A : </b>
            <DataFetchingOne/>
            <b> Example B : </b>
            <DataFetchingTwo/>


            <h2>Example 10 (useCallback)</h2>
            <ParentComponent/>

            <h2>Example 10 (useMemo)</h2>
            <UseMemoCounter/>

            <h2>Example 10 (useRef)</h2>
            <b> Example A : </b>
            <FocusInput/> <br/>
            <b> Example B : </b>
            <ClassTimer/>
            <HookTimer/>

        </div>

    );
}

export default App;
