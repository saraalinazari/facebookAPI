 
 $(document).ready(function(){

 window.fbAsyncInit = function() {
    FB.init({
      appId            : '258507278047521',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.12'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=258507278047521";//"https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

//    FB.ui({
//     method: 'share_open_graph',
//     action_type: 'og.likes',
//     action_properties: JSON.stringify({
//       object:'https://developers.facebook.com/docs/',
//     })
//   }, function(response){
//     // Debug response (optional)
//     console.log(response);
//   });
FB.login(function(response)
{
if(response.session)
{
    if(response.perms)
    {
        alert('yippee');
    }
    else
    {
        alert('oh no');
    }
}
else
{
    alert('login silly');
}
}, {perms:'email,user_birthday'});

 });