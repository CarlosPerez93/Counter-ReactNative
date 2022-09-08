import React, { Fragment } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
const ActionsButtons = ({ reset, plus }) => {
    return (
        <Fragment>

            <TouchableOpacity
                style={styles.btnReset}
                onPress={reset}
            >
                <Text style={styles.btnTxt}>
                    Reset
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnReset}
                onPress={plus}
            >
                <Text style={styles.btnTxt}>
                    +10
                </Text>
            </TouchableOpacity>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    btn: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ecf0f1"
    },
    btnReset: {
        height: 50,
        width: 100,
        backgroundColor: "#ecf0f1",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5
    },
    btnTxt: {
        fontSize: 18,
        color: "#7f8c8d",
        fontWeight: "bold"
    },
});

export default ActionsButtons