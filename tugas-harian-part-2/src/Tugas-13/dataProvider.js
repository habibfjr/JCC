import React from "react"
import {DataProvider} from "./dataContext.js"
import DataTable from "./dataTable"
import DataForm from "./dataForm"

const Data = () =>{
  return(
    <DataProvider>
      <DataTable/>
      <DataForm/>
    </DataProvider>
  )
}

export default Data