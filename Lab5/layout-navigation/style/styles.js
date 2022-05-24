import { StyleSheet,Platform} from 'react-native';

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
