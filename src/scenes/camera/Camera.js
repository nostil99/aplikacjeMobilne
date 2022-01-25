import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera as Aparat } from 'expo-camera';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      color: 'white',
    },
    stretch: {
      width: 400,
      height: 600,
      resizeMode: 'stretch',
    },
  });

const Camera = ({ route, navigation }) => {
  const [pokazAparat, setPokazAparat] = useState(true)
  const [dostep, setDostep] = useState(null);
  const [typ, setTyp] = useState(Aparat.Constants.Type.back);
  const [zdjecie, setZdjecie] = useState("");
  const aparatRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Aparat.requestCameraPermissionsAsync();
      setDostep(status === 'granted');
    })();
  }, []);

  if (dostep === null) {
    return <View />;
  }
  if (dostep === false) {
    return <Text>Brak dostępu do kamery!</Text>;
  }

  const zrobZdjecie = async () => {
    if(aparatRef) {
      try {
        let zdj = await aparatRef.current.takePictureAsync({
          allowsEditing: true,
          base64: true,
          aspect: [4, 3],
          quality: 1,
        });

        return zdj;
      }
      catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      {pokazAparat ?
      (<Aparat style={styles.camera} type={typ} ref={aparatRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              const zdj = await zrobZdjecie();
              setZdjecie(zdj.uri);
              
              setPokazAparat(false);
            }
            }>
            <Text style={styles.text}>Zrób zdjęcie</Text>
          </TouchableOpacity>
        </View>
      </Aparat>)

      :

      (<View>
          <Image style={styles.stretch} source={{uri: zdjecie}}/>
      </View>)
      }
    </View>
  );
  }

Camera.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Camera.defaultProps = {
  navigation: { navigate: () => null },
}

export default Camera
