import React from "react";
import MenuLink from '../../MenuLink';

const Dropdown = (items) => {

  return ({ current, prev }) => {

    return (
      <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
       <div data-prevent-distortion>
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
    );
  };
};


export default Dropdown;
