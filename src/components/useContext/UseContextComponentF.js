import React from 'react'
import { UserContext, ChannelContext } from '../../App'



function UseContextComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div> <h2> User context value {user}, channel context value {channel} </h2> </div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default UseContextComponentF
