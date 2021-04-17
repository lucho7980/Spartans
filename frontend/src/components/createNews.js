import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNews extends Component {

    state = {
        news: [],
        title: '', 
        author: '', 
        cathegory: '', 
        content: '', 
        date: new Date(),
        editing: false,
        _id: ''
    }


    async componentDidMount () {
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/news' + this.props.match.params.id)
            console.log(res.data);
            this.setState({
                title: res.data.title, 
                author: res.data.author, 
                cathegory: res.data.cathegory, 
                content: res.data.content, 
                date: new Date(res.data.date),
                editing: true,
                _id: this.props.match.params.id
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const newNews ={
            title: this.state.title, 
            author: this.state.author, 
            cathegory: this.state.cathegory, 
            content: this.statecontent, 
            date: this.state.date
        }
        if (this.state.editing) {
            await axios.put('http://localhost:4000/news' + this.state._id, newNews)
        } else {
            await axios.post('http://localhost:4000/news', newNews)
        }

    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChageDate = date => {
        this.setState({date})
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Note</h4>

                    <div className="form-group">
                        <input type="text"
                        className="form-control"
                        placeholder="titulo"
                        name="title"
                        onChange={this.onInputChange}
                        value={this.state.title}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control"
                        placeholder="Categoria de la noticia"
                        name="cathegory"
                        onChange={this.onInputChange}
                        value={this.state.cathegory}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                        name="content"
                        className="form-control"
                        placeholder="Ingrese el cuerpo de la nota"
                        onChange={this.onInputChange}
                        value={this.state.content}
                        required
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control"
                        placeholder="Autor"
                        name="author"
                        onChange={this.onInputChange}
                        value={this.state.author}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <DatePicker
                        className="form-control"
                        selected={this.state.date}
                        onChange={this.onChageDate}
                        />
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn=primary">
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        )
    }

}



