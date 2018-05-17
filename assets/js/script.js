$(document).ready(function(){
    /* https://stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement */
    jQuery('img.svg-inline').each(function(){
        var $img = jQuery(this);
        var img_id = $img.attr('id');
        var img_class = $img.attr('class');
        var img_width = $img.attr('width');
        var img_height = $img.attr('height');
        var img_url = $img.attr('src');
        jQuery.get(img_url, function(data){
            var $svg = jQuery(data).find('svg');
            if (typeof img_id !== 'undefined')
                $svg = $svg.attr('id', img_id);
            if (typeof img_class !== 'undefined')
                $svg = $svg.attr('class', img_class);
            if (typeof img_width !== 'undefined')
                $svg = $svg.css('width', img_width);
            if (typeof img_height !== 'undefined')
                $svg = $svg.css('height', img_height);
            $svg = $svg.removeAttr('xmlns:a');
            $img = $img.replaceWith($svg);
        }, 'xml');
    });
});
