import{r as t,j as a,a as e}from"./index-DO4FB13m.js";const n=({children:n,visibleSection:r=!0,size:o="default"})=>{const[s,l]=t.useState(!1);return a("div",{className:"relative group text-center my-12",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[e("h2",{className:`${{default:"text-4xl",large:"text-5xl sm:text-6xl"}[o]} font-bold mb-2 transition-all duration-700 transform\n          ${r?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}\n          ${s?"scale-105":"scale-100"}`,children:e("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500",children:n})}),e("div",{className:"h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-300 to-purple-500\n          transition-all duration-300 ease-out\n          "+(s?"w-48 sm:w-56":"w-0")}),e("div",{className:"absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-cyan-300/10 to-purple-500/10 \n          rounded-lg blur-xl transition-opacity duration-500\n          "+(s?"opacity-75":"opacity-0")})]})};export{n as G};
