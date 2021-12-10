import React from "react";
import ReactDOM from 'react-dom'

// 抽离组件到单独的js文件中


// 导入Hello

// import Hello from "./components/Hello";

// 渲染组件

//  类组件

// class App extends React.Component {
//   // 事件处理程序
//   handleClick() {
//     alert('梁露妮爱奶茶')
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}> click</button>
//     )
//   }
// }

// 函数组件绑定事件

// function App() {
//   // 事件处理程序
//   function handleClick(e){
//     // 阻止浏览器的默认行为
//     e.preventDefault()
//     console.log(e);
//   }

//     return (
//       <a href="http://itcast.cn/" onClick={handleClick}> click click </a>
//     )
// }

class App extends React.Component {

  // constructor() {
  //   super()
  //   // 初始化 status
  //   this.state = {
  //     count: 0
  //   }
  // }
  
  // 简化语法初始化status 推荐
  state = {
    count:0,
    test:'a'
  }
  //  事件处理程序
  onIncrement() {
    this.setState({
      count:this.state.count+ 2
    })
    
  }

  render() {
    return (
      <div> 有状态组件
      <h1>计数器 ： {this.state.count} </h1>
      {/* 箭头函数解决 */}
      <button onClick={() => this.onIncrement()}> + 2</button>
      {/* <button onClick={this.onIncrement}> + 1</button> */}
      {/* <button onClick={()=>{
        this.setState({
          count: this.state.count + 1
        })
      }}>加1</button> */}

      </div>


    )
  }
}



ReactDOM.render( <App/ > , document.getElementById('root'))