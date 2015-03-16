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
			notebook: notebookNum,
			pen: penNum,
			flyingDisk: flyingDiskNum,
			poker: pokerNum,
			sticker: stickerNum,
			sock: sockNum,
			hacklcd: hachlcdNum
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
		updateData("notebook", parseInt(myData.notebook) - 1);
	else if(toNotebook <= num && num < toPen)
		updateData("pen", parseInt(myData.pen) - 1);
	else if(toPen <= num && num < toFlyingDisk)
		updateData("flyingDisk", parseInt(myData.flyingDisk) - 1);
	else if(toFlyingDisk <= num && num < toPoker)
		updateData("poker", parseInt(myData.poker) - 1);
	else if(toPoker <= num && num < toSticker)
		updateData("sticker", parseInt(myData.sticker) - 1);
	else if(toSticker <= num && num < toSock)
		updateData("sock", parseInt(myData.sock) - 1);
	else
		updateData("hacklcd", parseInt(myData.hacklcd) - 1);
}

function updateData(type, num) {
	var rootRef = new Firebase('https://hackntulottery.firebaseio.com/');
	var dataRef = rootRef.child("data");
	if(type == "notebook") {
		console.log("prize = " + type);
		// dataRef.update({
		// 	notebook: num
		// });
	}
	else if(type == "pen") {
		console.log("prize = " + type);
		// dataRef.update({
		// 	pen: num
		// });
	}
	else if(type == "flyingDisk") {
		console.log("prize = " + type);
		// dataRef.update({
		// 	flyingDisk: num
		// });
	}
	else if(type == "poker") {
		console.log("prize = " + type);
		// dataRef.update({
		// 	poker: num
		// });
	}
	else if(type == "sticker") {
		console.log("prize = " + type);
		// dataRef.update({
		// 	sticker: num
		// });
	}
	else if(type == "sock") {
		console.log("prize = " + type);
		// dataRef.update({
		// 	sock: num
		// });
	}
	else if(type == "hacklcd") {
		console.log("prize = " + type);
		// dataRef.update({
		// 	hacklcd: num
		// });
	}
}
