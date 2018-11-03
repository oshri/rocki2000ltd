import Link from 'next/link';
import './Breadcrumbs.scss';

const Breadcrumbs  = ({link}) => {

    const trimBasePath = (path) => {
        const paths = path.split('/');

        const links = paths.map((_path, index) => {
    
            return {
                name: _path.split('-').join(' '),
                url: index === 0 ? _path : `${paths[index -1]}/${_path}`
            };
        });

        return links;
    };

    return (
        <div className="Breadcrumbs">
            { 
                trimBasePath(link).length > 1 ? (
                    trimBasePath(link).map((path, index) => {
                        return (
                            <Link key={index} href={`/${path.url}`} as={`/${path.url}`} prefetch>
                                <a className="breadcrumbs-link">{path.name}</a>
                            </Link>
                        );
                    })
                ) : ('')
            }
        </div>
    );
};

export default Breadcrumbs;