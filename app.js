/*global $*/

$("#searchedButton").click(function(){
    window.location.replace(movieinfo.html);
    var searched = $(".searchedTerm").val();
    console.log(searched)
    var customUrl="https://www.omdbapi.com/?t=" + searched + "&apikey=5ec41f9a";
        $.ajax({
            url: customUrl,
            method:"GET",
            success:function(response){
                $("#movieHeader").show(response.Title);
            }
        })
});
  