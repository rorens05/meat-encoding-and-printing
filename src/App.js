import React, { Component } from 'react';
import { thisExpression } from '@babel/types';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imported_by: '',
			from: '',
			meat_description: '',
			evqmilc_no: '',
			container_no: '',
			volume: '',
			brand_name: '',
			production_date: '',
			expiry_date: '',
			fme_name: '',
			fme_no: '',
			paking_size: '',
			lot_no: '',
			buyer: '',
			destination: '',
			withdrawal_date: '',
			mtv_no: '',
			day: '',
			month: '',
			time: '',
			received_by: ''
		};
	}

	input = (props) => {
		return (
			<div className='input-container'>
				<label>{props.label}</label>
				<input type='text' onChange={this.onChange} name={props.name} placeholder={props.label} />
			</div>
		);
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value }, () => {
			console.log(this.state);
		});
	};

	renderAllKey = (call) => {
		let Input = this.input;
		return Object.keys(this.state).map((key) => {
			console.log(key);
			return <Input name={key} key={key} value={this.state[key]} label={key.split('_').join(' ')} />;
		});
	};

	render() {
		return (
			<div>
				<div className='outer-div'>
					<div className='inner-div'>
						<p className='imported-by'>{this.state.imported_by}</p>
						<span className='from'>{this.state.from}</span>
						<br />
						<div className='list-containers'>
							<span>{this.state.meat_description}</span>
							<span>{this.state.evqmilc_no}</span>
							<span>{this.state.container_no}</span>
							<span>{this.state.volume}</span>
							<span>{this.state.brand_name}</span>
							<span>{this.state.production_date}</span>
							<span>{this.state.expiry_date}</span>
							<span>{this.state.fme_name}</span>
							<span>{this.state.fme_no}</span>
							<span>{this.state.paking_size}</span>
							<span>{this.state.lot_no}</span>
						</div>
						<br />

						<div className='list-containers-bottom'>
							<span>{this.state.buyer}</span>
							<span>{this.state.destination}</span>
							<span>{this.state.withdrawal_date}</span>
							<span>{this.state.mtv_no}</span>
							<span>
								<p style={{ marginLeft: 68 }}>{this.state.day}</p>
								<p style={{ marginLeft: 68 }}> {this.state.month}</p>
								<p style={{ marginLeft: 68 }}>{this.state.time}</p>
							</span>
						</div>
						<span className='received'>{this.state.received_by}</span>
					</div>
				</div>

				<div className='display'>
					<h1>Encoding Program</h1>
					<form noValidate>
						{this.renderAllKey()}
						<span
							className='btn btn-reset'
							value='Reset'
							type='submit'
							onClick={(e) => {
								e.preventDefault();

								window.location.reload();
							}}
						>
							Reset
						</span>
						<span
							className='btn btn-print'
							value='Print'
							type='submit'
							onClick={(e) => {
								e.preventDefault();
								window.print();
							}}
						>
							Print
						</span>
					</form>
					<br />
					<br />
					<br />
					<br />
				</div>
			</div>
		);
	}
}
