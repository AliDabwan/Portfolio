import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from '@mui/material/Button';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function ProjectCards(props) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


 
  return (

    <div>
   
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
      <p style={{'font-family': 'Cairo'}}>{props.title} </p>
      </DialogTitle>
      <DialogContent>

        <DialogContentText>
              <Card className="project-card-indialog">   
              <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" style={{'backgroundColor':'gray'}}  data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
      <img src={props.imgPath}  class="img-fluid mx-auto my-auto d-block w-75 " alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </div>
      </div>
      <div class="carousel-item">
        <img src={props.imgPath}  class="img-fluid mx-auto my-auto d-block w-75 " alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </div>
      </div>
      <div class="carousel-item">
      <img src={props.imgPath}  class="img-fluid mx-auto my-auto d-block w-75 " alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

      <Card.Body>
        {/* <Card.Title>{props.title} 
         </Card.Title> */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.Fulldescription}
        </Card.Text>
      </Card.Body>
    </Card>
        </DialogContentText>
      </DialogContent>
      {/* <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Disagree
        </Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions> */}
    </Dialog>







    <Card className="project-card-view">   
      <Card.Img  className="card-img-top"  src={props.imgPath}  onClick={handleClickOpen} />
      <Card.Body>
        <Card.Title>{props.title} 
            
         </Card.Title>
              <Card.Subtitle>
        {/* {props.label&&
        // <Chip
        //             variant="outlined"
        //             color="info"
        //               // icon={props.icon}
        //               label={props.label}
                     
        //             /> 
                    <Avatar sx={{ width: 24, height: 24 }}>c#</Avatar>
                    
                    
                    }  */}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
       

<Card.Footer className="fftr" >

<Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

            


    </Card.Footer>
        

      </Card.Body>
    </Card>
    </div>

    
  );
}
export default ProjectCards;
