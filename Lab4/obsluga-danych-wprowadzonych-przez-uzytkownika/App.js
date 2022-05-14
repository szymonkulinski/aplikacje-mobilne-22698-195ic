import { StatusBar } from 'expo-status-bar';
import React,{ useState, Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Platform, ScrollView, Pressable, Modal, Switch, Button, Alert, ToastAndroid  } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

function TextTest({ navigation }) {
  const [text, onChangeText] = React.useState("Text 1");
  const [text2, onChangeText2] = React.useState("Text 2");
  const [text3, onChangeText3] = React.useState("Text 3");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="TextTest" onPress={() => navigation.navigate('TextTest')}>
        <Text> TextTest </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Select" onPress={() => navigation.navigate('Select')} >
        <Text> Select </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="SwitchPage" onPress={() => navigation.navigate('SwitchPage')} >
      <Text> SwitchPage </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="datePage" onPress={() => navigation.navigate('datePage')} >
      <Text> datePage </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="ModalPage" onPress={() => navigation.navigate('ModalPage')} >
      <Text> ModalPage </Text>
      </TouchableOpacity>
      </View>
      <View>
      <ScrollView style={styles.scrollView}>
            <SafeAreaView>
                <Text style={styles.text}>
                    Standardowy
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <Text style={styles.text}>
                    Numeryczny z placehoderem
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Numeryczny"
                    keyboardType="numeric"
                />
                <Text style={styles.text}>
                    Słowa z duzej litery
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={text2}
                    autoCapitalize="words"
                />
                <Text style={styles.text}>
                    Clear Text on Focus
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText3}
                    value={text3}
                    clearTextOnFocus={true}
                />
                <Text style={styles.text}>
                    Pesel
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder = "Pesel"
                    placeholderTextColor='rgb(0, 0, 255)'
                    keyboardType="numeric"
                    autoCompleteType="email"
                    maxLength={11}
                />
            </SafeAreaView>
          </ScrollView>
        </View>
    </View>
  );
}


function Select({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("prawo");
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="TextTest" onPress={() => navigation.navigate('TextTest')}>
        <Text> TextTest </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Select" onPress={() => navigation.navigate('Select')} >
        <Text> Select </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} title="SwitchPage" onPress={() => navigation.navigate('SwitchPage')} >
      <Text> SwitchPage </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="datePage" onPress={() => navigation.navigate('datePage')} >
      <Text> datePage </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="ModalPage" onPress={() => navigation.navigate('ModalPage')} >
      <Text> ModalPage </Text>
      </TouchableOpacity>
      
      </View>
      <View style={styles.content}>
      <Picker
          selectedValue={selectedValue}
          style={styles.input}
          onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}
        >
          <Picker.Item label="Leworęczny" value="lewo"/>
          <Picker.Item label="Praworęczny" value="prawo"/>
          <Picker.Item label="Oburęczny" value="obu"/>
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={styles.input}
          onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}
        >
          <Picker.Item label="Leworęczny" value="lewo"/>
          <Picker.Item label="Praworęczny" value="prawo"/>
          <Picker.Item label="Oburęczny" value="obu"/>
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={styles.input}
          onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}
        >
          <Picker.Item label="Leworęczny" value="lewo"/>
          <Picker.Item label="Praworęczny" value="prawo"/>
          <Picker.Item label="Oburęczny" value="obu"/>
        </Picker>
      </View>
      
    </View>
  );
}

function SwitchPage({ navigation }) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [Number, setNumber] = React.useState(1);
  const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
      setNumber(Math.floor(Math.random()*(1000)+0))
      setModalVisible(!isEnabled);
  };
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="TextTestr" onPress={() => navigation.navigate('TextTest')}>
        <Text> TextTest </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Select" onPress={() => navigation.navigate('Select')} >
        <Text> Select </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="SwitchPage" onPress={() => navigation.navigate('SwitchPage')} >
      <Text> SwitchPage </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="datePage" onPress={() => navigation.navigate('datePage')} >
      <Text> datePage </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="ModalPage" onPress={() => navigation.navigate('ModalPage')} >
      <Text> ModalPage </Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.content}>
      <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#4054e0" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => { toggleSwitch(); setNumber(Math.round(Math.random() * 1000)); setModalVisible(!modalVisible) }}
            value={isEnabled}
          />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!isEnabled);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{Number}</Text>
                        <Pressable
                            style={[styles.button2, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
      </View>
      
    </View>
  );
}

function datePage({ navigation }) {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
  };

  const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
  };

  const showDatepicker = () => {
      showMode('date');
  };

  const showTimepicker = () => {
      showMode('time');
  };

  const showSelectedDate = () => {
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const hour = date.getHours();
      const minute = date.getMinutes();
      Alert.alert(
          "Czas:  " + date.toLocaleTimeString() + "\nDzień: " + date.toDateString()
      )
  }

  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="TextTest" onPress={() => navigation.navigate('TextTest')}>
        <Text> TextTest </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Select" onPress={() => navigation.navigate('Select')} >
        <Text> Select </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="SwitchPage" onPress={() => navigation.navigate('SwitchPage')} >
      <Text> SwitchPage </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="datePage" onPress={() => navigation.navigate('datePage')} >
      <Text> datePage </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="ModalPage" onPress={() => navigation.navigate('ModalPage')} >
      <Text> ModalPage </Text>
      </TouchableOpacity>

      </View>
      
       <View style={styles.content}>
            <View style={styles.top}>
                <View style={styles.topItem}><Button onPress={showDatepicker} title="Dzień" /></View>
                <View style={styles.topItem}><Button onPress={showTimepicker} title="Godzina" /></View>  
            </View>
            <View style={styles.topItem}>
                <Button onPress={showSelectedDate} title="Pokaż datę" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
      
    </View>
  );
}

function ModalPage({ navigation }) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
      setModalVisible(!isEnabled);
  };
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="TextTest" onPress={() => navigation.navigate('TextTest')}>
        <Text> TextTest </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Select" onPress={() => navigation.navigate('Select')} >
        <Text> Select </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="SwitchPage" onPress={() => navigation.navigate('SwitchPage')} >
      <Text> SwitchPage </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="datePage" onPress={() => navigation.navigate('datePage')} >
      <Text> datePage </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="ModalPage" onPress={() => navigation.navigate('ModalPage')} >
      <Text> ModalPage </Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.content}>
      <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#4054e0" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => { toggleSwitch(); setNumber(Math.round(Math.random() * 1000)); setModalVisible(!modalVisible) }}
            value={isEnabled}
          />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!isEnabled);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Zamknij modal aby pokazać ToastAndroid</Text>
                        <Pressable
                            style={[styles.button2, styles.buttonClose]}
                            onPress={() => {
                                setModalVisible(false);
                                setTimeout(() => {
                                    ToastAndroid.show("Pare sekund pozniej...", ToastAndroid.SHORT)
                                }, 100);      
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
      </View>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="TextTest">
      <Stack.Screen 
       name="TextTest" 
       component={TextTest} 
       options={{ title: 'TextTest' }}
      />
      <Stack.Screen 
        name="Select" 
        component={Select} 
        options={{ title: 'Select' }}
      />
      <Stack.Screen 
        name="SwitchPage" 
        component={SwitchPage} 
        options={{ title: 'SwitchPage' }}
      />
      <Stack.Screen 
        name="datePage" 
        component={datePage} 
        options={{ title: 'datePage' }}
      />
      <Stack.Screen 
        name="ModalPage" 
        component={ModalPage} 
        options={{ title: 'ModalPage' }}
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
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    paddingTop: 0,
    paddingRight: 10
},
text: {
    paddingLeft: 10,
    paddingTop: 10
},
scrollView: {
  marginHorizontal: 30,
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
},
button2: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
top: {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'space-between'
},
topItem: {
  margin: 10,
  width: 100
}
});
