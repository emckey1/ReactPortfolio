import React, { Component } from 'react';
import axios from 'axios';
import { MDBBtn } from 'mdbreact';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    resetForm() {
        this.setState({name: '', email: '', message: ''})
    }
    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url:"http://localhost:8080/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Email Sent!");
                this.resetForm();
            }
            else {
                alert("Email didn't send! Please try again");
            }
        })
    }
    render() {
        var formTitle = "Fill out the form below to reach out to me"
        var formSub = "*Will reach out in 1-2 buisness days"
        return (
            <div>
                <div>
                    <div id="contactScreen">
                        <h1 className="formTitle">{ formTitle }</h1>
                        <h5 className="formSub">{ formSub }</h5>
                        <div id="contactForm">
                            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email Address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" rows="5" placeholder="Feel free to leave me a message :)" value={this.state.message} onChange={this.onMessageChange.bind(this)} required />
                                </div>
                                <MDBBtn className="btnSubmit" gradient="green" size="lg">Submit</MDBBtn>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}