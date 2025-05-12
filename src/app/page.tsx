'use client'; // Add this directive for client-side interactivity

import { DateProposal } from '@/components/DateProposal';

// Metadata is not used here as it's a client component, but defined in layout.tsx

export default function Home() {
  return (
    <main>
      <DateProposal />
    </main>
  );
}
