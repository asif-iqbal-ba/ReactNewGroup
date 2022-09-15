import React  from "react";

class App extends React.Component{

    constructor(){
        super()
        this.state ={
            todoes :[
                "Asif",
                "Shahzaib",
                "Abdul Hameed",
                "Mubbashir"
            ],
            value :''
        }
    }
    addNewItem = ()=>{
        //Method 1
       // this.state.todoes.push(this.state.value)
       // this.setState({todoes:this.state.todoes})
       //Method 2
       this.setState({
        todoes:[...this.state.todoes,this.state.value],
        value:''
       })
    }

    deleteItem = (index)=>{
        this.state.todoes.splice(index,1)
        this.setState({
            todoes:this.state.todoes
        })
    }
    editItem = (index)=>{

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
                            return <li key={index}>{item}
                            <button onClick={()=>this.editItem(index)} >Edit</button>
                            <button onClick={()=>this.deleteItem(index)}>Delete</button></li>
                        })}
                    </ul>
                </h1>
            </div>
        );
    }
}

export default App