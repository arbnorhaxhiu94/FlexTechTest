import { ActivityIndicator, FlatList, Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import Images from "../../utils/Images";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../navigation/NavigationTypes";
import { useEffect, useState } from "react";
import axios from "axios";
import Colors from "../../utils/Colors";
import Product from "../../models/Product";
import FilterProducts from "../../utils/FilterProducts";

const HomeScreen = () => {

    const navigation = useNavigation<RootStackNavigationProp>();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string>("");

    const [products, setProducts] = useState<Product[]>([]);

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectedFilter, setSelectedFilter] = useState<string>("");
    const [searchWord, setSearchWord] = useState<string>("");

    const getProducts = () => {
        setIsLoading(true);
        axios
            .get("https://dummyjson.com/products")
            .then(res => {
                setIsLoading(false);
                setAllProducts(res.data.products);
                setProducts(res.data.products);
            })
            .catch(e => {
                setIsLoading(false);
                setError(JSON.stringify(e));
            });
    }

    const onSearch = (text: string) => {
        setSearchWord(text);
        setProducts(() => [...FilterProducts.getProducts(text, selectedFilter, allProducts)]);
    }

    const onFilterPress = (filter: string) => {
        setSelectedFilter(filter);
        setProducts(() => [...FilterProducts.getProducts(searchWord, filter, allProducts)]);
        setShowDropDown(false);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <View style={styles.screen} testID="Home-Screen">
            <Image 
                source={Images.LOGO}
                style={styles.image}
                resizeMode={"contain"} />
            {isLoading ? 
                <View style={styles.messageContainer}>
                    <ActivityIndicator color={Colors.WHITE} />
                </View>
            : error ?
                <View style={styles.messageContainer}>
                    <Text style={{ color: Colors.WHITE }}>{"error"}</Text>
                    <Pressable style={styles.tryAgainButton} onPress={() => getProducts()}>
                        <Text style={{color: Colors.WHITE}}>Try again</Text>
                    </Pressable>
                </View>
            :
                <View>
                    <View style={styles.searchFilterContainer}>
                        <TextInput 
                            placeholder={"Search a product"}
                            style={styles.searchInput}
                            onChangeText={onSearch} />
                        <View>
                            <Pressable 
                                style={styles.filterInput}
                                onPress={() => setShowDropDown(!showDropDown)} >
                                <Text>{selectedFilter ? selectedFilter : "Filter by category"}</Text>
                                <Image 
                                    source={Images.DROPDOWN}
                                    style={[styles.dropdownIcon, {transform: [{ rotate: showDropDown ? "180deg" : "0deg" }]}]} />
                            </Pressable>
                            {showDropDown ?
                            <View style={styles.dropDown}>
                                <Pressable style={styles.dropDownItem} onPress={() => onFilterPress("")}><Text>All</Text></Pressable>
                                <Pressable style={styles.dropDownItem} onPress={() => onFilterPress("Smartphones")}><Text>Smartphones</Text></Pressable>
                                <Pressable style={styles.dropDownItem} onPress={() => onFilterPress("Laptops")}><Text>Laptops</Text></Pressable>
                                <Pressable style={styles.dropDownItem} onPress={() => onFilterPress("Fragrances")}><Text>Fragrances</Text></Pressable>
                            </View>
                            : null}
                        </View>
                    </View>
                    <FlatList
                        keyExtractor={(_, i) => i.toString()}
                        data={products}
                        numColumns={2}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                style={styles.productContainer}
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate("Product", {product: item})} >
                                <Image 
                                    source={{ uri: item.thumbnail }}
                                    style={styles.productImage} />
                                <View style={styles.priceAndTitleContainer}>
                                    <Text style={styles.priceTitleText}>{item.title}</Text>
                                    <Text style={styles.priceTitleText}>{`${item.price}$`}</Text>
                                </View>
                            </TouchableOpacity>
                        )} 
                        ListFooterComponent={<View style={{ height: 350 }} />}
                        ListEmptyComponent={
                            <View style={styles.messageContainer}>
                                <Text style={{ color: Colors.WHITE }}>There are no products to show</Text>
                            </View>
                        }
                    />
                </View>
            }
        </View>
    )
}

export default HomeScreen;