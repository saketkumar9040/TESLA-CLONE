import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons"
import climateImage from "../assets/images/climate.png";

const ClimateScreen = () => {

  const router = useRouter();
  const [temperature, setTemperature] = useState(68)

  return (
    <View style={styles.climateContainer}>
      <Image
        source={climateImage}
        style={styles.climateImage}
        resizeMode="cover"
      />

      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.label}>Interior 74°F - Exterior 66°F</Text>

        <View style={styles.controlsRow}>
          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons name="power" size={42} color="white" />
            <Text style={styles.iconButtonText}>On</Text>
          </View>

          <View style={styles.temperatureContainer}>
            <Entypo
              onPress={() => setTemperature(temperature - 1)}
              name="chevron-left"
              size={30}
              color="grey"
            />
            <Text style={styles.temperatureText}>{temperature}</Text>
            <Entypo
              onPress={() => setTemperature(temperature + 1)}
              name="chevron-right"
              size={30}
              color="grey"
            />
          </View>

          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons name="car-door" size={42} color="grey" />
            <Text style={styles.iconButtonText}>Vent</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  climateContainer: {
    flex: 1,
    backgroundColor: "#161818",
  },
  back:{
    position:"absolute",
    top:50,
    // left:25,
    backgroundColor:"#2f3030",
    padding:10,
    paddingRight:20,
    borderRadius:5,
    borderWidth:3,
    borderLeftWidth:0,
    borderColor:"#fff",
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
  },
  climateImage:{
    width:"100%",
    height:"65%",
  },
  footer:{
    alignItems:"center",
    padding:12,
    marginBottom:20,
    marginTop:"auto"
  },
  label:{
    color:"grey",
    fontSize:18,
    fontWeight:"600",
    marginVertical:20
  },
  controlsRow:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-around"
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },
  iconButtonContainer: {
    alignItems: 'center',
  },
  iconButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default ClimateScreen;
