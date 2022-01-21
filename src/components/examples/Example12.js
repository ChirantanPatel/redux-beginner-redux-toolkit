import React from 'react'
import CustomHookCounterOne from '../customHooks/CustomHookCounterOne'
import CustomHookCounterTwo from '../customHooks/CustomHookCounterTwo'
import DocTitleOne from '../customHooks/DocTitleOne'
import DocTitleTwo from '../customHooks/DocTitleTwo'
import UserFormCustomHook from '../customHooks/UserFormCustomHook'
import TopNavBar from '../layout/TopNavBar';

function Example12() {
    return (
        <div>
            <TopNavBar/>
            <h2>Example 12 (Custom Hooks)</h2>
            <DocTitleOne/>
            <DocTitleTwo/>
            <CustomHookCounterOne/>
            <CustomHookCounterTwo/>
            <UserFormCustomHook/>
        </div>
    )
}

export default Example12
