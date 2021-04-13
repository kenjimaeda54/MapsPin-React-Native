import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import MapView, { Marker } from 'react-native-maps'

/* latitude: -23.5492243,
longitude: -46.5813785,

latitudeDelta: 0.0922,
longitudeDelta: 0.04,

Latitude: -15.7797200

Longitude: -47.9297200


Latitude: -23.413, 

Longitude: -46.4445


  */


export default function App() {
  const [change, setChange] = useState(null)
  const [number, setNumber] = useState({
    valor1: -23.5492243,
    valor2: -46.5813785
  })// em number seria so objeto não um array,so tem dois valores 
  const [select, setSelect] = useState([
    { key: 0, color: "#123", cords: { latitude: -23.5492243, longitude: -46.5813785 } },
    { key: 1, color: "#f23", cords: { latitude: -23.492243, longitude: -46.4581 } }
    //para acessar item de cada array sempre trabalha com map mesmo que so tenha
    // um objeto
  ])


  function selectValue(event) {
    //push e um metodo então cuidado tem que ser push({e a variavel que deseja})
    select.push({

      key: select.length,
      color: '#f23',
      cords: {

        latitude: event.nativeEvent.coordinate.latitude,
        longitude: event.nativeEvent.coordinate.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.04,
      }

    });

    setNumber({
      valor1: event.nativeEvent.coordinate.latitude,
      valor2: event.nativeEvent.coordinate.longitude,

    })


  }



  return (
    <SafeAreaView style={styles.container} >


      <MapView

        onPress={selectValue}
        style={styles.map}
        region={change}

      >
        {
          select.map((item) => {
            return (

              <Marker key={item.key}
                pinColor={item.color}
                coordinate={item.cords}
              />

            )
          })

        }


      </MapView>

      <View style={styles.btnArea} >


      </View>


      <Text style={{ marginTop: 30, fontSize: 20 }}>

        {`Latitude atual: ${number.valor1} \n Longitude atual: ${number.valor2} `}

      </Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 400,

  },
  btnArea: {

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,

  },
  button: {
    margin: 20,
    backgroundColor: "#125",
    width: 100,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',

  }



});

