/* Template: The Denorious Theme | Author: Fluent-Themes */
/*----------------------------------------------------------*/
(function($) {

"use strict";

//ISOTOPE
jQuery(window).load(function($){
    jQuery('.grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
            gutterWidth: 0,
            columnWidth: 1
        }
    });
    jQuery("#amount").val('10.00');
    jQuery("#donation_amount").text('10.00');
    jQuery("#offline_payment_amount").val('10.00');
    jQuery("button").attr("aria-expanded","true");

    if(screen.width < 767){
        jQuery(".dropdown").addClass("open");
        jQuery("#login-comments").addClass("force-margin");
    }

    var numItems = jQuery('.col').length;
    if(numItems == 3){
        jQuery(".megamenu .dropdown-menu").css("width", "556px");
    }

});

jQuery(document).ready(function($){

    var strok_color = jQuery("#stroke").val();
    if(strok_color == ""){
        strok_color = "#1c57a1";
    } else {
        strok_color = strok_color;
    }    

    var fill_color = jQuery("#fillcolor").val();
    if(fill_color == ""){
        fill_color = "#fff";
    } else {
        fill_color = fill_color;
    }
    
    // CIRCLE PROGRESSBAR
    var progress_value = $(".progress-circle small").text().split('%');
    if(progress_value.length > 0){

        for( var i=0; i<3; i++){
            $(".circle"+i+"").circliful({
                animation: 1,
                animationStep: 5,
                foregroundBorderWidth: 8,
                backgroundBorderWidth: 8,
                backgroundColor: ''+fill_color+'',
                foregroundColor: ''+strok_color+'',
                percent: progress_value[i],
            });
        }

    } 
    
    // TOP POGRESS
    var get_percentage = $(".top-progress span").text().split('%');
    var circle2 = get_percentage.toString().replace(/,/g , "");

    if(circle2.length > 0){    
        $(".progress-circle-2").circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 6,
            backgroundBorderWidth: 6,
            backgroundColor: 'rgba(255,255,255,0.3)',
            foregroundColor: '#ffffff',
            percent: circle2,
        }); 
    } 

    // VC CAUSES CIRCLE
    var causes      = $(".vc-causes");
    var el          = $(".vc-causes small");
    var count       = $(".vc-causes small").length;
    if( count > 0 ){
        for (var i = 0; i < count; i++) {
            var vccause = $(el[i]).text().split('%');
            var vc_circle = vccause.toString().replace(/,/g , ""); 
            $(causes[i]).circliful({
                animation: 1,
                animationStep: 5,
                foregroundBorderWidth: 6,
                backgroundBorderWidth: 6,
                backgroundColor: '#ffffff',
                foregroundColor: ''+strok_color+'',
                percent: vc_circle,
            });                    
        } 
    }

    // CAUSES CIRCLE
    var causes2      = $(".causes");
    var el2          = $(".causes small");
    var count2       = $(".causes small").length;
    if( count2 > 0 ){
        for (var i = 0; i < count2; i++) {
            var vccause2 = $(el2[i]).text().split('%');
            var vc_circle2 = vccause2.toString().replace(/,/g , ""); 
            $(causes2[i]).circliful({
                animation: 1,
                animationStep: 5,
                foregroundBorderWidth: 6,
                backgroundBorderWidth: 6,
                backgroundColor: '#ffffff',
                foregroundColor: ''+strok_color+'',
                percent: vc_circle2,
            });                    
        } 
    }
     

    // CAUSES SINGPLE PAGE CIRCLE
    var cause_single = $(".single-circle small").text().split('%');
    var single_circle = cause_single.toString().replace(/,/g , "");
    if(single_circle.length > 0){     
        $(".single-circle").circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 8,
            backgroundBorderWidth: 8,
            backgroundColor: '#ffffff',
            foregroundColor: ''+strok_color+'',
            percent: single_circle
        }); 
    }

    //URGENT CAUSES CIRCLE
    var urgent_cause_circle = $(".urgent_cause_circle small").text().split('%');
    var urgent_percentage = urgent_cause_circle.toString().replace(/,/g , "");    
    $('.urgent_cause_circle').circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 6,
        backgroundBorderWidth: 6,
        backgroundColor: '#ffffff',
        foregroundColor: ''+strok_color+'',
        percent: urgent_percentage,
    });        

    // RATINGS JS
    $('.js-star-rating').on('change', 'input', function() {
        $('.js-current-rating')
            .removeClass()
            .addClass('current-rating js-current-rating current-rating--' + this.value);
    });

    $('.filter-button-group').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: filterValue
        });

        $('.filter-button-group li').removeClass('active');
        $(this).addClass('active');
    });

    // COUNTDOWN TIMER
    var get_date = $('.cc-date').contents().filter(function() {return this.nodeType == Node.TEXT_NODE;}).text();
    if(get_date.length > 0){
        $('.countdown').downCount({
            date: get_date,
            offset: +1
        });
    } else {
        $('.countdown').downCount({
            date: '06/06/2018 12:00',
            offset: +1
        });
    }
	
	
	/*Load CSS after full page is loaded*/

	$(window).bind("load", function() {
		var cssURL = uniqueHomeUrl.denorious_homeurl + '/js/onload-style.css';
		if($(".star-rating").size()>0){
            if (document.createStyleSheet){
                document.createStyleSheet(cssURL);
            }
            else {
                $("head").append($("<link rel='stylesheet' href='" + cssURL + "' type='text/css' media='screen' />"));
            }
        }
	});
	
	/*Include fa fa-check icon before every li elements of single page*/
	$('.single .inner-content .col-sm-8 .dc-single ul li').prepend('<i class="fa fa-check"></i>');
});

$('.input-number').focusin(function() {
	$(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {

	var minValue = parseInt($(this).attr('min'));
	var maxValue = parseInt($(this).attr('max'));
	var valueCurrent = parseInt($(this).val());

	var name = $(this).attr('name');
	if (valueCurrent >= minValue) {
		$(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
	} else {
		alert('Sorry, the minimum value was reached');
		$(this).val($(this).data('oldValue'));
	}
	if (valueCurrent <= maxValue) {
		$(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
	} else {
		alert('Sorry, the maximum value was reached');
		$(this).val($(this).data('oldValue'));
	}
});

$(".input-number").keydown(function(e) {
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
		(e.keyCode == 65 && e.ctrlKey === true) ||
		(e.keyCode >= 35 && e.keyCode <= 39)) {
		return;
	}
	if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		e.preventDefault();
	}
});

jQuery('.page-numbers').addClass('page_nav').removeClass('page-numbers');
jQuery('.page_nav li a').removeClass('page_nav');

if(jQuery("body").hasClass("page-template-page-blog-two")){
    jQuery(".page_nav").addClass("text-center");
    jQuery('.current').removeClass('text-center');
    jQuery('.dots').removeClass('text-center');
    jQuery('.dots').removeClass('page_nav');
}
if(jQuery(".footer .container .row .col-sm-4 a div").hasClass("footer-video")){
    jQuery(".footer").addClass("m-mobile-top450");
}

jQuery('.comment-respond').addClass('denorious-list post-review').removeClass('comment-respond');
jQuery('.btn').removeClass('pull-right');

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

var regExp = /\(([^)]+)\)/;
jQuery('.widget_archive ul li').each(function(){
    var total_post = regExp.exec(jQuery(this).text());
	if(isEmpty(total_post)) {
    jQuery(this).replaceWith("<li><a href='"+jQuery('a', jQuery(this)).attr('href')+"'><p>"+jQuery('a', jQuery(this)).text()+"</p></a></li>");
	} else {
	jQuery(this).replaceWith("<li><a href='"+jQuery('a', jQuery(this)).attr('href')+"'><p>"+jQuery('a', jQuery(this)).text()+"</p><span>"+total_post[1]+"</span></a></li>");
	}
});

var regExp = /\(([^)]+)\)/;
jQuery('.widget_layered_nav ul li').each(function(){
    var total_post = regExp.exec(jQuery(this).text());
    if(isEmpty(total_post)) {
    jQuery(this).replaceWith("<li><a href='"+jQuery('a', jQuery(this)).attr('href')+"'><p>"+jQuery('a', jQuery(this)).text()+"</p></a></li>");
    } else {
    jQuery(this).replaceWith("<li><a href='"+jQuery('a', jQuery(this)).attr('href')+"'><p>"+jQuery('a', jQuery(this)).text()+"</p><span>"+total_post[1]+"</span></a></li>");
    }
});

// single sponsore form donation value
jQuery('.camount').on('click', function(){
    var set_amount = jQuery(this).val();
    jQuery("#amount").val(set_amount);
    jQuery("#donation_amount").text(set_amount);
});

jQuery("#sponsor-btn").on('click', function(){
    jQuery("#sponsor_content").hide();
    jQuery("#sponsor_form_paypal").show();
});

jQuery(".donation_cancel").on('click', function(){
    jQuery("#sponsor_content").show();
    jQuery("#sponsor_form_paypal").hide();
});

//single child sponsor donation custom amount
jQuery("#custom_amount").on('keyup', function(){

    var get_this_value = jQuery(this).val().trim();
    jQuery("#donation_amount").text(parseFloat(get_this_value));
    jQuery("#amount").text(parseFloat(get_this_value));

    if(get_this_value.length==0){
        jQuery("#donation_amount").text(10.00);
        jQuery("#amount").text(10.00);
    }
});

// cuase sponsor form
$(".single-causes #custom_amount").on('click', function(){
    if( !$(".single-causes #custom_amount").hasClass('input-colored-bg') ) { 
        $(".single-causes #custom_amount").addClass("input-colored-bg");
        $(".make-donation .rbox2 input").prop('checked', false);
    }
});

$(".make-donation .rbox2 label").on('click', function(){
    if($(".single-causes #custom_amount").hasClass('input-colored-bg')) { 
        $(".single-causes #custom_amount").removeClass("input-colored-bg");
    }
});

//single cuase custom amount for donation
jQuery(".single-causes #custom_amount").on('keyup', function(){

    var get_this_value = jQuery(this).val().trim();
    if( !isNaN(get_this_value) ){
        if( get_this_value.length < 8 ){

            jQuery("#amount").val(parseFloat(get_this_value));
            jQuery("#offline_payment_amount").val(parseFloat(get_this_value));
            if(get_this_value.length==0){
                jQuery("#amount").val(10.00);
                jQuery("#offline_payment_amount").val(10.00);
            }

        } else{
            alert("Max length 8 digit");
            jQuery(this).val("");
        }
    } else {
        alert('Input number value');
        jQuery(this).val("");
    }

});

// single cuase form donation value
jQuery('#offline_form .camount').on('click', function(){
    var set_amount = jQuery(this).val();
    jQuery("#amount").val(parseFloat(set_amount));
    jQuery("#custom_amount").val("");
    jQuery("#offline_payment_amount").val(parseFloat(set_amount));
});


$(".cbox-wrap-donation #c1").on('click', function(){
    $(".paypal_form").css({"opacity":"1", "cursor":"default","display":"block"});
    $(".paypal_form .btn").removeAttr("disabled");
    $(".offline_form_btn_area").css({"display":"none"});
});

$(".cbox-wrap-donation #c2").on('click', function(){
    $(".paypal_form").css({"display":"none"});
    $(".offline_form_btn_area").css({"display":"block"});
});


// cuase sponsor form
$(".single-sponsor-child #custom_amount").on('click', function(){
    if( !$(".single-sponsor-child #custom_amount").hasClass('input-colored-bg') ) { 
        $(".single-sponsor-child #custom_amount").addClass("input-colored-bg");
        $(".make-donation .rbox2 input").prop('checked', false);
    }
});

$(".make-donation .rbox2 label").on('click', function(){
    if($(".single-sponsor-child #custom_amount").hasClass('input-colored-bg')) { 
        $(".single-sponsor-child #custom_amount").removeClass("input-colored-bg");
    }
});

//single cuase custom amount for donation
jQuery(".single-sponsor-child #custom_amount").on('keyup', function(){

    var get_this_value = jQuery(this).val().trim();
    if( !isNaN(get_this_value) ){
        if( get_this_value.length < 8 ){

            jQuery("#amount").val(parseFloat(get_this_value));
            jQuery("#offline_payment_amount").val(parseFloat(get_this_value));
            if(get_this_value.length==0){
                jQuery("#amount").val(10.00);
                jQuery("#offline_payment_amount").val(10.00);
            }

        } else {
            alert("Max length 8 digit");
            jQuery(this).val("");
        }
    } else {
        alert('Insert number value');
        jQuery(this).val("");
    }

});

// Browse All Menu
$(".browseallicon a").click(function(){
	$(".browseallmenu").fadeToggle(200);
   $(this).toggleClass('btn-open').toggleClass('btn-close');
});
$('.browseallmenu').on('click', function(){
    $(".browseallmenu").fadeToggle(200);   
    $(".browseallicon a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});

// QUANTITY
$('.qty-inner >div').click(function(e) {
    e.preventDefault();
    
    var fieldName = $(this).attr('data-field');
    var type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());

    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});

    jQuery(".login-form").submit(function() {
        var thisform = jQuery(this);
        jQuery('.required-error',thisform).remove();
        jQuery('input[type="submit"]',thisform).hide();
        jQuery('.loader_2',thisform).show().css({"display":"block"});
        var fields = jQuery('.inputs',thisform);
        jQuery('.required-item',thisform).each(function () {
            var required = jQuery(this);
            if (required.val() == '') {
                required.after('<span class=required-error>'+ask_error_text+'</span>');
                return false;
            }
        });
        var data = {
            action:         'denorious_ask_ajax_login_process',
            security:       jQuery('input[name=\"login_nonce\"]',thisform).val(),
            log:            jQuery('input[name=\"log\"]',thisform).val(),
            pwd:            jQuery('input[name=\"pwd\"]',thisform).val(),
            redirect_to:    jQuery('input[name=\"redirect_to\"]',thisform).val()
        };
        jQuery.post(jQuery('input[name=\"ajax_url\"]',thisform).val(),data,function(response) {
            var result = jQuery.parseJSON(response);
            if (result.success == 1) {
                window.location = result.redirect;
            }else if (result.error) {
                jQuery(".ask_error",thisform).hide(10).slideDown(300).html('<strong>'+result.error+'</strong>').delay(3000).slideUp(300);
            }else {
                return true;
            }
            jQuery('.loader_2',thisform).hide().css({"display":"none"});
            jQuery('input[type="submit"]',thisform).show();
        });
        return false;
    });



    jQuery(".login-comments").click(function () {
        jQuery(".panel-pop").animate({"top":"-100%"},10).hide();
        jQuery("#login-comments").show().animate({"top":"2%"},500);
        jQuery("html,body").animate({scrollTop:0},500);
        jQuery("body").prepend("<div class='wrap-pop'></div>");
        wrap_pop();
        return false;
    });
    
    /* Signup */
    jQuery(".signup,.login-links-r a").click(function () {
        jQuery(".panel-pop").animate({"top":"-100%"},10).hide();
        jQuery("#signup").show().animate({"top":"2%"},500);
        jQuery("html,body").animate({scrollTop:0},500);
        jQuery("body").prepend("<div class='wrap-pop'></div>");
        wrap_pop();
        return false;
    });

    jQuery(".signup_form").submit(function() {
        var thisform = jQuery(this);
        jQuery('.required-item',thisform).each(function () {
            var required = jQuery(this);
            if (required.val() == '') {
                required.after('<span class=required-error>All fields are required</span>');
                $(".required-error").fadeOut(2000);
                return false;
            }
        }); 

        var data = {
            action:           'denorious_ajax_ask_signup',
            security:         jQuery('input[name=\"signonsecurity\"]',thisform).val(),
            user_name:        jQuery('input[name=\"user_name\"]',thisform).val(),
            email:            jQuery('input[name=\"email\"]',thisform).val(),
            pass1:            jQuery('input[name=\"pass1\"]',thisform).val(),
            pass2:            jQuery('input[name=\"pass2\"]',thisform).val(),
            redirect_to:      jQuery('input[name=\"redirect_to\"]',thisform).val()
        };

        jQuery.post(jQuery('input[name=\"ajax_url\"]',thisform).val(),data,function(data) {
            var data = $.parseJSON(data);
            jQuery('.ask_error').text(data.message);
            if (data.loggedin == true) {
                window.location = jQuery('input[name=\"redirect_to\"]',thisform).val();
            }
        }); 

        return false;
    });


   

    jQuery(".panel-pop h2 i").click(function () {
        jQuery(this).parent().parent().animate({"top":"-100%"},500).fadeOut(function () {
            jQuery(this).animate({"top":"-100%"},500);
        });
        jQuery(".wrap-pop").remove();
    });


    function wrap_pop() {
        jQuery(".wrap-pop").click(function () {
            jQuery(".panel-pop").animate({"top":"-100%"},500).fadeOut(function () {
                jQuery(this).animate({"top":"-100%"},500);
            });
            jQuery(this).remove();
        });
    }


    $("#show-signup").on('click', function(){
        $(".sign-up-form").show();
        $("#signup-title").show(); 
        $("#login-title").hide();
        $(".login-form-area").hide();
    });    

    $("#signup-cancel").on('click', function(){
        $(".sign-up-form").hide();
        $("#signup-title").hide(); 
        $("#login-title").show();        
        $(".login-form-area").show();
    });

}(jQuery));

// set same height checkout review table and woocommerce-checkout-payment area
jQuery(document).ajaxStop(function() {
    if (jQuery(window).width() > 768 ){
        var table_height = jQuery(".woocommerce-checkout-review-order-table").height();
        if( table_height != null ){
            table_height = table_height +2;
            jQuery("#payment").height(table_height);  
        }  
    }
});

function add_btn(x){

   jQuery("#f"+x+"").addClass('custom-form');
   jQuery("#"+x+"").hide();
   jQuery(".added_to_cart").hide();
   jQuery("."+x+"").show();
   jQuery("."+x+"").css({"top":"0 !important"});
   jQuery(".wishlist_icon").css({"top":"0 !important"});
   var dcart_count = parseInt(jQuery("#dcart_count").text());
   var add_cart = parseInt(dcart_count)+1;
   jQuery("#dcart_count").text(add_cart);   
   
}


function denorious_check_form(){

    var amount = jQuery("#amount").val();
    var cbox = jQuery("#cbox").val();
    var denorious_name = jQuery("#denorious_name").val();
    var denorious_email = jQuery("#denorious_email").val();
    var site_owner_email = jQuery("#business").val();
    var denorious_address = jQuery("#denorious_address").val();
    var denorious_phone_no = jQuery("#denorious_phone_no").val();
    var denorious_country = jQuery("#denorious_country").val();
    var denorious_city = jQuery("#denorious_city").val();
    var denorious_zipcode = jQuery("#denorious_zipcode").val();

    if(jQuery('.cbox').attr('checked')){

    jQuery.ajax({
         type: 'POST',
         url: denorious_ajax.denorious_ajaxurl,
         data: { "action": "sponsor_mail","d_type":cbox,"amount":amount,"denorious_name":denorious_name,"denorious_email":denorious_email,"site_owner_email":site_owner_email,"denorious_address":denorious_address,"denorious_phone_no":denorious_phone_no,"denorious_country":denorious_country,"denorious_city":denorious_city,"denorious_zipcode":denorious_zipcode},
         success: function(data){

         }
    });
    return true;

    } else {
        alert("Select Donation Frequency!");
        return false;
    }
}


function getNextMonth(){
    jQuery(".calendar-inner").addClass("loading-calendar");
    jQuery('#mySpinner').addClass('spinner');

    var nextmonth = jQuery("#nextmonth").attr("month");  
    var nextyear = jQuery("#nextmonth").attr("year");
    jQuery.ajax({
        type: 'POST',
        url: denorious_ajax.denorious_ajaxurl,
        data: { "action": "denorious_displaynextmonth","nextmonth":nextmonth,"nextyear":nextyear},
        success: function(data){
           jQuery(".calendar-inner").removeClass("loading-calendar");
           jQuery('#mySpinner').removeClass('spinner');
           jQuery("#calendar_area").html(data);
        }
    }); 
}

function getPrevMonth(){
    jQuery(".calendar-inner").addClass("loading-calendar");
    jQuery('#mySpinner').addClass('spinner');
    var prevmonth = jQuery("#premonth").attr("month");  
    var prevyear = jQuery("#premonth").attr("year"); 
    jQuery.ajax({
        type: 'POST',
        url: denorious_ajax.denorious_ajaxurl,
        data: { "action": "denorious_displaynextmonth","nextmonth":prevmonth,"nextyear":prevyear},
        success: function(data){
            jQuery(".calendar-inner").removeClass("loading-calendar");
            jQuery('#mySpinner').removeClass('spinner');
           jQuery("#calendar_area").html(data);
        }
    }); 
}

function event_search(e){
    var search_text = jQuery("#search_event").val();
    if(e.which == 13){
        if( search_text !='' ){
            jQuery(".calendar-inner").addClass("loading-calendar");
            jQuery('#mySpinner').addClass('spinner');        
            jQuery.ajax({
                type: 'POST',
                url: denorious_ajax.denorious_ajaxurl,
                data: { "action": "denorious_eventsearch", "search_text":search_text},
                success: function(data){
                    jQuery(".calendar-inner").removeClass("loading-calendar");
                    jQuery('#mySpinner').removeClass('spinner');
                   jQuery("#calendar_area").html(data);
                }
            });
        } else {
            alert("Search text is required");
            jQuery("#search_event").focus();
        }
    } 
}


// Offlien form button for donate 
function Offline_Donate(){

    var amount              = jQuery("#offline_payment_amount").val();
    var denorious_name      = jQuery("#denorious_name").val();
    var denorious_email     = jQuery("#denorious_email").val();
    var site_owner_email    = jQuery("#business").val();
    var denorious_message   = jQuery("#denoriouss_message").val();
    var denorious_phone_no  = jQuery("#denorious_phone_no").val();

    if( amount == "" ){
        alert("Donation amount is required!");
    } else if( denorious_name == "" ){
        alert("Donor name is required!");
    } else if( denorious_email == "" ){
        alert("Donor email is required!");
    } else if( denorious_phone_no == "" ){
        alert("Donor phone number is required!"); 
    } else {
        jQuery("#offline_form").submit(); 
        return true;          
    }

}

function Offline_Donate2(){

    var amount              = jQuery("#offline_payment_amount").val();
    if( amount == "" ){
        alert("Donation amount is required!");
    } else {
        jQuery("#offline_form").submit();
        return true;        
    }

}