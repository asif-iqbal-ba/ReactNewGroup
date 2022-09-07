import logo from './logo.svg';
import './App.css';
import React from 'react';

let fName ='Abdullah'

class Header extends React.Component{
  render() {
    return (
      <div>
        <h2 style={{color:"red"}}>Header Component</h2>
        <button type="button" className="btn btn-danger">Danger</button>
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    let myName = 'Asif'
    let arr = ['a','b','c']
    let todoes =[{id:1,Name:"Asif"},{id:2,Name:"Iqbal"}]
    return(
      <div>
        <Header/>
        <h1>
          Hello World {myName} {fName} {arr}
        </h1>

        <ul>
          {todoes.map((item,index)=>{
            return <li key={index}>{`${item.id} - ${item.Name}`} </li>
          })}
        </ul>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
