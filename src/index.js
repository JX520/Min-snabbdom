/* 

AST语法树

import parseHtml from './AST/parseHtml';


let templateStr = `
    <div class="aaaa" id="ceshi">
        <h3>你好</h3>
        <ul>
            <li>唐三</li>
            <li>小舞</li>
            <li>斗罗大陆</li>
        </ul>
    </div>
`;

let res = parseHtml(templateStr);
console.log(res);

*/


import Min from './Min';

window.Min = Min;