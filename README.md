# Data Science Club Website

This is the official website for the UWA Data Science Club.  
Built with **Next.js + TailwindCSS**, it showcases upcoming events, club information, and more.

---

## Running the Website Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later  
- npm or yarn

### Install dependencies
```bash
npm install
```
or
```bash
yarn install
```

### Run development server
```bash
npm run dev
```
Now open [http://localhost:3000](http://localhost:3000) in your browser.


---

## Updating the Events Section

All events are stored inside:
```
components/EventsSection.tsx
```

Each event is an object in the `events` array, with this format:

```ts
{
  id: number,                        // unique ID for the event
  title: string,                     // name of the event
  date: "YYYY/MM/DD",                // event date (e.g. "2025/09/18")
  time: string,                      // event time (e.g. "5:00 PM")
  location: string,                  // event location
  description: string,               // short description (1–3 sentences)
  image: string,                     // image URL or /public path
  price: string,                     // e.g. "$0", "$5"
  category: "Workshop" | "Competition" | "Panel" | "Social",
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels",
  featured: boolean,                 // true = highlight with "Featured" badge
  registrationUrl: string            // registration link
}
```

### Example
```ts
{
  id: 3,
  title: "Data Science Careers Panel",
  date: "2025/10/05",
  time: "6:00 PM",
  location: "EZONE UWA Theatre",
  description: "Hear from industry experts about the future of data science careers and how to break into the field.",
  image: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
  price: "$0",
  category: "Panel",
  level: "All Levels",
  featured: true,
  registrationUrl: "https://your-registration-link.com"
}
```

### Notes
- **Date format must be `"YYYY/MM/DD"`** so the formatter works correctly.  
- Use images from `/public` or external links (Unsplash, Pexels, etc.).  
- Categories and levels must match the predefined options to display with correct styling.  
- Adding more than 6 events will automatically show a **“Load More Events”** button.  


## Contributing

- Fork the repo & make changes in a new branch.  
- Test locally with `npm run dev`.  
- Submit a pull request for review.  

---

Maintained by the UWA Data Science Club
