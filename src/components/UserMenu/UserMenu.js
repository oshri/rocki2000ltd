import react, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'next/router';
import './UserMenu.scss';

class UserMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpened: false
		};
	}

	toggleState = () => {
		this.setState({
			isOpened: !this.state.isOpened
		});
    };
    
    logOut = (event) => {
		event.preventDefault();
        this.props.logout();
        this.props.router.push('/');
    }

	render() {
		return (
			<div className="UserMenu" onMouseLeave={this.toggleState}>
				<div className="user-avatar" onMouseEnter={this.toggleState} />
				<div className="dropdown">
					{this.state.isOpened ? (
						<div>
							<div
								className="caret"
								data-prevent-distortion
								data-transform-origin="left bottom"
							/>
							<div className="dropdown-background">
								<a className="admin-menu-button" href="/admin/pages">
									<span>Pages</span>
									<FontAwesomeIcon icon="sitemap" />
                                </a>
                                <a className="admin-menu-button logout" href="/" onClick={this.logOut}>
									<span>Logout</span>
									<FontAwesomeIcon icon="sign-out-alt" />
                                </a>
                            </div>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default withRouter(UserMenu);


