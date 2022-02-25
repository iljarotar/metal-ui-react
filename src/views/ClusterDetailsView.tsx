import React from 'react'
import TopBar from '../components/TopBar'
import '../styles/ClusterDetailsView.css'

interface state {
  todos: any
}

export default class ClusterDetailsView extends React.Component<{}, state> {
  constructor(props: any) {
    super(props)
    this.state =  {
      todos: null
    }    
  }
  async componentDidMount() {
    const index = Math.floor(Math.random() * 200)
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
    this.setState({
      todos: await response.json()
    })
    console.log(this.state)
  }
  render() {
    return (
      <div id="cluster-details">
        <TopBar values={true} title='Cluster Details'/>
        {this.state.todos?<div id="data">
          <p><b>User Id: </b>{this.state.todos.userId}</p>
          <p><b>Id: </b>{this.state.todos.id}</p>
          <p><b>Title: </b>{this.state.todos.title}</p>
        </div>:
        <p>Loading...</p>
        }
      </div>
    )
  }
}