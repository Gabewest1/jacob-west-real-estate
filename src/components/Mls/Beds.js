import React from "react"
import styled from "styled-components"

const Beds = props => (
    <BedsView {...props}>
        <p>Beds:</p>
        <input type="number" name="bedsMin" placeholder="min" min={0} />
        <input type="number" name="bedsMax" placeholder="max" min={0} />
    </BedsView>
)

const BedsView = styled.div``

export default Beds
