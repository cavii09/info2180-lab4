window.onload = function(){
    var searchBtn = document.getElementById("btn")
    var httpRequest;
    var searchResult = document.querySelector("#result");
    var searchField = document.getElementById("search").value;

    searchBtn.addEventListener('click', function(element){
        element.preventDefault();


        httpRequest = new XMLHttpRequest();

        var url = "http://localhost/info2180-lab4/superheroes.php?query="+searchField+"";
        httpRequest.onreadystatechange = searchLog;
        httpRequest.open('GET', url);
        httpRequest.send();
        
        });
        function searchLog()
        {
            if(httpRequest.readyState == XMLHttpRequest.DONE){
                if(httpRequest.status == 200){
                    var response = httpRequest.responseText;
                    searchResult.innerHTML=response;
                }else{
                    alert('There was a problem with the request.');
                }
            }
        }

    }        