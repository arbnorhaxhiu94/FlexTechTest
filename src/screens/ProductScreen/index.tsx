import { FlatList, Image, Pressable, Text, View } from "react-native"
import { styles } from "./styles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootParamsList } from "../../navigation/RootNavigator";
import Images from "../../utils/Images";
import { useRef, useState } from "react";

const ProductScreen = () => {

    const { params } = useRoute<RouteProp<RootParamsList, "Product">>();
    const navigation = useNavigation();

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const { product } = params;

    const flatListRef = useRef<FlatList | null>(null);

    const onScrollLeftPress = () => {
        if (activeIndex === 0) return;
        flatListRef.current?.scrollToIndex({index: activeIndex-1, animated: true});
        setActiveIndex(activeIndex-1);
    }

    const onScrollRightPress = () => {
        if (activeIndex === product.images.length - 1) return;
        flatListRef.current?.scrollToIndex({index: activeIndex+1, animated: true});
        setActiveIndex(activeIndex+1);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Image 
                        source={Images.ARROW_LEFT}
                        style={styles.arrowBackImage} 
                    />
                </Pressable>
                <Text style={styles.title}>
                    {product.title}
                </Text>
            </View>
            <View style={{ height: 300 }}>
                {activeIndex === 0 ? null :
                <Pressable 
                    onPress={() => onScrollLeftPress()}
                    style={[styles.listButton, {left: 10}]}>
                    <Image 
                        source={Images.ARROW_LEFT}
                        style={styles.listButtonImage} 
                    />
                </Pressable>}
                <FlatList 
                    ref={flatListRef}
                    horizontal
                    scrollEnabled={false}
                    keyExtractor={(_, i) => i.toString()}
                    data={product.images}
                    renderItem={({item}) => (
                        <Image 
                            source={{ uri: item }}
                            style={styles.productImage} 
                            resizeMode={"contain"}
                        />
                    )} 
                />
                {activeIndex === product.images.length - 1 ? null :
                <Pressable 
                    onPress={() => onScrollRightPress()}
                    style={[styles.listButton, {right: 10}]}>
                    <Image 
                        source={Images.ARROW_LEFT}
                        style={[styles.listButtonImage, {transform: [{ rotate: "180deg" }]}]} 
                    />
                </Pressable>}
            </View>
            <Text style={styles.subTitle}>Specs</Text>
            <View style={styles.specContainer}>
                <Text style={styles.label}>Brand:</Text>
                <Text style={styles.spec}>{product.brand}</Text>
            </View>
            <View style={styles.specContainer}>
                <Text style={styles.label}>Category:</Text>
                <Text style={styles.spec}>{product.category}</Text>
            </View>
            <View style={styles.specContainer}>
                <Text style={styles.label}>Rating:</Text>
                <Text style={styles.spec}>{product.rating}</Text>
            </View>
            <View style={styles.specContainer}>
                <Text style={styles.label}>Stock:</Text>
                <Text style={styles.spec}>{product.stock}</Text>
            </View>
            <View style={styles.specContainer}>
                <Text style={styles.label}>Price:</Text>
                <Text style={styles.spec}>{product.price}$</Text>
            </View>
            <Text style={styles.subTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
        </View>
    )
}

export default ProductScreen;