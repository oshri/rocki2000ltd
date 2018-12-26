import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FromTagsActions from '../../../store/actions/admin/tags.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FieldArraysForm from '../FormsComponents/FieldArraysForm';
import { isThisQuarter } from 'date-fns';

class TagsTabEditor extends Component {

	constructor(props) {
		super(props);

		this.onSubmitTag = this.onSubmitTag.bind(this);
		this.onDeleteTag = this.onDeleteTag.bind(this);
		this.convertTagsArrayToObject = this.convertTagsArrayToObject.bind(this);
	}

	componentDidMount() {
		const { loadPageTags, page } = this.props;
    	loadPageTags(page._id);
	}

	onSubmitTag(value) {
		const {  page, create } = this.props;
		create({
			name: value,
			pageId: page._id
		});
	}

	onDeleteTag(value) {
		const {  page, remove } = this.props;
		remove({
			name: value,
			pageId: page._id
		});
	}

	convertTagsArrayToObject(tags){
		const { page } = this.props;
		let tagObjects = {};
		
		if (tags) {
			tagObjects = tags.map((tag) =>  {
				return {name: tag, pageId: page._id};
			});
		}

		return  tagObjects;
	}



	
	render() {
		return (
			<div>
				{	this.props.tags.data ? 
					<FieldArraysForm 
						onSubmitTag={this.onSubmitTag}
						onDeleteTag={this.onDeleteTag}
						initialValues={{tags: this.convertTagsArrayToObject(this.props.tags.data)}}/>
					: null
				}
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
		remove: bindActionCreators(FromTagsActions.removeTag, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TagsTabEditor);
