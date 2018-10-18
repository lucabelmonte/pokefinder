import React, {Component} from 'react';
import '../App.css';

import { Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';


export default class NavBar extends Component {

  constructor(props){
    super(props);

    
    this.state = {
      isOpen: true
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({isOpen: !this.state.isOpen})
  }

  render(){
    const {props} = this;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{props.Name}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/"></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}