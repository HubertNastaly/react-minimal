import React from 'react'
import { render } from 'react-dom'
import App from './MyApp'
import AppTitle from './AppTitle'

render(<App />, document.getElementById('reactinjectedhere'));
render(<AppTitle/>, document.getElementsByTagName('h1').item(0));
