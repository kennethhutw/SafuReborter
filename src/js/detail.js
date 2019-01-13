var paramters=null;
var likes = 70;
var dislikes = 30;
window.addEventListener("load", function() {

     $.get('neutraldomain.html', 'utf8', function(template){
         var paramters = getAllUrlParams();
         var data = scams_data[paramters.id];
         var domainpage= data.url;
        template = template.replace("{{ neutral.name }}","<b>Name</b>:  " + data.name);
        template = template.replace("{{ neutral.url }}", "<b>URL</b>:  " + data.name);
        template = template.replace("{{ neutral.status }}","<b>Status</b>:  " + data.status);
        template = template.replace("{{ neutral.category }}","<b>Category</b>:  " +  data.name)
        template = template.replace("{{ neutral.description }}","<b>Description</b>:  " +  data.name);
        template = template.replace("{{ neutral.reporter }}","<b>Reporter</b>:  " +  data.reporter);
     
        $('#info').html(template);
    });

   // var ctx = document.getElementById("myChart").getContext('2d');
   var data = [{
    values: [likes, dislikes],
    labels: ['Yes', 'No'],
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot('myChart', data, layout);
  $("#dislikes").html(dislikes);
  $("#likes").html(likes);
  $( "#likesBtn" ).click(function() {
    likes++;
   $("#likes").html(likes);
  });
  $( "#dislikesBtn" ).click(function() {
    dislikes++;
   $("#dislikes").html(dislikes);
   
  });
})

function adjustValue1()
{
    Plotly.restyle('myChart', 'data', [likes, dislikes]);
}