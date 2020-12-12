


function randpass(){
    var total = Math.floor(Math.random() * (32-12) + 12);
    var mix = '0123456789' + '!@#$%&*^' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz'; 
    var pass = new Array(total);

    for(var i = 0; i<total; i++){

        //lowercase at the starting
        if(i===0){
            var lowstart = Math.floor(Math.random() * (122-97 + 1) + 97);
            pass[i] = String.fromCharCode(lowstart);
        }

        //uppercase at the last 
        else if(i===(total - 1)){
            var uppend = Math.floor(Math.random() * (90-65 + 1) + 65);
            pass[i] = String.fromCharCode(uppend);
        }

        //two lowercase
        else if(i===4||i===7){
            var lowcase = Math.floor(Math.random() * (57-48 + 1) + 48);
            pass[i] = String.fromCharCode(lowcase);
        }

        //two uppercase
        else if(i===5||i===10){
            var uppcase = Math.floor(Math.random() * (90-65 + 1) + 65);
            pass[i] = String.fromCharCode(uppcase);
        }

        //a digit
        else if(i===6){
            var digit = Math.floor(Math.random() * (57-48 + 1) + 48);
            pass[i] = String.fromCharCode(digit);
        }

        else{
        var rest = Math.floor(Math.random() * mix.length + 1);
        pass[i] = mix.charAt(rest);
        }
    }
 
    var final = pass.join('');
    document.querySelector('.password').value = final.toString();
    
}

    function copy(){
        const copyT = document.querySelector('.password');
        copyT.select();
        copyT.setSelectionRange(0, 9999);
        document.execCommand("copy");
    }
    

   

    
    

