import React, { Component } from "react";

export default class index extends Component {
  state = {
    count: 1,
  };
  componentDidMount() {
    document.querySelector("#btn-raw").addEventListener("click", this.onClick);
  }
  incrementMultiple = () => {
    //1.setState不会立刻改变React组件中state的值；
    //2.多次setState函数调用产生的效果会合并。

    const currentCount = this.state.count;
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    console.log(currentCount); //1

    //如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state。
  };
  onClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  onClickLater = () => {
    setTimeout(() => {
      this.onClick();
    });
  };
  render() {
    // console.log(this.state.count);
    return (
      <div>
        <button onClick={this.incrementMultiple}>+</button>
        <button onClick={this.onClick}>Increment</button>
        <button id="btn-raw">Increment Raw</button>
        <button onClick={this.onClickLater}>Increment Later</button>
      </div>
    );
  }
}
