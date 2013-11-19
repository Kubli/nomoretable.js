(function($)
{
    $.fn.nomoretable = function(options)
    {
        var defaults = {
        	"tablediv": "table",
        	"maxwidth": 700
        };
        var opts = $.extend(defaults, options);
        var style = ".nomoretable, .nomoretable thead, .nomoretable tbody, .nomoretable th, .nomoretable td, .nomoretable tr{display: block;}.nomoretable thead tr{position: absolute;top: -9999px;left: -9999px;}.nomoretable tr{border: 1px solid black;}.nomoretable td{border: none;border-bottom: 1px solid grey;position: relative;padding-left: 50%;white-space: normal;text-align: left;}.nomoretable td:before{position: absolute;top: 6px;left: 6px;width: 45%;padding-right: 10px;white-space: nowrap;text-align: left;font-weight: bold;}.nomoretable td:before{content: attr(data-title);}";
	    return this.each(function()
	    {
			jQuery('head').append('<style>'+style+'</style>');
	    	jQuery(window).on("resize", function(){
	    		var windowWidth = $(window).width();
	    		if(windowWidth < opts.maxwidth){
					var text = new Array();
					var ths = 0;
					jQuery(opts.tablediv).each(function(table)
					{
						jQuery(opts.tablediv).addClass("nomoretable");
						ths = 0;
						jQuery(this).find("th").each(function(index){
							text[index] = jQuery(this).text();
							ths = ths + 1;
						});

						var i=0;

						jQuery(this).find("td").each(function(index)
						{
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
				}else{
					jQuery(opts.tablediv).removeClass("nomoretable");
				}
			});
        });
    };
})(jQuery);