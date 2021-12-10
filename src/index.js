import React from "react";
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    count : 0,
    test :'a'
  }
  // 事件处理程序
  onIncrement() {
    this.setState ({
      count: this.state.count + 2
    })
  }

  // 渲染
  render() {
    return (
      <div>
        <h1>计数器： {this.state.count}</h1>

        <button onClick={() => this.onIncrement()}> + 2</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))