function getCategoryList() {
	var url = BASEURL + "/api/get_category_index/";
	var categoryList={};
	$.ajax( { 
		url: url, 
		success: function(result) { 
			try {
				categoryList = result; 
			}
			catch (e) {
				alert(e.message);	
			}
		} 
	});
	return categoryList;
}