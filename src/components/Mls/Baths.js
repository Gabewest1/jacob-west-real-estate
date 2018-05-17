import React from "react"
import styled from "styled-components"

const Baths = props => (
    <BathsView {...props}>
        <p>Baths:</p>
        <input type="number" name="bathsMin" placeholder="min" min={0} />
        <input type="number" name="bathsMax" placeholder="max" min={0} />
    </BathsView>
)

const BathsView = styled.div``

export default Baths
