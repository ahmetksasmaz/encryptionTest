$(document).ready(function(){

	var startButton = $("button");

	function prepareData(dataLength){

		var data = [];
		for(var i = 0; i < dataLength; i++){
			data.push(Math.floor(Math.random() * 93)+33);
		}
		return data;
	}

	function dataToString(data,dataLength){
		var text = "";

		for(var i = 0; i < dataLength; i++){
			text += String.fromCharCode(data[i]);
		}

		return text;
	}

	function cipher(dataLength, algorithm){

		var keyPreparationgetTime = 0;
		var encryptiongetTime = 0;
		var decryptiongetTime = 0;

		var start = 0, end = 0;

		var data = prepareData(dataLength);

		if(algorithm == "AES 128"){

			var text = dataToString(data,dataLength);

			// Prepare Key
			start = new Date().getTime();
			var key = prepareAESKey(16);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			var aSide = new AES.Crypto(key);
			var bSide = new AES.Crypto(aSide.key);

			bSide.setCounter(aSide.getCounter());

			// Encrypt
			start = new Date().getTime();
			var encrypted = aSide.encrypt(text);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = bSide.decrypt(encrypted);
			end = new Date().getTime();
			decryptiongetTime = end - start;

		}
		else if(algorithm == "AES 192"){

			var text = dataToString(data,dataLength);

			// Prepare Key
			start = new Date().getTime();
			var key = prepareAESKey(24);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			var aSide = new AES.Crypto(key);
			var bSide = new AES.Crypto(aSide.key);

			bSide.setCounter(aSide.getCounter());

			// Encrypt
			start = new Date().getTime();
			var encrypted = aSide.encrypt(text);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = bSide.decrypt(encrypted);
			end = new Date().getTime();
			decryptiongetTime = end - start;

		}
		else if(algorithm == "AES 256"){

			var text = dataToString(data,dataLength);

			// Prepare Key
			start = new Date().getTime();
			var key = prepareAESKey(32);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			var aSide = new AES.Crypto(key);
			var bSide = new AES.Crypto(aSide.key);

			bSide.setCounter(aSide.getCounter());

			// Encrypt
			start = new Date().getTime();
			var encrypted = aSide.encrypt(text);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = bSide.decrypt(encrypted);
			end = new Date().getTime();
			decryptiongetTime = end - start;

		}
		else if(algorithm == "OTP XOR"){

			// Prepare Key
			start = new Date().getTime();
			var key = prepareKey(dataLength);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			// Encrypt
			start = new Date().getTime();
			var encrypted = XORencrypt(data,key);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = XORdecrypt(encrypted, key);
			end = new Date().getTime();
			decryptiongetTime = end - start;

		}
		else if(algorithm == "OTP MOD"){

			// Prepare Key
			start = new Date().getTime();
			var key = prepareKey(dataLength);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			// Encrypt
			start = new Date().getTime();
			var encrypted = MODencrypt(data,key);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = MODdecrypt(encrypted, key);
			end = new Date().getTime();
			decryptiongetTime = end - start;
		}
		else if(algorithm == "LFSR XOR"){

			// Prepare Key
			start = new Date().getTime();
			var key = prepareKeyFromFormula(dataLength);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			// Encrypt
			start = new Date().getTime();
			var encrypted = MODencrypt(data,key);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = MODdecrypt(encrypted, key);
			end = new Date().getTime();
			decryptiongetTime = end - start;

		}
		else if(algorithm == "LFSR MOD"){

			// Prepare Key
			start = new Date().getTime();
			var key = prepareKeyFromFormula(dataLength);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			// Encrypt
			start = new Date().getTime();
			var encrypted = MODencrypt(data,key);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = MODdecrypt(encrypted, key);
			end = new Date().getTime();
			decryptiongetTime = end - start;
		}
		else if(algorithm == "RC4 5"){

			var text = dataToString(data,dataLength);
			// Prepare Key
			start = new Date().getTime();
			var key = prepareKey(5);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			var keyText = dataToString(key,key.length);

			// Encrypt
			start = new Date().getTime();
			var encrypted = rc4(text,keyText);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = rc4(encrypted,keyText);
			end = new Date().getTime();
			decryptiongetTime = end - start;
		}

		else if(algorithm == "RC4 13"){

			var text = dataToString(data,dataLength);
			// Prepare Key
			start = new Date().getTime();
			var key = prepareKey(13);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			var keyText = dataToString(key,key.length);

			// Encrypt
			start = new Date().getTime();
			var encrypted = rc4(text,keyText);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = rc4(encrypted,keyText);
			end = new Date().getTime();
			decryptiongetTime = end - start;
		}
		
		else if(algorithm == "RC4 16"){

			var text = dataToString(data,dataLength);
			// Prepare Key
			start = new Date().getTime();
			var key = prepareKey(16);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			var keyText = dataToString(key,key.length);

			// Encrypt
			start = new Date().getTime();
			var encrypted = rc4(text,keyText);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = rc4(encrypted,keyText);
			end = new Date().getTime();
			decryptiongetTime = end - start;
		}

		else if(algorithm == "RC4 32"){

			var text = dataToString(data,dataLength);
			// Prepare Key
			start = new Date().getTime();
			var key = prepareKey(32);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			var keyText = dataToString(key,key.length);

			// Encrypt
			start = new Date().getTime();
			var encrypted = rc4(text,keyText);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = rc4(encrypted,keyText);
			end = new Date().getTime();
			decryptiongetTime = end - start;
		}

		else if(algorithm == "RC4 64"){

			var text = dataToString(data,dataLength);
			// Prepare Key
			start = new Date().getTime();
			var key = prepareKey(64);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			var keyText = dataToString(key,key.length);

			// Encrypt
			start = new Date().getTime();
			var encrypted = rc4(text,keyText);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = rc4(encrypted,keyText);
			end = new Date().getTime();
			decryptiongetTime = end - start;
		}
		else if(algorithm == "RC4 128"){

			var text = dataToString(data,dataLength);
			// Prepare Key
			start = new Date().getTime();
			var key = prepareKey(128);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			var keyText = dataToString(key,key.length);

			// Encrypt
			start = new Date().getTime();
			var encrypted = rc4(text,keyText);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = rc4(encrypted,keyText);
			end = new Date().getTime();
			decryptiongetTime = end - start;
		}
		else if(algorithm == "RC4 256"){

			var text = dataToString(data,dataLength);
			// Prepare Key
			start = new Date().getTime();
			var key = prepareKey(256);
			end = new Date().getTime();
			keyPreparationgetTime = end - start;

			var keyText = dataToString(key,key.length);

			// Encrypt
			start = new Date().getTime();
			var encrypted = rc4(text,keyText);
			end = new Date().getTime();
			encryptiongetTime = end - start;

			// Decrypt
			start = new Date().getTime();
			var decrypted = rc4(encrypted,keyText);
			end = new Date().getTime();
			decryptiongetTime = end - start;
		}

		console.log(algorithm+"\t"+dataLength+"\t"+keyPreparationgetTime+"\t"+encryptiongetTime+"\t"+decryptiongetTime);

	}

	function test(){
		var algorithms = ["AES 128", "AES 192", "AES 256","OTP XOR", "OTP MOD", "LFSR XOR", "LFSR MOD", "RC4 5", "RC4 13", "RC4 16", "RC4 32", "RC4 64", "RC4 128", "RC4 256"];
		var dataSizes = [40960, 81920, 163840, 327680, 655360];
		var testNumber = 631;
		var m = 0;
		var testCount = testNumber*algorithms.length*dataSizes.length;
		for(var k = 0; k < testNumber; k++){
			console.error((k+1)+"th experiment...");
			for(var i = 0; i < algorithms.length; i++){
				for(var j = 0; j < dataSizes.length; j++){
					console.warn(m+"/"+testCount);
					cipher(dataSizes[j],algorithms[i]);
					m++;
				}
			}
		}
		console.warn(m+"/"+testCount);
	}

	startButton.click(test);

});