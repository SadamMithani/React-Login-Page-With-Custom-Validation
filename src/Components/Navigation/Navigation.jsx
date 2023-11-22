import React from 'react';
import { Link } from 'react-router-dom';
// import '../../../public/assets/js'

const Navigation = () => {
  return (
    <div>
        {/* <!-- sidebar menu area start --> */}
        <div className="sidebar-menu">
            <div className="sidebar-header">
                <div className="logo">
                    <Link to="/"><img src="assets/images/icon/logo.png" alt="logo" /></Link>
                </div>
            </div>
            <div className="main-menu">
                <div className="menu-inner">
                    <nav>
                        <ul className="metismenu" id="menu">
                            <li className="active">
                                <Link to="/dashboard" aria-expanded="true"><i className="ti-dashboard"></i><span>dashboard</span></Link>
                                {/* <ul className="collapse">
                                    <li className="active"><Link to="index.html">ICO dashboard</Link></li>
                                    <li><Link to="index2.html">Ecommerce dashboard</Link></li>
                                    <li><Link to="index3.html">SEO dashboard</Link></li>
                                </ul> */}
                            </li>
                            <li>
                                <Link to="/sidebar-types" aria-expanded="true"><i className="ti-layout-sidebar-left"></i><span>Sidebar
                                        Types
                                    </span></Link>
                                {/* <ul className="collapse">
                                    <li><Link to="index.html">Left Sidebar</Link></li>
                                    <li><Link to="index3-horizontalmenu.html">Horizontal Sidebar</Link></li>
                                </ul> */}
                            </li>
                            <li>
                                <Link to="/charts" aria-expanded="true"><i className="ti-pie-chart"></i><span>Charts</span></Link>
                                {/* <ul className="collapse">
                                    <li><Link to="barchart.html">bar chart</Link></li>
                                    <li><Link to="linechart.html">line Chart</Link></li>
                                    <li><Link to="piechart.html">pie chart</Link></li>
                                </ul> */}
                            </li>
                            <li>
                                <Link to="/ui-features" aria-expanded="true"><i className="ti-palette"></i><span>UI Features</span></Link>
                                {/* <ul className="collapse">
                                    <li><Link to="accordion.html">Accordion</Link></li>
                                    <li><Link to="alert.html">Alert</Link></li>
                                    <li><Link to="badge.html">Badge</Link></li>
                                    <li><Link to="button.html">Button</Link></li>
                                    <li><Link to="button-group.html">Button Group</Link></li>
                                    <li><Link to="cards.html">Cards</Link></li>
                                    <li><Link to="dropdown.html">Dropdown</Link></li>
                                    <li><Link to="list-group.html">List Group</Link></li>
                                    <li><Link to="media-object.html">Media Object</Link></li>
                                    <li><Link to="modal.html">Modal</Link></li>
                                    <li><Link to="pagination.html">Pagination</Link></li>
                                    <li><Link to="popovers.html">Popover</Link></li>
                                    <li><Link to="progressbar.html">Progressbar</Link></li>
                                    <li><Link to="tab.html">Tab</Link></li>
                                    <li><Link to="typography.html">Typography</Link></li>
                                    <li><Link to="form.html">Form</Link></li>
                                    <li><Link to="grid.html">grid system</Link></li>
                                </ul> */}
                            </li>
                            <li>
                                <Link to="/icons" aria-expanded="true"><i className="ti-slice"></i><span>icons</span></Link>
                                {/* <ul className="collapse">
                                    <li><Link to="fontawesome.html">fontawesome icons</Link></li>
                                    <li><Link to="themify.html">themify icons</Link></li>
                                </ul> */}
                            </li>
                            <li>
                                <Link to="/Tables" aria-expanded="true"><i className="fa fa-table"></i>
                                    <span>Tables</span></Link>
                                {/* <ul className="collapse">
                                    <li><Link to="table-basic.html">basic table</Link></li>
                                    <li><Link to="table-layout.html">table layout</Link></li>
                                    <li><Link to="datatable.html">datatable</Link></li>
                                </ul> */}
                            </li>
                            <li><Link to="/maps"><i className="ti-map-alt"></i> <span>maps</span></Link></li>
                            <li><Link to="/invoice-summary"><i className="ti-receipt"></i> <span>Invoice Summary</span></Link></li>
                            <li>
                                <Link to="/Pages" aria-expanded="true"><i className="ti-layers-alt"></i> <span>Pages</span></Link>
                                {/* <ul className="collapse">
                                    <li><Link to="login.html">Login</Link></li>
                                    <li><Link to="login2.html">Login 2</Link></li>
                                    <li><Link to="login3.html">Login 3</Link></li>
                                    <li><Link to="register.html">Register</Link></li>
                                    <li><Link to="register2.html">Register 2</Link></li>
                                    <li><Link to="register3.html">Register 3</Link></li>
                                    <li><Link to="register4.html">Register 4</Link></li>
                                    <li><Link to="screenlock.html">Lock Screen</Link></li>
                                    <li><Link to="screenlock2.html">Lock Screen 2</Link></li>
                                    <li><Link to="reset-pass.html">reset password</Link></li>
                                    <li><Link to="pricing.html">Pricing</Link></li>
                                </ul> */}
                            </li>
                            {/* <li>
                                <Link to="javascript:void(0)" aria-expanded="true"><i className="fa fa-exclamation-triangle"></i>
                                    <span>Error</span></Link>
                                <ul className="collapse">
                                    <li><Link to="404.html">Error 404</Link></li>
                                    <li><Link to="403.html">Error 403</Link></li>
                                    <li><Link to="500.html">Error 500</Link></li>
                                </ul>
                            </li> */}
                            <li>
                                <Link to="/multi-level-menu" aria-expanded="true"><i className="fa fa-align-left"></i> <span>Multi
                                        level menu</span></Link>
                                {/* <ul className="collapse">
                                    <li><Link to="#">Item level (1)</Link></li>
                                    <li><Link to="#">Item level (1)</Link></li>
                                    <li><Link to="#" aria-expanded="true">Item level (1)</Link>
                                        <ul className="collapse">
                                            <li><Link to="#">Item level (2)</Link></li>
                                            <li><Link to="#">Item level (2)</Link></li>
                                            <li><Link to="#">Item level (2)</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">Item level (1)</Link></li>
                                </ul> */}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- sidebar menu area end --> */}
    </div>
  );
}

export default Navigation;
