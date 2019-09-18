import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imported_by: '',
			from: '',
			description: '',
			evqmilc: '',
			container_no: '',
			volume: '',
			brand: '',
			production_date: '',
			expiry_date: '',
			fme_name: '',
			fme_no: '',
			paking_size: '',
			lot_no: '',
			buyer: '',
			destination: '',
			withdrawal: '',
			mtv_no: '',
			day: '',
			month: '',
			time: ''
		};
	}

	render() {
		return (
			<div>
				<div className='outer-div'>
					<div className='inner-div'>
						<p className='imported-by'>imported by</p>
						<span className='from'>From nameasdfsadfasdf</span>
						<br />
						<div className='list-containers'>
							<span>Meat Description</span>
							<span>eVQMILC</span>
							<span>Container No</span>
							<span>Volume</span>
							<span>Brand name</span>
							<span>production date</span>
							<span>expiry date</span>
							<span>fme name</span>
							<span>fme no</span>
							<span>packing size</span>
							<span>log no</span>
						</div>
						<br />

						<div className='list-containers-bottom'>
							<span>Buyer/ End User:</span>
							<span>Destination</span>
							<span>withdrawal</span>
							<span>MTV No</span>
							<span>
								<p style={{ marginLeft: 68 }}>12th</p>
								<p style={{ marginLeft: 68 }}> September</p>
								<p style={{ marginLeft: 68 }}>4321421</p>
							</span>
						</div>
						<span className='received'>Recieved By:</span>
					</div>
				</div>

				<div className='display'>
					<h1>Encoding Program</h1>
					<form />
				</div>
			</div>
		);
	}
}
