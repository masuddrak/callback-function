function messeage(name,functions){
    functions(name)
}
function mornig(name){
    console.log(name,'good mornig')
}
function evenig(name){
    console.log(name,'good evenig')
}
function night(name){
    console.log(name,'good night')
}
messeage('Masud Rana',mornig)
messeage('Masud Rana',evenig)
messeage('Masud Rana',night)