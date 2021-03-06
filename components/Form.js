import * as React from "react";
import {calTotal} from '../actions/index'
import { connect } from "react-redux";
class Form extends React.Component {
  constructor() {
    super();
    this.state = { price: null, qty: null };
  }
  handleSubmit = (e)=> {
    e.preventDefault();
    this.props.dispatch(calTotal(this.state.price,this.state.qty))
  }
  handleInput = (e)=> {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="price"
            value={this.state.price}
            placeholder="Price"
            onChange={this.handleInput}
          />
          <br />
          <input
            type="number"
            name="qty"
            value={this.state.qty}
            placeholder="Quantity"
            onChange={this.handleInput}
          />
          <button type="submit" >Calculate</button>
        </form>
      </div>
    );
  }
}
export default connect()(Form)
