import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-D4lIrffr.js";const r=({content:E,children:l,position:D="top",variant:R="primary",disabled:w=!1})=>{const[p,e]=A.useState(!1),P={top:"bottom-full mb-2 -translate-x-1/2 left-1/2",bottom:"top-full mt-2 -translate-x-1/2 left-1/2",left:"right-full mr-2 -translate-y-1/2 top-1/2",right:"left-full ml-2 -translate-y-1/2 top-1/2"},V={primary:"bg-[var(--primary-500)] text-[var(--neutral-50)]",secondary:"bg-[var(--secondary-500)] text-[var(--neutral-50)]",error:"bg-[var(--error)] text-[var(--neutral-50)]"};return w?t.jsx("div",{className:"opacity-50 cursor-not-allowed",children:l}):t.jsxs("div",{className:"relative inline-block",onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),onFocus:()=>e(!0),onBlur:()=>e(!1),tabIndex:0,role:"tooltip","aria-describedby":p?"tooltip-content":void 0,children:[l,p&&t.jsx("div",{id:"tooltip-content",className:`absolute z-10 px-3 py-2 text-sm rounded-md shadow-lg ${P[D]} ${V[R]} transition-opacity duration-200 animate-fade-in max-w-xs`,role:"tooltip",children:E})]})};r.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const B={title:"Components/Tooltip",component:r,argTypes:{position:{control:"select",options:["top","bottom","left","right"]},variant:{control:"select",options:["primary","secondary","error"]},content:{control:"text"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`
          A tooltip component that displays contextual information on hover or focus.
          - **Anatomy**:
            - Trigger: The element that activates the tooltip (e.g., button, input).
            - Content: The tooltip content displayed on hover/focus.
          - **Props**:
            - \`content\`: String content to display.
            - \`children\`: Trigger element.
            - \`position\`: Placement ('top', 'bottom', 'left', 'right').
            - \`variant\`: Color variant ('primary', 'secondary', 'error').
            - \`disabled\`: Disables tooltip interaction.
          - **States**: Visible (hover/focus), hidden, disabled.
          - **Use Cases**: Form field hints, button explanations.
          - **Accessibility**: ARIA roles (\`role="tooltip"\`, \`aria-describedby\`), keyboard navigation (Tab key).
          - **Responsiveness**: Adjusts positioning on mobile; uses rem units for zoom support.
          - **Theming**: Supports light/dark modes via CSS variables.
          - **Do's**: Use for brief, contextual help.
          - **Don'ts**: Avoid lengthy content or critical information.
        `}}}},o={args:{content:"This is a tooltip",children:t.jsx("button",{className:"px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md",children:"Hover or Focus"}),position:"top",variant:"primary",disabled:!1}},a={render:()=>t.jsxs("div",{className:"flex flex-wrap gap-4",children:[t.jsx(r,{content:"Primary Tooltip",variant:"primary",children:t.jsx("button",{className:"px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md",children:"Primary"})}),t.jsx(r,{content:"Secondary Tooltip",variant:"secondary",children:t.jsx("button",{className:"px-4 py-2 bg-[var(--secondary-500)] text-[var(--neutral-50)] rounded-md",children:"Secondary"})}),t.jsx(r,{content:"Error Tooltip",variant:"error",children:t.jsx("button",{className:"px-4 py-2 bg-[var(--error)] text-[var(--neutral-50)] rounded-md",children:"Error"})})]})},n={render:()=>t.jsxs("div",{className:"flex flex-wrap gap-4",children:[t.jsx(r,{content:"Top Tooltip",position:"top",children:t.jsx("button",{className:"px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md",children:"Top"})}),t.jsx(r,{content:"Bottom Tooltip",position:"bottom",children:t.jsx("button",{className:"px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md",children:"Bottom"})}),t.jsx(r,{content:"Left Tooltip",position:"left",children:t.jsx("button",{className:"px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md",children:"Left"})}),t.jsx(r,{content:"Right Tooltip",position:"right",children:t.jsx("button",{className:"px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md",children:"Right"})})]})},i={args:{content:"Disabled Tooltip",children:t.jsx("button",{className:"px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md",children:"Disabled"}),disabled:!0}},s={render:()=>t.jsxs("div",{className:"space-y-4",children:[t.jsx("p",{children:"Tooltip in a form:"}),t.jsx(r,{content:"Enter a valid email address",children:t.jsx("input",{type:"email",placeholder:"Email",className:"px-3 py-2 border rounded-md bg-[var(--surface-primary)] text-[var(--text)]"})})]})};var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">\r
        Hover or Focus\r
      </button>,
    position: 'top',
    variant: 'primary',
    disabled: false
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,v,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Tooltip content="Primary Tooltip" variant="primary">\r
        <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">\r
          Primary\r
        </button>\r
      </Tooltip>\r
      <Tooltip content="Secondary Tooltip" variant="secondary">\r
        <button className="px-4 py-2 bg-[var(--secondary-500)] text-[var(--neutral-50)] rounded-md">\r
          Secondary\r
        </button>\r
      </Tooltip>\r
      <Tooltip content="Error Tooltip" variant="error">\r
        <button className="px-4 py-2 bg-[var(--error)] text-[var(--neutral-50)] rounded-md">\r
          Error\r
        </button>\r
      </Tooltip>\r
    </div>
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,y,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Tooltip content="Top Tooltip" position="top">\r
        <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">\r
          Top\r
        </button>\r
      </Tooltip>\r
      <Tooltip content="Bottom Tooltip" position="bottom">\r
        <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">\r
          Bottom\r
        </button>\r
      </Tooltip>\r
      <Tooltip content="Left Tooltip" position="left">\r
        <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">\r
          Left\r
        </button>\r
      </Tooltip>\r
      <Tooltip content="Right Tooltip" position="right">\r
        <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">\r
          Right\r
        </button>\r
      </Tooltip>\r
    </div>
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,h,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    content: 'Disabled Tooltip',
    children: <button className="px-4 py-2 bg-[var(--primary-500)] text-[var(--neutral-50)] rounded-md">\r
        Disabled\r
      </button>,
    disabled: true
  }
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var N,j,S;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <p>Tooltip in a form:</p>\r
      <Tooltip content="Enter a valid email address">\r
        <input type="email" placeholder="Email" className="px-3 py-2 border rounded-md bg-[var(--surface-primary)] text-[var(--text)]" />\r
      </Tooltip>\r
    </div>
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const L=["Default","Variants","Positions","Disabled","UseCase"];export{o as Default,i as Disabled,n as Positions,s as UseCase,a as Variants,L as __namedExportsOrder,B as default};
