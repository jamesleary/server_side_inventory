console.log('js sourced');
$(document).ready(function(){
  refreshProducts();
  console.log('jQuery sourced');
  $('#submitButton').on('click', function(){
    var productName = $('#productName').val();
    var productCost = $('#cost').val();
    console.log('product name', productName);
    console.log('product cost', productCost);
    $.ajax({
      type:'POST',
      url: '/product',
      data: {productName: productName,
            productCost: productCost},
      success: function (response) {
        console.log('Product added to inventory.');
        console.log(response);
        refreshProducts();
      }
    });
  });
});

function refreshProducts() {
  $.ajax({
    type: 'GET',
    url: '/product',
    success: function(response) {
        $('#productList').empty();
      // Response is our product array
      var products = response;
      //Loop through products and append to the dom
      for(var i = 0; i < products.length; i++){

        var product = products[i];
        $('#productList').append('<p>'+ product.productName +
                                  ': $'+ product.productCost + '</p');
      }
    }
  });
}
