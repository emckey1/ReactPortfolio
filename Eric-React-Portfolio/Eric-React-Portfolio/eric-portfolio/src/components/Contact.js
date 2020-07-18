import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: 'Name', email: 'email@example.com'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                            <div id="contactForm"></div>
                            <form id="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email Address</label>
                                    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" rows="5" placeholder="Feel free to leave me a message :)" onChange={this.handleChange} value={this.state.feedback} required />
                                </div>
                                <MDBBtn className="btnSubmit" gradient="green" size="lg" onClick={this.handleSubmit}>Submit</MDBBtn>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }

        handleChange(event) {
            this.setState({feedback: event.target.value})
        }

        handleSubmit() {
            const templateId = 'template_id';

            this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
        }

        sendFeedback(templateId, variables) {
            window.emailjs.send(
                'gmail', templateId,
                variables
            ).then(res => {
                console.log("Email Sent!");
            })
            .catch(err => console.error("Email Failed, Here's why: ", err))
        }
    }
