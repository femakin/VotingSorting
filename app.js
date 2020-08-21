var total = document.querySelector(".Fixed_number");
var minusBtn = document.querySelectorAll("#minus");
var allSpan = document.getElementById('displayvalue');
var plusBtn = document.querySelectorAll("#plus");
var value_object = {};

// plusBtn.forEach(function(item) {
//     item.onclick = function() {
//         if (parseInt(total.innerText) > 0) {
//             item.nextElementSibling.innerText = parseInt(item.nextElementSibling.innerText) + 1;
//             total.innerText = parseInt(total.innerText) - 1;

//         }
//     };

// });

var GetTotal = document.getElementById('get_all');

var value1 = document.getElementById('Contestant_One');
var value2 = document.getElementById('Contestant_Two');
var value3 = document.getElementById('Contestant_Three');
var value4 = document.getElementById('Contestant_Four');


plusBtn.forEach(function(item, index) {
    item.onclick = function() {
        if (parseInt(total.innerText) > 0) {
            item.nextElementSibling.innerText = parseInt(item.nextElementSibling.innerText) + 1;
            total.innerText = parseInt(total.innerText) - 1;

            let result = {};
            result[index] =

                if (parseInt(total.innerText) == 0) {


                    var TotalAll = value1.id + ": " + value1.innerHTML + ": " +
                        value2.id + ": " + value2.innerHTML + ": " +
                        value3.id + ": " + value3.innerHTML + ": " +
                        value4.id + ": " + value4.innerHTML;

                    // var TotalAll = value1.id + ": " + value1.innerText + ", " +
                    //     value2.id + ": " + value2.innerText + ", " +
                    //     value3.id + ": " + value3.innerText + ", " +
                    //     value4.id + ": " + value4.innerText;

                    // result.push("value1.id + :  + value1.innerHTML ");



                    alert(TotalAll);
                    alert(result);
                }
        }
    };
});






minusBtn.forEach(function(item) {
    let variable;
    item.onclick = function() {
        if (parseInt(item.previousElementSibling.innerText) > 0) {
            item.previousElementSibling.innerText = parseInt(item.previousElementSibling.innerText) - 1;
            total.innerText = parseInt(total.innerText) + 1;
        }
    };
});