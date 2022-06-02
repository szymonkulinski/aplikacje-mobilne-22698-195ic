# aplikacje-mobilne-22698-195ic
#Lab6 Aplikacje Mobilne

## URI/REQUIRE:

![image](https://user-images.githubusercontent.com/56955430/171758075-e41e0ac1-c849-480f-9cb8-bea4fdbbc979.png)

Kod:

```js
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://seeklogo.com/images/A/akademia-marynarki-wojennej-gdynia-logo-8D363B8FB4-seeklogo.com.png',
        }}
      />
```
```js
      <Image
        style={styles.tinyLogo}
        source={require('./assets/images/amw_logo.png')}
      />
```

## Slider:

![image](https://user-images.githubusercontent.com/56955430/171758107-f1b451af-2aa6-495f-b804-fc161dfdb1a4.png)

![image](https://user-images.githubusercontent.com/56955430/171758113-aac436a1-69fa-4265-96eb-981e9a4c2317.png)

Kod:
```js
  const [state, setState] = useState({
    firstImageScale: 1,
});

  const resizeFirstImage = (value) => {
      setState({firstImageScale: value});
  }
  
```
```js
        <Image source={{ uri: "https://seeklogo.com/images/A/akademia-marynarki-wojennej-gdynia-logo-8D363B8FB4-seeklogo.com.png" }} style={[styles.tinyLogo, {transform: [{ scale: state.firstImageScale }]}]} />
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        onValueChange={resizeFirstImage}
      />
  
```
## Lazy/Ikonki:

![image](https://user-images.githubusercontent.com/56955430/171758144-7bbfec4f-8a8d-4b8b-bda4-c5ef2f52d5f0.png)

Kod:

```js
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
```

## Połączenie:

![image](https://user-images.githubusercontent.com/56955430/171758179-d510e984-5c20-4adc-b023-76358fc76806.png)

Kod:

```js
  NetInfo.fetch().then(state =>{
    setConnectStatus(state.isConnected);
    setContentType(state.type);
  })

  const [contentStatus, setConnectStatus] = useState(false);
  const [contentType, setContentType] = useState(" ");
```
```js
  <Text>Połączenie z internetem: {String(contentStatus)}</Text>
  <Text>Typ połączenia: {contentType}</Text>
```

## AsyncStorage:

![image](https://user-images.githubusercontent.com/56955430/171758197-10fe7026-daa3-4926-a605-b701541103d9.png)

Kod:

```js
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
```
```js
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
    
```

## Lokalnie/Storage:

![image](https://user-images.githubusercontent.com/56955430/171758418-fb780a13-67fb-4af4-9898-c387d556ec17.png)

![image](https://user-images.githubusercontent.com/56955430/171758483-516f6fef-5fc0-4391-8bf8-1bc8e6e53d5c.png)

Kod:

```js
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

```
```js
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
```
