# 🖼️ Image Usage Guide

## Quick Reference

### Available Images

```
/public/images/
├── logo.png              # Main logo (use this)
├── logo.jpeg             # Alternative logo
├── hero-bg.jpg           # Homepage hero background
├── og-image.jpg          # Social media preview
├── project-1.jpg         # Industrial solar
├── project-2.jpg         # Commercial solar
├── project-3.jpg         # Residential solar
├── project-4.jpg         # Rooftop installation
├── project-5.jpg         # Hospital/Commercial
├── project-6.jpg         # School/Campus
├── project-7.jpg         # Manufacturing unit
├── project-8.jpg         # Shopping mall
├── project-9.jpg         # Residential complex
└── project-10.jpg        # Corporate office
```

---

## How to Use Images

### 1. In Components (Recommended)

```typescript
import Image from 'next/image';

<Image 
  src="/images/logo.png" 
  alt="Balaji Entrepreneurs" 
  width={200} 
  height={200}
  priority // for above-the-fold images
/>
```

### 2. As Background Image

```typescript
<div style={{
  backgroundImage: "url('/images/hero-bg.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
  {/* Content */}
</div>
```

### 3. Regular img Tag

```typescript
<img 
  src="/images/project-1.jpg" 
  alt="Solar Installation" 
  style={{ width: '100%', borderRadius: '12px' }}
/>
```

---

## Adding New Images

### Step 1: Add Image File
Place your image in `/public/images/` folder:
```
/public/images/new-project.jpg
```

### Step 2: Use in Code
```typescript
<img src="/images/new-project.jpg" alt="Description" />
```

### Step 3: Optimize (Optional)
- Compress images before adding
- Recommended size: < 200KB
- Use JPG for photos, PNG for logos

---

## Image Optimization Tips

### 1. Use Next.js Image Component
```typescript
import Image from 'next/image';

// Automatic optimization
<Image 
  src="/images/project-1.jpg"
  alt="Project"
  width={800}
  height={600}
  quality={85} // 1-100
  placeholder="blur" // optional
/>
```

### 2. Lazy Loading
```typescript
<Image 
  src="/images/project-1.jpg"
  alt="Project"
  width={800}
  height={600}
  loading="lazy" // loads when visible
/>
```

### 3. Priority Loading
```typescript
// For hero/above-the-fold images
<Image 
  src="/images/hero-bg.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority // loads immediately
/>
```

---

## Current Usage

### Logo
- **Navbar:** `/images/logo.png`
- **Footer:** `/images/logo.png`
- **Homepage card:** `/images/logo.png`

### Homepage
- **Hero background:** `/images/hero-bg.jpg`
- **Services:** `project-1.jpg`, `project-2.jpg`, `project-3.jpg`
- **Projects:** `project-4.jpg`, `project-5.jpg`, `project-6.jpg`

### Projects Page
- All 10 project images (`project-1.jpg` through `project-10.jpg`)

### Gallery Page
- All 10 project images distributed across categories

### Blog Page
- `project-2.jpg`, `project-3.jpg`, `project-4.jpg`

### About Page
- `project-1.jpg`

---

## Best Practices

### 1. Always Add Alt Text
```typescript
// ✅ Good
<img src="/images/logo.png" alt="Balaji Entrepreneurs Logo" />

// ❌ Bad
<img src="/images/logo.png" />
```

### 2. Use Descriptive Names
```typescript
// ✅ Good
residential-solar-panel.jpg
commercial-rooftop-installation.jpg

// ❌ Bad
img1.jpg
photo.jpg
```

### 3. Optimize Before Upload
- Compress images (use TinyPNG, ImageOptim)
- Target: < 200KB per image
- Use appropriate format (JPG for photos, PNG for logos)

### 4. Responsive Images
```typescript
<Image 
  src="/images/project-1.jpg"
  alt="Project"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## Troubleshooting

### Image Not Loading?
1. Check file path: `/images/filename.jpg` (not `/public/images/`)
2. Check file name (case-sensitive)
3. Restart dev server: `npm run dev`

### Image Too Large?
1. Compress the image
2. Use Next.js Image component for automatic optimization
3. Set quality prop: `quality={75}`

### Blurry Image?
1. Use higher resolution source
2. Increase quality: `quality={90}`
3. Check image dimensions match display size

---

## Quick Commands

```bash
# Start frontend
cd balaji-frontend
npm run dev

# Build for production
npm run build

# Check image optimization
npm run build
# Look for "Image Optimization" in output
```

---

**All your images are now local and optimized!** 🎉
