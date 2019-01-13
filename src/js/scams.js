window.addEventListener("load", function() {
    // $.get('https://etherscamdb.info/api/scams/')
    // .done(function (data) {
    //     console.log("data",data);
    //     console.log("data",JSON.stringify(data));
    // //    $('#example').DataTable( {
    // //     data: data,
    // //     columns: [
    // //         { title: "Category",data:"category" },
    // //         { title: "Subcategory",data:"subcategory" },
    // //         { title: "Status",data:"status" },
    // //         { title: "Title",data:"name" },
    // //     ]
    // // } );
    // })

//     YAML.load('_data/scams.yaml', function(result)
// {
//     nativeObject = result;
//     console.log("result",result);

   
// });
var removeIndex = [];
for(var i =0; i <scams_data.length; i++){
    if (typeof scams_data[i].category == "undefined") {
         console.log("index ", scams_data[i].id);
         removeIndex.push(i);
    //     scams_data.splice(i, 1); 
    }
}
$('#example').DataTable( {
       data: scams_data,
       columns: [
        { title: "Category",data:"category",
        'render': function(val, _, obj) {
            if(val=="Scamming")
            {
                return '  <i class="payment icon"></i> ' + val ;
            }
            else{
            return '<i class="address book icon"></i> ' + val ;
            }
        } },
        { title: "Subcategory",data:"subcategory" },
       { title: "Status",data:"status",
        'render': function(val, _, obj) {
            if(val=="Offline")
            {
                return ' <p style="color:green;"> <i class="payment icon"></i> ' + val +'</p>' ;
            }
            else if(val=="Active"){
            return ' <p style="color:red;"> <i class="warning sign icon"></i> ' + val +'</p>' ;
            }
            else if(val=="Inactive"){
                return ' <p style="color:orange;"> <i class="remove icon"></i> ' + val +'</p>' ;
                }
            else{
                return ' <p > ' + val +'</p>' ;
            }
        } },
       { title: "Title",data:"name" },
       { title: "Detail",
       'render': function(val, _, obj) {
        return '<a href="./detail.html?Id='+obj.id+'">Detail</a>';
       }
    },
    ]
 } );

 //,order: [[ 0, 'desc' ]]
})