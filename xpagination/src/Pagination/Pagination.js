import React, { useEffect,useState } from "react";
import PaginationTable from "./PaginationTable";
import axios from "axios";
import Pages from "./Pages";
const Pagination = () => {
    const[tableData,setTableData]=useState([]);
    const[currentPage,setCurrentPage]=useState(1);
    const dataPerPage=10;
    const lastIndex=currentPage*dataPerPage;
    const firstIndex=lastIndex-dataPerPage;
    useEffect(() => {
        const getTableData = async () => {
            try {
                const response = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
                 setTableData(response.data);
                console.log(response.data);
            }
            catch (err) {
                alert("failed to fetch data",err);
            }
        }
        getTableData();
    },[])
    const tableDataPerPage=tableData.slice(firstIndex,lastIndex);
    return (<>
    <h1>Employee Data Table</h1>
    <PaginationTable tableData={tableDataPerPage}/>
    <Pages tableData={tableData} dataPerPage={dataPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>)
}
export default Pagination;