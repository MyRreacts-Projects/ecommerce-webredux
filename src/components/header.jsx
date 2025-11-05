// import React from "react";
// import Container from 'react-bootstrap/Container';
// import Badge from '@mui/material/Badge';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// {
//   /* The following line can be included in your src/index.js or App.js file */
// }
// import 'bootstrap/dist/css/bootstrap.min.css';
// // menu
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';
// import Stack from '@mui/material/Stack';

// // menu
// import { NavLink } from "react-bootstrap";

// const Header = ()=>{
//      const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef<HTMLButtonElement>(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

  
//  {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef<HTMLButtonElement>(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event: Event | React.SyntheticEvent) => {
//     if (
//       anchorRef.current &&
//       anchorRef.current.contains(event.target as HTMLElement)
//     ) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event: React.KeyboardEvent) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     } else if (event.key === 'Escape') {
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current!.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     <Stack direction="row" spacing={2}>
//       <Paper>
//         <MenuList>
//           <MenuItem>Profile</MenuItem>
//           <MenuItem>My account</MenuItem>
//           <MenuItem>Logout</MenuItem>
//         </MenuList>
//       </Paper>
//       <div>
//         <Button
//           ref={anchorRef}
//           id="composition-button"
//           aria-controls={open ? 'composition-menu' : undefined}
//           aria-expanded={open ? 'true' : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//         >
//           Dashboard
//         </Button>
//         <Popper
//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           placement="bottom-start"
//           transition
//           disablePortal
//         >
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === 'bottom-start' ? 'left top' : 'left bottom',
//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList
//                     autoFocusItem={open}
//                     id="composition-menu"
//                     aria-labelledby="composition-button"
//                     onKeyDown={handleListKeyDown}
//                   >
//                     <MenuItem onClick={handleClose}>Profile</MenuItem>
//                     <MenuItem onClick={handleClose}>My account</MenuItem>
//                     <MenuItem onClick={handleClose}>Logout</MenuItem>
//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </div>
//     </Stack>
//   );
// }

//     return(
//        <>
//        <Navbar bg="dark" data-bs-theme="dark" style={{height:60}}>
//                <Container>
//                  <NavLink to="/" className="text-light text-decoration-none mx-3">Add to Cart</NavLink>
//                  <Nav className="me-auto">
//                    <NavLink to="/">Home</NavLink>
                  
//                  </Nav>
//                   <Badge badgeContent={4} color="primary">
//                     {/* btn properties */}
//  ref={anchorRef}
//           id="composition-button"
//           aria-controls={open ? 'composition-menu' : undefined}
//           aria-expanded={open ? 'true' : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//                     {/* btn pronperites closed */}
//                     <i class="fa-solid fa-cart-shopping text-light" style={{fontSize : 25,cursor: 'pointer'}}></i>
//              {/* <MailIcon color="action" /> */}
//            </Badge>
                
//                </Container>
//              </Navbar></>
       
//     )
// }
// export default Header;


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
import cart from '../assets/cart.gif'

const Header = () => {
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
            <Badge badgeContent={4} color="primary">
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
            <Popper
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
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My Account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                     <div className="card_details d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-xmark smallclose" style={{position: "absolute",top:2,right:20,fontSize:23,cursor:"pointer"}} onClick={handleClose}></i>
                        <p style={{fontSize:22,padding:5}}>Your card is empty</p>
                         <img src={cart} className="emptycart_img" style={{width:'5rem',padding:10,marginTop:10}}/>
                     </div>
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
