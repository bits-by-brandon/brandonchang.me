import {consoleSetScreen} from "../actions/console";
import {delay} from "./utils";
import OutputLine from "../models/OutputLine";
import OutputStatusLine, {LINE_STATUS} from "../models/OutputStatusLine";

const startupSound = document.getElementById('startupSound');
startupSound.volume = 0.2;

const renderScreen = console => {
    const output = console.map(outputLine => outputLine.getOutput());
    return consoleSetScreen(output);
};

export default function boot() {

    return async dispatch => {
        let console = [];

        await delay(300);
        console.push(new OutputLine(['output'], 'flybyBIOS -- v6.23 --'));
        console.push(new OutputLine(['output'], 'Copyright (C) 2018 - 2019, Crowbar studios, INC.'));
        dispatch(renderScreen(console));

        await delay(1800);
        console.push(new OutputLine(['output'], ' '));
        dispatch(renderScreen(console));

        await delay(300);
        console.push(new OutputLine(['output'], 'INITIALIZING BOOT SEQUENCE...'));
        console.push(new OutputLine(['output'], ' '));
        dispatch(renderScreen(console));

        await delay(200);
        console.push(new OutputLine(['output'], '[      ] Running system check...'));
        dispatch(renderScreen(console));

        await delay(900);
        console.push(new OutputStatusLine(['output'], LINE_STATUS.LOADING, 'Main Processor: AMG 23Mhz'));
        dispatch(renderScreen(console));

        await delay(720);
        console.push(new OutputStatusLine(['output'], LINE_STATUS.LOADING, 'Memory Testing: 640k'));
        console.push(new OutputLine(['output'], ' '));
        dispatch(renderScreen(console));

        await delay(250);
        console.push(new OutputLine(['output'], 'Storage Testing: 16 Mhz, Quad Channel mode'));
        dispatch(renderScreen(console));

        await delay(550);
        console.push(new OutputStatusLine(['output'], LINE_STATUS.LOADING, '   Primary Master: BDC VC2300: 3.2MB'));
        console.push(new OutputStatusLine(['output'], LINE_STATUS.LOADING, '   Primary Slave: EMPTY'));
        console.push(new OutputLine(['output'], ' '));
        dispatch(renderScreen(console));

        await delay(200);
        console[5].text = '[>     ] Running system check...';
        console[6].status = LINE_STATUS.OK;
        dispatch(renderScreen(console));

        await delay(350);
        console[5].text = '[=>    ] Running system check...';
        console[7].status = LINE_STATUS.OK;
        dispatch(renderScreen(console));

        await delay(150);
        console[5].text = '[==>   ] Running system check...';
        console[8].status = LINE_STATUS.OK;
        dispatch(renderScreen(console));

        await delay(400);
        console[5].text = '[===>  ] Running system check...';
        console[9].status = LINE_STATUS.OK;
        dispatch(renderScreen(console));

        await delay(200);
        console[5].text = '[====> ] Running system check...';
        console[10].status = LINE_STATUS.OK;
        dispatch(renderScreen(console));

        await delay(200);
        console[5].text = '[=====>] Running system check...';
        console[11].status = LINE_STATUS.OK;
        dispatch(renderScreen(console));

        await delay(200);
        console[5].text = '[  OK  ] Running system check...';
        dispatch(renderScreen(console));

        await delay(400);
        console.push(new OutputStatusLine(['output'], LINE_STATUS.LOADING, 'react mount'));
        dispatch(renderScreen(console));

        await delay(300);
        console.push(new OutputStatusLine(['output'], LINE_STATUS.LOADING, 'node_modules transfer size 6.75 GB'));
        dispatch(renderScreen(console));

        await delay(100);
        console[12].status = LINE_STATUS.OK;
        dispatch(renderScreen(console));

        await delay(200);
        console.push(new OutputStatusLine(['output'], LINE_STATUS.LOADING, 'humor module'));
        dispatch(renderScreen(console));

        await delay(100);
        console[13].status = LINE_STATUS.OK;
        dispatch(renderScreen(console));

        await delay(300);
        console[14].status = LINE_STATUS.OK;
        dispatch(renderScreen(console));

        await delay(200);
        console[15].status = LINE_STATUS.FAIL;
        dispatch(renderScreen(console));

        await delay(200);
        console.push(new OutputLine(['output'], ' '));
        console.push(new OutputLine(['output'], ' '));
        console.push(new OutputLine(['output'], ' '));
        console.push(new OutputLine(['output'], 'Press DEL to enter SETUP    ; press Alt + F4 to quit'));
        console.push(new OutputLine(['output'], '03/01/1993 BDC-PPP-1.5'));
        dispatch(renderScreen(console));

        await delay(500);
        dispatch(renderScreen(console));

        await delay(200);
        console.push(new OutputLine(['output'], ' '));
        console.push(new OutputLine(['output'], 'Loading GUI...'));
        dispatch(renderScreen(console));
    }
}
