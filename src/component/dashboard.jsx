import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from "react";
import {FaGem,FaHeart} from 'react-icons/fa';
// import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

export default function Dashboard(){

    return(
    <ProSidebar>
        <Menu iconShape="square">
            <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<FaHeart />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
            </SubMenu>
        </Menu>
    </ProSidebar>
    );
}