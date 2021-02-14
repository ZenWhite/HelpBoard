import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Board } from '../../pages/Board'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Board} />
    </Switch>
  </BrowserRouter>
)
