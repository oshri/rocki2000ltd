import react ,{Component} from 'react';
import Router, {withRouter} from 'next/router'
import Loading from '../../components/Loading';

const ProtectedRoute = (WrapperComponent) => {

    return class ProtectedRoute extends Component {

        constructor(props) {
            super(props)
        }

        componentDidUpdate() {
            if(!this.props.auth.isAuthenticated) {
                Router.push('/');
            }
        }
        
        render() {
            return this.props.auth.isAuthenticated ? <WrapperComponent {...this.props} /> : null
        }
    };

};

export default ProtectedRoute;