import{l as m,r as c,j as r}from"./index-BTJ-XG0F.js";import{b as u}from"./useProposals-Dc71rPbC.js";import{u as b,r as g}from"./SectionRenderer-BCPayv7u.js";import"./useMutation-DVHvN1Th.js";import"./quoteTotals-DsCX_K-0.js";import"./productHero-D4kOBJt8.js";import"./resolveImageUrl-CxFAVeJ-.js";import"./image-off-xHyMEJWO.js";function _(){var e,p;const{id:i}=m(),{data:a}=u(i),o=b({customerId:(a==null?void 0:a.proposal.customer_id)??"",quoteIds:(a==null?void 0:a.quoteIds)??[]});if(c.useEffect(()=>(document.body.classList.add("proposal-print-body"),()=>document.body.classList.remove("proposal-print-body")),[]),!a)return r.jsx("div",{className:"p-10 text-sm",children:"Loading…"});const t=a.sections.filter(s=>!s.hidden),n=(e=o.data)!=null&&e.customer?{first_name:o.data.customer.first_name,last_name:o.data.customer.last_name,email:o.data.customer.email??null,address:o.data.customer.address??null}:null,d=((p=o.data)==null?void 0:p.quotes)??[];return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
        @page { size: letter; margin: 0; }
        body.proposal-print-body { background: #e7e5e0; }
        .proposal-print-stack > * { break-after: page; page-break-after: always; break-inside: avoid; page-break-inside: avoid; margin: 0 auto 24px; box-shadow: 0 2px 30px rgba(0,0,0,0.08); }
        @media print {
          body.proposal-print-body { background: white; }
          .proposal-print-stack > * { box-shadow: none; margin: 0; }
          .proposal-print-stack > *:last-child { break-after: auto; page-break-after: auto; }
        }
      `}),r.jsx("div",{className:"proposal-print-stack py-8",children:t.map((s,l)=>g(s,{proposal:a.proposal,customer:n,quotes:d,pageIndex:l,pageCount:t.length}))})]})}export{_ as default};
