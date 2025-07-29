/*function customRender(reactelement,maincontainer){
const domelement=document.createElement(reactelement.type)
domelement.innerHTML=reactelement.children
domelement.setAttribute('href',reactelement.props.href)
domelement.setAttribute('target',reactelement.props.target)
maincontainer.appendChild(domelement)
}*/
function customRender(reactelement, maincontainer) {

const domelement=document.createElement(reactelement.type)
domelement.innerHTML=reactelement.children
for(const prop in reactelement.props){
    if (prop==='children') continue;
    domelement.setAttribute(prop,reactelement.props[prop])
}maincontainer.appendChild(domelement)}

const reactelement={
    type:'a',
    props:{
        href:"https://www.google.com/",
        target:'_blank'
    },
    children:'click me to visit google'
}
const maincontainer=document.querySelector('#root');
customRender(reactelement,maincontainer)