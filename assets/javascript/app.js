 
 $(document).ready(function(){

 window.fbAsyncInit = function() {
    FB.init({
      appId            : '258507278047521',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.12'
    });
  };

  
   FB.ui({
    method: 'share_open_graph',
    action_type: 'og.likes',
    action_properties: JSON.stringify({
      object:'https://developers.facebook.com/docs/',
    })
  }, function(response){
    // Debug response (optional)
    console.log(response);
  });
// FB.login(function(response)
// {
// if(response.session)
// {
//     if(response.perms)
//     {
//         alert('yippee');
//     }
//     else
//     {
//         alert('oh no');
//     }
// }
// else
// {
//     alert('login silly');
// }
// }, {perms:'email,user_birthday'});

 });