import react, {Component} from 'react';
import { connect } from 'react-redux';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {Editor, EditorState, RichUtils} from 'draft-js';
import InfoTabsEditor from '../InfoTabsEditor';
import './AdminPageCard.scss';
import Loading from '../../Loading';

class AdminPageCard extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          modal: false,
          selectedPage: undefined,
          activeTab: '1'
        };
    }


    toggleEditorModal = (page) =>{
        this.setState({
          modal: !this.state.modal,
          selectedPage: page
        });
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
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

    handleEditorChange = (editorState) => {
        this.setState({editorState});
    }
    
    // handleSubmit = (event) => {
        
    //     const { update } = this.props;
    //     const editorState = this.state.editorState;
    //     const contentState = editorState.getCurrentContent();
    //     const html = stateToHTML(contentState);
    //     // EXECUTE CONNECTED SAMPLE ACTION CREATOR
    //     debugger
    //     update(data);
    // }

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
                            <div className="modal-header-content">
                                <span>{this.state.selectedPage ? this.state.selectedPage.name : null}</span>
                                <span className="id">{this.state.selectedPage ? this.state.selectedPage.parent : null}</span>
                            </div>
                    </ModalHeader>

					<ModalBody className="AdminModalBody">
                        <div>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                                >
                                Info
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                                >
                                Seo
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                                >
                                Instegram Tags
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            {
                                this.props.loading ? <Loading /> : null
                            }
						
                            <TabPane tabId="1">
                                <InfoTabsEditor 
                                    editorState={this.state.editorState}
                                    onEditorChange={this.handleEditorChange}
                                    initialValues={this.state.selectedPage}
                                    onSubmitForm={this.props.update}/>
                            </TabPane>
                            <TabPane tabId="2">
                                
                            </TabPane>
                            <TabPane tabId="3">
                                
                            </TabPane>
                        </TabContent>
                        </div>
					</ModalBody>
				</Modal>
            </div>
        );
    }

}


// Passing data to props from Store
function mapStateToProps(state) {
    return {
		loading: state.admin.pages.isLoading
	};
}


export default connect(
	mapStateToProps
)(AdminPageCard);