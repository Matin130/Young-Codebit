document.getElementById('grd-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let rptCrd = document.getElementsByClassName('rpt-card')[0];
    rptCrd.style.display = 'block';

    const grdArr = document.getElementsByClassName('grade');
    let grdPt = document.getElementsByClassName('grd');
    // let  = [mathGrade, engGrade, intGrade, govtGrade, yorGrade];
    let totalScr = document.getElementById('t-prcnt');
    // let index = 0;
    for (let i = 0; i < grdArr.length; i++) { 
        document.getElementsByClassName('scr')[i].textContent = grdArr[i].value;
        grdPt[i].textContent = validateScr(grdArr[i].value);
        if (grdArr[i].value < 40) 
            grdPt[i].style.color = 'red';
        else
        grdPt[i].style.color = 'black';
        // index++;
    }
    totalScr.textContent = "Total Score: " + calcTotalScr(grdArr);
})

function validateScr(scr) {
        if (scr >= 80) {
            return "A";
        }
        else if (scr >= 70) {
            return "B";
        }
        else if (scr >= 50) {
            return "C";
        }
        else if (scr >= 40) {
            return "D";
        }
        else if (scr < 40) {
            return "F";
        }
}

function calcTotalScr(arr) {
    let score = 0;
    for (let i of arr) {
            score += parseInt(i.value);
    }
    return (score / arr.length).toFixed(2) + "%"
}