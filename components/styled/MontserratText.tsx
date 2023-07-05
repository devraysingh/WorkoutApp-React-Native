import { Text } from "react-native";

import React from "react";

export function MontserratText(props: Text["props"]) {
    return (
        // <Text style={{ fontFamily: "montserrat" }}>
        //     {children}
        // </Text>
        <Text
            {...props}
            style={[props.style, { fontFamily: "montserrat" }]}
        />
    )
}
