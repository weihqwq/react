//项目的根组件
//app->index.js->index.html
import { useState } from "react"

const count=100

function getname()
{
  return 'weihao'
}
function islogin()
{
  return true
}

const list=[
  {id:1001,name:'vue' },
  {id:1002,name:'react' },
  {id:1003,name:'what' }

]

const atricleType=1 //0 1 3

function getType()
{
  if(atricleType===0)
  {
    return <div>无图</div>
  }
  if(atricleType===1)
  {
    return <div>单图</div>
  }
  if(atricleType===3)
  {
    return <div>三图</div>
  }
}

function Button()
{
  return <button>click wo</button>
}

function App() {
  // const handleClick=()=>
  // {
  //   console.log('button clicked')
  // }

  //事件参数e
    // const handleClick=(e)=>
    // {
    //   console.log('button clicked',e)
    // }
  //传递自定义参数
    const handleClick=(name)=>
    {
      console.log('button clicked',name)
    }
    const [count1,setCount1]=useState(0)
    const handleClick1=()=>
    {
      setCount1(count1+1)
    }
    return (
    <div className="App">
      this is app
      {/*使用引号传递字符串*/}
      {'this is message'}
      {/*识别js变量 */}
      {count}
      {/*函数调用 */}
      {getname()}
      {/*方法调用*/}
      {new Date().getDate()}
      {/*使用js对象 */}
      <div style={{color:'red'}}>this is div</div>
      {/*渲染列表 */}
      <ul>
        {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
      {/*逻辑与 && */}
      {islogin() && <span>this is span ture</span>}
      {/*三元运算 */}
      {islogin() ? <span> loading...</span> : <span>not login</span>}
      {getType()}
      <button onClick={()=>handleClick('jack')}>click me</button>

      <button onClick={handleClick1}>{count1}</button>
    </div>
  );
}

export default App;
