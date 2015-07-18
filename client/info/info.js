

imagesTypes = ['image/png','image/jpeg'];

Template.Info.onRendered(function() {
	
	// $("#logo-input").fileinput({
 //      uploadUrl: "http://localhost/site/file-upload-batch",
 //      allowedFileExtensions: ["jpg", "png", "gif"],
 //      minImageWidth: 50,
 //      minImageHeight: 50
 //  	});

 //  	$("#slide-upload").fileinput({
 //      uploadUrl: "http://localhost/site/file-upload-batch",
 //      allowedFileExtensions: ["jpg", "png", "gif"],
 //      minImageWidth: 10,
 //      minImageHeight: 10
 //  	});

  	// $("#menu-item").fileinput({
   //    uploadUrl: "http://localhost/site/file-upload-batch",
   //    allowedFileExtensions: ["jpg", "png", "gif"],
   //    minImageWidth: 10,
   //    minImageHeight: 10,
  	// });

  	$(".file-loading").fileinput({
      uploadUrl: "http://localhost/site/file-upload-batch",
      allowedFileExtensions: ["jpg", "png", "gif"],
      minImageWidth: 10,
      minImageHeight: 10
  	});
});

Template.Info.events({
	'click #btn-next-menu': function(){
		$('#next-menu a').trigger('click');
	  	window.scrollTo(0, 0);
	},

	'click #btn-next-team': function(){
		$('#next-team a').trigger('click');
	  	window.scrollTo(0, 0);
	},

	'click #btn-next-payment': function(){
		$('#next-payment a').trigger('click');
	  	window.scrollTo(0, 0);
	},

	'click #btn-next-template': function(){
		$('#next-template a').trigger('click');
	  	window.scrollTo(0, 0);
	},

	'click #form-group-logo .file-drop-zone':  function() {
	  $('#logo-input').trigger('click');
	},

	'click #image-team-form .file-drop-zone':  function() {
	  $('#image-team').trigger('click');
	},

	'click #form-add-image .file-drop-zone':  function() {
	  $('#menu-item').trigger('click');
	},

	'click #btn-add-image': function() {
	  console.log('asdasd');
	  var imgShow = $('#form-add-image .file-preview-frame').html();
	  $('.show-image .row').append(imgShow);
	},

	'change #logo-input': function(e) {
	  var files = e.target.files;
	  var output = [];
	  var f, ref, tmp,
		  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
		var i = 0;
		while (f = files[i]) {
		  if (ref = f.type, indexOf.call(imagesTypes, ref) < 0) {
		    showError($('.alert'), 507, 'this files');
		  } else {
		    tmp = Images.insert(f, function(err, obj) {
		      if (err) {
		        return;
		      }
		      var dataImage = Session.get('MenuImage');
		      dataImage.push(obj['_id']);
		      return Session.set('MenuImage',dataImage);
		    });
		  }
		  output.push('<li><strong>');
		  output.push(escape(f.name));
		  output.push('</strong> (');
		  output.push(f.type || 'n/a');
		  output.push(') - ');
		  output.push(f.size);
		  output.push(' bytes, last modified: ');
		  output.push(f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a');
		  output.push('</li>');
		  i++;
		}
	}
})

if(Meteor.isClient) {
	Images = new FS.Collection("images", {
	  stores: [new FS.Store.FileSystem("images")]
	});
}










