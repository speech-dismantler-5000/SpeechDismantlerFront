import React from 'react'
import {Grid} from '@material-ui/core'
import PropTypes from 'prop-types'
import { VictoryPie} from 'victory'
//import { WordCounter } from '../../utils/WordFregs.js'

/*
const otherSample = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
      ]
*/
const AnalysePage = () =>{ 
    //const {state} = props
    
    //const sampleData = WordCounter(this.state.transcript);

    return(
            <div>
					<Grid container
						spacing={24}
						direction="column"
						alignItems="center"
						justify="flex-end"
					>
                    <h1>Analytics</h1>
                        <Grid item xs={12}>
                            <VictoryPie
                                innerRadius={100}
                                colorScale={["tomato", "orange", "gold", "red"]}
                                //data={sampleData}
                                //data={WordCounter(state.transcript)}
                                data = {[{a:1,b:2}]}
                            />
                        </Grid>
					</Grid>
				</div>)
}

AnalysePage.propTypes = {
    state: PropTypes.object
}

export default AnalysePage