function prepareKey(keyLength){
	var key = [];
	for(var i = 0; i < keyLength; i++){
		key.push(Math.floor(Math.random() * 256));
	}
	return key;
}

function prepareAESKey(keyLength) {
    var key = new Array(keyLength);

    var i;
    
    for (i = 0; i < keyLength; i++) {
      key[i] = Math.floor(Math.random() * 0x100);
    }
    
    return key;
  }

function prepareKeyFromFormula(keyLength){

	var a = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var key = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
	for(var i = 2; i < keyLength; i++){
		key.push((a*key[i-2]+b*key[i-1]) % 256);
	}
	return key;

}

function modula(a, b){
	if(a < 0){return a + b;}
	else {return a % b;}
}

function XORencrypt(data, key){
	var cipher = [];
	for(var i = 0; i < data.length; i++){
		cipher.push(data[i] ^ key[i]);
	}
	return cipher;
}

function XORdecrypt(cipher, key){
	var data = [];
	for(var i = 0; i < cipher.length; i++){
		data.push(cipher[i] ^ key[i]);
	}
	return data;
}

function MODencrypt(data, key){
	var cipher = [];
	for(var i = 0; i < data.length; i++){
		cipher.push(modula(data[i] + key[i], 256)) ;
	}
	return cipher;
}

function MODdecrypt(cipher, key){
	var data = [];
	for(var i = 0; i < cipher.length; i++){
		data.push(modula(cipher[i] - key[i], 256));
	}
	return data;
}