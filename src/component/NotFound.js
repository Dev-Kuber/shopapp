import React from 'react'
import { Redirect } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <Redirect path="\"/>
            <h1>404 Error</h1>
        </div>
    )
}

export default NotFound
