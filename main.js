var array = [1880,1140,2400]
var sum=0
function addToCart(){
sum=sum+array[0]
console.log(sum)
$("#price").append("<b>" + sum + ' DT' + "<b/>")

}
function addToCart1(){
    $("#price").empty()

    sum=sum+array[1]
    console.log(sum)

    $("#price").append("<b>" + 'price '+ sum + ' DT'+ "<b/>")
    }
    function addToCart2(){
        $("#price").empty()
    
        sum=sum+array[2]
        console.log(sum)
    
        $("#price").append("<b>" + 'price '+ sum + ' DT'+ "<b/>")
        }
function remove(){
    $("#price").empty()
}
function buy(){
    window.alert('thanks')
}