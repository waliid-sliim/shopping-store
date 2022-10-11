var array = [1880,1140,2400]
var sum=0
function addToCart(){
sum=sum+array[0]
console.log(sum)
$("#price").empty()
$("#price").append("<b>" + 'price ' +sum + ' DT' + "<b/>")

}
function addToCart1(){
    

    sum= sum+array[1]
    console.log(sum)
    $("#price").empty()

    $("#price").append("<b>" + 'price '+ sum + ' DT'+ "<b/>")
    }
    function addToCart2(){
        
       sum= sum+array[2]
        console.log(sum)
        $("#price").empty()
    $("#price").append("<b>" + 'price '+ sum + 'DT'+ "<b/>")
        }
function remove(){ 

    $("#price").empty()
    
    $("#price").append("<b>" + 'price ' +    ' 0 DT' +"<b/>" )
   
    sum =0


}
function buy() {
    window.location.href="file:///C:/Users/Wissem/OneDrive/Bureau/store project/CARD/CARD.html"
    
    ;
  }