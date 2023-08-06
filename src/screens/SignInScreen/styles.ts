import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
import { WINDOW } from "../../utils/Dimensions";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.DARK_BLUE
    },
    logoImage: {
        width: WINDOW.WIDTH / 2,
        height: 120,
        alignSelf: "center",
        marginTop: 140,
        marginBottom: 30
    },
    subTitle: {
        fontSize: 18,
        color: Colors.WHITE,
        fontWeight: "800",
        marginVertical: 20,
        textAlign: "center"
    },
    textInput: {
        backgroundColor: Colors.WHITE,
        width: WINDOW.WIDTH - 80,
        alignSelf: "center",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    signInButton: {
        width: WINDOW.WIDTH - 80,
        height: 40,
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: Colors.WHITE,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    signInButtonText: {
        fontSize: 16,
        fontWeight: "600"
    },
    errorText: {
        textAlign: "center",
        marginVertical: 10,
        color: Colors.ORANGE
    }
})