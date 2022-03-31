import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, View, Pressable, TouchableOpacity, Platform, Image } from 'react-native';
import styles from './style/styles';

function SpreadOperator({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Spread Operator" onPress={() => navigation.navigate('SpreadOperator')}>
        <Text> Spread Operator </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Rest Parameters" onPress={() => navigation.navigate('RestParameters')} >
        <Text> Rest Parameters </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Hook UseState" onPress={() => navigation.navigate('HookUseState')} >
      <Text> Hook UseState </Text>
      </TouchableOpacity>
      
      </View>
      <View style={styles.content}>
        <Text style = {styles.contentText}>Spread operator pozwala rozprowadzić poszczególne elementy obiektu iterowalnego (najczęstszym przedstawicielem tego gatunku są tablice). W przypadku funkcji, mamy taką możliwość, gdy oczekiwane jest zero lub więcej argumentów. To samo tyczy się elementów dla literałów tablicowych. Bardzo możliwe, że wraz z zakończeniem prac nad specyfikacją ES7 (obecnie znajduje się w trzecim etapie), zostanie wprowadzona możliwość wykorzystywania spread dla literałów obiektowych.  
              Składnia operatatora spread składa się z wielokropka ..., po którym odwołujemy się do identyfikatora lub literału.
              Spread, w zależności od kontekstu, zamienia elementy obiektu iterowalnego w argumenty wywoływanej funkcji lub w elementy nowej tablicy.
        </Text>

        <View style={styles.img}>
          <Image source={{ uri: "https://miro.medium.com/max/1400/1*l_BmwE-wgIW-Gezr5mV_rQ.png" }} style={{ width: '100%', height: '50%' }} />
        </View>

      </View>
      
    </View>
  );
}

function RestParameters({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Spread Operator" onPress={() => navigation.navigate('SpreadOperator')}>
        <Text> Spread Operator </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Rest Parameters" onPress={() => navigation.navigate('RestParameters')} >
        <Text> Rest Parameters </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Hook UseState" onPress={() => navigation.navigate('HookUseState')} >
      <Text> Hook UseState </Text>
      </TouchableOpacity>
      
      </View>
      <View style={styles.content}>
       <Text style = {styles.contentText}>Rest Parameters pozwalają na przyjmowanie w argumentach funkcji nieustalonej liczby elementów jako array</Text>
      </View>
      
    </View>
  );
}

function HookUseState({ navigation }) {
  return (
    <View>
      <View style={styles.navBar}>
        
      <TouchableOpacity style={styles.button} title="Spread Operator" onPress={() => navigation.navigate('SpreadOperator')}>
        <Text> Spread Operator </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Rest Parameters" onPress={() => navigation.navigate('RestParameters')} >
        <Text> Rest Parameters </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} title="Hook UseState" onPress={() => navigation.navigate('HookUseState')} >
      <Text> Hook UseState </Text>
      </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style = {styles.contentText}>Hooki są nowym dodatkiem w Reakcie 16.8. Pozwalają one na wykorzystanie stanu i innych funkcjonalności Reacta, bez użycia klas.</Text>
        <Text style = {styles.contentText}>Czym jest hook? Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym. W kolejnych rozdziałach poznamy inne hooki.</Text>
      </View>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="RestParameters">
      <Stack.Screen 
       name="SpreadOperator" 
       component={SpreadOperator} 
       options={{ title: 'Spread Operator' }}
      />
      <Stack.Screen 
        name="RestParameters" 
        component={RestParameters} 
        options={{ title: 'Rest Parameters' }}
      />
      <Stack.Screen 
        name="HookUseState" 
        component={HookUseState} 
        options={{ title: 'Hook Use State' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
