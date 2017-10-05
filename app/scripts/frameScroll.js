import {isInFrame} from './utils';

export default function () {
    let frames = [],
        frame= null,
        frameRect = null,
        frameSquare = null,
        frameSquareRect = null,
        frameWrappers = null,
        frameWrapper = null,
        frameWrapperRect = null,
        windowHeight = window.innerHeight,
        windowScroll = null;


    function privateInit() {

        frameSquare = document.getElementsByClassName('frame__square')[0];
        frameSquareRect = frameSquare.getBoundingClientRect();
        frames = document.querySelectorAll('[data-clip]');
        frameWrappers = document.getElementsByClassName('work-item__background-image__wrapper');

        if(!frameSquare || frames.length <= 0){
            return
        }

        window.requestAnimationFrame(renderClip);
    }

    function privateDestroy() {
        
    }

    function renderClip() {
        windowScroll = window.scrollY;

        for(let i = 0; i < frames.length; i++){
            frame = frames[i];
            frameRect = frame.getBoundingClientRect();

            frameWrapper = frameWrappers[i];
            frameWrapperRect = frameWrapper.getBoundingClientRect();

            if(isInFrame(frameWrapperRect, windowHeight)){
                frameWrapper.setAttribute('style', `clip-path:
                inset(
                    ${(frameWrapperRect.height - frameWrapperRect.top) - (frameWrapperRect.height - frameSquareRect.top) }px
                    ${0}px
                    ${(frameWrapperRect.bottom - frameWrapperRect.height) + (frameWrapperRect.height - frameSquareRect.bottom) }px
                    ${0}px
                );
                `);
            }
        }

        window.requestAnimationFrame(renderClip);
    }

    return {
        init: privateInit,
        destroy: privateDestroy
    }
}