import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { Menu, Icon } from 'antd';
import { KaoButton } from 'kao-components/ui';

const { SubMenu } = Menu;
const RootMenu = styled(Menu)`
  border-bottom: none !important;
  margin: 5px 0 0 0 !important;
  position: relative;
  line-height: 57px !important;
  z-index: 999;
`;
const SubItem = styled(Menu.Item)`
  font-size: 14px;
  color: #323232;
  &:hover {
    background-color: rgb(225, 225, 225);
  }
`;
const RootSub = styled(SubMenu)`
  &:hover {
    background-color: rgb(225, 225, 225);
  }
`;
// const Redot = styled.span`
//   width: 6px;
//   height: 6px;
//   background: #ED402F;
//   border-radius: 50%;
//   display: block;
//   position: absolute;
//   left: 0;
//   right: 0;
//   margin: -13% 30%;
//`;

// root
/**
  history.push('/');
  [
    { 
      key: 'produk',
      name: 'Produk',
      path: '/'
      children: [
        {
          key: 'produk',
          name: 'Produk'
          path: '/'
        }
      ]
    }
  ]
*/

const levelMap = {};

const getMenus = (menus, parent = true) => {
  return menus.map(menu => {
    if (menu.children) {
      return (
        <RootSub
          key={menu.key}
          style={{ float: 'right' }}
          title={
            <span>{menu.name}
              <Icon type="caret-down" style={{ fontSize: 11, marginLeft: 10 }} />
            </span>
          }
        >
          {getMenus(menu.children, false)}
        </RootSub>
      );
    }
    if (parent === false) levelMap[menu.key] = menu;
    return (
      <SubItem
        key={menu.key}
        style={parent ? { float: 'right' } : { float: 'none' }}>
        {menu.name}
      </SubItem>
    );
  });
};

const handleClickMenu = (e, history, items) => {
  const parent = _.find(items, i => i.key === e.key);
  const level = _.find(levelMap, i => i.key === e.key);
  if (parent === undefined) {
    if (level === undefined) return;
    history.push(level.path);
    return;
  }
  history.push(parent.path);
};

const KaoMenu = ({ history, label, menus = [], mode = 'horizontal', style, subStyle }) => {
  const menuitem = getMenus(menus);
  return (
    <RootMenu
      onClick={e => handleClickMenu(e, history, menus)}
      mode={mode}
    >
      <SubItem
        key="login"
        style={{ float: 'right' }}>
        <KaoButton>Masuk</KaoButton>
      </SubItem>
      {menuitem}

    </RootMenu>
  );
};


KaoMenu.propTypes = {
  label: PropTypes.string.isRequired,
  menus: PropTypes.array.isRequired,
  mode: PropTypes.string
};

KaoMenu.defaultProps = {
  label: '',
  menus: [],
  mode: 'horizontal'
};

export {
  KaoMenu
};
