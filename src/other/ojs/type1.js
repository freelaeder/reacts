// 1 导入 react
import React from 'react';
import ReactDOM from 'react-dom';

// 引入 css
// import './index.css'

// ---------------------------------
// 函数组件

// function Hello(){
//   return (
//   <div>one 函数组件</div>
//   )H
// }     

// 箭头函数
// const Hello = () => <div> 第一个箭头函数组件</div>




// 创建一个类组件
class Hello extends React.Component {
  render() {
    return (
      <div> 第一个类组件</div>
    )
  }
}
// 渲染组件
ReactDOM.render(<Hello />,document.getElementById('root')) 