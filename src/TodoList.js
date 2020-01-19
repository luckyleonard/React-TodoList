import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
  constructor(props){
    super(props);//引用Component构造函数实现继承
    this.state = {
      inputValue: '',
      list: []
    }
    //this.state是这个组件的数据,需要绑定在state下面
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    //优化绑定挪入constructor
  }

  render() {
    return (
      <Fragment>
        <div> 
          <label htmlFor='inserArea'>请输入todo</label>
          <input 
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button> 
        </div>
        <ul>
          {this.getTodoListItem()}
        </ul>
      </Fragment>
    //  JSX中使用变量需要添加{}包裹变量
    //  绑定webapi方法时候需要onChange,C大写 
    //  需要使用bind绑定this指向
    )
  }

  getTodoListItem() {
    return this.state.list.map((item,index)=>{
      return (
        <Fragment>
          {/* <li
            // dangrouslySetInnerHTML={{__html: item}} 
            key={index}
            onClick={this.handleItemDelete.bind(this,index)}
            // 绑定删除操作，并传递index作为参数*
          >{item}</li>) */}
          <TodoItem 
            content={item} 
            index={index}
            deleteItem={this.handleItemDelete}//一定要绑定this
            />
        </Fragment>)
    })
  }
  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
    //需要使用setState方式去改变属性的值
    //函数参数从对象变为一个函数，为异步函数接收状态
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],//数组扩展运算符，对数组进行添加操作
      inputValue: ''//并清空输入框内容
    }))
    //使用prevState避免修改掉现有的状态
  }

  handleItemDelete(index) {
    //immutable
    //state 不许我们做任何修改，需要拷贝出来做修改，再赋值，要不然会影响性能优化
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index,1);//将数组操作写入函数体内
      return {list}//返回list 等同于{list：list}
    })
  }
}

export default TodoList;