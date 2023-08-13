import * as React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const InputHeader = (props: any) => {
    const [searchtext, setSearchtext] = React.useState<string>('');
    console.log(searchtext);
    return (
        <View style={styles.inputBox} >
            <TextInput style={styles.textInput} onChangeText={text => setSearchtext(text)} value={searchtext} placeholder="Search your movie...." placeholderTextColor={'#fff'} />
            <TouchableOpacity style={styles.search} onPress={() => props.searchFunction(searchtext)}>
                <Icon name="search" color={'#fff'} size={30} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        display: 'flex',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 2,
        borderColor: '#E64949',
        borderRadius: 25,
        flexDirection: 'row',
    },
    textInput: {
        width: '90 %',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#fff',
    },
    search: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        fontWeight: '800',
    },
});
export default InputHeader;

