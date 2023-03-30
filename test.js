// var ageInput = document.getElementById('age-input').vaule;


document.getElementById("calculate-button").
addEventListener("click", function(){
    
    var weightValue = document.getElementById('weight-value').value;
    var heightValue = document.getElementById('height-value').value;

   if(weightValue === "" && heightValue === ""){

        alert("Please Enter a valid number")
        document.getElementById('BMI-display').innerText = "00.00";

   }else{

    var cmToMeter = heightValue / 100;
    var BMIassign = weightValue / Math.pow(cmToMeter, 2);
    var BMIresult = BMIassign.toFixed(2);
    document.getElementById('BMI-display').innerText = BMIresult;
    document.getElementById('age-input').innerText = "";
    var warningDisply = document.getElementById('warning-display');
    
    if(BMIresult < 18.5){
     warningDisply.innerHTML = "শরীরের ওজন কম পরিমিত খাদ্য গ্রহণ করে ওজন বাড়াতে হবে।";
     warningDisply.style.color = "red";
    }else if (18.5 <= BMIresult && BMIresult <= 24.9  ){

     warningDisply.innerHTML = "সুস্বাস্থ্যের আদর্শ মান";
     warningDisply.style.color = "green";

    }else if(25 <= BMIresult && BMIresult<= 29.9){

     warningDisply.innerHTML = "শরীরের ওজন অতিরিক্ত, ব্যায়াম করে অতিরিক্ত ওজন কমানো প্রয়োজন";
     warningDisply.style.color = "orange";

    }else if(30 <= BMIresult && BMIresult<= 34.9){

     warningDisply.innerHTML = "মোটা হওয়ার প্রথম স্তর, বেছে খাদ্য গ্রহণ করা প্রয়োজন";
     warningDisply.style.color = "tomato";
    }
    else if(35 <= BMIresult && BMIresult<= 39.9){

     warningDisply.innerText = "মোটা হওয়ার দ্বিতীয় স্তর,  পরিমিত খাদ্য গ্রহন ও ব্যায়াম করা প্রয়োজন";
     warningDisply.style.color = "red";
    }
    else if(40 <= BMIresult){

     warningDisply.innerHTML = "অতিরিক্ত মোটাত্ব, মৃত্যু ঝুঁকির আশঙ্কা ডাক্তার এর পরামর্শের প্রয়োজন";
     warningDisply.style.color = "red";
    }

   }

});

