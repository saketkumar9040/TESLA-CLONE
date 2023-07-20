import {  StyleSheet, Text, View , FlatList ,Image, SafeAreaView ,StatusBar} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import car from "../assets/images/car.png";
import menuOptions from '../assets/menuOptions.js';
import MenuOptions from "../components/MenuOptions.js";
import Controls from "../components/Controls.js";




export default function Page() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle-o" size={30} color="grey" />
      </View>
      <Image source={car} style={styles.image} resizeMode="contain"/>  

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={MenuOptions}
        ListHeaderComponent={Controls}
      />
      <StatusBar barStyle="#fff"/>
    </SafeAreaView>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "grey",
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 300,
  }
});
