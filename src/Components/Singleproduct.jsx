import { useParams } from "react-router-dom";

function Singleproduct() {

    const productID = useParams()
    const {id} = productID

    return ( 

        <>
            <h1>Single Product {id} </h1>
        </>
     );
}

export default Singleproduct;