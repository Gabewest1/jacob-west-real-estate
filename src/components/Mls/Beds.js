import React from "react"
import styled from "styled-components"

const Beds = props => (
    <BedsView {...props}>
        <input type="text" name="bedsMin" placeholder="min" />
        <input type="text" name="bedsMax" placeholder="max" />
    </BedsView>
)

const BedsView = styled.div``

export default Beds
