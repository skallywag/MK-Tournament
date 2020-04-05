import React, { Component } from 'react'
export default class ContactForm extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			name: '',
			email: '',
			msg: '',
		}	
	}
		changeEmail(e) {
			this.setState({
				email: e.target.value,
			},() => console.log(this.state.email))
		}
		changeName(e) {
			this.setState({
				name: e.target.value,
			}, () => console.log(this.state.name))
		}
		changeMsg(e) {
			this.setState({
				msg: e.target.value
			}, () => console.log(this.state.msg))
		}
		
	render() {
		return (
			<div className='contact-form'>
				{/* <h3 className='contact-heading'>Contact Us</h3> */}
				<input
					className='info'
					type='Email'
					placeholder='Email*'
					style={{ border: '1px solid black' }}
					onChange = { (e) => this.changeEmail(e) }
				/>
				<input
					className='info'
					type='Text'
					placeholder='Name*'
					onChange = {(e) => this.changeName(e)}
				/>
				<textarea
					className='msg'
					type='text'
					placeholder='Message*'
					onChange = {(e) => this.changeMsg(e)}
				/>
				<button className='contact-btn'>Send</button>
			</div>
		);
	}
}
















