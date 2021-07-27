import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';

import Genrator from '../utilis/Genrator';
import ClipBoard from '../lib/Clipboard';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaderVisible: false
        }
        this.contentRow = this.contentRow.bind(this);
        this.genratePassword = this.genratePassword.bind(this);
        this.copyPassword = this.copyPassword.bind(this);
    }

    genratePassword = () => {
        const password = Genrator.genratePassword();
        const { data } = this.state;
        const objectId = data.length;
        const newData = {
            id: objectId + 1,
            password
        }
        data.push(newData);
        this.setState({ data });
    }

    copyPassword = (data) => {
        const copyText = data.password;
        ToastAndroid.showWithGravity("Copied", ToastAndroid.SHORT, ToastAndroid.CENTER);
        ClipBoard.copyText(copyText);
    }

    contentRow = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} style={styles.contentRow}
                onPress={() => this.copyPassword(item)}>
                <Text style={styles.contentText}>{item.password}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.counter}>
                    <Text style={styles.buttonText}>{this.state.data.length}</Text>
                </View>
                <View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => (index + 1).toString()}
                        renderItem={this.contentRow}
                    />
                </View>
                <TouchableOpacity onPress={this.genratePassword} style={styles.floatButton}>
                    <Text style={styles.buttonText}>Genrate</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    contentRow: {
        height: 45,
        backgroundColor: '#0b48e0',
        marginVertical: 5,
        marginHorizontal: 30,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentText: {
        fontWeight: '600',
        fontSize: 15,
        color: '#FFFFFF'
    },
    floatButton: {
        position: 'absolute',
        width: 75,
        height: 45,
        backgroundColor: '#38ab4a',
        bottom: 40,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#FFFFFF'
    },
    counter: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        right: 5,
        top: 30,
        borderRadius: 50,
        zIndex: 10000
    }
});

export default Home;