import react, {Component} from 'react';
import PropTypes from 'prop-types';
import LoadingHoc from '../../../HOC/LoadingHoc';
import InstaTag from '../InstaTag';
import './InstaTags.scss';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  InstaPost from '../InstaPost';

class InstaTags extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
 
    render() {

        return (
            <div className="InstaTags">
                {
                    this.props.tags.map((tag, index) => <button className="InstaButton" key={index} onClick={this.toggle}><InstaTag tag={tag}/></button>)
                }

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="InstagramCustomeDialog">
                    <ModalHeader className="InstaModalHeader" toggle={this.toggle}></ModalHeader>
                    <ModalBody className="InstaModalBody">
                        {
                            this.props.tags.map((tag, index) => <InstaPost tag={tag} key={index}/>)
                        }
                    </ModalBody>
            </Modal>
            </div>
        )
    }
};

InstaTags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object)
};

export default LoadingHoc('tags')(InstaTags);