import React, { Component, createContext,lazy,Suspense,PureComponent,memo,useState} from 'react';
// const MyContext = createContext()
// //()传入默认值的作用是consumer找不到provider
// const YouContext = createContext()
// const TheContext = createContext()
// class Leaf extends Component {
//   static contextType =MyContext
//   render() {
//     const my=this.context
//     return (
//       <h1>{my}</h1>
//       // <MyContext.Consumer>
//         /* {my => (
//           <YouContext.Consumer>
//             {you => (
//               <TheContext.Consumer>
//                 {the => <h1>{the}</h1>}
//                  </TheContext.Consumer>
//             )}
//           </YouContext.Consumer>
//         )} */
//         /* {my => <h1>{my}</h1>} */
//       /* </MyContext.Consumer> */
//     )
//   }
// }
// class Middle extends Component {
//   render() {
//     return (
//       <Leaf></Leaf>
//     )
//   }
// }
// class App extends Component {
//   state = { my: 60, you: false ,the:90}
//   render() {
//     const { my, you ,the} = this.state
//     return (
//       <MyContext.Provider value={my}>
//         <YouContext.Provider value={you}>
//         <TheContext.Provider value={the}>
//           <button type="button" onClick={() => this.setState({ my: my - 1 })}>
//             press
//         </button>
//           <button type="button" onClick={() => this.setState({ you: !you })}>
//               click
//         </button>
//         <button type="button" onClick={() => this.setState({ the:the-1 })}>
//             switch
//         </button>
//             <Middle></Middle>
//             </TheContext.Provider>
//         </YouContext.Provider>
//       </MyContext.Provider>
//     )
//   }
// }
//context提供了一种方法，无需给每层组件添加props，而且可以共享数据
// const About=lazy(()=>import(/*webpackChunkName:"about"*/'./About.jsx'))
// class App extends Component{
//   state={hasError:false}
//   // componentDidCatch() {
//   //   this.setState({ hasError: true })
//   // }
//   static getDerivedStateFromError() {
//     return {hasError:true}
//   }
//   //返回一个新的state
//   render() {
//     if (this.state.hasError) {
//       return <div>error</div>
//     }
//     return (
//       <div>
//         <Suspense fallback={<div>loading</div>}><About></About></Suspense>
//       </div>
//     )
//   }
// }

// class Foo extends PureComponent{
//   // shouldComponentUpdate(nextProps,nextState) {
//   //   if (nextProps.name === nextProps.name) {
//   //     return false
//   //   }
//   //   return true
//   // }
//   //用pureComponnet, 只有当第一级的props发生变化，他才会从新渲染，触发视图不更新的bug
//   render() {
//     console.log('FOO RENDER');
//     return <div>{this.props.person.age}</div>
//   }
// }

//foo组件是无状态组件，可以用fun代替
// const Foo =memo(function Foo(props){
//     return (<div>{props.person.age}</div>)
// })
// class App extends Component{
//   state = {
//     count: 1,
//     person:{age:1}
//   }
//   // callback() {
//   //   //this的指向出现问题，如果使用bind(this)，还是指向新的内存
//   // }
//   callback = () => {
    
//   }
//   render() {
//     const person=this.state.person
//     return (
//       <div>
//         <button onClick={() => {
//           person.age++;
//           this.setState({ count: this.state.count + 1 })
//         }}>add</button>
//         <Foo person={person} cb={this.callback}></Foo>
//         {/* <Foo person={person} cb={()=>{}}></Foo> 使用purecomponent时，箭头函数每次都指向新的内存，person本身没有发生变化，purecomponent失效*/}
//       </div>
//     )
//   }
// }

class App2 extends Component{
  state={count:0}
  render() {
    const {count}=this.state
    return (<div>
      <button
        onClick={()=>{this.setState({count:this.state.count+1})}}
      >click({count})</button>
    </div>)
  }
}
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button
        onClick={()=>setCount(count+1)}
      >click({count})</button>
    </div>
  )
}
export default App
