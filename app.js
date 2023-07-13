
let cskruns = ["_","_","_","_","_","_",];
let miruns = ["_","_","_","_","_","_",];

let cskscore =0;
let miscore =0;
let ballcounter=0;

function strikeball() {
    ballcounter++;
    let run=Math.floor(Math.random()*5)*2;
    if(run == 8)
    {
        run='w';
    }
    if(ballcounter<=6)
    {
        if(run !='w')
        {
            cskscore=cskscore+run;
            document.getElementById("cskscore").textContent=cskscore;
            
        }
        cskruns[ballcounter-1]=run;
            document.getElementById("cskruns").textContent=cskruns;
    }
    
    else if(ballcounter<=12)
    {
        if(run !='w')
        {
            miscore=miscore+run;
            document.getElementById("miscore").textContent=miscore;
            
        }
        miruns[ballcounter-7]=run;
            document.getElementById("miruns").textContent=miruns;
            if(miscore>cskscore)
            {
                ballcounter=12;
            }
    }
    if(ballcounter>=12)
    {
        document.getElementById("bat").disaled = true;

        let maxScore= Math.max(cskscore,miscore);
        if(cskscore==maxScore)
        {
            document.getElementById("csk").classList.add("winner");


        }
        if(miscore==maxScore)
        {
            document.getElementById("mi").classList.add("winner");


        }
    }
}

