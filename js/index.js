import {Items} from './items.js';
import {ClickOpen} from './card.js';
import {Pairs} from './pairs.js';
import {Play} from './play.js';

Play();
Items();
ClickOpen();
Pairs();

console.table(window.frames[0]);
