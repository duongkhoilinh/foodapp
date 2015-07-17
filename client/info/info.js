Template.Info.onRendered(function() {
	
	$("#logo-upload").fileinput({
      uploadUrl: "http://localhost/site/file-upload-batch",
      allowedFileExtensions: ["jpg", "png", "gif"],
      minImageWidth: 50,
      minImageHeight: 50
  	});

  	$("#slide-upload").fileinput({
      uploadUrl: "http://localhost/site/file-upload-batch",
      allowedFileExtensions: ["jpg", "png", "gif"],
      minImageWidth: 10,
      minImageHeight: 10
  	});

  	$("#menu-item").fileinput({
      uploadUrl: "http://localhost/site/file-upload-batch",
      allowedFileExtensions: ["jpg", "png", "gif"],
      minImageWidth: 10,
      minImageHeight: 10,
      initialPreviewConfig: [
        {
          caption: 'desert.jpg', 
          width: '120px', 
          url: 'http://localhost/avatar/delete', // server delete action 
          key: 100, 
          extra: {id: 100}
        }
      ]
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