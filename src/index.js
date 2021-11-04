// 1 导入 react
import React from 'react';
import ReactDOM from 'react-dom';

// 引入 css
// import './index.css'

// ---------------------------------
// 函数组件
function Hello(){
  return (
    <div>one 函数组件</div>
  )
}
ReactDOM.render(<Hello />,document.getElementById('root'))