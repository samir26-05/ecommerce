/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
/* MATERIAL UI */
import { Button, Card, Box, Stepper, StepLabel, Step } from "@mui/material";
import { CgLogOut } from "react-icons/cg";
import { BsBoxSeam } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCardboardBox, GiCheckboxTree } from "react-icons/gi";
import TotalSummary from "./TotalSummary";
import TableDetailsProducts from "./DetailsProducts";
import CrudOrders from "../ShowOrders";
import axios from "axios";

const steps = ["DESPACHO", "EN CAMINO", "RECIBIDO"];

function getStepIcon(step) {
  switch (step) {
    case 0:
      return <BsBoxSeam style={{ fontSize: 40 }} />; // Icono para el primer paso
    case 1:
      return <TbTruckDelivery style={{ fontSize: 40 }} />; // Icono para el segundo paso
    case 2:
      return <GiCardboardBox style={{ fontSize: 40 }} />; // Icono para el tercer paso
    default:
      return null;
  }
}

export default function DetailsOrder({ order, seeOrder }) {
  const [table, setTable] = useState(seeOrder);
  const [products, setProducts] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const urlBackend = import.meta.env.VITE_BACKEND_URL;

  const handleShowTable = () => {
    setTable(!table);
  };

  const searchProducts = async () => {
    try {
      let fetchedProducts = []
      for (let i = 0; i < order.products.length; i++) {
        const response = await axios.get(`${urlBackend}/product/id/${order.products[i].product_id}`, {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        );
        console.log(order.products[i].product_id, 'aaaaaaaaaaaaaaa');
        fetchedProducts.push(response.data);
      }
      setProducts(fetchedProducts)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchProducts();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {table ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ paddingButton: "50px" }}>
              <GiCheckboxTree style={{ fontSize: "40px", marginTop: "-5px" }} />{" "}
              Detalle de orden: {order.user_id}
            </h3>
            <Button
              variant="contained"
              className="whithoutOutline"
              style={{ backgroundColor: "black", color: "white" }}
              type="submit"
              value="registrar"
              onClick={handleShowTable}
            >
              <CgLogOut style={{ fontSize: 30 }} /> ATRAS
            </Button>
          </div>

          <div style={{ paddingTop: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Card
                sx={{
                  display: "flex",
                  width: "100%",
                  marginBottom: 5,
                  justifyContent: "space-between",
                  padding: "20px 0px 20px 0px",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => (
                      <Step key={label}>
                        <StepLabel icon={getStepIcon(index)}>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Card>
            </div>

            <Box
              sx={{
                marginBottom: 10,
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <TableDetailsProducts products={products} />
              <Box
                sx={{
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <TotalSummary />
                <Card
                  sx={{
                    display: "flex",
                    width: "100%",
                    marginBottom: 5,
                    justifyContent: "space-between",
                    padding: "20px 0px 20px 0px",
                  }}
                >
                  AQUI VA LA INFORMACION DE EL DOMICILIO DEL PEDIDO
                </Card>
              </Box>
            </Box>
          </div>
        </>
      ) : (
        <>
          <CrudOrders />
        </>
      )}
    </div>
  );
}
