# EC1 Drink — Website

Premium wellness and performance drink brand website built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (waitlist)
- **Fonts**: Cormorant Garamond, DM Sans, DM Mono (Google Fonts)
- **Icons**: Lucide React
- **Deploy**: Vercel / Netlify

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/ec1-drink.git
cd ec1-drink
npm install
```

### 2. Set up environment variables

Copy the example env file:

```bash
cp .env.local.example .env.local
```

Fill in your Supabase credentials in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 3. Set up Supabase

In your Supabase project, run this SQL to create the waitlist table:

```sql
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anonymous users (for the waitlist form)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT WITH CHECK (true);
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/
│   ├── about/page.tsx         # About page
│   ├── contact/page.tsx       # Contact page
│   ├── faq/page.tsx           # FAQ page
│   ├── flavours/page.tsx      # Flavours page
│   ├── ingredients/page.tsx   # Ingredients page
│   ├── legal/page.tsx         # Privacy Policy & Terms
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout + metadata
│   └── page.tsx               # Home page
├── components/
│   ├── sections/
│   │   ├── Benefits.tsx
│   │   ├── FlavoursPreview.tsx
│   │   ├── Hero.tsx
│   │   ├── IngredientsPreview.tsx
│   │   └── WaitlistSection.tsx
│   └── ui/
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       └── WaitlistForm.tsx
└── lib/
    └── supabase.ts            # Supabase client
```

---

## Deploying to Vercel

1. Push your code to GitHub
2. Connect your repo at [vercel.com](https://vercel.com)
3. Add environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy — Vercel auto-detects Next.js

## Deploying to Netlify

1. Push your code to GitHub
2. Connect your repo at [netlify.com](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables in Netlify dashboard
6. Deploy

---

## Customisation

- **Colours**: Edit `tailwind.config.ts` and CSS variables in `globals.css`
- **Fonts**: Update Google Fonts import in `globals.css`
- **Content**: All copy lives in the page components — search for the text you want to update
- **Contact form**: The contact form currently simulates a send. Wire it to [Resend](https://resend.com), [SendGrid](https://sendgrid.com), or similar via a Next.js API route.
- **OG image**: Replace `/public/og-image.jpg` with your actual OG image (1200×630px)

---

## Supabase Schema

```sql
-- Waitlist table
CREATE TABLE waitlist (
  id          BIGSERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL UNIQUE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
```

---

Built for **ec1drink.com** · EC1 Drink Ltd
