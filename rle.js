let stroka=require('fs').readFileSync('input.txt');
stroka=stroka.toString();
console.log(stroka);
let str='';
let cnt=1;
let i=0;
while(i<stroka.length){
	while(stroka[i]==stroka[i+cnt]){
		cnt++;
	}
	if (stroka[i]=='#'){
		str+='#'+String.fromCharCode(cnt)+stroka[i];
		i+=cnt}
	else{
		if(cnt>3){
			str+='#'+String.fromCharCode(cnt)+stroka[i];
			i+=cnt}
		else{ 
			str+=stroka[i];
			i+=1;
		}
	}
	cnt=1;
}
const fs = require("fs");
fs.writeFile("code.txt", str, function(error){
    if(error) throw error;
});


fs.readFile("code.txt", (error, strk) => {
    if (error) {
        console.error(error);
        return;
    }

    strk = strk.toString()
    rez = ''
    for (i = 0; i < strk.length;) {
        let ch = strk[i]
        if (ch == '#') {
            rez += strk[i + 2].repeat(strk[i + 1].charCodeAt(0))
            i += 3
        }
        else {
            rez += ch
            i += 1
        }
    }

    fs.writeFile("decode.txt", rez, (error) => {
        if (error) {
            console.error(error)
        }
    })
})
