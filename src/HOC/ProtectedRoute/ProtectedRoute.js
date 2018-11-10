import react ,{Component} from 'react';
import Router from 'next/router'
import Loading from '../../components/Loading';

const ProtectedRoute = (WrapperComponent) => {

    return class ProtectedRoute extends Component {

        constructor(props) {
            super(props)
        }

        componentDidMount() {
            if(!this.props.auth) {
                Router.push('/');
            }
        }

        checkValid() {
            return true
        }
        
        render() {
            return this.props.auth ? <WrapperComponent {...this.props} /> : <Loading/> ;
        }
    };

};

export default ProtectedRoute;