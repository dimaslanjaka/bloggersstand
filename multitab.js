<script type='text/javascript'>
//<![CDATA[
// Multitabs Sidebar by www.BloggersStanD.com
jQuery(document).ready(function($){ $(".bsdmultitab-gadget-content-widget-id").hide(); $("ul.bsdmultitab-gadget-content-tabs-id li:first a").addClass("bsdmultitab-gadget-current").show(); $(".bsdmultitab-gadget-content-widget-id:first").show(); $("ul.bsdmultitab-gadget-content-tabs-id li a").click(function() { $("ul.bsdmultitab-gadget-content-tabs-id li a").removeClass("bsdmultitab-gadget-current a"); $(this).addClass("bsdmultitab-gadget-current"); $(".bsdmultitab-gadget-content-widget-id").hide(); var activeTab = $(this).attr("href"); $(activeTab).fadeIn(); return false; }); });
//]]>
</script>
