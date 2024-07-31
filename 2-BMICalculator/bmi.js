const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

   // console.log("e", e)

   const height = parseInt(document.querySelector('#height').value); // first mistake ye hai V capital tha value ka v hmesa small hoga
   const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results') ;
   const weightguideresult = document.querySelector('#weightguideresult');
   console.log(weightguideresult);

//    console.log("height ", height);
//    console.log("weight ", weight);
//    console.log("results", results);

   if  (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
    console.log(height);
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;
        } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the results
    if (bmi < 18.6 ) {
        weightguideresult.innerHTML = `your BMI is Underweight`
        } else if (bmi != 24.6 ) {
            weightguideresult.innerHTML = `your BMI is Normal`
        }  else if (bmi > 24.6 ) {
            weightguideresult.innerHTML = `your BMI is Overweight`
        } 
       results.innerHTML = `<span>${bmi}</span>`;
    }

});
