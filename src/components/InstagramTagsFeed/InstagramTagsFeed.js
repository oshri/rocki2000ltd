import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTags } from '../../store/actions/page.action';
import './InstagramTagsFeed.scss';
import InstaTags from '../Instagram/InstaTags';

class InstagramTagsFeed extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(fetchTags(this.props.tags));
	}

	render() {
		return (
			<InstaTags tags={this.props.instaTags}/>
		);
	}
}

function mapStateToProps(state) {
	return {
		instaTags: state.page.instagram
	};
}

export default connect(mapStateToProps)(InstagramTagsFeed);
