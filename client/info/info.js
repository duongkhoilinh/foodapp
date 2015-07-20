

imagesTypes = ['image/png','image/jpeg'];

Template.Info.onRendered(function() {
  	$(".file-loading").fileinput({
      uploadUrl: "http://localhost/site/file-upload-batch",
      minImageWidth: 10,
      minImageHeight: 10
  	});
});

Template.Info.events({
	'click .btn-next': function(e){
    var atrrID = $(e.currentTarget).attr('id');
    var id = atrrID.substr(4);
    console.log(id);
		$('#'+id + ' a').trigger('click');
	  	window.scrollTo(0, 0);
	},

	'click #logo-form .file-drop-zone':  function() {
	  $('#logo-input').trigger('click');
	},

	'click #team-member-form .file-drop-zone':  function() {
	  $('#team-member-upload').trigger('click');
	},

  'click #add-menu-image-form .file-drop-zone':  function() {
    $('#menu-image-upload').trigger('click');
  },

  'click #business-card-form .file-drop-zone':  function() {
    $('#business-card-upload').trigger('click');
  },

  'click #brochure-form .file-drop-zone':  function() {
    $('#brochure-upload').trigger('click');
  },

  'click #video-form .file-drop-zone':  function() {
    $('#video-upload').trigger('click');
  },

	'click #btn-add-image': function() {
	  var img = "<img src='images/image-test.jpg'>";

	  var imgMenu = "<div class='menu-image col-md-3'>" + img + "</div>";

    var descriptionMenu = $('#description-menu').val();
    var priceMenu = $('#price-menu').val()

    if(descriptionMenu && priceMenu) {
      var infoMenu = "<div class='menu-info col-md-8'><span>Description:</span><p class='menu-description'>" + descriptionMenu + "</p><span>Price:</span><p class='menu-price'>" + priceMenu +"</p></div>";

      var showMenu = "<div class='row'>" + imgMenu + infoMenu + "</div>";
      $('.show-menu .menu-content').append(showMenu);
      $('#description-menu').val("");
      $('#price-menu').val("");
      $('.show-menu h3').show();
    }
    else {
      alert("Please enter values");
    }
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










