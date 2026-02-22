import * as React from 'react';
import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';
import AboutMeSection from '@/components/sections/AboutMeSection';
import { getBreadcrumbSchema } from '@/utils/schemas';


export const metadata: Metadata = {
  title: 'About Us - Zen Analytics',
  description: 'Learn about the Zen Analytics team and our mission to simplify digital analytics debugging with a unified, cross-platform inspector.',
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "About Us", item: "/about" }
          ]))
        }}
      />
      <AboutContent>
        <AboutMeSection />
      </AboutContent>
    </>
  );
}
