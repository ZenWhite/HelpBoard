import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { BoardPage } from '../../pages/board/index'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={BoardPage} />
    </Switch>
  </BrowserRouter>
)
