import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Bar } from './components/Bar'
import { Main } from './components/Main'

import Particles from 'react-particles-js'
import { useStyles } from './theme/mainStyles'

function App() {
  
  const classes = useStyles()

  return (
    <div className="App">
      <Particles className={classes.particles} params={require('./assets/particlesjs-config.json')} />
      <CssBaseline />
      <Bar />
      <Main />
    </div>
  )
}

export default App
