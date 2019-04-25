/*global $*/
const search = window.location.search.split('=')[1]
var customUrl="https://www.omdbapi.com/?t=" + search + "&apikey=5ec41f9a";
    $(document).ready(function(){
        $.ajax({
            url: customUrl,
            method:"GET",
            success:function(response){
            var searchResult = response.Title
            $("#movieHeader").append(searchResult);
            $("#poster").append("<img src='"+response.Poster+"'>");
            $("#summary").append("<p> Summary: "+response.Plot+"</p>");
            $("#year").append("<p> Year releases: "+response.Released+"</p>");
            $("#AuthorAndWriter").append("<p>Actors: "+response.Actors+"</p>");
            $("#AuthorAndWriter").append("<p>Writer: "+response.Writer+"</p>");
            }
        })  
    }) ;   
//  $("home").click(function(){
     
//  });