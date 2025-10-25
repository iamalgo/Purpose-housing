# Purpose Housing Management Solutions

A modern, elegant website for Purpose Housing Management Solutions - connecting veterans and seniors with safe, affordable housing while providing landlords with guaranteed peace of mind.

## 🏠 About

Purpose Housing Management Solutions serves:
- Veterans (HUD-VASH participants welcome)
- Seniors 55+
- Low-income households

Located in Dothan, AL, we provide comprehensive property management with smart technology integration.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend
- **Deployment**: Vercel
- **Forms**: React Hook Form
- **Icons**: Lucide React

## 📋 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/iamalgo/Purpose-housing.git
cd Purpose-housing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase Database

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to SQL Editor and run these commands:

```sql
-- Housing Applications Table
CREATE TABLE housing_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  housing_type TEXT NOT NULL,
  move_in_date DATE NOT NULL,
  hud_vash TEXT NOT NULL,
  additional_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Landlord Applications Table
CREATE TABLE landlord_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_address TEXT NOT NULL,
  unit_count TEXT NOT NULL,
  property_type TEXT NOT NULL,
  availability_date DATE NOT NULL,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Messages Table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE housing_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE landlord_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies to allow inserts
CREATE POLICY "Allow public inserts" ON housing_applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON landlord_applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON contact_messages
  FOR INSERT WITH CHECK (true);
```

4. Get your Supabase credentials:
   - Go to Project Settings > API
   - Copy the `Project URL` and `anon public` key

### 4. Set Up Resend for Emails

1. Go to [resend.com](https://resend.com) and sign up (100 emails/day free)
2. Create an API key
3. Verify your domain or use their test domain

### 5. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Resend (for email notifications)
RESEND_API_KEY=your_resend_api_key

# Contact Email
CONTACT_EMAIL=adriennew@limyefoundation.org
```

### 6. Add Logo to Public Folder

1. Create a `public` folder in the root directory
2. Save your logo as `public/logo.png`
3. Or update the image URL in the components to use your hosted logo

### 7. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website!

## 📁 Project Structure

```
src/
├── app/
│   ├── api/              # API routes for forms
│   ├── housing/          # Housing application page
│   ├── landlords/        # Landlord partnership page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/
│   ├── home/             # Homepage sections
│   ├── housing/          # Housing components
│   ├── landlords/        # Landlord components
│   ├── Navigation.tsx    # Header navigation
│   └── Footer.tsx        # Footer
```

## 🎨 Design System

### Colors
- **Gold**: `#D4AF37` (primary accent)
- **Black**: `#1A1A1A` (text)
- **Charcoal**: `#2D2D2D` (backgrounds)
- **White**: `#FFFFFF` (backgrounds, text)

### Fonts
- **Display**: Playfair Display (headings)
- **Body**: Inter (paragraphs, UI)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables in Vercel dashboard
6. Deploy!

Vercel will automatically deploy on every push to main branch.

## 📝 Features

### For Residents
- ✅ Shared & Private room options
- ✅ Affordable pricing ($650-$850/month)
- ✅ Smart home technology
- ✅ Online application
- ✅ HUD-VASH support

### For Landlords
- ✅ Guaranteed rent payments
- ✅ $500 damage protection
- ✅ Full property management
- ✅ Smart technology integration
- ✅ Digital management portal
- ✅ Up to 2 months rent advance

## 🤝 Support

For questions or support:
- **Phone**: 205-523-6459
- **Email**: adriennew@limyefoundation.org
- **Address**: 212 W Troy St, Dothan, AL 36303

## 📄 License

© 2024 Purpose Housing Management Solutions. All rights reserved.

---

Built with ❤️ for veterans, seniors, and families in need.
