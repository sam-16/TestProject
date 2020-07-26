$(document).ready(function(){

	var data = [{
	    "name" : "Carsten Klein",
	    "post" : "Senior Infrastructure Specialist",
	    "mail" : "---",
	    "contact" : "+1215-674-6000"
	},
	{
		"name" : "Yves Koch",
	    "post" : "Operative Purchase",
	    "mail" : "---",
	    "contact" : "+1215-674-6000"
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
	
	var pagesize = 2;
    var countpage = Math.ceil(data.length/pagesize);
    var appendpage;
    appendpage = '<nav aria-label="Page navigation example"><ul class="pagination"><li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></a></li>';
    for(var i=0;i<countpage;i++){
    	appendpage += '<li class="page-item"><a class="page-link" href="#" id='+(i+1)+'>'+(i+1)+'</a></li>'
    }
    appendpage += '<li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li></ul></nav>';
    $(".pagination").append(appendpage);
    
    displayContactDetails(data,pagesize,0);
    
    $(".page-link").click(function(){
    	var pageno = this.id;
    	var minusno = pageno-1;
    	var newpagesize = parseInt(pageno) + parseInt(minusno);
    	$(".mainrow").html('');
    	displayContactDetails(data,pagesize,(newpagesize-1));
    });
    
    
    /* when click on reveal button then display Email & Contact No. */ 
	$("a.revealbtn").click(function(){
		var id = this.id;
		$(".mail"+id+"").show();
    	$(".contact"+id+"").show();
    	$("a.revealbtn_"+id+"").hide();
    	return false;
	});
	/*//when click on reveal button then display Email & Contact No. */ 
	
	
	
	/* $('#searchInput1').keyup(function() {
		  var searchField = $(this).val();
		  var regex = new RegExp(searchField, "i");
		  var output;

		  $.each(data, function(key, val) {
		    if ((val.name.search(regex) != -1)) {
		    	output = '<div class="col-md-4 col-sm-4 firstdiv"><div class="col-md-2 col-sm-2"><img src="../images/contact.png" id="myImage"></div><div class="col-md-10 col-sm-10"><p>'+val.name+'</p><p><i class="fas fa-archive"></i>'+val.post+'</p><p class="mail'+i+' mailhide"><i class="glyphicon glyphicon-envelope"></i> '+val.mail+'</p><p class="contact'+i+' contacthide"><i class="glyphicon glyphicon-earphone"></i> '+val.contact+'</p><p><a href="" class="revealbtn revealbtn_'+i+'" id="'+i+'"><i class="fa fa-lock" aria-hidden="true"></i>   Reveal</a></p></div></div>';
		    }
		  });
		  $('.mainrow').html(output);
		  $(".mailhide").hide();
	      $(".contacthide").hide();
	}); */
	
	
});



function displayContactDetails(data,pagesize,newpagesize) {
	var namelist = new Array();
	var postlist = new Array();
	var maillist = new Array();
	var contactlist = new Array();
	for(var i=newpagesize;i<=(newpagesize+1);i++){
		/* Get name,post,mail and contact separate with comma */
		var newName = data[i].name; 
		var newPost = data[i].post;
		var newMail = data[i].mail;
		var newContact = data[i].contact;
		/*//Get name,post,mail and contact */
		namelist.push(newName);
		postlist.push(newPost);
		maillist.push(newMail);
		contactlist.push(newContact);
    }
	/* Get separate name,post,mail and contact */
	var splitname = namelist.toString().split(",");
	var splitpost = postlist.toString().split(",");
	var splitmail = maillist.toString().split(",");
	var splitcontact = contactlist.toString().split(",");
	/*//Get separate name,post,mail and contact */
	
	/* display contact details */
    for(var i=0;i<splitname.length;i++){
    	var appenddata = '<div class="col-md-4 col-sm-4 firstdiv"><div class="col-md-2 col-sm-2"><img src="../images/contact.png" id="myImage"></div><div class="col-md-10 col-sm-10"><p>'+splitname[i]+'</p><p><i class="fas fa-archive"></i>'+splitpost[i]+'</p><p class="mail'+i+' mailhide"><i class="glyphicon glyphicon-envelope"></i> '+splitmail[i]+'</p><p class="contact'+i+' contacthide"><i class="glyphicon glyphicon-earphone"></i> '+splitcontact[i]+'</p><p><a href="" class="revealbtn revealbtn_'+i+'" id="'+i+'"><i class="fa fa-lock" aria-hidden="true"></i>   Reveal</a></p></div></div>';
    	$(".mainrow").append(appenddata);
    	$(".mailhide").hide();
    	$(".contacthide").hide();
    	$("#heading").text("Contact("+(i+1)+")");
    }
    /*//display contact details */
}


