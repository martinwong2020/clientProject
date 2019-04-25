/*global $*/

var searchResult;

$("#searchedButton").click(function() {
    var searched = $(".searchedTerm").val();
   window.location.href = "./movieinfo.html?q=" + searched
});
