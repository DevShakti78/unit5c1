import {useState, UseState} from "react"
export function Total(){
    const [Counter,setCounter] = useState(44)
    return (
        
            <div className="items">
    <span>NoteBooks:</span>
    <button className="addNotebook" onClick={()=>{
        console.log("clicked+")
        setCounter(Counter+1)
    }}>
        +
    </button>
    <button className="remNotebook" onClick={()=>{
        console.log("clicked-")
        setCounter(Counter-1)
    }}>
        -
    </button>
    <span className="totalNotebooks">{Counter}</span>
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
    <div className="total">{Counter}</div>
</div>
</div>
           
    )
}
