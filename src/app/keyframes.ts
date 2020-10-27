import {keyframes, style } from '@angular/animations';

export const shakeX = [
    style({transform: 'translate3d(-10px, 0, 0)', offset: .1}),
    style({transform: 'translate3d(10px, 0, 0)', offset: .2}),
    style({transform: 'translate3d(-10px, 0, 0)', offset: .3}),
    style({transform: 'translate3d(10px, 0, 0)', offset: .4}),
    style({transform: 'translate3d(-10px, 0, 0)', offset: .5}),
    style({transform: 'translate3d(10px, 0, 0)', offset: .6}),
    style({transform: 'translate3d(-10px, 0, 0)', offset: .7}),
    style({transform: 'translate3d(10px, 0, 0)', offset: .8}),
    style({transform: 'translate3d(-10px, 0, 0)', offset: .9}),


    // // style({transform: 'translate3d(0, 0, 0)'}),
    style({transform: 'none', offset: 1})

];
