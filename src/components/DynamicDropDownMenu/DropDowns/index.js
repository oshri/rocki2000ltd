import React from "react";
import MenuLink from '../../MenuLink';
import "./DropSowns.scss";

const Dropdown = (items, parent) => {

  return ({ current, prev }) => {
    
    return (
      <div className="DropSowns products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
       <div data-prevent-distortion>
        <div className="DropSowns-content">
          {
            parent.icon ? (
              <div className="icon-wrap">
                <div  className="parent-icon" 
                      style = {{
                      width: '112px',
                      height: '112px',
                      backgroundImage: `url(/static/svg/${parent.icon.toLowerCase()}.svg)`, 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat'}}>
                </div>
              </div>
            ) : ''
          
          }

          <div className="sub-links">
            { items.map((link, i) => {
                return <MenuLink  href={`/page?id=${link.id}&link=${link.link}`}
                                  as={`/page/${link.link}`}
                                  theme={'light'}
                                  key={i}>
                          {link.name}
                        </MenuLink>;
              })
            }
          </div>
        </div>
       </div>
     </div>
    );
  };
};


export default Dropdown;
