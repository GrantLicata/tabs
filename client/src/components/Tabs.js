import React from 'react'
import { useState } from 'react'

const Tabs = (props) => {

    const [content, setContent] = useState("")

    const textStyle = {
        height: '100px'
    }

  return (
    <div>
        <div>
            {props.array.map((item) => (
                <button className='btn btn-secondary m-2' onClick={() => { setContent(item.content)}}>{item.label}</button>
            ))}
        </div>
        <div className='container bg-light col-3 border border-dark' style={textStyle}>{content}</div>

    </div>
  )
}

export default Tabs