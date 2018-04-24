import React from "react"
import styled from "styled-components"

class Buy extends React.Component {
    render() {
        return (
            <BuyView {...this.props}>
                Buy Here
            </BuyView>
        )
    }
}

const BuyView = styled.div``

export default Buy
