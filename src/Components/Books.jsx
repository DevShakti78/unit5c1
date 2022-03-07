import {useState, UseState} from "react"
export function Books(){
    const [Counter,setCounter] = useState(13)
    return (
        
            <div className="items">
    <span>Books:</span>
    <button className="addBook" onClick={()=>{
        console.log("clicked+")
        setCounter(Counter+1)
    }}>
        +
    </button>
    <button className="remBook" onClick={()=>{
        console.log("clicked-")
        setCounter(Counter-1)
    }}>
        -
    </button>
    <span className="totalBooks">{Counter}</span>
</div>
           
    )
}
