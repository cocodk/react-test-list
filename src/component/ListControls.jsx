import React, { Component } from 'react';

class ListControls extends Component {

    constructor(props){
        super(props);
         
            this.state={inputValue:''};
        

        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.clearList=this.clearList.bind(this);
    }

    handleChange(e){
        this.setState({inputValue: e.target.value});
    }

    addItem(myItem){
        this.props.addItem(myItem);
    }

    handleClick(){
        this.addItem(this.state.inputValue);
        this.setState({ inputValue:''});
    }

    clearList(){
        this.props.clearList();
    }
    render() {
        return (
            <div style={{paddingTop:15}}>
            <input id="InputField"
            value= {this.state.inputValue}
            onChange={this.handleChange}
            
            type="text" /> 
            <button id="AddItem" onClick={this.handleClick}> Add Item </button>
            <button id="ClearList" onClick={this.clearList}> Clear List </button>
            </div>
        );
    }
}

export default ListControls;