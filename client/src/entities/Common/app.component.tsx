import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BoardPage } from '../../pages/board/index'
import { HomePage } from '../../pages/home/index'
import { ContentLimiter } from './Content/Limiter/limiter.component'
import { Header } from './Header/header.component'
import { theme } from '../../theme'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Header />

    <ContentLimiter>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />

          <Route path="/board/:id" component={BoardPage} />
        </Switch>
      </BrowserRouter>
    </ContentLimiter>
  </ThemeProvider >
)