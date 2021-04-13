import { useParams } from "react-router"
import "./Bio.css"

export default function(props) {
    const params = useParams()
    return (<div>

        <svg height="210" width="500">
           <polygon points="200,10 200,200 160,210" style={{fill:"lime", stroke:"purple", strokeWidth:"1"}} />
        </svg> 
    </div>)

}