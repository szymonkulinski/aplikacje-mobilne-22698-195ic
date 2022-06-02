import { StatusBar } from 'expo-status-bar';
import React,{ useState, Suspense, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, Platform, SafeAreaView, ScrollView, TouchableHighlight, Image, Button, TextInput, Switch} from 'react-native';
import { WebView } from 'react-native-webview';
import Swipeable from 'react-native-swipeable';
import Slider from '@react-native-community/slider';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Network from 'expo-network';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NumericInput from 'react-native-numeric-input'

function Sc1({ navigation }) {
  return (
    //Array 100 liczb 
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Sc1" onPress={() => navigation.navigate('Sc1')}>
        <Text> Sc1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc2" onPress={() => navigation.navigate('Sc2')} >
        <Text> Sc2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc3" onPress={() => navigation.navigate('Sc3')} >
      <Text> Sc3 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc4" onPress={() => navigation.navigate('Sc4')} >
      <Text> Sc4 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc5" onPress={() => navigation.navigate('Sc5')} >
      <Text> Sc5 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc6" onPress={() => navigation.navigate('Sc6')} >
      <Text> Sc6 </Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.content}>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://seeklogo.com/images/A/akademia-marynarki-wojennej-gdynia-logo-8D363B8FB4-seeklogo.com.png',
        }}
      />

      <Image
        style={styles.tinyLogo}
        source={require('./assets/images/amw_logo.png')}
      />

      </View>
      
    </View>
  );
}


function Sc2({ navigation }) {

  const [state, setState] = useState({
    firstImageScale: 1,
});

  const resizeFirstImage = (value) => {
      setState({firstImageScale: value});
  }

  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Sc1" onPress={() => navigation.navigate('Sc1')}>
        <Text> Sc1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc2" onPress={() => navigation.navigate('Sc2')} >
        <Text> Sc2 </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} title="Sc3" onPress={() => navigation.navigate('Sc3')} >
      <Text> Sc3 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc4" onPress={() => navigation.navigate('Sc4')} >
      <Text> Sc4 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc5" onPress={() => navigation.navigate('Sc5')} >
      <Text> Sc5 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc6" onPress={() => navigation.navigate('Sc6')} >
      <Text> Sc6 </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.content}>

      <Image source={{ uri: "https://seeklogo.com/images/A/akademia-marynarki-wojennej-gdynia-logo-8D363B8FB4-seeklogo.com.png" }} style={[styles.tinyLogo, {transform: [{ scale: state.firstImageScale }]}]} />
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        onValueChange={resizeFirstImage}
      />

      </View>
      
    </View>
  );
}

function Sc3({ navigation }) {
  const images = {
    image1: require('./assets/images/amw_logo.png')
  };

  return (
    <View style={styles.content}>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Sc1r" onPress={() => navigation.navigate('Sc1')}>
        <Text> Sc1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc2" onPress={() => navigation.navigate('Sc2')} >
        <Text> Sc2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc3" onPress={() => navigation.navigate('Sc3')} >
      <Text> Sc3 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc4" onPress={() => navigation.navigate('Sc4')} >
      <Text> Sc4 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc5" onPress={() => navigation.navigate('Sc5')} >
      <Text> Sc5 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc6" onPress={() => navigation.navigate('Sc6')} >
      <Text> Sc6 </Text>
      </TouchableOpacity>
      </View>

      <Image loadingIndicatorSource={require('./assets/images/amw_logo.png')} source={{ uri: "https://seeklogo.com/images/A/akademia-marynarki-wojennej-gdynia-logo-8D363B8FB4-seeklogo.com.png" }} style={styles.tinyLogo} progressiveRenderingEnabled={false}/>
        <View style={styles.iconsVertically}>
          <Ionicons name='add' size={20} color="green" />
          <Ionicons name="airplane-sharp" size={20} color="green" />
          <Ionicons name="alarm-sharp" size={20} color="green" />
          <Ionicons name="apps-sharp" size={20} color="green" />
          <Ionicons name="arrow-forward-circle-sharp" size={20} color="green" />
          <Ionicons name="at-sharp" size={20} color="green" />
          <Ionicons name="arrow-up-sharp" size={20} color="green"/>
          <Ionicons name="arrow-forward-sharp" size={20} color="green" />
          <Ionicons name="baseball-sharp" size={20} color="green" />
          <Ionicons name="ios-play-skip-back-sharp" size={20} color="green" />
        </View>
        <View style={styles.iconsVertically}>
          <Ionicons name="battery-charging-outline" size={20} color="green" />
          <Ionicons name="md-play-forward-circle-outline" size={20} color="green" />
          <Ionicons name="basket-sharp" size={20} color="green" />
          <Ionicons name="bonfire-outline" size={20} color="green" />
          <Ionicons name="arrow-redo-outline" size={20} color="green" />
          <Ionicons name="arrow-redo-outline" size={20} color="green" />
          <Ionicons name="build-sharp" size={20} color="green" />
          <Ionicons name="md-arrow-redo-circle" size={20} color="green" />
          <Ionicons name="woman-outline" size={20} color="green" />
          <Ionicons name="notifications-circle" size={20} color="green" />
        </View>
        <View style={styles.iconsVertically}>
          <Ionicons name='add' size={20} color="green" />
          <Ionicons name="airplane-sharp" size={20} color="green" />
          <Ionicons name="alarm-sharp" size={20} color="green" />
          <Ionicons name="apps-sharp" size={20} color="green" />
          <Ionicons name="arrow-forward-circle-sharp" size={20} color="green" />
          <Ionicons name="at-sharp" size={20} color="green" />
          <Ionicons name="arrow-up-sharp" size={20} color="green"/>
          <Ionicons name="arrow-forward-sharp" size={20} color="green" />
          <Ionicons name="baseball-sharp" size={20} color="green" />
          <Ionicons name="ios-play-skip-back-sharp" size={20} color="green" />
        </View>
        <View style={styles.iconsVertically}>
          <Ionicons name="battery-charging-outline" size={20} color="green" />
          <Ionicons name="md-play-forward-circle-outline" size={20} color="green" />
          <Ionicons name="basket-sharp" size={20} color="green" />
          <Ionicons name="bonfire-outline" size={20} color="green" />
          <Ionicons name="arrow-redo-outline" size={20} color="green" />
          <Ionicons name="arrow-redo-outline" size={20} color="green" />
          <Ionicons name="build-sharp" size={20} color="green" />
          <Ionicons name="md-arrow-redo-circle" size={20} color="green" />
          <Ionicons name="woman-outline" size={20} color="green" />
          <Ionicons name="notifications-circle" size={20} color="green" />
        </View>
    </View>
  );
}

function Sc4({ navigation }) {
  NetInfo.fetch().then(state =>{
    setConnectStatus(state.isConnected);
    setContentType(state.type);
  })

  const [contentStatus, setConnectStatus] = useState(false);
  const [contentType, setContentType] = useState(" ");

  return (
    <View style={styles.content}>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Sc1r" onPress={() => navigation.navigate('Sc1')}>
        <Text> Sc1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc2" onPress={() => navigation.navigate('Sc2')} >
        <Text> Sc2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc3" onPress={() => navigation.navigate('Sc3')} >
      <Text> Sc3 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc4" onPress={() => navigation.navigate('Sc4')} >
      <Text> Sc4 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc5" onPress={() => navigation.navigate('Sc5')} >
      <Text> Sc5 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc6" onPress={() => navigation.navigate('Sc6')} >
      <Text> Sc6 </Text>
      </TouchableOpacity>
      </View>
      <Text>Połączenie z internetem: {String(contentStatus)}</Text>
      <Text>Typ połączenia: {contentType}</Text>
    </View>
  );
}

function Sc5({ navigation }) {
  const [textInputValue, setTextInputValue] = useState('');
  const [getValue, setGetValue] = useState('');
  const [keyInput, setInputKey] = useState('');
  const [keyRecieve, setRecieveKey] = useState('');

  const saveValueFunction = () => {
    if (textInputValue) {
      AsyncStorage.setItem(keyInput, textInputValue);
      setTextInputValue('');
      alert('Data Saved');
    } else {
      alert('Please fill data');
    }
  };

  const getValueFunction = () => {
    AsyncStorage.getItem(keyRecieve).then(
      (value) =>
        setGetValue(value)
    );
  };
  return (
    <View style={styles.content}>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Sc1r" onPress={() => navigation.navigate('Sc1')}>
        <Text> Sc1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc2" onPress={() => navigation.navigate('Sc2')} >
        <Text> Sc2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc3" onPress={() => navigation.navigate('Sc3')} >
      <Text> Sc3 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc4" onPress={() => navigation.navigate('Sc4')} >
      <Text> Sc4 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc5" onPress={() => navigation.navigate('Sc5')} >
      <Text> Sc5 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc6" onPress={() => navigation.navigate('Sc6')} >
      <Text> Sc6 </Text>
      </TouchableOpacity>
      </View>
      <View>
        <View style={styles.cenetrHorizontaly}>
            <Text>Podaj wartość do zapisania</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput onChangeText={(text) => setInputKey(text)} placeholder="Podaj klucz"/>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TextInput onChangeText={(data) => setTextInputValue(data)} placeholder="Wpisz wartość"/>
            </View>
            <Button
                title='Dodaj wartość'
                style={styles.button}
                onPress={saveValueFunction}
            >
            </Button>
        </View>
      </View>
      <View>
        <View style={styles.cenetrHorizontaly}>
            <Text style={styles.textBold}>Podaj wartość do odczytania</Text>
            <View style={{flexDirection: 'row'}}>
                <TextInput onChangeText={(readKeyInput) => setRecieveKey(readKeyInput)} placeholder="Podaj klucz"/>
            </View>
            <Button
                title='Wyświetl'
                style={styles.button}
                onPress={getValueFunction}
            >
            </Button>
            <Text> {getValue} </Text>
        </View>
    </View>
    </View>
  );
}

function Sc6({ navigation }) {
  const numericValue = async (value) => {
    var key = "localValue"
    try {
        await AsyncStorage.setItem(key,value.toString());
    } catch (error) {
        console.error(error)
    }
    try {
        const tempValue = await AsyncStorage.getItem(key);
        if (tempValue !== null) {
          setLocalValue(tempValue);
        }else{
          setLocalValue('n/a');
        }
    } catch (error) {
      setLocalValue(error);
    }
}

  const [internetConnection, setInternetConnection] = useState(false);
  const [localValue, setLocalValue] = useState('');
  const [remoteValue, setRemoteValue] = useState('');

  const checkData = () =>{
    if(internetConnection){
        // połączenie z internetem
        // aktualizacja danych
        setRemoteValue(localValue)
    }else{
        // brak połączenia z internetem
        // nie aktualizuje danych
    }
}

setInterval(checkData, 1000);

  return (
    <View style={styles.content}>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Sc1r" onPress={() => navigation.navigate('Sc1')}>
        <Text> Sc1 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc2" onPress={() => navigation.navigate('Sc2')} >
        <Text> Sc2 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc3" onPress={() => navigation.navigate('Sc3')} >
      <Text> Sc3 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc4" onPress={() => navigation.navigate('Sc4')} >
      <Text> Sc4 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc5" onPress={() => navigation.navigate('Sc5')} >
      <Text> Sc5 </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Sc6" onPress={() => navigation.navigate('Sc6')} >
      <Text> Sc6 </Text>
      </TouchableOpacity>
      </View>

      <View>
      <ScrollView >
          <View>
              <Text >{internetConnection?`Połączono z internetem `:`Brak połączenia z internetem`}</Text>
              <Switch value={internetConnection} onValueChange={(data) => setInternetConnection(data)}/>
          </View>
          <View>
              <View >
                  <Text>Dane:</Text>
                  <View style={{alignItems: 'center', marginTop: 10,}}>
                      <NumericInput 
                          onChange={numericValue} 
                          onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                          totalWidth={240} 
                          totalHeight={50} 
                          iconSize={25}
                          valueType='real'
                          rounded 
                          textColor='#000' 
                          borderColor= '#666'
                          iconStyle={{ color: 'white' }} 
                          rightButtonBackgroundColor='#4f4' 
                          leftButtonBackgroundColor='#0d0'/>
                  </View>
              </View>
          </View>
          <View>
              <View >
                  <View >
                      <Text >Kopia Lokalna</Text>
                      <Text >{localValue}</Text>
                  </View>
                  <View >
                      <Text >Kopia Remote</Text>
                      <Text >{remoteValue}</Text>
                  </View>
              </View>
          </View>
      </ScrollView>
  </View>
</View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Sc1">
      <Stack.Screen 
       name="Sc1" 
       component={Sc1} 
       options={{ title: 'Sc1' }}
      />
      <Stack.Screen 
        name="Sc2" 
        component={Sc2} 
        options={{ title: 'Sc2' }}
      />
      <Stack.Screen 
        name="Sc3" 
        component={Sc3} 
        options={{ title: 'Sc3' }}
      />
      <Stack.Screen 
        name="Sc4" 
        component={Sc4} 
        options={{ title: 'Sc4' }}
      />
      <Stack.Screen 
        name="Sc5" 
        component={Sc5} 
        options={{ title: 'Sc5' }}
      />
      <Stack.Screen 
        name="Sc6" 
        component={Sc6} 
        options={{ title: 'Sc6' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  content: {
    ...Platform.select({
      ios: {
        flex:1,
        alignSelf:'stretch',
        alignContent:'center',
        alignItems: 'center',
      },
      android: {
        flex:1,
        alignSelf:'stretch',
        alignContent:'center',
        alignItems: 'center',
      },
      default: {
        flex:1,
        alignSelf:'stretch',
        alignContent:'center',
        alignItems: 'center',
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
  tinyLogo: {
    width: 150,
    height: 190,
  },
  logo: {
    width: 66,
    height: 58,
  },
  iconsVertically:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
});
