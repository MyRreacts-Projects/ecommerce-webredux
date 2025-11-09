

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import "bootstrap/dist/css/bootstrap.min.css";
import cart from '../assets/cart.gif';
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const Header = () => {
  const getData = useSelector((state)=>state.cartreducer.carts);
  console.log(getData)
  // Menu open state
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab" || event.key === "Escape") {
      setOpen(false);
    }
  };

  // Return focus to the button when we transitioned from open → closed
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: 60 }}>
        <Container>
          <NavLink
            to="/"
            className="text-light text-decoration-none mx-3 fs-5"
          >
            Add to Cart
          </NavLink>

          <Nav className="me-auto">
            <NavLink to="/" className="nav-link text-light">
              Home
            </NavLink>
          </Nav>

          <Stack direction="row" spacing={2}>
            {/* Cart Icon with Badge */}
            <Badge badgeContent={getData.length} color="primary">
              <i
                ref={anchorRef}
                className="fa-solid fa-cart-shopping text-light"
                style={{ fontSize: 25, cursor: "pointer" }}
                onClick={handleToggle}
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
              ></i>
            </Badge>

            {/* Dropdown Menu */}
            <Popper  style={{zIndex: 2000}}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper >
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        {
                          getData.length ? 
                          <div className="card_details" style={{width:'24rem',padding:'10px'}}>
                            <Table>
                              <thead>
                                <tr>
                                  <th>Photos</th>
                                  <th>Restaurant Name</th>
                                </tr>
                              </thead>
                              <tbody>
                                {getData.map((e)=>{
                                  return(
                                   <div key={e.id}>
                                     <tr>
                                     <td><NavLink to={`/cart/${e.id}`}><img src={e.imgdata}  alt="img" style={{width:'5rem',height:'5rem'}} /></NavLink></td>
                                     <td><p>{e.rname}</p>
                                     <p>Price : ₹{e.price}</p>
                                     <p>Quantity : {e.qnty}</p>
                                     <p style={{color:'red',fontSize:'20px',cursor:'pointer'}}><i className="fas fa-trash smalltrash"></i></p>
                                     </td>
                                     <td className="mt-t" style={{color:'red',fontSize:'20px',cursor:'pointer'}}><i className="fas fa-trash largetrash"></i></td>
                                    </tr>
                                   </div>
                                  )
                                })} 
                                <p className="text-center">Total : ₹300</p>
                              </tbody>
                            </Table>
                          </div>
                          :
                           <div className="card_details d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-xmark smallclose" style={{position: "absolute",top:2,right:20,fontSize:23,cursor:"pointer"}} onClick={handleClose}></i>
                        <p style={{fontSize:22,padding:5}}>Your card is empty</p>
                         <img src={cart} className="emptycart_img" style={{width:'5rem',padding:10,marginTop:10}}/>
                     </div>
                        }
                       
                    
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Stack>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
