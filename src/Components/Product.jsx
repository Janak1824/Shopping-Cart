import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Checkbox } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch } from 'react-redux';
import { AddtoCart } from '../features/Cartslice';
import { Link } from 'react-router-dom';



export default function Product(props) {
    const {Dataa} = props
    console.log(Dataa)
    
    const dispatch = useDispatch()
    
  return (
    <Card sx={{ 
        maxWidth: 345,
        borderRadius:"10px",
        boxShadow:"0px 0px 15px 1px black",
        fontWeight:"bold",
        position:"relative",
        height:"500px",
        
     }}>
      <CardMedia sx={{
         width:345,
         height: "140px",
         marginTop:"10px",
         objectFit:"contain",
      }}
        component="img"
        alt="green iguana"
        image={Dataa.image}
      />
      <CardContent>
        <Typography sx={{
            fontWeight:"bold",
            position:"absolute",
            top:"180px",
        }}
          gutterBottom variant="h6" component="div">
          {Dataa.title}
        </Typography>
        <Box sx={{
            position:"absolute",
            bottom:"100px"
        }}>
        <Typography sx={{
            fontSize:"30px",
            fontWeight:"bolder",
            color: "darkslateblue",
            marginTop:"10px"
        }}
         variant="body2" >
          Price {Dataa.price} $ 
        </Typography>
        <Typography sx={{
            marginTop:"10px",
            fontSize:"25px",
            fontWeight:"bold",
        }}
        variant="body2" >
          ⭐ {Dataa.rating && Dataa.rating.rate}
        </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{
        position:"absolute",
        bottom:"10px",
      }}>
        <Button sx={{
            paddingLeft:"30px",
            paddingTop:"8px",
            paddingBottom:"8px",
           
        }} onClick={()=>{dispatch(AddtoCart(Dataa))}} variant='contained' color='warning' startIcon={<ShoppingCartIcon/>}></Button>
        <Link to={`/singleproduct/${Dataa.id}`}>
        <Button sx={{
            padding:"5px, 5px",
        }} variant='contained' color='success' endIcon={<InfoIcon/>}>Learn More</Button>
        </Link>
      </CardActions>
      <Checkbox sx={{
        position:'absolute',
        top:"10px",
        right:"10px"
        
      }} icon={<FavoriteBorder/>} checkedIcon={<Favorite color='error'/>}></Checkbox>
    </Card>
  );
}


