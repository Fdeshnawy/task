import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import { Link, withRouter } from "react-router-dom";
import FilterComponent from "../Home/ForkTable/FilterComponent";
import OffcanvasMenu from "react-offcanvas-menu-component";
import "./Menu.css";

import ShowList from "./ShowList";
function Menu(props) {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = props.navigate.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handle = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
  }, [filterText, resetPaginationToggle]);
  return (
    <OffcanvasMenu
      Link={Link}
      location={props.location}
      config={{
        push: true,
      }}
      menu={[]}
      header={
        <>
          <div>
            <img
              src={props.logo}
              alt="logo"
              width="150"
              height="100"
              style={{ display: "block" }}
            />
			
            <FilterComponent
              className="pt-2"
              onFilter={(e) => setFilterText(e.target.value)}
              filterText={filterText}
           
            />
          </div>

          <ShowList
            navigate={filteredItems}
            subHeaderComponent={subHeaderComponent}
          />
        </>
      }
    />
  );
}

export default withRouter(Menu);
