import { Box } from "@mui/material";
import Product from "./Product";

function Homepage(props) {
    const { productdata } = props
    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent:"center",
                flexWrap:"wrap",
                gap:"70px",
                marginTop:"80px",
                
               

            }}>
                {
                    productdata.map((value) => (
                        <>
                            <Product Dataa={value} />
                        </>
                    ))
                }
            </Box>

        </>

    );
}

export default Homepage;