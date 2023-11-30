import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import Packages from "./OurPackages/Packages";
import TourGuides from "./TourGuides/TourGuides";
import OverView from "./Overview/OverView";

const TravelGuide = () => {
  // const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  // const initialIndex = categories.indexOf(categories);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-Rancho text-center my-5 md:my-10 bg-gradient-to-t from-[#FFA828] to-[#FF4804] text-transparent bg-clip-text">
          Tourism and Travel Guide
        </h1>
      </div>
      <div className="px-5 lg:px-0">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="flex justify-center my-2">
            <TabList>
              <Tab><h1 className="md:text-2xl font-medium font-Rancho">Overview</h1></Tab>
              <Tab><h1 className="md:text-2xl font-medium font-Rancho">Our Packages</h1></Tab>
              <Tab><h1 className="md:text-2xl font-medium font-Rancho">Meet Our Tour Guides</h1></Tab>
            </TabList>
          </div>
          <div className="border-2 rounded-2xl shadow-xl p-5 md:p-10 min-h-[500px]">
          <TabPanel>
            <OverView></OverView>
          </TabPanel>
          <TabPanel>
            <Packages></Packages>
          </TabPanel>
          <TabPanel>
            <TourGuides></TourGuides>
          </TabPanel>
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default TravelGuide;
