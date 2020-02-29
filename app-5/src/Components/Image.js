import React from 'react'
import App from '../App'

function Image(props){

    return(
        <div>
            <img src={props.url}/>
        </div>
    )
}

export default Image