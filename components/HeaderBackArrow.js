import React from 'react'
import { Image } from 'react-native'

const HeaderBackArrow = () => {
    return (
        <Image
            style={{ width: 13, height: 22 }}
            source={require('../assets/icons/back.png')}
        />
    )
}

export default HeaderBackArrow