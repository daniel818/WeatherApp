/**
 * Created by Daniel on 19/09/2017.
 */
import { FETCH_WEATHER }from '../actions/index';

export default function (state = [] ,action) {

    switch (action.type){

        case FETCH_WEATHER:
            return [action.payload.data, ...state];

    }

    return state;
    
}