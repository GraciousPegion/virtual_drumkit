var len=document.querySelectorAll("button").length;
var path="sounds/audio";
var sounds_paths={'q':path+"0.mp3",
                  'w':path+"1.mp3",
                  'e':path+"2.mp3",
                  'r':path+"3.mp3",
                  't':path+"4.mp3",
                  'y':path+"5.mp3",
                  'u':path+"6.mp3",};
for(var i=0;i<len;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        event_handler(sounds_paths[this.innerHTML]);
    });
}
addEventListener("keydown",function(event)
{
    event_handler(sounds_paths[event.key]);
    press(event.key);
});
function event_handler(re_path)
{
    var audio=new Audio(re_path);
    audio.play();
}
function press(key)
{
    var active=document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(function()
    {
        active.classList.remove("pressed");
    },200);
}