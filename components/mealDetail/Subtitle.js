import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        margin: 4,
        padding: 6,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginHorizontal: 12,
        marginVertical: 4
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    }
})