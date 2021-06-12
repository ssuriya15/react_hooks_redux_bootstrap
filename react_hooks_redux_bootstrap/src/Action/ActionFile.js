

 /* function getTabledataCount(){
    console.log("Action")
     return function(dispatch){
        fetch("https://api.punkapi.com/v2/beers")
        .then(response => response.json())
        .then(data => {
                console.log(data)
                dispatch({type:"FETCHING_COUNT",count:data.length})
            }
        );

    } 
} */
 function getTabledata(i){
    console.log("Action")
     return function(dispatch){
        fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=10`)
        .then(response => response.json())
        .then(data => {
                console.log(data)
                dispatch({type:"FETCHING_DATA",data})
            }
        );

    } 
}

export default {getTabledata/* ,getTabledataCount */}