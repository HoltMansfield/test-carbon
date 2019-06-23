import React, { Component } from 'react'
import styled from 'styled-components'


const ErrorText = styled.div`
  color: red;
  font-size: 0.9em;
`

class ErrorMessage extends Component {
  render() {
    return (
      <ErrorText>{this.props.text}</ErrorText>
    )
  }
}


export { ErrorMessage }
