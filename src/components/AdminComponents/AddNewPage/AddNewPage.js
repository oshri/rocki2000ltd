import react, {Component} from 'react';
import { connect } from 'react-redux';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AddNewPage.scss';
import Loading from '../../Loading';
import CreatePageEditor from '../CreatePageEditor';

class AddNewPage extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
		  modal: false
        };
    }


    toggleEditorModal = (page) =>{
        this.setState({
          modal: !this.state.modal
        });
    }

    handleEditorChange = (editorState) => {
        this.setState({editorState});
    }

    render() {
        return (
            <div className="AddNewPage">
				<button className="add-new rounded-icon-button" onClick={() => {this.toggleEditorModal(this.props)}}>
					<FontAwesomeIcon icon="plus" />
				</button>

                <Modal
					isOpen={this.state.modal}
					toggle={this.toggleEditorModal}
					className="AdminCustomeDialog">

					<ModalHeader
						className="AdminModalHeader"
						toggle={this.toggleEditorModal} >
                            <div className="modal-header-content">
                                <span>New Page</span>
                            </div>
                    </ModalHeader>

					<ModalBody className="AdminModalBody">
						{
                        	this.props.loading ? <Loading /> : <CreatePageEditor onSubmitForm={this.props.create}/>
                        }
					</ModalBody>
				</Modal>
            </div>
        );
    }

}


function mapStateToProps(state) {
    return {
		loading: state.admin.pages.isLoading
	};
}

export default connect(
	mapStateToProps
)(AddNewPage);