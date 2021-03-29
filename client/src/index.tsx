import 'normalize.css'
import './index.sass'

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

/*function createUser() {
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

    var urlencoded = new URLSearchParams()
    urlencoded.append("name", "atsos")
    urlencoded.append("password", "clown1234")
    urlencoded.append("email", "clopwn@cc.ss")

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    }

    fetch("http://localhost:3000/users/create", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
}

window.createUser = createUser*/

import { App } from './entities/Common/App/app.component'

ReactDOM.render(<App />, document.getElementById('root'))
