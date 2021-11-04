// 1 导入 react
import React from 'react';
import ReactDOM from 'react-dom';

// 引入 css
// import './index.css'

// //2  创建react元素
// const title = React.createElement('h1',null,'hello react啊哈哈')

// //3 渲染react
// ReactDOM.render(title,document.getElementById('root'))

//------------------------------

// 使用 jsx 添加类名  使用span时，如果没有内容可以使用 <span/>
// const name = 'freelaeder'
// const age = '21'
// const title = (
// <h1 className='title'>
// hello jsx
//  <span>woshi-span </span>
//  <p>{name},年龄{age}</p>
// </h1>
// )
// 渲染
// ReactDOM.render(title,document.getElementById('root'))

//------------------------------

// 条件渲染
// const isLoading = true

// if else

// const loadData= () =>{
//   if(isLoading){
//   return <div>loading.....</div>
//   }
//   return <div>数据加载完毕。此处显示加载后的数据</div>
// }

// 三元表达式

// const loadData= () =>{
//   return isLoading ? (<div>loading.....</div>) : (<div>数据加载完成，此处显示加载后的内容！！！</div>)
// }

// 逻辑与运算符
// const loadData = () =>{
//   // && 只有条件都满足，都是true时，才会显示， 
//   // || 只会展示为 true
//   return isLoading && (<div>loading.....-----</div>)
// }

// const title = (
//   <h1>条件渲染 {loadData()}</h1>
// )
// ReactDOM.render(title,document.getElementById('root'))

//------------------------------

// 渲染列表
// const hobbys = [
//   {id:1,hobbies:'爱喝奶茶'},
//   {id:2,hobbies:'爱吃螺狮粉'},
//   {id:3,hobbies:'爱听歌'},
// ]

// const lists = (
//   <ul>
//     {hobbys.map(m => <li key={m.id}>{m.hobbies}---{m.id}</li>)}
//     <h1 className='title' style={{color:'red',background:'aqua'} }>处理样式行内</h1>

//   </ul>
// )
// ReactDOM.render(lists,document.getElementById('root'))


// ---------------------------------
// 函数组件
function Hello(){
  return (
    <div>one 函数组件</div>
  )
}
ReactDOM.render(<Hello />,document.getElementById('root'))