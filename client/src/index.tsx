import 'normalize.css'
import './index.sass'

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './entities/Common/App/app.component'

ReactDOM.render(<App />, document.getElementById('root'))
