import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const OutletComponent = () => {

    return (
        <div>
            <NavBar />
            <Outlet />

        </div>
    )
}

export default OutletComponent
