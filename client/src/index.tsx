import 'normalize.css'
import './index.sass'

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { UserService } from './entities/User/user.service'

window.createUser = function() {
    const userService = new UserService()
    userService.createUser({
        name: 'Andrew',
        email: 'test@mail.ru',
        password: '123456789'
    }).then(console.log)
      .catch(console.log)
}


import { App } from './entities/Common/app.component'

ReactDOM.render(<App />, document.getElementById('root'))
