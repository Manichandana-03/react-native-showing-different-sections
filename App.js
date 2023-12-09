import { useState } from 'react';
import {View,SafeAreaView,Text,StyleSheet,Button,StatusBar, Pressable} from 'react-native'
import ProfileData from './components/ProfileData';
const tabsList =[
  'MY CASES',
  'MY PTP',
  'UNTOUCH CASES',
];

export default function App(){

  const [activeTab,setActiveTab]= useState(tabsList[0]);

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#0096FF'} barStyle='light-content' />
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View>
            <Text style={{color:'#ffffff',fontSize:20,paddingBottom:30,fontWeight:'700'}}>My List</Text>
          </View>
          <View style={styles.tabContainer}>
            <Pressable style={[styles.button,(activeTab===tabsList[0]?{backgroundColor:'#36454F'}:{})]} onPress={()=>setActiveTab(tabsList[0])}>
              <Text style={styles.text}>MY CASES</Text>
            </Pressable>
            <Pressable style={[styles.button,(activeTab===tabsList[1]?{backgroundColor:'#36454F'}:{})]} onPress={()=>setActiveTab(tabsList[1])}>
              <Text style={styles.text}>MY PTP</Text>
            </Pressable>
            <Pressable style={[styles.button,(activeTab===tabsList[2]?{backgroundColor:'#36454F'}:{})]} onPress={()=>setActiveTab(tabsList[2])}>
              <Text style={styles.text}>UNTOUCH CASES</Text>
            </Pressable>
                  </View>
        </View>
        <View style={styles.data}>
          {activeTab===tabsList[0] && <ProfileData />}
          {activeTab===tabsList[1] && <View style={styles.listAlignment}>
            <Text style={{textAlign:'center'}}>Inside PTP </Text>
          </View>  }
          {activeTab===tabsList[2] && <View style={styles.listAlignment}>
            <Text style={{textAlign:'center'}}>Inside Untouch Cases </Text>
          </View>  }
        </View>
      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  mainContainer:{
    display:'flex',
    flexDirection:'column',
    


  },
  header:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#0096FF',
    padding:25,
    color:'#ffffff'
  },
  tabContainer:{
    display:'flex',
    flexDirection:'row',
    padding:'20px',
    color:'#ffffff',
    justifyContent:'space-evenly'
  },
  button:{
    backgroundColor:'#0096FF',
    borderRadius:4
    
  },
  text:{
    color:'#ffffff',
    fontWeight:'bold',
    borderRadius:5,
    
    padding:8

  },
  data:{
    display:'flex',
    flexDirection:'column'
  },
  listAlignment:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:100
  }
})