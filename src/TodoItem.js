import React, { Component } from 'react';
import Proptyps from 'prop-types';

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

TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
  //PropTypes.oneOfType([Proptypes.number, PropTypes.string])
}
TodoItem.defaultProps = {
  test: 'hello world'//设置一个默认值，防止父组件无法传值的情况
}

export default TodoItem;