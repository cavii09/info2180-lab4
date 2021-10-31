window.onload = function(){
    var searchBtn = document.getElementById("btn")
    var httpRequest;

    searchBtn.addEventListener('click', function(element){
        element.preventDefault();

        httpRequest = new XMLHttpRequest();

        var url = "http://localhost/info2180-lab4/superheroes.php";
        httpRequest.onreadystatechange =function searchLog()
        {
            if(httpRequest.readyState == XMLHttpRequest.DONE){
                if(httpRequest.status == 200){
                    var response = httpRequest.responseText;
                }else{
                    alert('There was a problem with the request.')
                }
            }
        }
        httpRequest.open('GET', url);
        httpRequest.send();
        
        });
        

    }        