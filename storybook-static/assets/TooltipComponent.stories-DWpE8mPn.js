import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./index-D4lIrffr.js";const g=({content:y,children:n,position:a="top",disabled:h=!1,variant:v="primary"})=>{const[x,r]=T.useState(!1);return h?e.jsx(e.Fragment,{children:n}):e.jsxs("div",{className:"relative inline-block",children:[e.jsx("div",{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onFocus:()=>r(!0),onBlur:()=>r(!1),tabIndex:0,className:"outline-none",role:"tooltip","aria-describedby":"tooltip-content",children:n}),x&&e.jsx("div",{id:"tooltip-content",className:`absolute z-10 px-3 py-2 text-sm rounded-md shadow-md ${v==="primary"?"bg-primary-500 text-white":"bg-neutral-900 text-white"} ${a==="top"?"bottom-full mb-2":""} ${a==="bottom"?"top-full mt-2":""} ${a==="left"?"right-full mr-2":""} ${a==="right"?"left-full ml-2":""}`,children:y})]})};g.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}}};const N={title:"Components/TooltipComponent",component:g,argTypes:{content:{control:"text"},position:{control:"select",options:["top","bottom","left","right"]},disabled:{control:"boolean"},variant:{control:"select",options:["primary","neutral"]}},parameters:{docs:{description:{component:"A customizable tooltip component with accessibility and theming support."}},a11y:{config:{rules:[{id:"aria-allowed-attr",enabled:!0}]}}}},t={args:{content:"This is a tooltip",children:e.jsx("button",{className:"px-4 py-2 bg-primary-500 text-white rounded",children:"Hover me"}),position:"top",variant:"primary"}},o={args:{...t.args,disabled:!0}},s={args:{...t.args,variant:"neutral"},parameters:{backgrounds:{default:"dark"}}};var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <button className="px-4 py-2 bg-primary-500 text-white rounded">Hover me</button>,
    position: 'top',
    variant: 'primary'
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,f,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'neutral'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const j=["Default","Disabled","DarkTheme"];export{s as DarkTheme,t as Default,o as Disabled,j as __namedExportsOrder,N as default};
