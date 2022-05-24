# aplikacje-mobilne-22698-195ic
#Lab3 Aplikacje Mobilne

## Sortowanie:

![image](https://user-images.githubusercontent.com/56955430/163437079-5c4bc863-78fd-4359-bf7c-b19d146470ed.png)

Po posortowaniu: 

![image](https://user-images.githubusercontent.com/56955430/163437138-e5d92937-1a54-436a-8250-246496a9624b.png)

Po przefiltrowaniu(Filtrujemy wartości mniejsze od 500):

![image](https://user-images.githubusercontent.com/56955430/163437201-f09dbcb0-c20a-499b-96b4-f88ffdbc8dc4.png)

Funkcja sortowania:

```js
  function sort()
  {
    setArrCpy(prevValue => prevValue = [arr.sort(function(a, b) {return a-b;})]);
    setStr(prevValue => prevValue = [arrCpy.join(",")]);
  }
```

Funkcja Filtrowania:

```js
  function filter()
  {
    setArrCpy(prevValue => prevValue = [arr.filter(v => v < 500)]);
    setStr(prevValue => prevValue = [arrCpy.join(",")]);
  }
```

## Lazy loading:

```js
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ComponentToLoad extends Component {
    constructor(props){
        super(props)

        const length = props.length ? props.length : 0
        
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        this.state = { text: result }
    }
    render(){ 
        return (
            <ScrollView>
                <Text>{this.state.text}</Text>
            </ScrollView>
        )
    };
}
```

```js
  const OtherComponent = React.lazy(() => import('./ComponentToLoad'));
```
```js
      <Suspense fallback={<Text>Ładowanie...</Text>}>
          <OtherComponent length="100000"/>
        </Suspense>
      </View>
```

![image](https://user-images.githubusercontent.com/56955430/163437658-f0fd7695-5c83-4648-809f-97a32c0d12ff.png)


![image](https://user-images.githubusercontent.com/56955430/163437674-5d3dccc5-f308-47fb-a3e7-f458c0d05025.png)


## Progres

Progres1:

![image](https://user-images.githubusercontent.com/56955430/163437747-aad38706-9f24-4913-ad22-cbde92472e82.png)

```js
      <View style={styles.content}>
         <ActivityIndicator 
              color = '#101010'/>
      </View>
```

Progres2:

![image](https://user-images.githubusercontent.com/56955430/163437776-7469006b-f698-482a-b30d-a54e58d54556.png)

```js
      <ActivityIndicator 
              size = 'large'
              color = '#AAAAAA'/>
      </View>
```

Progres3:

![image](https://user-images.githubusercontent.com/56955430/163437801-c6e7bf24-6adc-477f-b2d4-9b1ead04164a.png)

```js
        <ActivityIndicator 
                animating = {true}
                size = 'large'
                color = '#00ff00'/>
      </View>
```
