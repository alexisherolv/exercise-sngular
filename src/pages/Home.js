import React, { useState } from "react";

import Serie from "../components/Serie.js"; 
import Result from "../components/Result"; 

//Reacstrap Components
import {
    Row,
    Col,
    Container,
    Form,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Label,
    FormGroup,
    Input
} from "reactstrap";

function Home() {

    //Para guardar la información de los personajes
    const [value, setValue] = useState(null);

    const [result, setResult] = useState("");

    //Para saber cuantas páginas (de personajes) son
    const [valueState, setValueState] = useState(null);

    return (
        <>
            <Container>
                <Row className="abs-center">
                    <Col className="ml-auto mr-auto" lg="4" md="6">
                        <Form className="form">
                            <Card className="card-login">
                                <CardHeader className="card-header">
                                    <h3 className="header">Prueba</h3>
                                </CardHeader>
                                <CardBody className="card-body">
                                    <FormGroup className={`form-group ${valueState}`}>
                                        <Label className="card-label">Ingresa un número para calcular la serie *</Label>
                                        <Input
                                            name="value"
                                            type="number"
                                            autoComplete="off"
                                            onChange={(e) => {
                                                if(e.target.value === "" || e.target.value <= 0 || e.target.value % 1 !== 0)
                                                {
                                                    setValueState("has-danger")
                                                }
                                                else {
                                                    setValueState("has-success")
                                                }
                                                setValue(e.target.value);
                                            }}
                                        />
                                        {valueState === "has-danger" ? (
                                            <label className="form-text text-danger">Este campo es requerido.</label>
                                        ) : null}
                                    </FormGroup>
                                    <Result result={result}/>
                                </CardBody>
                            </Card>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Serie terminoN = {value} setResult = {setResult}/>
        </>
    );
}

export default Home;