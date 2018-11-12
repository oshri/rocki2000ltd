import react, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PageTabsEditor from '../PageTabsEditor';
import './AdminPageCard.scss';

class AdminPageCard extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          modal: false,
          selectedPage: undefined
        };
    }


    toggleEditorModal = (page) =>{
        this.setState({
          modal: !this.state.modal,
          selectedPage: page
        });
    }

    childrens = (
        <ul>
            {
                this.props.children.map((page, index) => {
                    return (
                        <li key={index}>
                            <button className="children-link" onClick={() => {this.toggleEditorModal(page)}}>
                                {page.name}
                            </button>
                        </li>
                    );
                })
            }
        </ul>
    )
    
    submitForm = (data) => {
        console.log('data submited: ', data);
    };

    render() {
        return (
            <div className="AdminPageCard">
                <div className="header">
                    <span className="status"></span>
                    <div className="title-wrapper">
                        <h4>{this.props.name}</h4>
                        <label className="status-time">
                            As of 
                            <span className="current-time">
                                November 11th 2018, 9:02PM 
                            </span>
                        </label>
                    </div>

                </div>
                <div className="children">
                    {
                        this.props.children ? (this.childrens) : null
                    }
                </div>

                <Modal
					isOpen={this.state.modal}
					toggle={this.toggleEditorModal}
					className="AdminCustomeDialog"
                    >
					<ModalHeader
						className="AdminModalHeader"
						toggle={this.toggleEditorModal} >
                            <span>{this.state.selectedPage ? this.state.selectedPage.name : null}</span>
                    </ModalHeader>

					<ModalBody className="AdminModalBody">
						<div>
                            <PageTabsEditor initialValues={this.state.selectedPage}  handleSubmit={this.submitForm}/>
                        </div>
					</ModalBody>
				</Modal>
            </div>
        );
    }

}


export default AdminPageCard;