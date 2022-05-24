import { StatusBar } from 'expo-status-bar';
import React,{ useState, Suspense, } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Platform, SafeAreaView, ScrollView, TouchableHighlight, } from 'react-native';
import { WebView } from 'react-native-webview';
import Swipeable from 'react-native-swipeable';

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
          <ScrollView style={styles.scrollView2}>
            <View style={styles.box1}>
              <Text style={styles.textBox}>
                1
              </Text>
            </View>

            <View style={styles.box2}>
              <Text style={styles.textBox}>
                2
              </Text>
            </View>
            
            <View style={styles.box1}>
              <Text style={styles.textBox}>
                1
              </Text>
            </View>

            <View style={styles.box2}>
              <Text style={styles.textBox}>
                2
              </Text>
            </View>

            <View style={styles.box1}>
              <Text style={styles.textBox}>
                1
              </Text>
            </View>

            <View style={styles.box2}>
              <Text style={styles.textBox}>
                2
              </Text>
            </View>

            <View style={styles.box1}>
              <Text style={styles.textBox}>
                1
              </Text>
            </View>

            <View style={styles.box2}>
              <Text style={styles.textBox}>
                2
              </Text>
            </View>

            <View style={styles.box1}>
              <Text style={styles.textBox}>
                1
              </Text>
            </View>

            <View style={styles.box2}>
              <Text style={styles.textBox}>
                2
              </Text>
            </View>

            <View style={styles.box1}>
              <Text style={styles.textBox}>
                1
              </Text>
            </View>

            <View style={styles.box2}>
              <Text style={styles.textBox}>
                2
              </Text>
            </View>

          </ScrollView>
      
    </View>
  );
}

function Touchable({ navigation }) {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
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

      <View style={styles.touchcontent}>
        <TouchableHighlight onPress={onPress}>
          <View style={styles.touchButton}>
            <Text>Touch Here</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{count ? count : null}</Text>
        </View>
      </View>

    </View>
  );
}

function Swipe({ navigation }) {
  const leftContent=[
    <View style={[styles.leftSwipeItem, {backgroundColor: 'lightskyblue'}]}>
      <Text>Pull action</Text>
    </View>
  ];

  const rightButtons = [
    <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
    <Text>Green</Text>
  </TouchableOpacity>,
  <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'orchid'}]}>
    <Text>Orchid</Text>
  </TouchableOpacity>
  ];

  const leftContent2=[
    <View style={[styles.leftSwipeItem, {backgroundColor: 'lightskyblue'}]}>
      <Text>Pull action</Text>
    </View>
  ];

  const rightButtons2 = [
    <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
    <Text>1</Text>
  </TouchableOpacity>,
  <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'orchid'}]}>
    <Text>2</Text>
  </TouchableOpacity>,
  <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'lightseagreen'}]}>
    <Text>3</Text>
  </TouchableOpacity>,
  <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'orchid'}]}>
    <Text>4</Text>
  </TouchableOpacity>
  ];

  const leftContent3=[
    <View style={[styles.leftSwipeItem, {backgroundColor: 'lightskyblue'}]}>
      <Text>Pull action</Text>
    </View>
  ];

  const rightButtons3 = [
    <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: '#aaaaaa'}]}>
    <Text>1</Text>
  </TouchableOpacity>,
  <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: '#bbbbbb'}]}>
    <Text>2</Text>
  </TouchableOpacity>,
  <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: '#cccccc'}]}>
    <Text>1</Text>
  </TouchableOpacity>,
  <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: '#dddddd'}]}>
    <Text>2</Text>
  </TouchableOpacity>
  ];
  
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
        <Swipeable leftContent={leftContent} rightButtons={rightButtons}>
          <Text style={styles.textBox}>Swipe1</Text>
        </Swipeable>
        <Swipeable leftContent={leftContent2} rightButtons={rightButtons2}>
          <Text style={styles.textBox}>Swipe2</Text>
        </Swipeable>
        <Swipeable leftContent={leftContent3} rightButtons={rightButtons3}>
          <Text style={styles.textBox}>Swipe3</Text>
        </Swipeable>
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
    marginHorizontal: 50,
  },

  scrollView2: {
    flexGrow: 1, 
    borderColor: '#FFFFE0', 
    borderWidth: 5
  },
  box1:{
    flex:1,
    backgroundColor: '#F0E68C',
  },
  box2:{
    flex:1,
  },
  textBox:{
    fontSize: 40,
  },
  touchContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  touchButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
  leftSwipeItem: {
    height:50,
  },
  rightSwipeItem: {
    height:50,
  },
});
