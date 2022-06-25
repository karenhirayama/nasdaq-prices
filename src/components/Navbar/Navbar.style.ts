import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
    border-bottom: 1px solid #fff;
`

export const NavbarLink = styled(Link)`
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #EBEFF2;
    margin: auto;
`