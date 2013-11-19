(function($){
    $.fn.nomoretable = function(options){
    	//Defaultsettings
        var defaults = {
        	"tableclass": "table" //Which tables should be nomoretables?
        	/*",maxwidth": 700 //Breakpoint, when window-width is smaller than this number, the selected tables become "nomoretable"*/
        };
        var opts = $.extend(defaults, options);
        return this.each(function(){

        	//CSS for the selected Tables
        	jQuery(opts.tableclass).css({"display": "block"});
        	jQuery(opts.tableclass).find("table,thead, tbody, th, td, tr").css({"display": "block"});
        	jQuery(opts.tableclass).find("thead tr").css({"position": "absolute","top":"-9999px","left":"-9999px"});
        	jQuery(opts.tableclass).find("tr").css({"border": "1px solid black"});
        	jQuery(opts.tableclass).find("table, td").css({"border": "none","border-bottom":"1px solid grey","position":"relative","padding-left":"50%","white-space":"normal","text-align":"left"});
       		jQuery('head').append('<style>'+opts.tableclass+' td:before{position: absolute;top: 6px;left: 6px;width: 45%;padding-right: 10px;white-space: nowrap;text-align: left;font-weight: bold;content: attr(data-title);}</style>');

			var text = new Array();
			var ths = 0;
			//goes truth all selected Tables
			jQuery(opts.tableclass).each(function(table){
				ths = 0; //Number of <th> Elements in the Table
				jQuery(this).find("th").each(function(index){
					text[index] = jQuery(this).text(); //Gets the Content of the <th> Element and saves it in an Array
					ths = ths + 1;
			});

			var i=0; //Row in the Table

			jQuery(this).find("td").each(function(index){
				if(i>=ths){ //When the value gets bigger then the number of Rows, reset Value
					i=0;
				}
				if(jQuery(this).text() == "" || jQuery(this).text() == null){ //Only set data-title when the field isn't empty
				}else{
				jQuery(this).attr('data-title',text[i]); //Set the content of the <th> Element as data-title
				i = i+1;
				}
			});
		});
        });
    };
})(jQuery);