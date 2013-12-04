function getSubCategories(incUrl) {
	var url = $.url(incUrl);
	var parentCategory= url.param("parentID");
	var idstory = url.param("id") + "2";
	alert(idstory);
	var categories = {};
	var theHtml = "";
	var urlz = BASEURL + "/api/get_category_index/";
	$.ajax( { 
		url: urlz, 
		success: function(result) { 
			try {
				categories = result; 
				for (var i=0; i < categories.categories.length; i++) {
					if (categories.categories[i].parent == parentCategory) {
						theHtml += "<div><a href='" + BASEURL + "/index.html%3F" + BASEURL + "/category/" + categories.categories[i].slug + "?json=1' >" + categories.categories[i].title + "</a></div>";
					}
				}
			}
			catch (e) {
				alert(e.message);	
			}
		} 
	});
	
	document.getElementById(idstory).innerHTML = theHtml;				

	return false;
}

// JavaScript Document