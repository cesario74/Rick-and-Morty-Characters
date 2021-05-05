import React from 'react'

import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import './App.scss'
import Homepage from './Views/Homepage/Homepage'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route
          render={() => {
            return (
              <Switch>
                <Route path={'/'} exact={true} component={() => <Homepage itemsLimit={20} />} />
              </Switch>
            )
          }}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
