import React from "react";
const Pages=({setCurrentPage,currentPage,tableData,dataPerPage})=>{
    let pages=Math.ceil(tableData.length/dataPerPage);
const prevPage=()=>{
    if(currentPage>1)
    {
        setCurrentPage(currentPage-1)
    }
}
const nextPage=()=>{
    if(currentPage>=1 && currentPage<pages)
    setCurrentPage(currentPage+1)
}
    return(<div style={{marginTop:"1rem"}}>

    <button onClick={prevPage} style={{backgroundColor:" darkcyan",marginRight:"1rem",width:"80px",height:"25px"}}>Previous</button>
    <button style={{backgroundColor:" darkcyan",width:"30px",height:"30px"}}>{currentPage}</button>
    <button onClick={nextPage} style={{backgroundColor:" darkcyan",marginLeft:"1rem",width:"80px",height:"25px"}}>Next</button>
    </div>)
}
export default Pages;