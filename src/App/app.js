import React from 'react'
import style from './style.css'

import Input from '../Componets/Input/index'

const textCenter = {
  textAlign: 'center'
}
class App extends React.Component {
  render() {
    return (
      <div>
          <h1 style={textCenter}>todo app</h1>
          <div className={style.appBox}>
            <Input/>
          </div>
          
      </div>
    )
  }
}

export default App