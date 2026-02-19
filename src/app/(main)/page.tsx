import Box from '@mui/material/Box';

// Import layout components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import section components
import Hero from '@/components/sections/Hero';
import ComparisonTable from '@/components/sections/comparison-table';
import Features from '@/components/sections/Features';
import BrowserSupport from '@/components/sections/BrowserSupport';
import Carousel from '@/components/sections/Carousel';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />
        <ComparisonTable />
        <Features />
        <Carousel />
        <BrowserSupport />
        <FAQ />
      </Box>

      <Footer />
    </Box>
  );
}
