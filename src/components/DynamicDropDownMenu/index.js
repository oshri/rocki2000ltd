import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import Dropdown from "./DropDowns";
import DropDownsContainer from "./DropDownsContainer";
import MenuLink from '../MenuLink';

import "./DynamicDropDownMenu.scss";
import { throws } from "assert";


class DynamicDropDownMenu extends React.Component {

  constructor(props) {
    super(props);

    this.buildNavigation = this.buildNavigation.bind(this);
    
    if (props.navigation) {
      this.buildNavigation(props.navigation);
    }

		this.state = {
      activeIndices: []
    };
  }
  

  static propTypes = {
		theme: PropTypes.string
	};
	
	static defaultProps = {
		theme: 'dark',
  };
  
  buildNavigation(navigation, theme){
    const newNav = navigation.map(nav => {
      return {
        name: nav.name,
        link: nav.link,
        id: nav.id,
        dropdown: new Dropdown(nav.children, nav)
      };
    });

    this.navigation = newNav;
  }

  onMouseEnter = event => {
    const currentIndex = Number(event.currentTarget.dataset.index);
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === currentIndex) return;
    
    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(currentIndex)
    }));
  };

  onMouseLeave = () => {
    this.setState({
      activeIndices: []
    });
  };

  render() {
    let CurrentDropdown;
    let PreviousDropdown;

    const previousIndex = this.state.activeIndices[this.state.activeIndices.length - 2];
    const currentIndex = this.state.activeIndices[this.state.activeIndices.length - 1];

    if (typeof currentIndex === "number") {
      CurrentDropdown = this.navigation[currentIndex].dropdown;
    }

    if (typeof previousIndex === "number") {
      PreviousDropdown = this.navigation[previousIndex].dropdown;
    }

    return (
      <div className="DynamicDropDownMenu">
        <nav className="navbar-el" onMouseLeave={this.onMouseLeave}>
          <ul className="navbar-list">
            {this.navigation.map((mainLink, index) => {
              return (
                <div
                  className="navbar-item-el"
                  onMouseEnter={this.onMouseEnter}
                  onFocus={this.onMouseEnter}
                  data-index={index}
                  key={index}
                >
                  <MenuLink   href={`/page?id=${mainLink.id}&link=${mainLink.link}`}
                              as={`/page/${mainLink.link}`}
                              theme={this.props.theme}>
                    {mainLink.name}
                  </MenuLink>
                  <div className="dropdown-slot">
                    {currentIndex === index && (
                      <div>
                        <DropDownsContainer preventDistortion="[data-prevent-distortion]">
                          <div
                            className="caret"
                            data-prevent-distortion
                            data-transform-origin="left bottom"
                          />
                          <div className="dropdown-background">
                            {PreviousDropdown && <PreviousDropdown prev />}
                            <CurrentDropdown current />
                          </div>
                        </DropDownsContainer>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default DynamicDropDownMenu;