import React from 'react'

function Frame({url}) {
  return (
    <>
    <div>
        <ul>
            <li>left</li>
            <li>{url}</li>
            <li>|</li>
        </ul>
    </div>
    <div>
    <iframe src={url}></iframe>
    </div>
    </>
  )
}

export default Frame