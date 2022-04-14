import { StatusBar } from 'expo-status-bar';
import React,{ useState, Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';

function SortFilter({ navigation }) {

  const [arr, setArr] = useState(Array.from({length: 100}, () => Math.floor(Math.random() * 1001)));
  const [arrCpy, setArrCpy] = useState(arr);
  const [arrayAsString, setStr] = useState(arrCpy.join(","));

  function sort()
  {
    setArrCpy(prevValue => prevValue = [arr.sort(function(a, b) {return a-b;})]);
    setStr(prevValue => prevValue = [arrCpy.join(",")]);
  }

  function filter()
  {
    setArrCpy(prevValue => prevValue = [arr.filter(v => v < 500)]);
    setStr(prevValue => prevValue = [arrCpy.join(",")]);
  }
  
  return (
    //Array 100 liczb 
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Sort Filter" onPress={() => navigation.navigate('SortFilter')}>
        <Text> Sort </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Lazy" onPress={() => navigation.navigate('Lazy')} >
        <Text> Lazy </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres1" onPress={() => navigation.navigate('Progres1')} >
      <Text> Progres1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres2" onPress={() => navigation.navigate('Progres2')} >
      <Text> Progres2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres3" onPress={() => navigation.navigate('Progres3')} >
      <Text> Progres3 </Text>
      </TouchableOpacity>

      </View>

      <View style={styles.navBar}>

        <TouchableOpacity style={styles.buttonFunction} title="Sort" onPress={() => sort()} >
        <Text> Sort </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFunction} title="Filter" onPress={() => filter()} >
        <Text> Filter </Text>
        </TouchableOpacity>

      </View>
      
      <View style={styles.content}>
        <Text style = {styles.contentText}>
          {arrayAsString}
          </Text>
        <View style={styles.img}>
          
        </View>

      </View>
      
    </View>
  );
}


function Lazy({ navigation }) {

  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function generateString(length) {
      let result = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
  }

  const OtherComponent = React.lazy(() => import('./ComponentToLoad'));

  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Sort Filter" onPress={() => navigation.navigate('SortFilter')}>
        <Text> Sort </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Lazy" onPress={() => navigation.navigate('Lazy')} >
        <Text> Lazy </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} title="Progres1" onPress={() => navigation.navigate('Progres1')} >
      <Text> Progres1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres2" onPress={() => navigation.navigate('Progres2')} >
      <Text> Progres2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres3" onPress={() => navigation.navigate('Progres3')} >
      <Text> Progres3 </Text>
      </TouchableOpacity>
      
      </View>
      <View style={styles.content}>

      <Suspense fallback={<Text>Ładowanie...</Text>}>
          <OtherComponent length="100000"/>
        </Suspense>
      </View>
      
    </View>
  );
}

function Progres1({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Sort Filterr" onPress={() => navigation.navigate('SortFilter')}>
        <Text> Sort </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Lazy" onPress={() => navigation.navigate('Lazy')} >
        <Text> Lazy </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres1" onPress={() => navigation.navigate('Progres1')} >
      <Text> Progres1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres2" onPress={() => navigation.navigate('Progres2')} >
      <Text> Progres2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres3" onPress={() => navigation.navigate('Progres3')} >
      <Text> Progres3 </Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.content}>
         <ActivityIndicator 
              color = '#101010'/>
      </View>
      
    </View>
  );
}

function Progres2({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Sort Filter" onPress={() => navigation.navigate('SortFilter')}>
        <Text> Sort </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Lazy" onPress={() => navigation.navigate('Lazy')} >
        <Text> Lazy </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres1" onPress={() => navigation.navigate('Progres1')} >
      <Text> Progres1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres2" onPress={() => navigation.navigate('Progres2')} >
      <Text> Progres2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres3" onPress={() => navigation.navigate('Progres3')} >
      <Text> Progres3 </Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.content}>
      <ActivityIndicator 
              size = 'large'
              color = '#AAAAAA'/>
      </View>
      
    </View>
  );
}

function Progres3({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Sort Filterr" onPress={() => navigation.navigate('SortFilter')}>
        <Text> Sort </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Lazy" onPress={() => navigation.navigate('Lazy')} >
        <Text> Lazy </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres1" onPress={() => navigation.navigate('Progres1')} >
      <Text> Progres1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres2" onPress={() => navigation.navigate('Progres2')} >
      <Text> Progres2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Progres3" onPress={() => navigation.navigate('Progres3')} >
      <Text> Progres3 </Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.content}>
        <ActivityIndicator 
                animating = {true}
                size = 'large'
                color = '#00ff00'/>
      </View>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SortFilter">
      <Stack.Screen 
       name="SortFilter" 
       component={SortFilter} 
       options={{ title: 'Sort Filter' }}
      />
      <Stack.Screen 
        name="Lazy" 
        component={Lazy} 
        options={{ title: 'Lazy' }}
      />
      <Stack.Screen 
        name="Progres1" 
        component={Progres1} 
        options={{ title: 'Progres1' }}
      />
      <Stack.Screen 
        name="Progres2" 
        component={Progres2} 
        options={{ title: 'Progres2' }}
      />
      <Stack.Screen 
        name="Progres3" 
        component={Progres3} 
        options={{ title: 'Progres3' }}
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
});
