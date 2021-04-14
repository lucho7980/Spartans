    // state={
    //     users:[],
    //     username:'',
    //     email:'',
    //     password:'',
    //     confirm_password:''
    // };
    // async componentDidMount(){
    //     this.getUsers();
    //     console.log(this.state.users);
    // };
    // getUsers= async () =>{ 
    //     const res = await axios.get('http://localhost:4000/users');
    //     this.setState({users:res.data});
    // };
    // onChangeUserName = (e) => {
    //     this.setState({username:e.target.value});
        
    // };
    // onChangeEmail = (e)=>{
    //     this.setState({email:e.target.value});
    // }
    // onChangePassword = (e) => {
    //     this.setState({password:e.target.value})
    // }
    // onConfirmPassword= (e) =>{
    //     this.setState({confirm_password:e.target.value})
    // }
    // onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post('http://localhost:4000/users',{username:this.state.username, email:this.state.email, password:this.state.password, confirm_password:this.state.onConfirmPassword})
    //     this.setState({username:'',email:''});
    //     /* this.setState({email:''}) */
    // };
    // render(){
    //     return(
    //         <div className="row">
    //             <div className="col-md-4">
    //                 <div className="card">
    //                     <div className="card-body">
    //                         <div className="h3">
    //                             Create New User
    //                         </div>
    //                         <form onSubmit={this.onSubmit}>
    //                             <div className="form-group">
    //                                 <input type="text" className="form-control"
    //                                  value={this.state.username} 
    //                                  onChange={this.onChangeUserName}/>
    //                                  <input type="email" className="form-control"
    //                                  value={this.state.email} 
    //                                  onChange={this.onChangeEmail}/>
    //                                  <input type="password" className="form-control"
    //                                  value={this.state.password} 
    //                                  onChange={this.onChangePassword}/>
    //                                  <input type="password" className="form-control"
    //                                  value={this.state.confirm_password} 
    //                                  onChange={this.onConfirmPassword}/>
    //                                  <button type="submit" className="btn btn-danger">Save</button>
    //                             </div>
    //                         </form>
    //                     </div>
    //                 </div>
    //                 <div className="col-md-6">
    //                     <div className="list-group">
    //                         {
    //                             this.state.users.map(user=>
    //                                 <li className="list-group list-group-item list-group-item-action" 
    //                                 key={user._id}
    //                                 onDoubleClick={()=>this.deleteUser(user._id)}
    //                                 >
    //                                 {user.username}
    //                                 </li>
    //                                 )
    //                         }
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }