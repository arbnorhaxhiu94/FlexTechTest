import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
import { WINDOW } from "../../utils/Dimensions";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.DARK_BLUE
    },
    header: {
        width: WINDOW.WIDTH,
        height: 60,
        marginTop: 60,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    arrowBackImage: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    title: {
        position: "absolute",
        alignSelf: "center",
        width: WINDOW.WIDTH - 80,
        color: Colors.WHITE,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "800"
    },
    productImage: {
        width: WINDOW.WIDTH,
        height: 300,
        backgroundColor: Colors.DARK_BLUE
    },
    subTitle: {
        fontSize: 18,
        color: Colors.WHITE,
        fontWeight: "800",
        marginLeft: 20,
        marginTop: 20
    },
    specContainer: {
        flexDirection: "row",
        width: WINDOW.WIDTH - 40,
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: Colors.WHITE
    },
    label: {
        color: Colors.WHITE
    },
    spec: {
        color: Colors.WHITE,
        fontSize: 16,
        fontWeight: "600"
    },
    description: {
        paddingHorizontal: 20,
        marginTop: 10,
        color: Colors.WHITE
    },
    listButton: {
        position: "absolute",
        zIndex: 2,
        width: 50,
        height: 50,
        borderRadius: 25,
        top: 125,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    listButtonImage: {
        width: 20,
        height: 20
    }
});