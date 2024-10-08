import React from 'react';
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
  useMediaLibraryPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableHighlight, View, Alert, Text,  } from 'react-native';


function UploadOptions({onTakeImage, onClearPrediction}) {
    const [pickedImage, setPickedImage] = useState();
  const [imageSelection, setImageSelection] = useState("url");

  const [cameraPermissionInformation, requestCameraPermission] =
    useCameraPermissions();

  const [libraryPermissionInformation, requestLibraryPermission] =
    useMediaLibraryPermissions();

  async function verifyPermissions() {
    if (
      cameraPermissionInformation.status === PermissionStatus.UNDETERMINED ||
      libraryPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionCameraResponse = await requestCameraPermission();
      const permissionLibraryResponse = await requestLibraryPermission();
      return (
        permissionCameraResponse.granted && permissionLibraryResponse.granted
      );
    }
    if (
      cameraPermissionInformation.status === PermissionStatus.DENIED ||
      libraryPermissionInformation.status === PermissionStatus.DENIED
    ) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera and media library permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    onClearPrediction();
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.85,
      base64: true,
    });

    if (!image.canceled) {
      onTakeImage(image.assets[0].uri, image.assets[0].base64);
      setPickedImage(image.assets[0].uri);
    }
  }

  async function pickImageHandler() {
    onClearPrediction();
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.85,
      base64: true,
    });

    if (!image.canceled) {
      onTakeImage(image.assets[0].uri, image.assets[0].base64);
      console.log(image.assets[0].uri);
      setPickedImage(image.assets[0].uri);
    }
  }
    return (
       <View className="flex-1 w-[250] flex-row justify-between items-center" >
        <TouchableHighlight onPress={takeImageHandler}>
        <MaterialIcons name="photo-camera" size={32} color="#233B29" />
      </TouchableHighlight>
      <TouchableHighlight onPress={pickImageHandler}>
        <MaterialIcons name="photo" size={32} color="#233B29" />
      </TouchableHighlight>
       </View>
    );
}



export default UploadOptions;