import { StatusBar } from 'expo-status-bar';
import React,{ useState, Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Platform, SafeAreaView, ScrollView } from 'react-native';

function ScrollBar1({ navigation }) {
  return (
    //Array 100 liczb 
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="ScrollBar1" onPress={() => navigation.navigate('ScrollBar1')}>
        <Text> ScrollBar1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="ScrollBar2" onPress={() => navigation.navigate('ScrollBar2')} >
        <Text> ScrollBar2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Touchable" onPress={() => navigation.navigate('Touchable')} >
      <Text> Touchable </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Swipe" onPress={() => navigation.navigate('Swipe')} >
      <Text> Swipe </Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.content}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.text} snapToEnd={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
      
    </View>
  );
}


function ScrollBar2({ navigation }) {

  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="ScrollBar1" onPress={() => navigation.navigate('ScrollBar1')}>
        <Text> ScrollBar1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="ScrollBar2" onPress={() => navigation.navigate('ScrollBar2')} >
        <Text> ScrollBar2 </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} title="Touchable" onPress={() => navigation.navigate('Touchable')} >
      <Text> Touchable </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Swipe" onPress={() => navigation.navigate('Swipe')} >
      <Text> Swipe </Text>
      </TouchableOpacity>
      
      </View>
      <View style={styles.content}>

 
      </View>
      
    </View>
  );
}

function Touchable({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="ScrollBar1r" onPress={() => navigation.navigate('ScrollBar1')}>
        <Text> ScrollBar1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="ScrollBar2" onPress={() => navigation.navigate('ScrollBar2')} >
        <Text> ScrollBar2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Touchable" onPress={() => navigation.navigate('Touchable')} >
      <Text> Touchable </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Swipe" onPress={() => navigation.navigate('Swipe')} >
      <Text> Swipe </Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.content}>

      </View>
      
    </View>
  );
}

function Swipe({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="ScrollBar1" onPress={() => navigation.navigate('ScrollBar1')}>
        <Text> ScrollBar1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="ScrollBar2" onPress={() => navigation.navigate('ScrollBar2')} >
        <Text> ScrollBar2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Touchable" onPress={() => navigation.navigate('Touchable')} >
      <Text> Touchable </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Swipe" onPress={() => navigation.navigate('Swipe')} >
      <Text> Swipe </Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.content}>

      </View>
      
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="ScrollBar1">
      <Stack.Screen 
       name="ScrollBar1" 
       component={ScrollBar1} 
       options={{ title: 'ScrollBar1' }}
      />
      <Stack.Screen 
        name="ScrollBar2" 
        component={ScrollBar2} 
        options={{ title: 'ScrollBar2' }}
      />
      <Stack.Screen 
        name="Touchable" 
        component={Touchable} 
        options={{ title: 'Touchable' }}
      />
      <Stack.Screen 
        name="Swipe" 
        component={Swipe} 
        options={{ title: 'Swipe' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  content: {
    ...Platform.select({
      ios: {
        
      },
      android: {
        
      },
      default: {
        marginLeft: '20%',
        marginRight: '20%',
        height: '90%',
      }
    })
  },
  navBar: {
    flexDirection: 'row',
    display: 'flex',
  },
  contentText: {
    ...Platform.select({
      ios: {
        fontSize: 14,
      },
      android: {
        fontSize: 14,
      },
      default: {
        fontSize: 20,
      }
    })
  },

  img: {
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        
      },
      android: {
        
      },
      default: {
        height: 400,
      }
    })
  },
  button: {
    flex: 1,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 1,
  },
  buttonFunction: {
    marginTop: 1,
    flex: 1,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginRight: 1,
    backgroundColor: '#aaaaaa',
  },
  navBarWeb: {
    flexDirection: 'row',
    display: 'flex',
  },
  buttonWeb: {
    flex: 1,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 1,
  },

  scrollView: {
    //backgroundColor: 'brown',
    marginHorizontal: 5,
  },
});
