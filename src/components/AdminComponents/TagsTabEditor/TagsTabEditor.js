import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FromTagsActions from '../../../store/actions/admin/tags.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FieldArraysForm from '../FormsComponents/FieldArraysForm';

class TagsTabEditor extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { loadPageTags, page } = this.props;
    	loadPageTags(page._id);
	}

	createTag(values) {
		console.log('createTag', values);	
	}

	
	render() {
		return (
			<div>
				<FieldArraysForm onSubmit={this.createTag} />
				{/* <TagsForm initialValues={{tags: this.props.tags.data}} handleSubmit={this.showResults}/> */}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tags: state.admin.tags
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadPageTags: bindActionCreators(FromTagsActions.loadPageTags, dispatch),
		create: bindActionCreators(FromTagsActions.createTags, dispatch),
		update: bindActionCreators(FromTagsActions.updateTag, dispatch),
		remove: bindActionCreators(FromTagsActions.removeTag, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TagsTabEditor);
