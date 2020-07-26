$(document).ready(function(){
	var random = 0;
	var family = [{
	    "name" : "Carsten Klein",
	    "post" : "Senior Infrastructure Specialist",
	    "mail" : "---",
	    "contact" : "+1215-674-6000"
	    //"img":"<div class='col-md-4 col-sm-4'><img src='../images/contact.png' id='myImage'></div>" 
	},
	{
		"name" : "Yves Koch",
	    "post" : "Operative Purchase",
	    "mail" : "---",
	    "contact" : "+1215-674-6000"
	    //"img":"<div class='col-md-4 col-sm-4'><img src='../images/contact.png' id='myImage'></div>"
	   // "revealbtn":"<p><a href='' class='revealbtn_"+2+"'><i class='fa fa-lock' aria-hidden='true'></i>   Reveal</a></p>"
	},
	{
		"name" : "Stefan Ackermann",
	    "post" : "Field Service Engineer",
	    "mail" : "---",
	    "contact" : "+1215-674-6000"
	},
	{
		"name" : "Fabio Bolgiani",
	    "post" : "Engineer",
	    "mail" : "---",
	    "contact" : "+1215-674-6000"
	},
	{
		"name" : "Stephan Schmidli",
	    "post" : "Product Manager / Senior Project Engineer / Team Lead",
	    "mail" : "---",
	    "contact" : "+1215-674-6000"
	},
	{
		"name" : "Cornelia Henny-Weiss",
	    "post" : "Head of Operations Bipolar Products",
	    "mail" : "---",
	    "contact" : "+1215-674-6000"
	},
	{
		"name" : "Michael Christ",
	    "post" : "Power Engineer",
	    "mail" : "---",
	    "contact" : "+1215-674-6000"
	},
	{
		"name" : "Michael Stoffel",
	    "post" : "Project Manager GIS Engineering",
	    "mail" : "---",
	    "contact" : "+1215-674-6000"
	},
	{
		"name" : "Daniel Morris",
	    "post" : "Metrology Engineer",
	    "mail" : "---",
	    "contact" : "+1215-674-6000"
	}];
	//alert(family[1].name);
	var namelist = new Array();
	var postlist = new Array();
	var maillist = new Array();
	var contactlist = new Array();
	var imglist = new Array();
	var btnlist = new Array();
	for(var i=0;i<family.length;i++){
		//alert(family[i].name);	
		var newName = family[i].name; // get file name
		var newPost = family[i].post;
		var newMail = family[i].mail;
		var newContact = family[i].contact;
		var newImg = family[i].img;
		var newBtn = family[i].revealbtn;
		namelist.push(newName);
		postlist.push(newPost);
		maillist.push(newMail);
		contactlist.push(newContact);
		imglist.push(newImg);
		btnlist.push(newBtn);
    }
	//alert("namelist......... "+namelist);
	//alert("postlist......... "+postlist);
	//alert("maillist......... "+maillist);
	//alert("contactlist......... "+contactlist);
	var splitname = namelist.toString().split(",");
	var splitpost = postlist.toString().split(",");
	var splitmail = maillist.toString().split(",");
	var splitcontact = contactlist.toString().split(",");
	var splitimg = imglist.toString().split(",");
	var splitbtn = btnlist.toString().split(",");
	//alert("splitname......."+ splitname.length);
    for(var i=0;i<splitname.length;i++){

    	var appenddata = '<div class="col-md-4 col-sm-4 firstdiv"><div class="col-md-4 col-sm-4"><img src="../images/contact.png" id="myImage"></div><div class="col-md-8 col-sm-8"><p>'+splitname[i]+'</p><p><i class="fas fa-archive"></i>'+splitpost[i]+'</p><p class="mail'+i+' mailhide"><i class="glyphicon glyphicon-envelope"></i> '+splitmail[i]+'</p><p class="contact'+i+' contacthide"><i class="glyphicon glyphicon-earphone"></i> '+splitcontact[i]+'</p><p><a href="" class="revealbtn revealbtn_'+i+'" id="'+i+'"><i class="fa fa-lock" aria-hidden="true"></i>   Reveal</a></p></div></div>';
    	
    	$(".mainrow").append(appenddata);
    	$(".mailhide").hide();
    	$(".contacthide").hide();
    	$("#heading").text("Contact("+(i+1)+")");
    }
    
	$("a.revealbtn").click(function(){
		var id = this.id;
		//alert("hiiii...."+id);
		$(".mail"+id+"").show();
    	$(".contact"+id+"").show();
    	$("a.revealbtn_"+id+"").hide();
    	return false;
	});
    
	random++;
});