import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as FromPageRoot from '../../store/actions/page.action';
import { fetchTags } from '../../store/actions/page.action';
import InstagramTag from '../InstagramTag';
import './InstagramTagsFeed.scss';

class InstagramTagsFeed extends Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		await this.props.dispatch(FromPageRoot.fetchTags(this.props.tags));
	}

	render() {
		return (
			<div className="InstagramTagsFeed">
				{
                    this.props.instaTags
                        ? this.props.instaTags.map((tag, index) => {
                                return <InstagramTag key={index} tag={tag} />
                        })
                        : ('')
                }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		instaTags: state.page.instagram
	};
}

export default connect(mapStateToProps)(InstagramTagsFeed);
