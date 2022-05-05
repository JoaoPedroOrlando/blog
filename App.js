import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Provider} from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
const navigator = createStackNavigator ({
  Show:ShowScreen,
  Create:CreateScreen,
  Index:IndexScreen,
},
{
  initialRouteName : 'Index',
  defaultNavigationOptions:{
    title:'Blogs'
  }
});

//creates a simple React component
const App = createAppContainer(navigator);

export default ()=>{
  return <Provider>
    <App/>
  </Provider>
}