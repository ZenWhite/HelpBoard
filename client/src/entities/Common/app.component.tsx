import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { BoardPage } from '../../pages/board/index'
import { HomePage } from '../../pages/home/index'
import { Wrapper } from './Content/Wrapper/wrapper.component'
import { Header } from './Header/header.component'

export const App: FC = () => (
  <>
    <Header />
    <Wrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/board/:id" component={BoardPage} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  </>
)
