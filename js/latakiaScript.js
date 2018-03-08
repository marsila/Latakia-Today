/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
    var date= new Date();
    var options={weekday :'long',year :'numeric', month :'numeric',day:'numeric'};
        $("#theDate").text(date.toLocaleDateString('ar-EG',options));
});


