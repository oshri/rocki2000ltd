import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

class EditorField extends Component {
	constructor(props) {
		super(props);
		// here we create the empty state
		let editorState = EditorState.createEmpty();
		// if the redux-form field has a value

        if (props.input.value) {
			// convert the editorState to whatever you'd like
			editorState = EditorState.createWithContent(
				    (props.input.value)
			);
		}
		// Set the editorState on the state
		this.state = {
			editorState
		};
	}

	onChange = (editorState) => {
		const { input } = this.props;
		// converting to the raw JSON on change
		input.onChange(convertToRaw(editorState.getCurrentContent()));
		// Set it on the state
		this.setState({ editorState });
	};

	render() {
		return (
			<Editor
				{...this.props.input}
				onEditorStateChange={this.onChange}
				editorState={this.state.editorState}
			/>
		);
	}
}

export default EditorField;
