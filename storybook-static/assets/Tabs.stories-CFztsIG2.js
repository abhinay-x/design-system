import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-D4lIrffr.js";const c=({tabs:t,variant:x="underline"})=>{const[d,b]=j.useState(0),S=(n,e)=>{if(n.key==="ArrowRight"){let a=(e+1)%t.length;for(;a!==e&&t[a].disabled;)a=(a+1)%t.length;t[a].disabled||b(a)}if(n.key==="ArrowLeft"){let a=(e-1+t.length)%t.length;for(;a!==e&&t[a].disabled;)a=(a-1+t.length)%t.length;t[a].disabled||b(a)}};return r.jsxs("div",{children:[r.jsx("div",{role:"tablist",className:"flex border-b border-[var(--neutral-200)] space-x-2",children:t.map((n,e)=>r.jsx("button",{role:"tab","aria-selected":d===e,"aria-controls":`panel-${e}`,id:`tab-${e}`,disabled:n.disabled,className:`px-4 py-2 text-sm font-medium transition-colors duration-200 ${d===e?"border-b-2 border-[var(--primary-500)] text-[var(--primary-500)]":"text-[var(--neutral-800)] hover:text-[var(--primary-600)]"} ${n.disabled?"opacity-50 cursor-not-allowed":"hover:bg-[var(--neutral-50)]"} ${x==="pill"?"rounded-full bg-[var(--neutral-50)] px-6":""}`,onClick:()=>!n.disabled&&b(e),onKeyDown:a=>S(a,e),children:n.label},e))}),r.jsx("div",{className:"mt-4",children:t.map((n,e)=>r.jsx("div",{role:"tabpanel",id:`panel-${e}`,"aria-labelledby":`tab-${e}`,hidden:d!==e,className:"p-4 bg-[var(--surface-primary)] rounded-md animate-fade-in",children:n.content},e))})]})};c.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"Tab"}],raw:"Tab[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'underline' | 'pill'",elements:[{name:"literal",value:"'underline'"},{name:"literal",value:"'pill'"}]},description:"",defaultValue:{value:"'underline'",computed:!1}}}};const N={title:"Components/Tabs",component:c,argTypes:{variant:{control:"select",options:["underline","pill"]}},parameters:{docs:{description:{component:"\n          A tabs component for navigating between content panels.\n          - **Anatomy**:\n            - Tab List: Container for tab buttons.\n            - Tab: Individual navigable tab.\n            - Tab Panel: Content displayed for the active tab.\n          - **Props**:\n            - `tabs`: Array of objects with `label`, `content`, and optional `disabled`.\n            - `variant`: Style variant ('underline', 'pill').\n          - **States**: Active, hover, focus, disabled.\n          - **Use Cases**: Content switching in dashboards or forms.\n          - **Accessibility**: ARIA roles (`tablist`, `tab`, `tabpanel`), keyboard navigation (arrow keys).\n          - **Responsiveness**: Stacks on mobile; supports zoom.\n          - **Theming**: Light/dark mode via CSS variables.\n          - **Do's**: Use for related content sections.\n          - **Don'ts**: Avoid for primary navigation.\n        "}}}},s={args:{tabs:[{label:"Tab 1",content:"Content for Tab 1: This is the first tab."},{label:"Tab 2",content:"Content for Tab 2: This is the second tab."},{label:"Tab 3",content:"Content for Tab 3: This is the third tab.",disabled:!0}],variant:"underline"}},o={args:{tabs:[{label:"Tab 1",content:"Content for Tab 1: This is the first tab."},{label:"Tab 2",content:"Content for Tab 2: This is the second tab."}],variant:"pill"}},l={args:{tabs:[{label:"Tab 1",content:"Content for Tab 1",disabled:!0},{label:"Tab 2",content:"Content for Tab 2"}],variant:"underline"}},i={render:()=>r.jsxs("div",{className:"space-y-4",children:[r.jsx("p",{children:"Tabs in a dashboard:"}),r.jsx(c,{tabs:[{label:"Overview",content:"Dashboard overview content."},{label:"Analytics",content:"Analytics data and charts."},{label:"Settings",content:"User settings form.",disabled:!0}],variant:"pill"})]})};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Tab 1',
      content: 'Content for Tab 1: This is the first tab.'
    }, {
      label: 'Tab 2',
      content: 'Content for Tab 2: This is the second tab.'
    }, {
      label: 'Tab 3',
      content: 'Content for Tab 3: This is the third tab.',
      disabled: true
    }],
    variant: 'underline'
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,v,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Tab 1',
      content: 'Content for Tab 1: This is the first tab.'
    }, {
      label: 'Tab 2',
      content: 'Content for Tab 2: This is the second tab.'
    }],
    variant: 'pill'
  }
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,g,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Tab 1',
      content: 'Content for Tab 1',
      disabled: true
    }, {
      label: 'Tab 2',
      content: 'Content for Tab 2'
    }],
    variant: 'underline'
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,w,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <p>Tabs in a dashboard:</p>\r
      <Tabs tabs={[{
      label: 'Overview',
      content: 'Dashboard overview content.'
    }, {
      label: 'Analytics',
      content: 'Analytics data and charts.'
    }, {
      label: 'Settings',
      content: 'User settings form.',
      disabled: true
    }]} variant="pill" />\r
    </div>
}`,...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const $=["Default","PillVariant","Disabled","UseCase"];export{s as Default,l as Disabled,o as PillVariant,i as UseCase,$ as __namedExportsOrder,N as default};
