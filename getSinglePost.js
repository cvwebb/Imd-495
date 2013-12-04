function setStory(incUrl) {
	var url = $.url(incUrl);
		
	var params = url.param("url") + "?json=1";
	
	var idstory= url.param("id") + "2";

	var theHTml = "";
	var theStory = "";
	var theCategory = "";
	var theCategorySlug = "";
	var theParentCategory = "";
	var theParentCategorySlug = ""; 
	var theAuthor = "";
	var theTitle = "";
	var theDate = "";
	var theUrl = "";
	var theImageUrl = "";
	var theImageAlt = "";
	var categories = {};
	var urlz = BASEURL + "/api/get_category_index/";
	$.ajax( { 
		url: urlz, 
		success: function(result) { 
			try {
				categories = result; 
			}
			catch (e) {
				alert(e.message);	
			}
		} 
	});
	var storyObj = {};
	$.ajax( { 
		url: params, 
		success: function(result) { 
			try {
				storyObj = result; 

				theStory = storyObj.post.content;
				theCategory = storyObj.post.categories[0].title;
				theCategorySlug = storyObj.post.categories[0].slug;
				for (var i=0; i < categories.categories.length; i++) {
					if (categories.categories[i].id == storyObj.post.categories[0].parent) {
						theParentCategory = categories.categories[i].title;
						theParentCategorySlug = categories.categories[i].slug;
					}
				}
				theAuthor = storyObj.post.author.nickname;
				theTitle = storyObj.post.title;
				theDate = storyObj.post.date;
				theUrl = storyObj.post.url;
				try {
					theImageUrl = storyObj.post.attachments[0].images['feat-thumb'].url;
					theImageAlt = storyObj.post.attachments[0].caption;
				}
				catch(e) {
					theImageUrl = "images/noPhoto.jpg";
					theImageAlt = "No Photo";
				}
				theHTml += "<a rel=\"external\"  href='" + theUrl + "'><h2>" + theTitle + "</h2></a>\n";
				theHTml += "<span class='author'>" + theAuthor + "</span><span class='date'>" + theDate + "</span>\n";
				theHTml += "<img alt='" + theImageAlt + "' src='" + theImageUrl + "' class='postImage'/>\n";
				theHTml += "<div class='postStory'>\n" + theStory + "\n</div>";
			}
			catch (e) {
				theHTml = "<div><p>There Was an Error Grabbing your story.  " + e.message +".  </p></div>";
			}
				document.getElementById(idstory).innerHTML=theHTml;				

		} 
	});
	return false;
}

// JavaScript Document