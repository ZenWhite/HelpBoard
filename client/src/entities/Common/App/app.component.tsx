import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { DashboardPage } from '~pages/dashboard/index'
import { BoardPage } from '~pages/board/index'
import { ContentLimiter } from '../Content/Limiter/limiter.component'
import { Header } from '../Header/header.component'
import { theme } from '~theme'
import { LoginPage } from '~pages/login/index'
import { RegistrationPage } from '~pages/registration/index'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />

      <ContentLimiter column>
        <Switch>
          <Route path="/" component={DashboardPage} exact />
          <Route path="/board/:id" component={BoardPage} />
          <Route path="/login" component={LoginPage}/>
          <Route path="/registration" component={RegistrationPage}/>
        </Switch>
      </ContentLimiter>
      
    </BrowserRouter>
  </ThemeProvider>
)
