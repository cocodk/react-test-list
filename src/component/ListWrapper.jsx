import React, { Component } from 'react';
import ListControls from './ListControls';
import ListHeader from './ListHeader';
import ListItem from './ListItem';


export default class ListWrapper extends Component {
    constructor (props){
        super(props);
        this.state={list:[]};
        this.addItem=this.addItem.bind(this);
        this.clearList=this.clearList.bind(this);
          }
    addItem(myItem){
        //1. get the current list
        //add new item
        //set state to the list 
      
            this.setState({list: [...this.state.list,myItem]});

    }
    clearList(){
        this.setState({list:[]});
    }

    renderList(){
        return this.state.list.map((listItem)=>{
            return <ListItem item={listItem}/>
            

        });
    };
    render() {
        console.log('listWrapperstate: ',this.state);
        
        return (
            <div>
                
                <ListHeader name="Coco"/>
                <ListControls addItem={this.addItem} clearList={this.clearList}/>
                {this.renderList()}

            </div>
        );
    }}

