$(document).ready(function(){var static_page_text=$.trim($(".post-body").text());var text_month=[,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];if(static_page_text==="[sitemap]"){var postbody=$(".post-body");$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){var t=[];for(var n=0;n<e.feed.category.length;n++){t.push(e.feed.category[n].term)}var t=t.join("/");postbody.html('<div class="bsd-sitemap"></div>');$(".post-body .bsd-sitemap").text(t);var r=$(".bsd-sitemap").text().split("/");var i="";for(get=0;get<r.length;++get){i+="<span>"+r[get]+"</span>"}$(".bsd-sitemap").html(i);$(".bsd-sitemap span").each(function(){var e=$(this);var t=$(this).text();$.ajax({url:"/feeds/posts/default/-/"+t+"?alt=json-in-script",type:"get",dataType:"jsonp",success:function(n){var r="";var i='<ul class="bsd-toc">';for(var s=0;s<n.feed.entry.length;s++){for(var o=0;o<n.feed.entry[s].link.length;o++){if(n.feed.entry[s].link[o].rel=="alternate"){r=n.feed.entry[s].link[o].href;break}}var u=n.feed.entry[s].title.$t;var a=n.feed.entry[s].published.$t,f=a.substring(0,4),l=a.substring(5,7),c=a.substring(8,10),h='<span class="day">'+c.replace(/^0+/,"")+'</span><span class="month">'+text_month[parseInt(l,10)]+' </span><span class="year">'+f+"</span>";i+='<li><div class="toc-date">'+h+'</div><div class="bsd-icon"></div><span class="bsd-post"><a href="'+r+'">'+u+"</a></span></li>"}i+="</ul>";e.replaceWith('<div class="bsd-toc-wrap"><div class="bsd-cat">'+t+'</div>'+i+"</div>")}})})}})}});
