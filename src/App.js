
//To Comunicate to firebase
import React  from "react";
import firebase from "./config/firebase";
import {getDatabase, set, push,child,ref} from 'firebase/database'
class App extends React.Component{

    constructor(){
        super()
        this.state ={
            todoes :[
                {title:"Asif",edit:false},
                {title:"Shahzaib", edit:false},
                {title:"Abdul Hameed", edit:false},
                {title:"Mubbashir", edit:false}
            ],
            value :''
        }
    }
    addNewItem = ()=>{
        //Method 1
       // this.state.todoes.push(this.state.value)
       // this.setState({todoes:this.state.todoes})
       //Method 2
       let db = getDatabase(firebase)
       console.log(db)
       let refDB = ref(db,'todoItems/items')
       let key = push(refDB).key
       console.log(key)
       let newChild = child(refDB,key)
       
       var obj = {title:this.state.value}
       var objN = obj
       objN.Key = key
       set(newChild,objN)
       //firebase.database().ref('/').child("todoes")
        //.push(obj)
        
       this.setState({
        todoes:[...this.state.todoes,obj],
        value:''
       })
    }

    deleteItem = (index)=>{
        this.state.todoes.splice(index,1)
        this.setState({
            todoes:this.state.todoes
        })
    }
    editItem = (index,val)=>{
        this.state.todoes[index].edit = true
        this.setState({
            todoes:this.state.todoes
        })
    }

    handleChagne = (e,index) => {
        
        let eState = this.state.todoes
        //console.log(eState)
        eState[index].title = e.target.value
        this.setState({todoes:eState})
        //console.log(this.state.todoes)
        
    }

    update = (index)=>{
        let eState = this.state.todoes
        eState[index].edit = false
        this.setState({todoes:eState})
    }

    render() {
        //Destructing of an object
        let {todoes,value} = this.state
        return (
            <div>
                <input type="text" placeholder="Enter Value Here" value={value} onChange={(e)=>this.setState({value:e.target.value})} />
                <button onClick={this.addNewItem} >Add Item</button>
                <h1>
                    <ul>
                        {todoes.map((item,index)=>{
                            return <li key={index}>{item.edit ? <input value={item.title} type="text" onChange={(e)=>this.handleChagne(e,index)} /> : item.title}
                            {item.edit ? <button onClick={()=>this.update(index)}>Update</button> :
                            <button onClick={()=>this.editItem(index,item.title)} >Edit</button> }
                            <button onClick={()=>this.deleteItem(index)}>Delete</button></li>
                        })}
                    </ul>
                </h1>
            </div>
        );
    }
}

export default App