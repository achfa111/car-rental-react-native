import { View, Button } from 'react-native'
import React from 'react'

export default function Tombol() {
    return (
        <View>
            <Button
                title="Learn Me More"
                color="red"
                accessibilityLabel="Learn more about this red button"
            />
        </View>
    )
}