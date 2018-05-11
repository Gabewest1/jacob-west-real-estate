import React from "react"
import styled from "styled-components"

const Baths = props => (
    <BathsView {...props}>
        <input type="text" name="bathsMin" placeholder="min" />
        <input type="text" name="bathsMax" placeholder="max" />
    </BathsView>
)

const BathsView = styled.div``

export default Baths
