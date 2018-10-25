import React from "react";

const ProductsDropdown = ({ current, prev }) => {
  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            <li>
              <h3 className="heading">User</h3>
              <p>You're always our main focus</p>
            </li>
            <li>
              <h3 className="heading">Techonolgy</h3>
              <p>You've got you covered</p>
            </li>
            <li>
              <h3 className="heading">Strategy</h3>
              <p style={{ marginBottom: 0 }}>The only way to success</p>
            </li>
          </ul>
        </div>
        <div className="dropdown-section">
          <ul className="sub=products-list">
            <li>
              <h3 className="heading">Benefits</h3>
              <p>Alignment, Transparency, Empowerment, and Speed.</p>
            </li>
            <li>
              <h3 className="heading">Tracking impact</h3>
              <p>We believe in efficiency coming from simplifying data complexity.</p>
            </li>
            <li>
              <h3 className="heading">People</h3>
              <p>Our change agents.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const DevelopersDropdown = ({ current, prev }) => {
  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            <li>
              <h3 className="heading">Features</h3>
              <p>Craft Your Design.</p>
            </li>
            <li>
              <h3 className="heading">Design</h3>
              <p>Professional Design Tools.</p>
            </li>
            <li>
              <h3 className="heading">Manage</h3>
              <p style={{ marginBottom: 0 }}>It's all in the details.</p>
            </li>
          </ul>
        </div>
        <div className="dropdown-section">
          <ul className="sub=products-list">
            <li>
              <h3 className="heading">Participate</h3>
              <div>Suggest new features, report bugs.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const CompanyDropdown = ({ current, prev }) => {
  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            <li>
              <h3 className="heading">Manage</h3>
              <p>Get Full Control.</p>
            </li>
            <li>
              <h3 className="heading">Content Management System</h3>
              <p>WYSIWYG What You See Is What You Get.</p>
            </li>
            <li>
              <div>
                <h3 className="heading">Dashboard</h3>
                <p style={{ marginBottom: 0 }}>
                  Dashboard provides you with an efficient way to manage all your clients
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="dropdown-section">
          <ul className="sub=products-list">
            <li>
              <h3 className="heading">Improve</h3>
              <p>Search Engine Optimization.</p>
            </li>
            <li>
              <h3 className="heading">Publish</h3>
              <p>Go live with ease.</p>
            </li>
            <li>
              <h3 className="heading">Revision History</h3>
              <p>Preview older versions and changes and recover the version you like best.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ProductsDropdown, DevelopersDropdown, CompanyDropdown };
