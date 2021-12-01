import React from 'react';
import DataTable from "react-data-table-component";
const CustomTable = ({ columns, data, pending }) => {
    const customStyles = {
        headRow: {
            style: {
                // border: "2px solid blue",
                borderBottom: "2px solid black",
            },
        },
        headCells: {
            style: {
                fontSize: "17px",
                fontWeight: "600",
            },
        },
        rows: {},
    };
    return (
        <>
          <DataTable
            columns={columns}
            data={data}
            // pagination
            progressPending={pending}
            fixedHeader={true}
            fixedHeaderScrollHeight={"500px"}
            // theme="dark"
            title="Upcoming/Ongoing Contests 👇"
            striped
            customStyles={customStyles}
          />
        </>
      );
    };
    
    export { CustomTable };
    