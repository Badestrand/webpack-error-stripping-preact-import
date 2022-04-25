import * as preact from 'preact'
import MyComponent from './MyComponent'

const container = document.createElement('div')
preact.render(<MyComponent/>, container)
document.body.appendChild(container)
