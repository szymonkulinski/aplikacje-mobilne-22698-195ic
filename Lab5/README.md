# aplikacje-mobilne-22698-195ic
#Lab5 Aplikacje Mobilne

## ScrollBar1:

![image](https://user-images.githubusercontent.com/56955430/170085982-163e44a4-010c-470f-98a6-4667caa22760.png)

Kod ScrollBaru:

```js
      <View style={styles.content}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.text} snapToEnd={true}>
              Lorem ipsum...
            </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
```

## ScrollBar2:

![image](https://user-images.githubusercontent.com/56955430/170095318-ea91ff01-c2e4-44c7-8832-352f76693d2c.png)

Kod ScrollBaru:
```js
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
</ScrollView>

const styles = StyleSheet.create({
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
});
```
## Touchable:

TouchableOpacity:

![image](https://user-images.githubusercontent.com/56955430/170096255-a0626eef-7a20-433b-a7c4-750da5708f76.png)

Przyciski w navbarze zostały zaprojektowane za pomocą TouchableOpacity.

Kod:

```js
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
```

Style:
```js
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
 ```

TouchableHighlight:

Wciśnięcie przycisku powoduje zwiększenie się wyświetlanej liczby o 1.

![image](https://user-images.githubusercontent.com/56955430/170097575-8886584e-dd6a-4853-a49e-c74cc68a60ff.png)

Kod:
```js
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
```

Style:
```js
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
```
#Swipe

![image](https://user-images.githubusercontent.com/56955430/170103814-8469cdfb-51ad-4e48-9e72-435604f9b80c.png)

![image](https://user-images.githubusercontent.com/56955430/170103843-68e6fc0b-7250-40b3-b624-2cff7df50ec1.png)

![image](https://user-images.githubusercontent.com/56955430/170103865-c0efbf8e-1ae4-46ca-93b9-9ae527eaadb2.png)


Kod:
```js
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
```
