function setFeed(loca) {
	var url = purl(loca);
	var params = url.param("url");
	var idFeed = url.param("id") + "2";
	var theHTml = "";
	var theExcerpt = "";
	var theString = "";
	var feedJSON2;
	$.ajax( { 
		url: params, 
		success: function(result) { 
			try {
				feedJSON2 = result; 
				for (var i=0; i < feedJSON2.posts.length; i++) {
					try {
						theHTml += "<div class=\"subCategory\"><div class=\"thumbnailImage\"><img src=\"" + feedJSON2.posts[i].attachments[0].images.thumbnail.url + "\" style=\"width:100%\"/></div>";
					}
					catch (e) {
						theHTml += "<div class=\"subCategory\"><div class=\"thumbnailImage\"><img src=\"images/noPhoto.jpg\" alt=\"no photo\" style=\"width:100%\"/></div>";
					}
					theExcerpt = feedJSON2.posts[i].excerpt.substring(0,150);
					theHTml = theHTml + "<div class=\"thePostSnippet\"><h2>";
					theHTml = theHTml + "<a rel=\"external\"#\" title=\"";
					var pageUrl = feedJSON2.posts[i].url;
					for (var j = 0; j < pageUrl.length; j++) {
						pageUrl[j] = pageUrl[j].replace(/"/g, "");
					}
					
					var goHereNext = encodeURI(BASEURL + "\/projects\/index.html?url=" + pageUrl + "&id=singlePost#singlePost");
					theHTml = theHTml + feedJSON2.posts[i].title_plain + "\"  href=\"" + goHereNext + "\" >" + feedJSON2.posts[i].title + "</a></h2><p>" + theExcerpt + "...</p></div></div><div class=\"clear\"></div>";
					
				}

				document.getElementById(idFeed).innerHTML = theHTml;				
			}
			catch (e) {
				alert(e.message);	
			}
		} 
	});
}

