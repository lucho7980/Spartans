import {Component} from 'react';
import axios from 'axios';


export default class CreateDds extends Component{
    state= {
        Dds: [],
        athleteName:'',
        description:'',
        sport:'',
        age:'',
        club:'',
        editing: false,
        _id:''
    }

    componentDidMount(){
        const res= axios.get('http://localhost:4000/dds');
        this.setState({Dds: res.data})
    }
    
}
