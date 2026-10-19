import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{C as t,_ as n,l as r,o as i,s as a,w as o}from"./react.iNMCLRE-.mjs";import{T as s,t as c}from"./motion.BGkU77g8.mjs";import{D as l,G as u,o as d}from"./framer.DGdu9tAg.mjs";function f({text:e,transition:a,stagger:o,reverse:c,font:l,color:u,textTransform:d,tag:f,padding:p}){let[m,h]=n(!1),g=`rolling-text-inner-${t().replace(/:/g,``)}`,_=f,v=l?.fontSize??`16px`;l?.letterSpacing;let y=l?.lineHeight,b=l?.fontFamily??`Inter`,x=parseInt(v,10)||16,S;if(typeof y==`number`)S=x*y;else if(typeof y==`string`&&y.includes(`em`))S=x*(parseFloat(y)||1.2);else if(typeof y==`string`){let e=parseFloat(y);S=isNaN(e)?y:`${e}px`}else S=x*1.2;let C=typeof S==`number`?`${S}px`:S,w=`-${C}`,T=`
    .${g} {
      --font-size: ${v};
      --text: ${u};
      --line-height-abs: ${C};
      box-sizing: border-box; margin: 0; padding: 0; vertical-align: top;
      display: flex; overflow: hidden; width: max-content;
      font-family: ${b}; font-size: ${v};
      text-transform: ${d}; user-select: none;
      text-shadow: 0 var(--line-height-abs) 0 var(--text);
    }
    .${g} span {
      display: block; -webkit-backface-visibility: hidden; backface-visibility: hidden;
      white-space: pre; flex-shrink: 0;
      font-family: inherit; font-weight: inherit; font-style: inherit;
      font-size: inherit; letter-spacing: inherit;
      line-height: ${y??1.2};
      color: var(--text);
    }
  `,E={display:`flex`,alignItems:`center`,justifyContent:`center`,width:`100%`,height:`100%`,overflow:`hidden`,padding:p,boxSizing:`border-box`},D={initial:{y:`0%`},hover:{y:w}},O=typeof a?.duration==`number`?a.duration:.5,k=o/100;return r(`div`,{style:E,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[i(_,{className:g,children:[...e].map((t,n)=>{let r=c?e.length-1-n:n,o=e.length>0?O/e.length*r*k:0,u={display:`block`,...l};return i(s.span,{variants:D,initial:`initial`,animate:m?`hover`:`initial`,transition:{...a,delay:o},style:u,children:t===` `?`\xA0`:t},n)})}),i(`style`,{children:T})]})}var p=e((()=>{a(),o(),u(),c(),f.displayName=`Rolling Text`,l(f,{text:{type:d.String,title:`Text`,defaultValue:`Rolling Text`},font:{type:d.Font,title:`Font`,controls:`extended`,defaultValue:{fontFamily:`Inter`,fontWeight:`400`,fontSize:`16px`,fontStyle:`normal`,letterSpacing:`0px`,lineHeight:1.2}},color:{type:d.Color,title:`Color`,defaultValue:`#808080`},transition:{type:d.Transition,title:`Transition`,defaultValue:{type:`spring`,duration:.4,bounce:0}},stagger:{title:`Stagger`,type:d.Number,min:0,max:100,step:1,defaultValue:35,unit:`%`},padding:{title:`Padding`,type:d.Padding,defaultValue:`0px`},reverse:{type:d.Boolean,title:`Reverse`,defaultValue:!1,enabledTitle:`Yes`,disabledTitle:`No`},textTransform:{title:`Transform`,type:d.Enum,defaultValue:`none`,options:[`none`,`uppercase`,`lowercase`,`capitalize`],optionTitles:[`None`,`Uppercase`,`Lowercase`,`Capitalize`]},tag:{type:d.Enum,title:`Tag`,options:[`p`,`span`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],optionTitles:[`p`,`span`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],defaultValue:`p`,description:`More components at [Framer University](https://frameruni.link/cc).`}})}));export{p as n,f as t};
//# sourceMappingURL=RollingTextHover_Prod.CAEQsuTY.mjs.map