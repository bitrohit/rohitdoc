import React from 'react'
import ReactDOM from 'react-dom'

var style = {
  backgroundColor: "orange",
  color: "white",
  fontFamily: "Arial"
}

/*const title = React.createElement(
  'ul',
  {id: 'title', className: 'header', style: style},
  React.createElement(
    'li',
    {},
    'list items go here'
  )

)*/
class Message extends React.Component{
  render(){
    console.log(this.props.minutues)
    console.log(this.props.msg)
    return(
      <div style={style}>
        <h1 style={{color: this.props.color}}>{this.props.msg}</h1>
        <p>I'll check back in {this.props.minutues} minutues</p>
      </div>
    )
  }
}
ReactDOM.render(
  /*<div style={style}>
    <h1>Hello world!</h1>
    <p>The details go here..</p>
  </div>,*/
  <Message msg='how are you?' color='blue' minutues={5}/>,
  document.getElementById('root')
)