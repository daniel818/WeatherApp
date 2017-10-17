/**
 * Created by Daniel on 24/09/2017.
 */
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines";
import _ from 'lodash';

function average(data) {

    return _.round(_.sum(data)/data.length);

}

export default ({data, color}) =>{
    return (
        <div>
            <Sparklines height={120} width={180} data={data}>
                <SparklinesLine color={color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(data)}</div>
        </div>
    )
}