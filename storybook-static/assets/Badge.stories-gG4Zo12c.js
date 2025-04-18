import{j as e}from"./jsx-runtime-D_zvdyIk.js";const a=({label:j,variant:h="primary",size:N="md",disabled:l=!1})=>{const B={primary:"bg-[var(--primary-500)] text-[var(--neutral-50)]",success:"bg-[var(--success)] text-[var(--neutral-50)]",error:"bg-[var(--error)] text-[var(--neutral-50)]",warning:"bg-[var(--warning)] text-[var(--neutral-50)]"},D={sm:"px-2 py-1 text-xs",md:"px-3 py-1 text-sm"};return e.jsx("span",{className:`inline-flex items-center rounded-full font-medium ${B[h]} ${D[N]} ${l?"opacity-50 cursor-not-allowed":""}`,role:"status","aria-disabled":l,children:j})};a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'error'|'warning'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const k={title:"Components/Badge",component:a,argTypes:{variant:{control:"select",options:["primary","success","error"]},size:{control:"select",options:["sm","md"]},label:{control:"text"},disabled:{control:"boolean"}},parameters:{docs:{description:{component:`
          A badge component for status or categorization.
          - **Anatomy**: Single element displaying text.
          - **Props**:
            - \`label\`: Text content.
            - \`variant\`: Color variant ('primary', 'success', 'error').
            - \`size\`: Size variant ('sm', 'md').
            - \`disabled\`: Disables badge interaction.
          - **States**: Default, disabled.
          - **Use Cases**: Status indicators, tags in forms.
          - **Accessibility**: Uses \`role="status"\`, \`aria-disabled\`.
          - **Responsiveness**: Scales with text size; zoom-friendly.
          - **Theming**: Light/dark mode support.
          - **Do's**: Use for short labels.
          - **Don'ts**: Avoid long text.
        `}}}},r={args:{label:"New",variant:"primary",size:"md",disabled:!1}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{label:"Primary",variant:"primary"}),e.jsx(a,{label:"Success",variant:"success"}),e.jsx(a,{label:"Error",variant:"error"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{label:"Small",size:"sm"}),e.jsx(a,{label:"Medium",size:"md"})]})},t={args:{label:"Disabled",variant:"primary",size:"md",disabled:!0}},i={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"Badge in a task list:"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Task 1"}),e.jsx(a,{label:"Pending",variant:"warning",size:"sm"})]})]})};var o,d,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'New',
    variant: 'primary',
    size: 'md',
    disabled: false
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Badge label="Primary" variant="primary" />\r
      <Badge label="Success" variant="success" />\r
      <Badge label="Error" variant="error" />\r
    </div>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,v,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Badge label="Small" size="sm" />\r
      <Badge label="Medium" size="md" />\r
    </div>
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,f,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    variant: 'primary',
    size: 'md',
    disabled: true
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var z,S,w;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <p>Badge in a task list:</p>\r
      <div className="flex items-center gap-2">\r
        <span>Task 1</span>\r
        <Badge label="Pending" variant="warning" size="sm" />\r
      </div>\r
    </div>
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const C=["Default","Variants","Sizes","Disabled","UseCase"];export{r as Default,t as Disabled,n as Sizes,i as UseCase,s as Variants,C as __namedExportsOrder,k as default};
