# Interactive Date Proposal App

A fun, interactive web application built with Next.js that presents a creative way to ask someone out on a date. Features include:

- Animated "No" button that escapes when the user tries to click it
- Confetti celebration when the user clicks "Yes"
- WhatsApp integration to plan the date
- Responsive design for all device sizes
- Loading animations and smooth transitions

![Date Proposal Demo](https://media1.tenor.com/m/UAFrdZCt29YAAAAC/milk-and-mocha-waiting-for-reply.gif)

## Technologies Used

- **Next.js 15** with App Router
- **React 19** with Hooks
- **TypeScript** for type safety
- **CSS** with responsive design
- **Canvas Confetti** for celebration effects
- **Vercel Speed Insights** for performance monitoring
- **Geist Font** for modern typography

## Project Structure

- `src/app` - Next.js app router files
- `src/components` - React components
  - `ui/` - Reusable UI components
  - `DateProposal.tsx` - Main date proposal component
- `src/hooks` - Custom React hooks
  - `useEscapingButton.ts` - Logic for the escaping button
  - `useConfetti.ts` - Confetti animation trigger
- `public` - Static assets including GIFs and backgrounds

## Getting Started

First, install dependencies:

```bash
# With npm
npm install

# Or with Yarn
yarn 

# Or with bun
bun install
```

Then, run the development server:

```bash
# With npm
npm run dev

# Or with Yarn
yarn dev

# Or with bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Features

### Escaping "No" Button
When a user tries to click "No", the button moves to a random position on the screen, making it difficult (but not impossible) to decline.

### Confetti Celebration
When the user clicks "Yes", a multi-stage confetti animation celebrates the acceptance.

### WhatsApp Integration
After accepting, users can directly click to start a WhatsApp conversation to plan the date.

## Customization

You can customize the application by:
- Changing the GIFs in the `/public` folder
- Modifying the text in `DateProposal.tsx`
- Adjusting the WhatsApp message in the component
- Updating colors and styling in `globals.css`

## Deployment

The easiest way to deploy this app is using [Vercel](https://vercel.com/new).

## License

This project is open source and available for personal use.
