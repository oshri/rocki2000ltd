import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTags } from '../../../store/actions/page.action';
import InstaTags from '../InstaTags';

class InstaTagsFeed extends Component {
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

export default connect(mapStateToProps)(InstaTagsFeed);
