import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import Select from "react-select";
import { datas } from "../data";

export const Asgn20 = () => {
  const [data, setData] = useState([]);
  const [clr, setClr] = useState(datas[4]);

  useEffect(() => {
    setData([...data, clr]);
  }, [clr]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Select options={datas} onChange={(e) => setClr(e)} />
      </Grid>
      <Grid item xs={2}></Grid>
      {data.map((item) => (
        <React.Fragment>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 150, bgcolor: item.label }}>
              <CardContent></CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};
