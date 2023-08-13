import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';



const AppHeader = (props: any) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.iconBackground} onPress={() => props.action()}>
                <Text style={styles.IconStyle}>{props.name}</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>{props.header}</Text>
            <View style={styles.emptyContainer} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    IconStyle: {
        color: 'white',
        fontSize: 10,
    },
    headerText: {
        flex: 1,
        fontFamily: 'poppins-medium',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    emptyContainer: {
        height: 20 * 2,
        width: 20 * 2,

    },
    iconBackground: {
        backgroundColor: 'orange',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
export default AppHeader;
