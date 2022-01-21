import React from 'react'
import UseContextComponentC from '../useContext/UseContextComponentC';
import TopNavBar from '../layout/TopNavBar';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function Example5() {
    return (
        <div>
            <TopNavBar/>
            <h2>Example 5</h2>
            <UserContext.Provider value={'Chirantan'}>
                <ChannelContext.Provider value={'Codevolution'}>
                    <UseContextComponentC/>
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Example5
