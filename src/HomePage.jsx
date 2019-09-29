import React from "react";
//import {laptops, phones} from "./mydatabase.js";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

class HomePage extends React.PureComponent{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      selectedCategory: null,
    };
  }

  componentDidMount(){
    this.fetchItems();
  }

  fetchItems = () => {
    fetch("http://localhost:9000/api/items")
    .then(res => {
      console.log("res", res);
      return res.json();
    })
    .then(items => {
      console.log("items", items);
      this.setState({
        items
      });
    })
    .catch(err => {
      console.log("err", err)
    });
  }

  handleDropdown(event){
    console.log(event.target.value);
    this.setState({
      selectedCategory: event.target.value
    });

  }

  render(){
    return (
      <>
        <Header />
        <select onChange={this.handleDropdown.bind(this)}>
          <option value="phones">Phones</option>
          <option value="laptops">Laptops</option>
        </select>
        <ItemList items={this.state.items}/>
      </>
    );
  }
}

export default HomePage;
