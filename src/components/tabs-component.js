import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React from "react";
import Basic from "../components/drag-component";

function Category() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
          <Tab>Title 4</Tab>
          <Tab>Title 5</Tab>
        </TabList>

        <TabPanel>
          <h2>
            <Basic />
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            <Basic />
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            <Basic />
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            <Basic />
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>
            <Basic />
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Category;
