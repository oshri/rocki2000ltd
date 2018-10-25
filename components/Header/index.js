import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNavigation } from '../../store';

import * as _ from 'underscore';
import './Header.scss';
import StaticMenu from '../StaticMenu';
import Logo from '../Logo';
import DynamicDropDownMenu from '../DynamicDropDownMenu';
import MobileMenu from '../MobileMenu';

class Header extends Component {
	delta = 5;
    navbarHeight = 88;
    
	constructor(props) {
		super(props);

		this.state = {
			didScroll: true,
			lastScrollTop: 0,
			navClass: 'nav-down'
		};

		this.hideHeader = this.hideHeader.bind(this);
		this.showHeader = this.showHeader.bind(this);
		this.getDocHeight = this.getDocHeight.bind(this);
		this.hasScrolled = this.hasScrolled.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	async getInitialProps({ store }){
		debugger
		await store.dispatch(fetchNavigation());
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	hideHeader() {
		this.setState({
			navClass: 'nav-up'
		});
	}

	showHeader() {
		this.setState({
			navClass: 'nav-down'
		});
	}

	getDocHeight() {
		return Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	}

	hasScrolled() {
		const st = window.scrollY;

		if (Math.abs(this.state.lastScrollTop - st) <= this.delta) return;

		if (st > this.state.lastScrollTop && st > this.navbarHeight) {
			this.hideHeader();
		} else {
			if (st < this.getDocHeight()) {
				this.showHeader();
			}
		}

		this.setState({
			lastScrollTop: st
		});
	}

	handleScroll(event) {
		this.setState({
			didScroll: true
		});

		_.throttle(this.hasScrolled(), 250);
	}

	render() {

		let links = this.props.navigation.map((link, i) => {
			return <li key={i}>{link.name}</li>;
		});

		return (
			<header id="navbar" className={`Header ` + this.state.navClass}>
				<article>
					<Logo/>
					<div className={"header-menu-wrap"}>
						<DynamicDropDownMenu theme={'dark'}/>
						<StaticMenu theme={'dark'}/>
						<MobileMenu/>
					</div>
				</article>
			</header>
		);
	}
}


// Passing data to props from Store
function mapStateToProps(state) {
	return {
		navigation: state.navigation
	};
}

// Passing Dispatch function to props
function mapDispatchToProps(dispatch) {
	return {
		fetchNav: bindActionCreators(fetchNavigation, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);