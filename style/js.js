
let btn_Summit = document.querySelector("#btnSummit");
let btnOtherBook = document.querySelector("#btnOtherBook");
let result = document.querySelector(".result");
let alertMessege = document.querySelector(".alertMessege");
let alertAge = document.querySelector(".alertAge");
let gender = document.querySelector(".gender");
let namePetian = document.querySelector(".namePetian");
let date = document.querySelector(".date");
let age = document.querySelector(".age");


btn_Summit.addEventListener("click", (e) => {
    e.preventDefault();

        
        if (namePetian.value == "" || age.value == "" || gender.value=="" || age.value=="") {
           
            alertMessege.classList.remove("dis-none");
    alertMessege.classList.add("flex");
    setTimeout(() => {
        alertMessege.classList.remove("flex");
        alertMessege.classList.add("dis-none");
    },3000)
            return;
        }
    

        else {
            
                if (age.value >= 5 && age.value <= 60 && isFinite(namePetian.value)==false) {
                    
                    FuncResult();
                    return;
            }
                else {
                    alertAge.classList.remove("dis-none");
                    alertAge.classList.add("flex");
                    setTimeout(() => {
                        alertAge.classList.remove("flex");
                        alertAge.classList.add("dis-none");
                    }, 3000)
                    
                    
            }
    }

    
    
});


btnOtherBook.addEventListener("click", (e) => {
    e.preventDefault();
    result.classList.add("dis-none");
    result.classList.remove("flex");
        
    namePetian.value = "";
    age.value = "";
    gender.value = "";
    date.value = "";
    

    
    
});


function FuncResult() {
    result.classList.remove("dis-none");
            result.classList.add("flex");
            result.innerHTML =
            `
            <h4>
             لقد تم الحجز بنجاح ب اسم :${namePetian.value} <br/>
               نوعك : ${gender.value}  <br/>
             الميعاد: ${date.value}  <br/>
            السن :${age.value}
            </h4>
            `
}
