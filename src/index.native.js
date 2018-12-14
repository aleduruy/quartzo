import React from 'react';
import { Scene, Router, Drawer, Actions } from 'react-native-router-flux';
import { ThemeProvider, Text, Touchable, View } from './components';

import IndexExample from './index.example';
import TextExample from './components/text/text.example';
import TouchableExample from './components/touchable/touchable.example';
import ViewExample from './components/view/view.example';

const Item = (key, title) => (
  <Touchable onPress={() => Actions.push(key)} key={key}>
    <View><Text size="sm" strong={Actions.currentScene == `_${key}`}>{title}</Text></View>
  </Touchable>
);

const components = [
  { title: 'Início', key: 'index', component: IndexExample },
  { title: 'Text', key: 'text', component: TextExample },
  { title: 'Touchable', key: 'touchable', component: TouchableExample },
  { title: 'View', key: 'view', component: ViewExample },
];

const DrawerContent = () => (
  <View>
    {components.map(component => Item(component.key, component.title))}
  </View>
);

class App extends React.Component {
  renderDrawer() {
    return (
      <Drawer key="root" contentComponent={DrawerContent}>
        {components.map(component => (
          <Scene drawer={true} key={component.key} component={component.component} title={component.title} />
        ))}
      </Drawer>
    );
  }

  render() {
    return (
      <ThemeProvider theme={{ name: "light" }}>
        <Router>{this.renderDrawer()}</Router>
      </ThemeProvider>
    );
  }
}

export default App;
