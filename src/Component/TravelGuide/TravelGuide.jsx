import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const TravelGuide = () => {
  // const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  // const initialIndex = categories.indexOf(categories);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-4xl font-Rancho text-center my-10">
          Tourism and Travel Guide
        </h1>
      </div>
      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="flex justify-center my-2">
            <TabList>
              <Tab>Overview</Tab>
              <Tab>Our Packages</Tab>
              <Tab>Meet Our Tour Guides</Tab>
            </TabList>
          </div>
          <TabPanel>
            <h1>arman</h1>
          </TabPanel>
          <TabPanel>
            <h1>abir</h1>
          </TabPanel>
          <TabPanel>
            <h1>ariyan</h1>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default TravelGuide;
