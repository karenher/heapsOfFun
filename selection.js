/*extracts selected words when you press enter key*/
function h_yellow() {
	$times = 0;
 $(this).keypress(function(e){
   if(e.which===121){ //015 for enter
     $selection = window.getSelection();
     $toAdd = $selection.toString();
     if ($toAdd) {
       console.log($toAdd);
       if ($times === 0) {
        $(".nicEdit-main").children().remove();
        $(".nicEdit-main").append("<ul id = \"startList\"> <li>" +$toAdd + "</li></ul>");
        $(".nicEdit-main").append("<br>");
      }
      else {
        $("#startList").append("<li>" +$toAdd + "</li>");
      }
      $times = 1;
    }
    highlight_yellow($selection.getRangeAt(0));

  }
});
}

function h_green() {
  $times = 0;
 $(this).keypress(function(e){
   if(e.which===103){
     $selection = window.getSelection();
     $toAdd = $selection.toString();
     if ($toAdd) {
       console.log($toAdd);
       if ($times === 0) {
        $(".nicEdit-main").children().remove();
        $(".nicEdit-main").append("<ul id = \"startList\"> <li>" +$toAdd + "</li></ul>");
        $(".nicEdit-main").append("<br>");
      }
      else {
        $("#startList").append("<li>" +$toAdd + "</li>");
      }
      $times = 1;
    }
    highlight_green($selection.getRangeAt(0));

  }
});
}

function highlight_yellow(selection) {
	$newDiv = document.createElement("div");
	$newDiv.setAttribute(
		"style",
   "background-color: yellow; display: inline;"
   );
  selection.surroundContents($newDiv);
}

function highlight_green(selection) {
  $newDiv = document.createElement("div");
  $newDiv.setAttribute(
    "style",
   "background-color: green; display: inline;"
   );
  selection.surroundContents($newDiv);
}

function tab() {
	// if($(".nicEdit-main").is(":focus")) {
		console.log("yay");

 
	  	$(this).keypress(function(e){
	  		console.log(e.which);
	      	if(e.which===96){
	      		console.log("tab");
	      		$(".nicEdit-main").find("li").last().append("<ul> <li></li></ul>");
	      		//$("<ul>").append(".nicEdit-main").find("li").last();

	      	}
	      	if(e.which===49){
	      		console.log("tab");
	      		$(".nicEdit-main").find("li").last().remove();
	      		$(".nicEdit-main").find("li").last().append("<li>");
	      	}
	    });

	// }
}

function clear() {
	$(" .nicEdit-main").empty();
	$("#NicEdit").empty();
}

function submitText() {
  // var st = document.getElementById('submitted-text');
  $("#input-text").before("<br>");
  $textVal = $(".mdl-textfield__input").val();
  //$textVal = $textVal.replace("\n", "<br>");
  var para = document.createElement("p");
  var node = document.createTextNode($textVal);
  para.setAttribute("id", "yo");
  para.appendChild(node);
  var element = document.getElementById("submitted-text");
  element.appendChild(para);
  // st.appendChild($textVal);
	//$("#input-text").before($textVal);
	// $(".mdl-textfield__input").empty();
  $('#text-box').val('');
  // document.getElementById("text-box").value = '';
}

function resetText() {
  $('#submitted-text').empty();
}
