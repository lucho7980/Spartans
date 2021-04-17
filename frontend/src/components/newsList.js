import React, { Component } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import {Link} from 'react-router-dom';



export default class newsList extends Component {
    
    state = {
        news:[]
    }

    componentDidMount() {
        this.getNews()
    }
    
    async getNews() {
        const res = await axios.get('http://localhost:4000/news');
        this.setState({news: res.data})
    }

    async deleteNews(id) {
        await axios.delete('http://localhost:4000/news/' + id);
    }
    
    render() {
        return (
            <div className="row">
                {
                    this.state.news.map(news =>(
                        <div className="col-md-4 p-2" key={news._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{news.title}</h5>
                                    <Link className="btn btn-secondary" to={"/edit/" + news._id}>
                                        Edit
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>{news.content}</p>
                                    <p>{news.author}</p>
                                    <p>{format(news.date)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(news._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
