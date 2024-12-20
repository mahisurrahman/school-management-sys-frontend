import React from 'react'
import HomePage from '../../../features/Home/pages/HomePage'
import NavigationBar from '../../components/navigationBar/NavigationBar'
import { Outlet } from 'react-router'

function HomeLayouts() {
    return (
        <div>
            <NavigationBar Outlet={Outlet}/>
            {/* <HomePage /> */}
        </div>
    )
}

export default HomeLayouts