import{r as e,a as t,j as a}from"./index-DO4FB13m.js";import{G as r}from"./GradientHeading-CH_evt_w.js";import"./vendor-JrvCYy-U.js";const i=()=>{const[i,n]=e.useState(!1),o=e.useRef(null);e.useEffect((()=>{const e=new IntersectionObserver((([t])=>{t.isIntersecting&&(n(!0),e.unobserve(t.target))}),{threshold:.1});return o.current&&e.observe(o.current),()=>{o.current&&e.unobserve(o.current)}}),[]);const s=({title:e,subtitle:r,period:n,description:o})=>a("div",{className:"mb-8 transition-all duration-700 ease-out transform "+(i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"),children:[a("div",{className:"flex flex-wrap justify-between items-baseline mb-1",children:[t("h3",{className:"text-xl font-bold text-white",children:e}),t("span",{className:"text-sm text-electric-cyan bg-electric-cyan/10 px-3 py-1 rounded-full",children:n})]}),t("h4",{className:"text-lg font-medium text-gray-300 mb-2",children:r}),t("p",{className:"text-gray-400",children:o})]});return t("section",{id:"resume",className:"py-20 px-4",ref:o,children:a("div",{className:"max-w-4xl mx-auto",children:[t(r,{visibleSection:i,children:"Resume"}),t("div",{className:"flex justify-center mb-10 transition-all duration-500 "+(i?"opacity-100":"opacity-0"),children:a("a",{href:"/path-to-your-resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center gap-2",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download Full Resume"]})}),a("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[a("div",{className:"relative transition-all duration-700 ease-out delay-100 transform "+(i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"),children:[t("div",{className:"absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-electric-cyan to-transparent opacity-60"}),a("div",{className:"pl-8",children:[t("h2",{className:"text-2xl font-bold text-white mb-6",children:"Education"}),[{school:"University of Computer Science",degree:"Bachelor of Science in Computer Science",period:"2020 - Present",description:"Focusing on software engineering, algorithms, and database systems. Maintaining a strong academic record with various practical projects."}].map(((e,a)=>t(s,{title:e.degree,subtitle:e.school,period:e.period,description:e.description},a)))]})]}),a("div",{className:"relative transition-all duration-700 ease-out delay-300 transform "+(i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"),children:[t("div",{className:"absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lime-green to-transparent opacity-60"}),a("div",{className:"pl-8",children:[t("h2",{className:"text-2xl font-bold text-white mb-6",children:"Experience"}),[{company:"Software Development Intern",role:"Web Developer",period:"Summer 2023",description:"Developed and maintained web applications using React and Node.js. Collaborated with senior developers to implement new features and fix bugs. Participated in code reviews and agile development processes."},{company:"University Project Team",role:"Full Stack Developer",period:"2023 - Present",description:"Working with a team of nine to develop a dynamic website using Java, MySQL, and PHP. Contributing to both frontend and backend development, focusing on responsive design and database management."}].map(((e,a)=>t(s,{title:e.role,subtitle:e.company,period:e.period,description:e.description},a)))]})]})]})]})})};export{i as default};
