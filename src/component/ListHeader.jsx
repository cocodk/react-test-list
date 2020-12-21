import React, { Component } from 'react';
class ListHeader extends Component {    
    render() {        
        console.log('my prop name is: ', this.props.name);        
        return <div id="Header">Welcome {this.props.name}! Enter Your Favorite Sea Animals!</div>;    }}
        export default ListHeader
