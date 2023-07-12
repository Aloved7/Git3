import React, { Component } from 'react'
import axios from 'axios'
import './mock/data2'

export default class App extends Component {
  state = {
    userName: "tom",
    pwd: 123
  }
  render() {
    return (
      <div>
        <h3>App组件</h3>
        <p>添加todo</p>
        <p>删除todo</p>
      </div>
    )
  }
  componentDidMount() {
    // let { userName, pwd } = this.state
    // axios.get('check.php', {
    //   params: { userName: 'tom', pwd: 123 }
    // })
    axios.get('check.php', { params: { userName: 'tom', pwd: 123 } })
    // .then(res => {
    //   console.log(res.data.data)
    // })
  }
}
