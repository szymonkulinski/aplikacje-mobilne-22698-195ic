import { StatusBar } from 'expo-status-bar';
import React,{ useState, Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Platform, ScrollView } from 'react-native';

function TextTest({ navigation }) {
  const [text, onChangeText] = React.useState("Text 1");
  const [text2, onChangeText2] = React.useState("Text 2");
  const [text3, onChangeText3] = React.useState("Text 3");
  const [number, onChangeNumber] = React.useState(null);
  return (
    //Array 100 liczb 
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="TextTest" onPress={() => navigation.navigate('TextTest')}>
        <Text> TextTest </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Select" onPress={() => navigation.navigate('Select')} >
        <Text> Select </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Switch" onPress={() => navigation.navigate('Switch')} >
      <Text> Switch </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Date" onPress={() => navigation.navigate('Date')} >
      <Text> Date </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Modal" onPress={() => navigation.navigate('Modal')} >
      <Text> Modal </Text>
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
                    clearTextOnFocus="true"
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
                    maxLength="11"
                />
            </SafeAreaView>
          </ScrollView>
        </View>
    </View>
  );
}


function Select({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="TextTest" onPress={() => navigation.navigate('TextTest')}>
        <Text> TextTest </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Select" onPress={() => navigation.navigate('Select')} >
        <Text> Select </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} title="Switch" onPress={() => navigation.navigate('Switch')} >
      <Text> Switch </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Date" onPress={() => navigation.navigate('Date')} >
      <Text> Date </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Modal" onPress={() => navigation.navigate('Modal')} >
      <Text> Modal </Text>
      </TouchableOpacity>
      
      </View>
      <View style={styles.content}>

      </View>
      
    </View>
  );
}

function Switch({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="TextTestr" onPress={() => navigation.navigate('TextTest')}>
        <Text> TextTest </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Select" onPress={() => navigation.navigate('Select')} >
        <Text> Select </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Switch" onPress={() => navigation.navigate('Switch')} >
      <Text> Switch </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Date" onPress={() => navigation.navigate('Date')} >
      <Text> Date </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Modal" onPress={() => navigation.navigate('Modal')} >
      <Text> Modal </Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.content}>

      </View>
      
    </View>
  );
}

function Date({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="TextTest" onPress={() => navigation.navigate('TextTest')}>
        <Text> TextTest </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Select" onPress={() => navigation.navigate('Select')} >
        <Text> Select </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Switch" onPress={() => navigation.navigate('Switch')} >
      <Text> Switch </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Date" onPress={() => navigation.navigate('Date')} >
      <Text> Date </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Modal" onPress={() => navigation.navigate('Modal')} >
      <Text> Modal </Text>
      </TouchableOpacity>

      </View>
      
      <View style={styles.content}>

      </View>
      
    </View>
  );
}

function Modal({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="TextTest" onPress={() => navigation.navigate('TextTest')}>
        <Text> TextTest </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Select" onPress={() => navigation.navigate('Select')} >
        <Text> Select </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Switch" onPress={() => navigation.navigate('Switch')} >
      <Text> Switch </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Date" onPress={() => navigation.navigate('Date')} >
      <Text> Date </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Modal" onPress={() => navigation.navigate('Modal')} >
      <Text> Modal </Text>
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
        name="Switch" 
        component={Switch} 
        options={{ title: 'Switch' }}
      />
      <Stack.Screen 
        name="Date" 
        component={Date} 
        options={{ title: 'Date' }}
      />
      <Stack.Screen 
        name="Modal" 
        component={Modal} 
        options={{ title: 'Modal' }}
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
}
});
