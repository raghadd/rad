import React from "react"
import Image from './bis.png'
class contentContainer extends React.Component {
  render() {
    return (
      <div className=''>
        <img src={Image}></img>
        <h1>Hello from Create React App</h1>
        <p>I am in a React Component!</p>
      </div>
    )
  }
}
export default contentContainer