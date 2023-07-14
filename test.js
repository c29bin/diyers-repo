function expandedForm(num) {
    let numberExpander = ""
    let numStr = String(num)
    let len = numStr.length

    const zero =(iZeros)=>{
        let zeros = ""
        for(let i=0; i<iZeros; i++){
            zeros += '0'
        }
        return zeros
    }
    for (let i=0; i < len; i++){
        let toConcat = numStr[i]+zero(len-1-i)
        let plus = "+"
      
        if( numStr[i] !== "0") {
            if(i==len){
                numberExpander += ""
            }
            else {
                numberExpander += toConcat + plus
            }    
        }
        
    }
     
     return numberExpander
   }


expandedForm(console.log(expandedForm(90001)))