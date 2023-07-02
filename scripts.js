// GoodReads Fortune Cookie Program

function readCSVFile() {
    var files = document.querySelector('#file').files;

    if(files.length > 0 ) {
        // Selected file
        var file = files[0];
        // FileReader Object
        var reader = new FileReader();
        // Read file as string 
        reader.readAsText(file);

        // Load event
        reader.onload = function(event) {

             // Read file data
             var csvdata = event.target.result;

             // Split by line break to get rows Array
             var rowArray = csvdata.split('\n');

             // <table > <tbody>
             var tbodyEl = document.getElementById('tblcsvdata').getElementsByTagName('tbody')[0];
             tbodyEl.innerHTML = "";
            
             
             // Loop on the row Array (change row=0 if you also want to read 1st row)
             for (var row = 1; row < rowArray.length; row++) {

                   // Split by comma (,) to get column Array
                   colArray = rowArray[row].split('\,');
                   

                   // Loop on the row column Array
                   for (var col = 0; col < colArray.length; col++) {
                    let bookTitles = colArray[1];
                    console.log(colArray[col]);
                   }

             }
        };

   }
   else {
        alert("Please select a file.");
   }

}