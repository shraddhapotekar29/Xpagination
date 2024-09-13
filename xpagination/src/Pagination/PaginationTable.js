import React from "react";
import style from "./Pagination.module.css"
const PaginationTable=({tableData})=>{
    return(<div style={{marginLeft:"2rem",marginRight:"2rem"}}>
    <table border={"1px solid #d7dbdd"}  width="100%" className={style.table}>
        <thead>
        <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
        </tr>
        </thead>
        <tbody>
        {tableData.map((table)=>(
        <tr key={table.id}>
        <td>{table.id}</td>
        <td>{table.name}</td>
        <td>{table.email}</td>
        <td>{table.role}</td>
        </tr>))}
        </tbody>
    </table>
    </div>)
}
export default PaginationTable;