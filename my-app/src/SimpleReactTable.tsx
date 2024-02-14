import React from "react";
import { faker } from "@faker-js/faker";
import "./App.css";
import Td from "./Td";
import Tr from "./Tr";





export default function SimpleReactTable() {
  const [selectedRow, setSelectedRow] = React.useState(-1);

 
  return (
    <div style={{ marginTop: 24, marginLeft: 12 }}>
      <table >        
        <tbody>
          {
            <>
            <Tr/>
            <Tr/>
            <Tr/>
            <Tr/>
            <Tr/>
            <Tr/>
            </>
          }
        </tbody>
      </table>
    </div>
  );
}