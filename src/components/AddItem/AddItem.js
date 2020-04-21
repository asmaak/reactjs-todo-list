import React ,{Component} from 'react';
import './AddItem.css'

class AddItem extends Component {
    state =({
        name:'',
        age:''
    })
    handleChange = (e) =>{
        // console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    addItem = (e)=>{
        e.preventDefault();
        if((e.target.name.value ==='') || (e.target.age.value ==='')){
         return false;
        }else{
            this.props.addItem(this.state);
            this.setState({
                name:'',
                age:''
            }) 
        }
        // console.log(this.state)
      
    
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter your name ...." id="name" onChange={this.handleChange} value={this.state.name} />
                    <input type="number" placeholder="Enter your age ...." id="age" onChange={this.handleChange}  value={this.state.age}/>
                    <input type="submit"/>

                </form>
            </div>
        )
    }
}
export default AddItem