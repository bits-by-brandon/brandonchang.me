import {consoleOutputMultiple} from "../actions/console";
import formatLines from "../utility/formatLines";

class bootLoader {
    constructor() {
    }

    initialize(dispatch) {
        return dispatch => {
            const lines = formatLines('output', [
                'flybyBIOS -- v6.23 --',
                '[  OK  ] react mount',
                '[  OK  ] redux initialize',
                '[  OK  ] node_modules transfer size 6.75 GB',
                '[ FAIL ] spyware install',
            ]);
            dispatch(consoleOutputMultiple(lines));
        }
    }
}

