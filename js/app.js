$(function() {
	$('#reset').on("click", function(){
		var rootRef = new Firebase('https://hackntulottery.firebaseio.com/');
		var dataRef = rootRef.child("data");

		var notebookNum = $('#notebookNum').val();
		var penNum = $('#penNum').val();
		var flyingDiskNum = $('#flyingDiskNum').val();
		var pokerNum = $('#pokerNum').val();
		var stickerNum = $('#stickerNum').val();
		var sockNum = $('#sockNum').val();
		var hachlcdNum = $('#hachlcdNum').val();
		dataRef.set({
			"notebook": notebookNum,
			"pen": penNum,
			"flyingDisk": flyingDiskNum,
			"poker": pokerNum,
			"sticker": stickerNum,
			"sock": sockNum,
			"hacklcd": hachlcdNum
		});
	});

	$('#lottery').on("click", function(){
		var ref = new Firebase("https://hackntulottery.firebaseio.com/data");
		ref.on("value", function(snapshot) {
			var newData = snapshot.val();
			var total = parseInt(newData.notebook) + parseInt(newData.pen) + parseInt(newData.flyingDisk) + parseInt(newData.poker) + parseInt(newData.sticker) + parseInt(newData.sock) + parseInt(newData.hacklcd);
			var pivot = Math.floor(Math.random() * 10000) % total;
			prize(newData, pivot);
			console.log("pivot = " + pivot);
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
		});
	});

	$('#take').on("click", function(){
		var rootRef = new Firebase('https://hackntulottery.firebaseio.com/');
		var dataRef = rootRef.child("data");
		var item = $('#prize_content').data().name;
		var num = $('#prize_content').data().num;
		console.log(item);
		console.log(num);
		if(item == "notebook") {
			dataRef.update({
				"notebook": num
			});
		}
		else if(item == "pen") {
			dataRef.update({
				"pen": num
			});
		}
		else if(item == "flyingDisk") {
			dataRef.update({
				"flyingDisk": num
			});
		}
		else if(item == "poker") {
			dataRef.update({
				"poker": num
			});
		}
		else if(item == "sticker") {
			dataRef.update({
				"sticker": num
			});
		}
		else if(item == "sock") {
			dataRef.update({
				"sock": num
			});
		}
		else {
			dataRef.update({
				"hacklcd": num
			});
		}
	});
});

$(function() {
	var ref = new Firebase("https://hackntulottery.firebaseio.com/data");
	ref.on("value", function(snapshot) {
		var newData = snapshot.val();
		var total = parseInt(newData.notebook) + parseInt(newData.pen) + parseInt(newData.flyingDisk) + parseInt(newData.poker) + parseInt(newData.sticker) + parseInt(newData.sock) + parseInt(newData.hacklcd);
		$('#notebook').text(newData.notebook);
		$('#pen').text(newData.pen);
		$('#flyingDisk').text(newData.flyingDisk);
		$('#poker').text(newData.poker);
		$('#sticker').text(newData.sticker);
		$('#sock').text(newData.sock);
		$('#hacklcd').text(newData.hacklcd);
		$('#total').text(total);
	}, function (errorObject) {
  		console.log("The read failed: " + errorObject.code);
	});
});

function prize(myData, num) {
	var toNotebook   = parseInt(myData.notebook);
	var toPen        = parseInt(myData.notebook) + parseInt(myData.pen);
	var toFlyingDisk = parseInt(myData.notebook) + parseInt(myData.pen) + parseInt(myData.flyingDisk);
	var toPoker      = parseInt(myData.notebook) + parseInt(myData.pen) + parseInt(myData.flyingDisk) + parseInt(myData.poker);
	var toSticker    = parseInt(myData.notebook) + parseInt(myData.pen) + parseInt(myData.flyingDisk) + parseInt(myData.poker) + parseInt(myData.sticker);
	var toSock       = parseInt(myData.notebook) + parseInt(myData.pen) + parseInt(myData.flyingDisk) + parseInt(myData.poker) + parseInt(myData.sticker) + parseInt(myData.sock);
	var toHacklcd    = parseInt(myData.notebook) + parseInt(myData.pen) + parseInt(myData.flyingDisk) + parseInt(myData.poker) + parseInt(myData.sticker) + parseInt(myData.sock) + parseInt(myData.hacklcd);
	if(0 <= num && num < toNotebook)
		updateData("notebook", parseInt(myData.notebook) - 1, myData);
	else if(toNotebook <= num && num < toPen)
		updateData("pen", parseInt(myData.pen) - 1, myData);
	else if(toPen <= num && num < toFlyingDisk)
		updateData("flyingDisk", parseInt(myData.flyingDisk) - 1, myData);
	else if(toFlyingDisk <= num && num < toPoker)
		updateData("poker", parseInt(myData.poker) - 1, myData);
	else if(toPoker <= num && num < toSticker)
		updateData("sticker", parseInt(myData.sticker) - 1, myData);
	else if(toSticker <= num && num < toSock)
		updateData("sock", parseInt(myData.sock) - 1, myData);
	else
		updateData("hacklcd", parseInt(myData.hacklcd) - 1, myData);
}

function updateData(type, num, myData) {
	if(type == "notebook") {
		console.log("prize = " + type);
		$('#prize_content').text("恭喜獲得一本筆記本");
		$('#prize_content').data({name: "notebook", num: num});
	}
	else if(type == "pen") {
		console.log("prize = " + type);
		$('#prize_content').text("恭喜獲得一支Microsoft的筆");
		$('#prize_content').data({name: "pen", num: num});
	}
	else if(type == "flyingDisk") {
		console.log("prize = " + type);
		$('#prize_content').text("恭喜獲得一個飛盤");
		$('#prize_content').data({name: "flyingDisk", num: num});
	}
	else if(type == "poker") {
		console.log("prize = " + type);
		$('#prize_content').text("恭喜獲得一副撲克牌");
		$('#prize_content').data({name: "poker", num: num});
	}
	else if(type == "sticker") {
		console.log("prize = " + type);
		$('#prize_content').text("恭喜獲得一張facebook的貼紙");
		$('#prize_content').data({name: "sticker", num: num});
	}
	else if(type == "sock") {
		console.log("prize = " + type);
		$('#prize_content').text("恭喜獲得一雙襪子");
		$('#prize_content').data({name: "sock", num: num});
	}
	else if(type == "hacklcd") {
		console.log("prize = " + type);
		$('#prize_content').text("恭喜獲得一枚客製化車宣");
		$('#prize_content').data({name: "hacklcd", num: num});
	}
}
