//https://www.youtube.com/watch?v=k68j9xlbHHk
import './App.css';
import ChangeColor from './components/ChangeColor';
import Login from './components/Login';
import Profile from './components/Profile';
import UpdateUserForm from './components/userForm';
import { useSelector } from 'react-redux';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';

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
            <DataFetching/> <br/><br/>
        </div>
    );
}

export default App;
