import {actionCreators} from "../actions/console";
import {delay} from "./utils";
import OutputStatusLine, {LINE_STATUS} from "../models/OutputStatusLine";
import {Dispatch} from "redux";
import {Output, OutputType} from "../types/Output";

const {consoleClear, consoleSetInitialText, consoleSetScreen, consoleSetState} = actionCreators;

const startupSound = document.getElementById('startupSound') as HTMLAudioElement;
startupSound.volume = 0.2;

export default function boot() {
  return async (dispatch: Dispatch) => {

    let console: Output[] = [];

    dispatch(consoleSetState('booting'));

    startupSound.play();
    console.push({style: [OutputType.STANDARD], output: 'INITIALIZING BOOT SEQUENCE...'});
    console.push({style: [OutputType.STANDARD], output: ' '});
    dispatch(consoleSetScreen(console));

    await delay(1100);
    console.push({style: [OutputType.STANDARD], output: 'flybyBIOS -- v6.23 --'});
    console.push({style: [OutputType.STANDARD], output: 'Copyright (C) 2018 - 2019, Crowbar studios, INC.'});
    console.push({style: [OutputType.STANDARD], output: ' '});
    dispatch(consoleSetScreen(console));

    await delay(1700);
    console.push({style: [OutputType.STANDARD], output: '[      ] Running system check...'});
    dispatch(consoleSetScreen(console));

    await delay(900);
    console.push({style: [OutputType.STANDARD], output: 'Main Processor: AMG 23Mhz'});
    dispatch(consoleSetScreen(console));

    await delay(720);
    console.push({style: [OutputType.STANDARD], output: 'Memory Testing: 640k'});
    console.push({style: [OutputType.STANDARD], output: ' '});
    dispatch(consoleSetScreen(console));

    await delay(250);
    console.push({style: [OutputType.STANDARD], output: 'Storage Testing: 16 Mhz, Quad Channel mode'});
    dispatch(consoleSetScreen(console));

    await delay(550);
    console.push({style: [OutputType.STANDARD], output: '   Primary Master: BDC VC2300: 3.2MB'});
    console.push({style: [OutputType.STANDARD], output: '   Primary Slave: EMPTY'});
    console.push({style: [OutputType.STANDARD], output: ' '});
    dispatch(consoleSetScreen(console));

    await delay(200);
    console[5].output = '[>     ] Running system check...';
    console[6].status = LINE_STATUS.OK;
    dispatch(consoleSetScreen(console));

    await delay(350);
    console[5].output = '[=>    ] Running system check...';
    console[7].status = LINE_STATUS.OK;
    dispatch(consoleSetScreen(console));

    await delay(350);
    console[5].output = '[==>   ] Running system check...';
    console[8].status = LINE_STATUS.OK;
    dispatch(consoleSetScreen(console));

    await delay(400);
    console[5].output = '[===>  ] Running system check...';
    console[9].status = LINE_STATUS.OK;
    dispatch(consoleSetScreen(console));

    await delay(200);
    console[5].output = '[====> ] Running system check...';
    console[10].status = LINE_STATUS.OK;
    dispatch(consoleSetScreen(console));

    await delay(200);
    console[5].output = '[=====>] Running system check...';
    console[11].status = LINE_STATUS.OK;
    dispatch(consoleSetScreen(console));

    await delay(200);
    console[5].output = '[  OK  ] Running system check...';
    dispatch(consoleSetScreen(console));

    await delay(400);
    console.push({style: [OutputType.STANDARD], output: 'react mount'});
    dispatch(consoleSetScreen(console));

    await delay(300);
    console.push({style: [OutputType.STANDARD], output: 'node_modules transfer size 6.75 GB'});
    dispatch(consoleSetScreen(console));

    await delay(100);
    console[12].status = LINE_STATUS.OK;
    dispatch(consoleSetScreen(console));

    await delay(200);
    console.push({style: [OutputType.STANDARD], output: 'humor module'});
    dispatch(consoleSetScreen(console));

    await delay(100);
    console[13].status = LINE_STATUS.OK;
    dispatch(consoleSetScreen(console));

    await delay(300);
    console[14].status = LINE_STATUS.OK;
    dispatch(consoleSetScreen(console));

    await delay(200);
    console[15].status = LINE_STATUS.FAIL;
    dispatch(consoleSetScreen(console));

    await delay(200);
    console.push({style: [OutputType.STANDARD], output: ' '});
    console.push({style: [OutputType.STANDARD], output: ' '});
    console.push({style: [OutputType.STANDARD], output: ' '});
    console.push({style: [OutputType.STANDARD], output: 'Press DEL to enter SETUP    ; press Alt + F4 to quit'});
    console.push({style: [OutputType.STANDARD], output: '03/01/1993 BDC-PPP-1.5'});
    dispatch(consoleSetScreen(console));

    await delay(500);
    dispatch(consoleSetScreen(console));

    await delay(200);
    console.push({style: [OutputType.STANDARD], output: ' '});
    console.push({style: [OutputType.STANDARD], output: 'Loading GUI...'});
    dispatch(consoleSetScreen(console));

    await delay(2000);
    dispatch(consoleClear());

    await delay(500);
    dispatch(consoleSetState('ready'));


    let typeSpeed = 70;

    await delay(typeSpeed);
    dispatch(consoleSetInitialText('b'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('br'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('bra'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('bran'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('brand'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('brando'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('brandon'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('brandon_'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('brandon_c'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('brandon_ch'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('brandon_cha'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('brandon_chan'));
    await delay(typeSpeed);
    dispatch(consoleSetInitialText('brandon_chang'));
    await delay(typeSpeed);
  }
}
