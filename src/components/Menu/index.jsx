import React, { useState, useEffect } from "react";
import { Card, Container, Options } from "./styles";

import CloseIcon from "../../assets/close.svg";
import DoneIcon from "../../assets/done.svg";
import EditIcon from "../../assets/edit.svg";
import AbelhaImage from "../../assets/abelha.svg";
import { TextField } from "@material-ui/core";

export const Menu = ({ configApp }) => {
  const [edit, setEdit] = useState(false);
  const [config, setConfig] = useState({ bees: 10, rows: 10, cols: 15 });
  const [configEditing, setConfigEditing] = useState(config);

  useEffect(() => {
    configApp({
      abelhas: config.bees,
      linhas: config.rows,
      colunas: config.cols,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);

  return (
    <Container className="border-radius">
      <Card>
        {!edit ? (
          <>
            <img
              src={EditIcon}
              alt="icone edição"
              className="edit-icon hover"
              onClick={() => setEdit(true)}
            />
            <Options>
              <div className="restart box-shadow border-radius hover">
                <p>RESTART</p>
              </div>
              <div className="contador-abelhas box-shadow border-radius">
                <p>{config.bees}</p>
                <img
                  src={AbelhaImage}
                  alt="imagem de abelha"
                  className="hover"
                />
              </div>
              <div className="linhas-colunas box-shadow border-radius">
                <div>
                  <p>Linhas: </p>
                  <p className="numeros">{config.rows}</p>
                </div>
                <div>
                  <p>Colunas:</p>
                  <p className="numeros">{config.cols}</p>
                </div>
              </div>
            </Options>
          </>
        ) : (
          <>
            <div>
              <img
                src={DoneIcon}
                alt="icone de ok"
                className="icons edit-icon hover"
                onClick={(event) => {
                  event.preventDefault();
                  setConfig(configEditing);
                  setEdit(false);
                }}
              />
              <img
                src={CloseIcon}
                alt="icone de cancelar"
                className="icons edit-icon hover"
                onClick={() => setEdit(false)}
              />
            </div>
            <Options>
              <div className="contador-abelhas box-shadow border-radius">
                <TextField
                  id="abelhas"
                  type="number"
                  inputProps={{
                    min: "1",
                    max: "15",
                    step: "1",
                    autoComplete: "off",
                  }}
                  variant="outlined"
                  value={configEditing.bees}
                  onChange={(event) => {
                    event.preventDefault();
                    setConfigEditing({
                      ...configEditing,
                      bees: event.target.value.replace(/[^0-9]+/g, ""),
                    });
                  }}
                />
                <img
                  src={AbelhaImage}
                  alt="imagem de abelha"
                  className="hover"
                />
              </div>
              <div className="linhas-colunas box-shadow border-radius">
                <div>
                  <p style={{ marginRight:"12px"}}>Linhas: </p>
                  <TextField
                    id="linhas"
                    type="number"
                    inputProps={{
                      min: "1",
                      max: "10",
                      step: "1",
                      autoComplete: "off",
                    }}
                    variant="outlined"
                    value={configEditing.rows}
                    onChange={(event) => {
                      event.preventDefault();
                      setConfigEditing({
                        ...configEditing,
                        rows: event.target.value.replace(/[^0-9]+/g, ""),
                      });
                    }}
                  />
                </div>
                <div>
                  <p style={{ marginRight:"12px", marginLeft:"24px"}}>Colunas: </p>
                 
                    <TextField
                      id="colunas"
                      type="number"
                      inputProps={{
                        min: "1",
                        max: "15",
                        step: "1",
                        autoComplete: "off",
                      }}
                      variant="outlined"
                      value={configEditing.cols}
                      onChange={(event) => {
                        event.preventDefault();
                        setConfigEditing({
                          ...configEditing,
                          cols: event.target.value.replace(/[^0-9]+/g, ""),
                        });
                      }}
                    />
                </div>
              </div>
            </Options>
          </>
        )}
      </Card>
    </Container>
  );
};
