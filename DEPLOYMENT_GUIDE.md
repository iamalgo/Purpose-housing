# Purpose Housing - Complete Deployment Guide

## 🎯 Quick Start Checklist

- [ ] GitHub repository created
- [ ] Supabase account & database configured
- [ ] Resend account & API key obtained
- [ ] Environment variables configured
- [ ] Logo added to project
- [ ] Vercel deployment configured

---

## 📦 Step 1: Push to GitHub

```bash
# Initialize git in your project folder
cd purpose-housing
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Purpose Housing website"

# Connect to your GitHub repo
git remote add origin https://github.com/iamalgo/Purpose-housing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🗄️ Step 2: Supabase Database Setup

### Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in:
   - Name: `purpose-housing`
   - Database Password: (generate strong password)
   - Region: Choose closest to Dothan, AL (US East recommended)
4. Wait 2-3 minutes for project creation

### Run SQL Schema

1. Go to SQL Editor in Supabase dashboard
2. Click "New Query"
3. Copy and paste this entire SQL script:

```sql
-- ============================================
-- Purpose Housing Database Schema
-- ============================================

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

-- Enable Row Level Security
ALTER TABLE housing_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE landlord_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public inserts
CREATE POLICY "Allow public inserts" ON housing_applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON landlord_applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public inserts" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX idx_housing_apps_created ON housing_applications(created_at DESC);
CREATE INDEX idx_landlord_apps_created ON landlord_applications(created_at DESC);
CREATE INDEX idx_contact_msgs_created ON contact_messages(created_at DESC);
```

4. Click "Run" to execute
5. Verify tables were created in Table Editor

### Get Supabase Credentials

1. Go to Project Settings → API
2. Copy these values:
   - **Project URL** (starts with https://)
   - **anon public key** (long string starting with eyJ...)

---

## 📧 Step 3: Resend Email Setup

### Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up with email
3. Verify your email address

### Get API Key

1. Go to "API Keys" in dashboard
2. Click "Create API Key"
3. Name it: `Purpose Housing Production`
4. Copy the API key (starts with `re_...`)

### Domain Setup (Optional but Recommended)

**Option A: Use Test Domain (Quick Start)**
- Resend provides `onboarding@resend.dev` for testing
- Emails work but go to spam folder
- Good for initial testing

**Option B: Verify Custom Domain (Production)**
1. Add your domain in Resend dashboard
2. Add DNS records provided by Resend
3. Wait for verification (15-60 minutes)
4. Update email `from` field in API routes

---

## 🚀 Step 4: Vercel Deployment

### Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import `iamalgo/Purpose-housing` repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next

### Add Environment Variables

In Vercel project settings → Environment Variables, add:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_EMAIL=adriennew@limyefoundation.org
```

**Important**: Click "All Environments" checkbox for each variable!

### Deploy

1. Click "Deploy"
2. Wait 2-3 minutes
3. Get your live URL: `https://purpose-housing.vercel.app`

---

## 🎨 Step 5: Add Your Logo

### Option A: Use Hosted Logo (Current Setup)
The logo is currently hosted and will work automatically.

### Option B: Host Logo in Project
```bash
# Create public folder
mkdir -p public

# Copy your logo
cp /path/to/your/logo.png public/logo.png

# Update Navigation.tsx and Footer.tsx
# Change image src from:
# "https://page.gensparksite.com/v1/base64_upload/..."
# To:
# "/logo.png"

# Commit and push
git add public/logo.png
git commit -m "Add logo file"
git push
```

Vercel will automatically redeploy.

---

## ✅ Step 6: Testing

### Test Each Form

1. **Housing Application**
   - Go to: `your-domain.com/housing`
   - Fill out form
   - Submit
   - Check Supabase Table Editor for entry
   - Check email for notification

2. **Landlord Application**
   - Go to: `your-domain.com/landlords`
   - Fill out form
   - Submit
   - Verify in Supabase

3. **Contact Form**
   - Go to: `your-domain.com/contact`
   - Fill out form
   - Submit
   - Verify in Supabase

### Test All Pages

- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] All images display
- [ ] Forms submit successfully
- [ ] Mobile responsive design works
- [ ] No console errors

---

## 🔧 Troubleshooting

### Forms Not Submitting

**Check:**
1. Environment variables are set in Vercel
2. Supabase tables were created
3. Row Level Security policies are active
4. Browser console for error messages

**Fix:**
```bash
# View logs in Vercel
vercel logs <your-deployment-url>
```

### Email Not Sending

**Check:**
1. Resend API key is valid
2. `from` email domain is verified (or use test domain)
3. Check Resend dashboard for logs

**Temporary workaround:**
- Emails still save to database
- Check Supabase to see submissions

### Database Connection Error

**Check:**
1. Supabase URL is correct (includes `https://`)
2. Anon key is the correct one (not service key)
3. Project is not paused (free tier pauses after 7 days inactivity)

---

## 📊 Monitoring & Maintenance

### View Form Submissions

**Supabase Dashboard:**
1. Go to Table Editor
2. Select table
3. View all submissions
4. Export as CSV if needed

### Check Email Delivery

**Resend Dashboard:**
1. Go to "Logs"
2. See delivery status
3. Debug failed emails

### Monitor Site Performance

**Vercel Dashboard:**
1. View deployment logs
2. Check analytics
3. Monitor errors

---

## 🎯 Next Steps

### After Launch

1. **Custom Domain**
   - Buy domain (GoDaddy, Namecheap)
   - Connect to Vercel
   - Update Resend domain

2. **SEO Optimization**
   - Submit sitemap to Google
   - Add meta descriptions
   - Set up Google Business Profile

3. **Analytics**
   - Add Google Analytics
   - Track form conversions
   - Monitor user behavior

4. **Additional Features**
   - Add testimonials page
   - Create blog
   - Add chat support

---

## 🆘 Need Help?

### Common Issues & Solutions

**Issue**: "Module not found" error
- **Solution**: Run `npm install` and redeploy

**Issue**: Database permission denied
- **Solution**: Check RLS policies in Supabase

**Issue**: Images not loading
- **Solution**: Verify image URLs in next.config.js domains

### Support Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)

---

## 📞 Contact

Questions about deployment?
- Email: adriennew@limyefoundation.org
- Phone: 205-534-8492

---

**Congratulations! Your Purpose Housing website is now live! 🎉**
