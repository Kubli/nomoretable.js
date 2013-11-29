jQuery(document).on("ready", function(){
	
	var text = new Array();
	var ths = 0;
	jQuery("table").each(function(table){
		ths = 0;
		jQuery(this).find("th").each(function(index){
			text[index] = jQuery(this).text();
			ths = ths + 1;
		});

		var i=0;

		jQuery(this).find("td").each(function(index){
			if(i>=ths){
				i=0;
			}
			if(jQuery(this).text() == "" || jQuery(this).text() == null){
			}else{
			jQuery(this).attr('data-title',text[i]);
			i = i+1;
			}
		});
	});
});