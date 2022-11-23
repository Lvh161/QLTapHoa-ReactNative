import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from '../login/login';
import Login2 from '../login/login2';
import Login3 from '../login/login3';
import Login4 from '../login/login4';
import Login5 from '../login/login5';
import LayoutComponent from '../layoutTest/layout';
  
const Stack = createNativeStackNavigator();

export default function RootComponent() {
    var ngayHT = new Date();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Getstarted1' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Getstarted1" component={Login} />
        <Stack.Screen name="Getstarted2" component={Login2} />
        <Stack.Screen name="Getstarted3" component={Login3} />
        <Stack.Screen name="Getstarted4" component={Login4} />
        <Stack.Screen name="Getstarted5" component={Login5} />
        <Stack.Screen name="Test" component={LayoutComponent} />
        {console.log(ngayHT.getHours()+":"+ngayHT.getMinutes()+":"+ngayHT.getSeconds()+' End Login Screen.')}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
/**
 * *********NativeStack***********https://reactnavigation.org/docs/getting-started
 * =====expo cai khac
 * Cai "npm install @react-navigation/native",
 * 'npm install react-native-screens react-native-safe-area-context',
 * 'npx pod-install ios'=======
 * Dán: 
 * '@Override
    protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    }'
    Và
* Dán: 'import android.os.Bundle;'
    Vào:'android\app\src\main\java\com\demo2\MainActivity.java'
* Cài stack: 'npm install @react-navigation/native-stack'

***********Ảnh động vào project
'implementation 'com.facebook.fresco:animated-gif:2.5.0'
* Dán: 'implementation 'com.facebook.fresco:animated-gif:2.5.0'
    Vào:'android\app\build.gradle' dependencies {
 */

      /** navigation
       * navigation.pop(2)
       * navigation.popToTop(2)
       * navigation.goBack()
       * navigation.navigate('')
       */