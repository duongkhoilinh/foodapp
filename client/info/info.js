Template.Info.onRendered(function() {
	// $('#form-group-menu .file-drop-zone').click(function() {
	//   $('#logo-upload').trigger('click');
	// });

	// $('#form-group-slide .file-drop-zone').click(function() {
	//   $('#slide-upload').trigger('click');
	// });

	// setTimeout(function() {
	//     $("#logo-upload").fileinput({
	//       uploadUrl: "http://localhost/site/file-upload-batch",
	//       allowedFileExtensions: ["jpg", "png", "gif"],
	//       minImageWidth: 50,
	//       minImageHeight: 50
	//     });
	// },10000)
	// var loadFile = function(event) {
	// 	var output = document.getElementById('output');
	// 	output.src = URL.createObjectURL(event.target.files[0]);
	// };
	$("#logo-upload").fileinput({
      uploadUrl: "http://localhost/site/file-upload-batch",
      allowedFileExtensions: ["jpg", "png", "gif"],
      minImageWidth: 50,
      minImageHeight: 50
  	});

});

Template.Info.events({
	'click #btn-next-menu':function(){
		$('#next-menu a').trigger('click');
	  	window.scrollTo(0, 0);
	},

	'change #logo-upload': function() {
		readUrl(this);
	}
})