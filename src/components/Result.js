import React from "react";

//Reacstrap Components
import {
    Label,
    FormGroup,
    Input
} from "reactstrap";

function Result({result}) {
    return (
        <>
            <FormGroup>
                <Label className="card-label">El valor de la serie es:</Label>
                <Input
                    name="result"
                    autoComplete="off"
                    value={result}
                    readOnly
                />
            </FormGroup>
        </>
    );
}

export default Result;