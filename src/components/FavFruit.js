import React from 'react';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import FavCard  from './FavCard';
import FormInfo from './FormInfo';
class FavFruit extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
      favArr:[],
      flag:false,
      name:'',
      image:'',
      price:'',
      id:''

    }
  }
  componentDidMount=()=>{
    const {user}=this.props.auth0;
    const email=user.email;
    axios.get(`http://localhost:3002/getfav?email=${email}`)
    .then(result=>{
     this.setState({
      favArr:result.data
     })
     
    }).catch(err=>{
      console.log('error');
    })
   }

   deletefruit=(id)=>{
    const {user}=this.props.auth0;
    const email=user.email;
     axios.delete(`http://localhost:3002/deletefav/${id}?email=${email}`)
     .then(result=>{
       this.setState({
        favArr:result.data
       })
     }).catch(err=>{
      console.log('error');
    })
   }

   handelForm=(item)=>{
     this.setState({
       flag:true,
       name:item.name,
       image:item.image,
       price:item.price,
       id:item._id
     })
   }

   updatefruit=(event)=>{
    event.preventDefault();
    const {user}=this.props.auth0;
    const email=user.email;
    const obj={
      name:event.target.name.value,
      image:event.target.image.value,
      price:event.target.price.value,
      email:email
    }

    axios.put(`/http://localhost:3002/updatefav/${this.state.id}`,obj)
    .then(result=>{
      this.setState({
        favArr:result.data,
        flag:false
      })
    }).catch(err=>{
      console.log('error');
    })
   }
  render() {
    return(
      <>
        <h1>My Favorite Fruits</h1>

      <FavCard favArr={this.state.favArr}
      deletefruit={this.deletefruit}
      handelForm={this.handelForm}
      updatefruit={this.updatefruit}
     />

      <FormInfo 
      flag={this.state.flag}
      name={this.state.name}
      image={this.state.image}
      price={this.state.price}
      updatefruit={this.updatefruit}/>

      </>
    )
  }
}

export default withAuth0(FavFruit);
