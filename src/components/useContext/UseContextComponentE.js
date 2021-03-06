import React, { useContext } from 'react'; 
import { ChannelContext, UserContext } from '../examples/Example5';
// import UseContextComponentF from './UseContextComponentF';


function UseContextComponentE() {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
            {/* <UseContextComponentF/> */}
            {user} - {channel}
        </div>
    )
}

export default UseContextComponentE
