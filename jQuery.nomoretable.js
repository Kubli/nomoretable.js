(function($){
    $.fn.nomoretable = function(options){
        var defaults = {
        	"tablediv": "table"
        };
        var opts = $.extend(defaults, options);
        return this.each(function(){
        	jQuery(opts.tablediv).css({"display": "block"});
        	jQuery(opts.tablediv).find("table,thead, tbody, th, td, tr").css({"display": "block"});
        	jQuery(opts.tablediv).find("thead tr").css({"position": "absolute","top":"-9999px","left":"-9999px"});
        	jQuery(opts.tablediv).find("tr").css({"border": "1px solid black"});
        	jQuery(opts.tablediv).find("table, td").css({"border": "none","border-bottom":"1px solid grey","position":"relative","padding-left":"50%","white-space":"normal","text-align":"left"});
       		jQuery('head').append('<style>'+opts.tablediv+' td:before{position: absolute;top: 6px;left: 6px;width: 45%;padding-right: 10px;white-space: nowrap;text-align: left;font-weight: bold;content: attr(data-title);}</style>');
			var text = new Array();
			var ths = 0;
			jQuery(opts.tablediv).each(function(table){
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
    };
})(jQuery);