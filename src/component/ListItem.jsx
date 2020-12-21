import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return <li id="ListItem">{this.props.item}</li>
    }
}

export default ListItem;