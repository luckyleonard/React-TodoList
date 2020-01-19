import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props)
  {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content } = this.props;//解构赋值
    return (
      <li onClick={this.handleClick}>
        {content}
        {/* 接收并使用父组件传过来的值 */}
      </li>)
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }//使用父元素传过来的handleDeleteItem(deleteItem)方法，和index值
}

export default TodoItem;