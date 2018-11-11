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

    render() {
        return (
            <div className="AdminPageCard">
                <h4>{this.props.name}</h4>
                <div className="children">
                    {
                        this.props.children ? (this.childrens) : null
                    }
                </div>

                <Modal
					isOpen={this.state.modal}
					toggle={this.toggleEditorModal}
					className="InstagramCustomeDialog"
                    >
					<ModalHeader
						className="InstaModalHeader"
						toggle={this.toggleEditorModal} />

					<ModalBody className="InstaModalBody">
						<div>
                            <span>{this.state.selectedPage ? this.state.selectedPage.name : null}</span>
                            <PageTabsEditor/>
                        </div>
					</ModalBody>
				</Modal>
            </div>
        );
    }

}


export default AdminPageCard;