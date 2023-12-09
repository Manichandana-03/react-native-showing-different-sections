import {View,Text,StyleSheet, TextInput} from 'react-native'

export default function ProfileData (){
    return(
        <View>
            <TextInput style={styles.input} placeholder='Search by Name, Mobile or short User Ref No' />
           <View style={styles.cardContainer}>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                 <View style={{display:'flex',flexDirection:'column'}}>
                    <Text style={{fontWeight:'bold',color:'#36454F'}}>Eddie Mehrotra</Text>
                    <Text style={{color:'gray'}}>IDEP576132387924ZAO</Text>
                 </View>
                  <Text style={styles.redBackground}>60+</Text>
            </View>

            <View style={{backgroundColor:'whitesmoke',marginBottom:10,marginTop:10}}>
                    <View style={styles.wrapper}>
                        <View style={styles.alignment}>
                            <Text style={styles.bold}>EMI</Text>
                            <Text style={styles.color} >$8974.00</Text>
                        </View>
                        <Text> + </Text>
                        <View style={styles.alignment}>
                            <Text style={styles.bold}>Other Fees</Text>
                            <Text style={styles.color}>$0.00</Text>
                        </View>
                        <Text> = </Text>
                        <View style={styles.alignment}>
                            <Text style={styles.bold}>Outstanding</Text>
                            <Text style={{color:'#ffa700',fontWeight:'700'}}>$8974.00</Text>
                        </View>


                    </View>
                    <View style={styles.wrapper}>
                            <View style={styles.alignment}>
                                <Text style={styles.bold}>Penalty</Text>
                                <Text style={styles.color}>$2000.00</Text>
                            </View>
                            <Text> = </Text>
                            <View style={styles.alignment
                            }>
                                <Text style={styles.bold}>Total Outstanding</Text>
                                <Text style={{color:'#ffa700',fontWeight:'700'}}>$10974.00</Text>
                            </View>
                    </View>
            </View>

            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{display:'flex',flexDirection:'column',borderWidth:1,borderRightColor:'lightgray',borderLeftColor:'transparent',borderTopColor:'transparent',borderBottomColor:'transparent'}}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.bold} >Last Disposition</Text>
                        <Text style={[styles.color,styles.marginStyling]}>NDC</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <Text style={styles.bold}>Mobile</Text>
                        <Text style={[styles.color,styles.marginStyling]}>XXXXXX1560</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <Text style={styles.bold}>Product</Text>
                        <Text style={[styles.color, styles.violetColor]}>INSTALOAN</Text>
                    </View>
                </View>
                <View style={{display:'flex',flexDirection:'column'}}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.bold}>Follow Up Date</Text>
                        <Text style={styles.color}></Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <Text style={styles.bold}>Language</Text>
                        <Text style={[styles.color,styles.marginStyling]}>MARATHI</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <Text style={styles.bold}>Product</Text>
                        <Text style={[styles.color,styles.violetColor,styles.marginStyling]}>15 days loan</Text>
                    </View>
                </View>

            </View>

                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                    <Text style={styles.buttonStyling}>Generate Invoice</Text>
                    <Text style={styles.buttonStyling}>View Disposition</Text>
                </View>

           </View>
                   
            
        </View>
    );
}

const styles = StyleSheet.create({
input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
},

cardContainer:{
  borderWidth:1,
  borderColor:'lightgrey',
  padding:5,
  paddingTop:15,
  paddingBottom:20,
  margin:10,
  shadowColor:'#333333',
  shadowOffset:{
    width:6,
    height:6,
  },
  shadowOpacity:0.6,
  shadowRadius:4,

},
androidShadow:{
    elevation:10,
},

redBackground:{
    borderWidth:1.5,
    borderColor:'red',
    fontWeight:'700',
    color:'red',
   
    borderRadius:5,
    paddingLeft:5,
    paddingRight:5
    
},
wrapper:{
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 borderBottomColor:'lightgrey',
 
},
alignment:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    
},
bold:{
    
    color:'#36454F',
    fontWeight:'bold'
    
},
color:{
    color:'grey',
    fontWeight:'500'
},
boxContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    
},
buttonStyling:{
    borderWidth:1,
    borderColor:'#5D3FD3',
    padding:10,
    color:'#5D3FD3',
    fontWeight:'700',
    borderRadius:3
    
},
violetColor:{
color:'#5D3FD3',
fontWeight:'500'
},
marginStyling:{
    marginLeft:10,
}

})


