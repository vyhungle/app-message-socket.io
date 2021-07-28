import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTab from './bottom';
import MenuContent from '../components/menuDrawer';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <MenuContent {...props} />}>
      <Drawer.Screen name="Chat" component={BottomTab} />
    </Drawer.Navigator>
  );
}
