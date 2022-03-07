import {useState, UseState} from "react"
export function Pen(){
    const [Counter,setCounter] = useState(10)
    return (
        
            <div className="items">
    <span>Pens:</span>
    <button className="addPen" onClick={()=>{
        console.log("clicked+")
        setCounter(Counter+1)
    }}>
        +
    </button>
    <button className="remPen" onClick={()=>{
        console.log("clicked-")
        setCounter(Counter-1)
    }}>
        -
    </button>
    <span className="totalPens">{Counter}</span>
    
</div>
           
    )
}