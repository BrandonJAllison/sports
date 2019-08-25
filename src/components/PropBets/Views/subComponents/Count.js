import React from 'react'
import Select from 'react-select'

import { statTypeOption } from '../../../../assets/dummyData'
import { Flex, StyledButton, CountDisplay, CountSet } from '../../styledComponents'

const Count = props => {

    return (

        <>

            <Flex spaceAJ>
                <CountSet>
                    <p>{props.count}</p>
                    <StyledButton
                        onClick={() => props.count > 0 ? props.setCount(props.count - 1) : props.setCount(0)}
                        half small>-</StyledButton>
                    <StyledButton
                        onClick={() => props.setCount(props.count + 1)}
                        half small>+</StyledButton>
                </CountSet>

                <CountDisplay>
                    <p>{props.count}</p>
                    <Select
                        value={props.statType}
                        onChange={props.handleStatTypeChange}
                        options={statTypeOption}
                        isSearchable={true}
                        defaultValue={statTypeOption[0].value}
                        placeholder={statTypeOption[0].label}
                    />
                </CountDisplay>
            </Flex>

            <Flex spaceAJ>
                <StyledButton primary onClick={props.clearOptions}>Clear</StyledButton>
                <StyledButton primary onClick={props.betSlipUpdate}>Send To Betslip</StyledButton>
            </Flex>

        </>

    )
}

export default Count
