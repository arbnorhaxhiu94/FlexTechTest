import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, TextInput, View } from "react-native"
import { RootStackNavigationProp } from "../../navigation/NavigationTypes";
import { styles } from "./styles";
import Images from "../../utils/Images";
import { useState } from "react";

const SignInScreen = () => {

    const navigation = useNavigation<RootStackNavigationProp>();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [error, setError] = useState<string>("");

    const onSignInPress = () => {
        if (!username) setError("Username is required");
        else if (!password) setError("Password is required");
        else if (username === "flex" && password === "123456") navigation.navigate("Home");
        else setError("Wrong credentials");
    }

    return (
        <View style={styles.screen}>
            <Image 
                source={Images.LOGO}
                style={styles.logoImage}
                resizeMode={"contain"} />
            <Text style={styles.subTitle}>Login to your account</Text>
            <TextInput 
                autoCapitalize={"none"}
                placeholder="Username / Email"
                style={styles.textInput}
                onChangeText={setUsername} />
            <TextInput 
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={setPassword} />
            {error && <Text style={styles.errorText}>{error}</Text>}
            <Pressable 
                testID="SignInButton"
                style={styles.signInButton}
                onPress={onSignInPress}>
                <Text style={styles.signInButtonText}>Sign in</Text>
            </Pressable>
        </View>
    )
}

export default SignInScreen;