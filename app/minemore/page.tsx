'use client';
import Navbar from '../navbar/page';
import { Container, Typography, Paper, Grid, Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Custom TabPanel component
interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

// Add TypeScript types for the event handlers
interface TabChangeEvent extends React.SyntheticEvent {
  target: Element;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <motion.div 
      hidden={value !== index} 
      role="tabpanel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: value === index ? 1 : 0, y: value === index ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {value === index && <Box p={3}>{children}</Box>}
    </motion.div>
  );
}

export default function Minemore() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: TabChangeEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Navbar />
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" className="text-4xl font-bold text-gray-800">
          Mining Education & Resources
        </Typography>
      </motion.div>
      
      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Paper elevation={3} sx={{ mb: 4 }} className="rounded-lg shadow-lg">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            className="border-b border-gray-200"
          >
            <Tab label="Licensing Guidelines" className="hover:bg-gray-50 transition-colors" />
            <Tab label="Environmental Compliance" className="hover:bg-gray-50 transition-colors" />
            <Tab label="Mineral Royalties" className="hover:bg-gray-50 transition-colors" />
            <Tab label="FAQs" className="hover:bg-gray-50 transition-colors" />
          </Tabs>

          {/* Content Sections */}
          <TabPanel value={selectedTab} index={0}>
            <Typography variant="h5" gutterBottom className="text-2xl font-semibold text-gray-800">
              Licensing Guidelines
            </Typography>
            <Typography paragraph className="text-gray-600">
            Welcome to the Licensing Guidelines section of CeylonMine. This guide provides essential information about obtaining, renewing, and maintaining mining licenses in Sri Lanka, along with compliance requirements and best practices for responsible mining operations.
            </Typography>
          </TabPanel>

          <TabPanel value={selectedTab} index={1}>
            <Typography variant="h5" gutterBottom className="text-2xl font-semibold text-gray-800">
              Environmental Compliance
            </Typography>
            <Typography paragraph className="text-gray-600 space-y-4">
            1. Environmental Regulation<br/>
            Mining operations in Sri Lanka are subject to the following key environmental regulations:<br/>

            Environmental Impact Assessment (EIA): Required for large-scale mining projects to evaluate potential impacts and identify mitigation measures.<br/>
            National Environmental Act (NEA): Enforces pollution control, resource conservation, and biodiversity protection.<br/>
            Water Resource Management Regulations: Protects water bodies from contamination due to mining activities.<br/> 
            
          </Typography>
          </TabPanel>


          <TabPanel value={selectedTab} index={2}>
            <Typography variant="h5" gutterBottom className="text-2xl font-semibold text-gray-800">
              Mineral Royalties
            </Typography>
            <Typography paragraph className="text-gray-600 space-y-4">
              
              Mineral royalties are payments made by mining operators to the government as compensation for the extraction of natural resources. CeylonMine simplifies the calculation, tracking, and payment of mineral royalties, ensuring compliance with Sri Lankan regulations.<br/>

              1. Understanding Mineral Royalty Calculations <br/>
              Mineral royalties are typically calculated based on: <br/><br/>

              Type of Mineral Extracted: Different minerals have varying royalty rates. <br/>
              Volume or Weight of Extraction: Royalties are often assessed per ton or per unit of the extracted resource. <br/>
              Market Value: For high-value minerals, royalty rates may be a percentage of the market price. <br/>
              Formula:<br/><br/>

              <b>RoyaltyPayment = Volume × RoyaltyRate</b>

            </Typography>
          </TabPanel>

          <TabPanel value={selectedTab} index={3}>
            <Typography variant="h5" gutterBottom className="text-2xl font-semibold text-gray-800">
              Frequently Asked Questions
            </Typography>
            <Typography paragraph className="text-gray-600 space-y-4">
            <b>Question:</b> What types of mining licenses are available?<br/>
            <b>Answer:</b><br/>
            The available types of licenses include:<br/>

            <b>Exploration License:</b> For geological investigations.<br/>
            <b>Small-Scale Mining License:</b> For limited extraction activities.<br/>
            <b>Large-Scale Mining License:</b> For extensive and commercial mining operations.<br/>
            <b>Renewal License:</b> For extending the validity of existing licenses.<br/>

            </Typography>
          </TabPanel>
        </Paper>
      </motion.div>
    </Container>
  );
}