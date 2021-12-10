import React from "react";
import ReactDOM from 'react-dom'

// 抽离组件到单独的js文件中


// 导入Hello

import Hello from "./components/Hello";

// 渲染组件

ReactDOM.render(<Hello / > ,document.getElementById('root'))