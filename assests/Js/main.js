var date  = new Date()
var time = date.getHours()
var fulltime = date.getHours()+ ":" + date.getMinutes()


if (6 < time && time < 12 )
{

    alert("Saat " + fulltime +"\n" + "Sabahin xeyir!");
}
else if (12 <= time && time < 17 )
{
    alert("Saat " + fulltime + "\n" + "Gunortan xeyir!");
}
else
{
    alert("Saat " + fulltime + "\n" + "Get yat, gecdir!");

}













