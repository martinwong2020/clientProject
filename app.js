/*global $*/

var searchResult;

$("#searchedButton").click(function() {
    var searched = $(".searchedTerm").val();
   window.location.href = "./movieinfo.html?q=" + searched;
});
$("#Coco").click(function(){
    window.location.href = "./movieinfo.html?q=coco";
})
$("#ff6").click(function(){
    window.location.href = "./movieinfo.html?q=Fast & Furious 6";
})
$("#WallE").click(function(){
    window.location.href = "./movieinfo.html?q=wall e";
})
$("#Us").click(function(){
    window.location.href = "./movieinfo.html?q=us";
})

$("#Up").click(function(){
    window.location.href = "./movieinfo.html?q=Up";
})
$("#BlackPanther").click(function(){
    window.location.href = "./movieinfo.html?q=BlackPanther";
})
$("#BG6").click(function(){
    window.location.href = "./movieinfo.html?q=Big hero 6";
})
$("#Twilight").click(function(){
    window.location.href = "./movieinfo.html?q=Twilight";
})

$("#MI").click(function(){
    window.location.href = "./movieinfo.html?q=Mission Impossible";
})
$("#Zootopia").click(function(){
    window.location.href = "./movieinfo.html?q=Zootopia";
})
$("#TokyoGhoul").click(function(){
    window.location.href = "./movieinfo.html?q=TokyoGhoul";
})
$("#DWK").click(function(){
    window.location.href = "./movieinfo.html?q=Diary Of a wimpy kid";
})