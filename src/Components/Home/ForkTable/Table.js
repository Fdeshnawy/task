import React, { useMemo } from "react";
import DataTable , {  } from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import RowHeader from "./RowHeader";

import './Table.css'
const Table = props => {
  
  const columns = [
  
    
    {
      name: "Name",
      selector: "name",
      sortable: true,
      grow: 2
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      hide: "sm"
    },
    {
      name: "User Name",
      selector: "website",
      sortable: true
    },
    {
      name: "Status",
      selector: "company.name",
      sortable: true,
      hide: "md"
    },
    {
      name: "Created on",
      selector: "address.city",
      sortable: true,
      hide: "md"
    },
    
  ];


  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  // const filteredItems = props.data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );

  // const filteredItems = props.data.filter(
  //   item =>
  //     JSON.stringify(item.name)
  //       .toLowerCase()
  //       .indexOf(filterText.toLowerCase()) !== -1
  // );

  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
      
    };

    return (
     <div className="row--header">
      <FilterComponent className="pt-2"
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
        
      />
      <RowHeader />


     </div>
     
      
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div className="d--tables">
      
    <DataTable

      title=""
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
      selectableRows
    />
    </div>
  );
};

export default Table;
