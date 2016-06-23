// create the controller and inject Angular's $scope
bankingApp.controller('home',['$scope','ngToast',function($scope,ngToast){
  $scope.selectedCountry='Select Country';
  $scope.processDocument = function(){
    var continueInvoke = true; /* Variable used to avoid $(this) scope confusion with .each() function. */
    /* If the element has no value. */
    if($('#fileInput').val() == ""){
      continueInvoke = false;    /* Set the variable to false, to indicate that the form should not be submited. */
      ngToast.create({
        className: 'danger',
        content: 'Document Front Cannot be Empty'
      });
    }
    if($scope.selectedCountry == 'Select Country'){
      continueInvoke = false;    /* Set the variable to false, to indicate that the form should not be submited. */
      ngToast.create({
        className: 'danger',
        content: 'Please select Country'
      });
    }

    /* Read the variable. Detect any items with no value. */
    if(continueInvoke == true){
      var type = 'DRIVING_LICENSE'; // $("select[name='type']").val();
      var country = 'USA'//$("select[name='country']").val();
      var file = $("#fileInput").get(0).files[0];
      var data = new FormData();
      data.append("type", type);
      data.append("country", country);
      data.append("file", file);
      if(type && country && file)
      {
        var url = 'http://10.113.176.73/JumioRestfull/api/FastFill/Fastfill';
        $.ajax({
          url: url,
          type: "POST",
          crossOrigin: true,
          data: data,
          crossDomain:true,
          processData: false,
          contentType: false,
          success: function (data) {
            $(this).submit();
            window.location = "/#PersonalDetails";
          },
          error: function (data)
          {
            alert('Something went wrong from fastfill service');
          }
        });
      }
    }
    window.location = "/#PersonalDetails"; //to be removed after Dev complation
  }

  $scope.validateRequiredFields = function(){
    var allFieldsFilled = true;
    $('#personalDetails :input[required]').each(function(e){
      if($(this).val() == ""){
        allFieldsFilled = false;
        ngToast.create({
          className: 'danger',
          content : 'Please enter ' + $(this).get(0).name
        })
      }
    });
    if(allFieldsFilled){
      var $form = $("#personalDetails");
      var unindexed_array = $form.serializeArray();
      var indexed_array = {};
      $.map(unindexed_array, function(n, i){
          indexed_array[n['name']] = n['value'];
      });
      console.log(indexed_array);
      $(this).submit();
      window.location = "/#captureSelfie";
    }
  }

  $scope.validateSelfie = function(){
    var isPhotoValid = $('#selfieInput') != '' && $.inArray(($('#selfieInput').val().split('.').pop().toLowerCase()) , ['gif','png','jpg','jpeg']) != -1;
    if(!isPhotoValid)
    {
      ngToast.create({
        className: 'danger',
        content : 'Please upload Valid Photograph'
      })
    }
    else{
      $(this).submit();
      window.location = "/#signature";
    }
  }

}]);
