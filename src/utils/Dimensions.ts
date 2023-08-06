import { Dimensions } from "react-native";

export enum SCREEN {
    WIDTH = Dimensions.get("screen").width,
    HEIGHT = Dimensions.get("screen").height
}

export enum WINDOW {
    WIDTH = Dimensions.get("window").width,
    HEIGHT = Dimensions.get("window").height
}