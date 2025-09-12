# Venusiana Boutique Website

## 🌸 About
This is the official website for Venusiana Boutique, located in Menaggio, Lake Como. The site showcases the boutique's unique and vibrant fashion collection inspired by independent artistic designs.

## 🚀 Deployment
This is a static HTML website that can be deployed on any static hosting service like Netlify, Vercel, or GitHub Pages.

### Environment Variables
If your hosting platform requires Cloudinary configuration (for image optimization), set the following environment variable:

```
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
```

For development, copy `.env.example` to `.env` and update with your values:
```bash
cp .env.example .env
```

### Netlify Deployment
The site is configured for Netlify deployment with `netlify.toml`. No build step is required as this is a static HTML site.

## 📁 Structure
- `index.html` - Main homepage
- `gallery.html` - Fashion gallery page  
- `styles.css` - Stylesheet
- `image1.jpg` - `image6.jpg` - Gallery images
- `whatsapp.png` - WhatsApp contact icon

## 🛠️ Troubleshooting

### Cloudinary Error
If you encounter the error "A Cloudinary Cloud Name is required", ensure the `CLOUDINARY_CLOUD_NAME` environment variable is set. This can happen if your hosting platform has image optimization plugins enabled.

The site works perfectly without Cloudinary - it's only needed if you want to use advanced image optimization features.

## 📞 Contact
Visit us at: Via al Lago, 15, 22017 Menaggio CO, Italy  
Phone: +39 0344 040640  
WhatsApp: +39 333 3670960