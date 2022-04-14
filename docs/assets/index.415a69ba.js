var E=Object.defineProperty,F=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var v=(e,t,s)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,w=(e,t)=>{for(var s in t||(t={}))C.call(t,s)&&v(e,s,t[s]);if(y)for(var s of y(t))A.call(t,s)&&v(e,s,t[s]);return e},S=(e,t)=>F(e,k(t));import{j as g,r as d,F as L,a as j,R as I,b as O}from"./vendor.9040134d.js";const _=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}};_();const a=g.exports.jsx,r=g.exports.jsxs,P=g.exports.Fragment,D=({setPaciente:e})=>r("h1",{className:"font-black text-4xl text-center",children:["Seguimiento Pacientes",a("span",{className:"text-indigo-600 mt-2 block md:inline",children:" Veterinaria"})]}),M=()=>{const e=Math.random().toString(36).substring(2),t=Date.now().toString(36);return e+t},R=({children:e})=>a("p",{className:"bg-red-800 text-sm text-white text-center uppercase font-bold p-3 mb-5  animate__animated animate__slideInDown",children:e}),z=({paciente:e,setPaciente:t,setPacientes:s})=>{const[l,n]=d.exports.useState({id:"",mascota:"",propietario:"",email:"",fecha:"",sintomas:""}),[o,i]=d.exports.useState(!1);d.exports.useEffect(()=>{Object.keys(e).length>0&&n(e)},[e]);const{mascota:c,propietario:p,email:h,fecha:f,sintomas:x}=l,m=u=>{n(S(w({},l),{[u.target.name]:u.target.value}))};return r("div",{className:"md:w-1/2 lg:w-2/5",children:[a("h2",{className:"font-black text-3xl text-center",children:"Formulario"}),r("p",{className:"text-lg text-center mt-5",children:["A\xF1ade pacientes y",a("span",{className:"text-indigo-600 font-bold",children:" Adminstralos"})]}),r("form",{onSubmit:u=>{if(u.preventDefault(),[c,p,h,f,x].includes("")){i(!0);return}i(!1),e.id?s(b=>b.map(N=>N.id===e.id?l:N)):(l.id=M(),s(b=>[...b,l])),t({}),n({id:"",mascota:"",propietario:"",email:"",fecha:"",sintomas:""})},className:"bg-white shadow-md rounded-lg py-10 px-5 my-10 ",children:[o&&a(R,{children:"Todos los campos son obligatorios"}),r("div",{className:"mb-5",children:[a("label",{htmlFor:"mascota",className:"block text-gray-700 font-bold uppercase",children:"Nombre Mascota"}),a("input",{type:"text",id:"mascota",name:"mascota",className:"border-2 w-full p-2 placeholder-gray-400 rounded-md",placeholder:"Nombre de la mascota",value:c,onChange:m})]}),r("div",{className:"mb-5",children:[a("label",{htmlFor:"propietario",className:"block text-gray-700 font-bold uppercase",children:"Nombre Propietario"}),a("input",{type:"text",id:"propietario",name:"propietario",className:"border-2 w-full p-2 placeholder-gray-400 rounded-md",placeholder:"Nombre del propietario",value:p,onChange:m})]}),r("div",{className:"mb-5",children:[a("label",{htmlFor:"email",className:"block text-gray-700 font-bold uppercase",children:"Email"}),a("input",{type:"email",id:"email",name:"email",className:"border-2 w-full p-2 placeholder-gray-400 rounded-md",placeholder:"Email contacto",value:h,onChange:m})]}),r("div",{className:"mb-5",children:[a("label",{htmlFor:"fecha",className:"block text-gray-700 font-bold uppercase",children:"Alta"}),a("input",{type:"date",id:"fecha",name:"fecha",className:"border-2 w-full p-2 placeholder-gray-400 rounded-md",value:f,onChange:m})]}),r("div",{className:"mb-5",children:[a("label",{htmlFor:"sintomas",className:"block text-gray-700 font-bold uppercase",children:"Sintomas"}),a("textarea",{id:"sintomas",name:"sintomas",className:"border-2 w-full p-2 placeholder-gray-400 rounded-md",placeholder:"Describe los sintomas",value:x,onChange:m})]}),a("input",{type:"submit",className:"bg-indigo-600 w-full p-3 text-white font-bold rounded hover:bg-indigo-700 cursor-pointer transition ease-in-out duration-200",value:e.id?"Guardar Cambios":"Agregar Paciente"})]})]})},B=({paciente:e,setPaciente:t,eliminarPaciente:s})=>{const{id:l,mascota:n,propietario:o,email:i,fecha:c,sintomas:p}=e;return r("div",{className:"bg-white shadow-md rounded-lg py-10 px-5 my-10 animate__animated animate__fadeIn",children:[r("p",{className:"text-gray-700 uppercase font-bold mb-3",children:["Nombre: ",a("span",{className:"font-normal normal-case",children:n})]}),r("p",{className:"text-gray-700 uppercase font-bold mb-3",children:["Propietario:"," ",a("span",{className:"font-normal normal-case",children:o})]}),r("p",{className:"text-gray-700 uppercase font-bold mb-3",children:["Email: ",a("span",{className:"font-normal normal-case",children:i})]}),r("p",{className:"text-gray-700 uppercase font-bold mb-3",children:["Fecha Alta: ",a("span",{className:"font-normal normal-case",children:c})]}),r("p",{className:"text-gray-700 uppercase font-bold mb-3",children:["Sintomas: ",a("span",{className:"font-normal normal-case",children:p})]}),r("div",{className:"flex justify-around mt-10",children:[r("button",{type:"button",className:"btn bg-indigo-600 hover:bg-indigo-700 flex items-center",onClick:()=>t(e),children:[a(L,{className:"mr-2"}),"Editar"]}),r("button",{type:"button",className:"btn bg-red-600 hover:bg-red-700 flex items-center",onClick:()=>{confirm("\xBFDeseas eliminar este paciente?")&&s(l)},children:[a(j,{className:"mr-2"}),"Eliminar"]})]})]})},J=({pacientes:e,setPaciente:t,eliminarPaciente:s})=>a("div",{className:"md:w-1/2 lg:w-3/5 h-screen overflow-y-auto",children:e&&e.length?r(P,{children:[a("h2",{className:"text-center text-3xl font-black",children:"Listado Pacientes"}),r("p",{className:"text-lg text-center mt-5",children:["Administra tus",r("span",{className:"text-indigo-600 font-bold",children:[" ","Pacientes y Citas"]})]}),e.map(l=>a(B,{paciente:l,setPaciente:t,eliminarPaciente:s},l.id))]}):r(P,{children:[a("h2",{className:"text-center text-3xl font-black",children:"No hay Pacientes"}),r("p",{className:"text-lg text-center mt-5",children:["Comienza agregando pacientes",r("span",{className:"text-indigo-600 font-bold",children:[" ","y aparecer\xE1n en este lugar"]})]})]})}),T=()=>{const[e,t]=d.exports.useState([]),[s,l]=d.exports.useState({});return d.exports.useEffect(()=>{(()=>{var c;const i=(c=JSON.parse(localStorage.getItem("pacientes")))!=null?c:[];t(i)})()},[]),d.exports.useEffect(()=>{localStorage.setItem("pacientes",JSON.stringify(e))},[e]),r("div",{className:"container mt-5",children:[a(D,{}),r("div",{className:"md:flex md:space-x-3 mt-12",children:[a(z,{paciente:s,setPaciente:l,setPacientes:t}),a(J,{pacientes:e,setPaciente:l,eliminarPaciente:o=>{const i=e.filter(c=>c.id!==o);t(i)}})]})]})};I.render(a(O.StrictMode,{children:a(T,{})}),document.getElementById("root"));