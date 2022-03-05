import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import { BiArrowToRight, BiSearchAlt2, BiShoppingBag } from "react-icons/bi";
import classes from "../styles/Navbar.module.css";

export default function SeconNverBut() {
  // const handelchange(() =>{
  //     conts a = 1
  // onClick={handelchange}
  // });

  return (
    <Form class="d-flex">
      <Button className={classes.serchbtn} type="submit">
        <BiSearchAlt2 />
      </Button>

      <Button className={classes.serchbtn} type="submit">
        <BiShoppingBag />
      </Button>

      <Button class="btn btn-outline-success but-Aquc" type="submit">
        Reuest A Que
        <BiArrowToRight />
      </Button>
    </Form>
  );
}
