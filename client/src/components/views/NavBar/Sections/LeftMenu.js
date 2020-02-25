import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="shop">
      <a href="/">Boutique en ligne</a>
    </Menu.Item>
    <Menu.Item key="Contact">
      <a href="/Contact">Contact</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu