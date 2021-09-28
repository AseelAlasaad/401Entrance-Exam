import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import FruitCard from './FruitCard';
class Home extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
      data:[],
      favArr:[]
    }
  }
componentDidMount=()=>{
 axios.get('https://fruit-api-301.herokuapp.com/getFruit')
 .then(result=>{
  this.setState({
    data:result.data.fruits
  })
  console.log(this.state.data);
 }).catch(err=>{
   console.log('error');
 })
}

addFav=(name,image,price)=>{
const {user}=this.props.auth0;
const email=user.email;
const obj={
  name:name,
  image:image,
  price:price,
  email:email
}
axios.post(`http://localhost:3002/addtofav`,obj)
.then(result=>{
  this.setState({
    favArr:result.data
  })
  console.log(this.state.favArr);
}).catch(err=>{
  console.log('Error');
})
}
  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <FruitCard data={this.state.data}
        addFav={this.addFav}/>
      </>
    )
  }
}

export default withAuth0(Home);
