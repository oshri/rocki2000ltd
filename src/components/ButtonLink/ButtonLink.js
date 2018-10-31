import Link from 'next/link';
import './ButtonLink.scss';

const ButtonLink  = ({href, hrefAs, children}) => {

    return (
        <Link href={href} as={hrefAs} prefetch>
            <a className="ButtonLink">{children}</a>
        </Link>
    );
};

export default ButtonLink;