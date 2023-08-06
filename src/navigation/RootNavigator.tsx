import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import Product from "../models/Product";

export type RootParamsList = {
    SignIn: undefined
    Home: undefined
    Product: { product: Product }
}

const RootNavigator = () => {

    const RootStack = createNativeStackNavigator<RootParamsList>();

    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false,
                    statusBarStyle: "light"
                }} >
                <RootStack.Screen name={"SignIn"} component={SignInScreen} />
                <RootStack.Screen name={"Home"} component={HomeScreen} />
                <RootStack.Screen name={"Product"} component={ProductScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;