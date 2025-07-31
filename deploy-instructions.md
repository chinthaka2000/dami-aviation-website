# DAMI Aviation - Deployment Instructions

## Quick Deploy to Vercel

### Option 1: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# For production deployment
vercel --prod
```

### Option 2: GitHub Integration
1. Push code to GitHub repository
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repo
5. Configure settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Environment Variables to Add in Vercel
- `VITE_CLOUDINARY_CLOUD_NAME` = `dzz0qlqve`

## Domain Configuration

### For .lk Domain Registration
If registering `damiaviation.lk`:
1. **Check with Peak Hosting** if they support .lk domains
2. **Alternative Registrars** for .lk domains:
   - LK Domain Registry (official)
   - Namecheap
   - GoDaddy
   - Domain.com

### DNS Records Configuration
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A  
Name: @
Value: 76.76.19.61
```

### Benefits of damiaviation.lk
- Perfect for Sri Lankan market targeting
- Professional and brandable
- Better local SEO performance
- Cost-effective option
- Memorable and relevant to aviation industry

### Suggested Domain Names
- damiaviation.lk (Recommended - Sri Lankan market)
- damiaviation.com
- damiaviation.in
- damitraining.com
- damicabincrew.com
- damiaviation.academy

## Post-Deployment Checklist
- [ ] Test all pages load correctly
- [ ] Verify images from Cloudinary work
- [ ] Check responsive design on mobile
- [ ] Test contact forms
- [ ] Verify WhatsApp integration works
- [ ] Check all navigation links
- [ ] Test scroll animations
- [ ] Verify SSL certificate is active

## Useful Commands
```bash
# Build locally to test
npm run build

# Preview build locally
npm run preview

# Check for build errors
npm run lint
```