import React from 'react'
import style from './style.css'

class Input extends React.Component {
    componentDidMount() {
        console.log(style)
    }
    render () {
        return (
            <div className={style.good}>
                <input type="text"></input>
                <input type="button" value="添加"/>
            </div>
        )
    }
}

export default Input