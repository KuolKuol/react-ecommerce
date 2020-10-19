import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends Component {
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    <NavContainer>
                        <ul>
                            <li><Link to='/'>Products</Link></li>
                            <li><Link to='/cart'>Cart</Link></li>
                        </ul>
                    </NavContainer>
                </nav>
            </React.Fragment>
        )
    }
}

const NavContainer = styled.ul `
    background-color:red;
`


export default Navbar;