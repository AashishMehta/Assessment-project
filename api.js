var a=0;
function functionality1()
{
    var xhr= new XMLHttpRequest();
xhr.open("GET","https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c4d6878a172b4856b436d781a6a7638d");
xhr.send();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     data=JSON.parse(this.responseText);
   console.log(data);
   if(a==0)
   {
     for (var i = 0; i < 5; i++) 
     {        
       console.log(data.articles[i].title);
        $("#movies-ajax").append(' <div class="movies" style="margin-left:90px;height:230px;width:200px;"><img src="'+data.articles[i].urlToImage+'" style="height:230px;width:210px"><center><h5>'+data.articles[i].title+'</h5></center></div>'); 
     }
     a=1
    }
    }
  };
}

function funct()
{
    var cuntry=document.getElementById("ct").value;
    cuntry = cuntry.charAt(0).toUpperCase() + 
           cuntry.slice(1); 
    console.log(cuntry);
    var xhr1= new XMLHttpRequest();
    xhr1.open("GET","https://api.currentsapi.services/v1/available/regions?apiKey=CD8Gn7BE7wnpfFsd2byD9pL5bYBraIh1n70fNcfh2c3PKrth");
    xhr1.send();
     
var data;
var country;
xhr1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     data=JSON.parse(this.responseText);
    country=data.regions[cuntry];
   
    }
    var cntry_news;
    var xhr2= new XMLHttpRequest();
    xhr2.open("GET","https://newsapi.org/v2/top-headlines?country="+country+"&apiKey=c4d6878a172b4856b436d781a6a7638d");
    xhr2.send();
    xhr2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
    cntry_news=JSON.parse(this.responseText);
      console.log(cntry_news);

            for(var i=0;i<5;i++)
            {
              $("#movies-ajax").append(' <div class="movies" style="margin-left:90px;height:230px;width:200px;"><img src="'+cntry_news.articles[i].urlToImage+'" style="height:230px;width:210px"><center><h5>'+cntry_news.articles[i].title+'</h5></center></div>'); 
            }
        }
        
    };
  }
  }
  function functionality3()
{
  
    var xhr= new XMLHttpRequest();
xhr.open("GET","https://newsapi.org/v2/everything?q=apple&from=2019-11-20&to=2019-11-20&sortBy=popularity&apiKey=ecbf22dcc25a4b7eb8229103e626d9a4");
xhr.send();
var data;
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     data=JSON.parse(this.responseText);
   console.log(data);
   
   {
     for (var i = 0; i < 5; i++) 
     {        
       console.log(data.articles[i].title);
        $("#movies-ajax").append(' <div class="movies" style="margin-left:90px;height:230px;width:200px;"><img src="'+data.articles[i].urlToImage+'" style="height:230px;width:210px"><center><h5>'+data.articles[i].title+'</h5></center></div>'); 
     }
    
    }
    }
  };
}

  






