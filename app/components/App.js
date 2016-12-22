import React, {Component} from 'react'
import {connect} from 'react-redux'

class App extends Component {
  render () {
    return (
      <div className='wrapper'>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(App)
