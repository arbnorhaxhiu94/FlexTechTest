import { StyleSheet } from "react-native";
import { WINDOW } from "../../utils/Dimensions";
import Colors from "../../utils/Colors";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.DARK_BLUE
    },
    image: {
        width: WINDOW.WIDTH/2,
        height: 120,
        alignSelf: "center",
        marginTop: 80,
        marginBottom: 30
    },
    productContainer: {
        width: WINDOW.WIDTH / 2 - 10,
        height: 150,
        marginHorizontal: 5,
        marginBottom: 10
    },
    productImage: {
        width: WINDOW.WIDTH / 2 - 10,
        height: 150,
        borderRadius: 10
    },
    priceAndTitleContainer: {
        width: WINDOW.WIDTH / 2 - 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: 5,
        paddingHorizontal: 5,
        elevation: 10
    },
    priceTitleText: {
        color: Colors.WHITE,
        elevation: 10,
        textShadowColor: Colors.DARK_BLUE,
        textShadowOffset: { width: 3, height: 3 }
    },
    searchFilterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 2
    },
    searchInput: {
        backgroundColor: Colors.WHITE,
        width: WINDOW.WIDTH/2 - 10,
        marginLeft: 5,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10
    },
    filterInput: {
        backgroundColor: Colors.WHITE,
        width: WINDOW.WIDTH/2 - 10,
        marginRight: 5,
        padding: 10,
        borderRadius: 10
    },
    dropDown: {
        backgroundColor: Colors.WHITE,
        position: "absolute",
        top: 45,
        zIndex: 2,
        width: WINDOW.WIDTH/2 - 10,
        borderRadius: 10,
        padding: 10
    },
    dropDownItem: {
        paddingVertical: 5
    },
    dropdownIcon: {
        position: "absolute",
        right: 10,
        top: 15
    },
    messageContainer: {
        width: WINDOW.WIDTH,
        height: 400,
        justifyContent: "center",
        alignItems: "center"
    },
    tryAgainButton: {
        backgroundColor: Colors.ORANGE,
        padding: 10,
        borderRadius: 10,
        marginTop: 20
    }
});