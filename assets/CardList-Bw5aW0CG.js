import{r as i,n,C as a,j as e}from"./index-B1-A6b04.js";const o=t=>i.createElement("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_7838_140)"},i.createElement("path",{d:"M8.12531 6.00001H9.45865V4.00001H11.4586V2.66667H9.45865V0.666672H8.12531V2.66667H6.12532V4.00001H8.12531V6.00001ZM5.45865 12C4.72532 12 4.13198 12.6 4.13198 13.3333C4.13198 14.0667 4.72532 14.6667 5.45865 14.6667C6.19198 14.6667 6.79198 14.0667 6.79198 13.3333C6.79198 12.6 6.19198 12 5.45865 12ZM12.1253 12C11.392 12 10.7986 12.6 10.7986 13.3333C10.7986 14.0667 11.392 14.6667 12.1253 14.6667C12.8586 14.6667 13.4586 14.0667 13.4586 13.3333C13.4586 12.6 12.8586 12 12.1253 12ZM5.57198 9.83334L5.59198 9.75334L6.19198 8.66667H11.1586C11.6586 8.66667 12.0986 8.39334 12.3253 7.98001L14.8986 3.30667L13.7386 2.66667H13.732L12.9986 4.00001L11.1586 7.33334H6.47865L6.39198 7.15334L4.89865 4.00001L4.26532 2.66667L3.63865 1.33334H1.45865V2.66667H2.79198L5.19198 7.72667L4.29198 9.36001C4.18532 9.54667 4.12532 9.76667 4.12532 10C4.12532 10.7333 4.72532 11.3333 5.45865 11.3333H13.4586V10H5.73865C5.65198 10 5.57198 9.92667 5.57198 9.83334Z",fill:"white"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_7838_140"},i.createElement("rect",{width:16,height:16,fill:"white",transform:"translate(0.791992)"})))),d=t=>i.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_7838_110)"},i.createElement("path",{d:"M15.1533 15.1533L1.84667 1.84666L1.33333 1.33333L0.846667 0.846664L0 1.69333L2.92667 4.62L4.4 7.72666L3.5 9.36C3.39333 9.54666 3.33333 9.76666 3.33333 10C3.33333 10.7333 3.93333 11.3333 4.66667 11.3333H9.64L10.56 12.2533C10.2267 12.4933 10.0067 12.8867 10.0067 13.3333C10.0067 14.0667 10.6 14.6667 11.3333 14.6667C11.78 14.6667 12.1733 14.4467 12.4133 14.1067L14.3067 16L15.1533 15.1533ZM4.94667 10C4.85333 10 4.78 9.92666 4.78 9.83333L4.8 9.75333L5.4 8.66666H6.97333L8.30667 10H4.94667ZM10.3667 8.66666C10.8667 8.66666 11.3067 8.39333 11.5333 7.98L13.92 3.65333C13.9733 3.56 14 3.44666 14 3.33333C14 2.96666 13.7 2.66666 13.3333 2.66666H4.36L10.3667 8.66666ZM4.66667 12C3.93333 12 3.34 12.6 3.34 13.3333C3.34 14.0667 3.93333 14.6667 4.66667 14.6667C5.4 14.6667 6 14.0667 6 13.3333C6 12.6 5.4 12 4.66667 12Z",fill:"black"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_7838_110"},i.createElement("rect",{width:16,height:16,fill:"white"})))),h=n.li`
  width: 100%;

  border-radius: 8px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`,x=n.img`
  width: 100%;
  height: 112px;
  object-fit: fill;
  object-position: 50% 50%;
`,p=n.div`
  padding: 15px 8px 8px 8px;
  font-size: 12px;
  font-weight: 500;
`,C=n.h3`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`,g=n.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,m=n.button`
  width: 59px;
  height: 24px;
  border-radius: 4px;
  padding: 8px 4px;
  cursor: pointer;
  background-color: ${({$isAddedCart:t})=>t?a.black:a.lightGray};
  color: ${({$isAddedCart:t})=>t?a.white:a.black};
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;function L(t){return t.toLocaleString("ko-KR",{style:"decimal",maximumFractionDigits:0})+"원"}const f=({product:t,isAddedCart:r,onToggleCart:s})=>e.jsxs(h,{children:[e.jsx(x,{src:t.imageUrl,alt:t.name}),e.jsxs(p,{children:[e.jsx(C,{children:t.name}),e.jsx("p",{children:`${L(t.price)}`}),e.jsx(g,{children:e.jsx(m,{$isAddedCart:r,onClick:s,children:r?e.jsxs(e.Fragment,{children:[e.jsx(o,{})," ",e.jsx("span",{children:"담기"})]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{})," ",e.jsx("span",{children:"빼기"})]})})})]})]}),j=({products:t,onToggleCart:r,isAddedCart:s})=>e.jsx(e.Fragment,{children:t.map((l,c)=>e.jsx(f,{product:l,onToggleCart:()=>r(l.id),isAddedCart:!s(l.id)},`${l.id}-${c}`))});export{j as default};
