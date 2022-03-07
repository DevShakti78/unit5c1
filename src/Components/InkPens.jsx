import {useState, UseState} from "react"
export function Inkpens(){
    const [Counter,setCounter] = useState(78)
    return (
        
            <div className="items">
    <span>Inkpens:</span>
    <button className="addInkpen" onClick={()=>{
        console.log("clicked+")
        setCounter(Counter+1)
    }}>
        +
    </button>
    <button className="remInkpen" onClick={()=>{
        console.log("clicked-")
        setCounter(Counter-1)
    }}>
        -
    </button>
    <span className="totalInkpens">{Counter}</span>
    <div className="total">{Counter+44+13+10}</div>
</div>
           
    )
}