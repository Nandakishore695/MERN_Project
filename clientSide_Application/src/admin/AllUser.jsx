import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

const AllUser = () => {
    const [rowData, setRowData] = useState([]);
    const apiUrl = import.meta.env.VITE_API_LOCALHOST_URL;
    const [colDefs] = useState([{ field: "name" }, { field: "role" }, { field: "email" }, { field: "_id" }, { field: "createDate" }]);
    ModuleRegistry.registerModules([AllCommunityModule]);

    useEffect(() => {
        getMultiList();
    }, []);

    const rowSelection = useMemo(() => {
        return { mode: "multiRow" };
      }, []);

      const defaultColDef = useMemo(() => {
        return {
          flex: 1,
          editable: true,
          filter: true,
          enableCellChangeFlash: true,
        };
      }, []);

    const getMultiList = async () => {
        try {
            const apiResponse = await axios.get(`${apiUrl}/user/alluser `, { headers: { "Content-Type": "application/json" } },
                { withCredentials: true });
                setRowData(apiResponse.data.users);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (            
            <section className='container-fluid py-5 w-50' style={{ height: 500, }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    rowSelection={rowSelection}
                    defaultColDef={defaultColDef}
                />
            </section>
    )
}

export default AllUser;
