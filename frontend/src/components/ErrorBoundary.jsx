import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = {hasError: false}
  }

  static getDerivedStateFormError(){
    return {hasError: true}
  }

  render(){
    if(this.state.hasError){
      return <h2>Something Went wrong. Please try again later.</h2>
    }

    return this.props.children
  }
}

export default ErrorBoundary