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
		console.log(notebookNum);
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
