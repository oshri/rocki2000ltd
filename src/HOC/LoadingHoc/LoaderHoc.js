import react ,{Component} from 'react';
import Loading from '../../components/Loading';

const LoaderHoc = (propName) => (WrapperComponent) => {

    return class LoaderHoc extends Component {
        
        isEmpty(prop) {
            return (
                prop === null ||
                prop === undefined ||
                (prop.hasOwnProperty('length') && prop.length === 0) ||
                (prop.constructor === Object && Object.keys(prop).length === 0)
            );
        }

        render() {
            return this.isEmpty(this.props[propName]) ? <Loading/> : <WrapperComponent {...this.props} />
        }
    }

};

export default LoaderHoc;