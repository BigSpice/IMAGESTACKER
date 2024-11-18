# IMAGESTACKER

A browser-based tool that converts images to PDF with professional headers. Built with vanilla JavaScript and runs entirely in your browser - no server required!

![image](https://github.com/user-attachments/assets/5f9fea4d-b60c-41ca-974d-958ff21f4d7f)


## Features

- 🖼️ Drag-and-drop image upload
- 📄 Automatic A4 page formatting
- 📑 Professional black header with filename
- 🔄 Smart image rotation and scaling
- 👀 Live image preview
- 💾 Client-side processing
- 📱 Mobile-friendly interface

## Live Demo

Visit [IMAGESTACKER](https://bigspice.github.io/IMAGESTACKER) to try it out!

## How to Use

### 1. Upload Images

![image](https://github.com/user-attachments/assets/beb0b7ec-456a-427a-9628-3a1a1aa629a0)

Two ways to upload:
- Drag and drop images directly onto the drop zone
- Click "Select Files" to choose images from your device

### 2. Preview

![image](https://github.com/user-attachments/assets/ce17781a-6266-4bd0-8b54-c6488cf90f94)

- View thumbnails of selected images
- Remove unwanted images by clicking the 'X' button
- See the filename that will appear in the header

### 3. Set PDF Name

![image](https://github.com/user-attachments/assets/361222f6-9f29-4b70-9730-d2459404c17e)

- Enter your desired PDF filename
- The '.pdf' extension will be added automatically

### 4. Convert and Download

![image](https://github.com/user-attachments/assets/478a4eab-deeb-4506-a4fa-61a6ecc5f075)

- Click "Convert to PDF" button
- Watch the progress bar
- PDF will download automatically when complete

## Output Format

Each page of the generated PDF includes:
- Black header bar with centered filename
- "MARKED" watermark in top-right corner (5pt font)
- Optimally sized and rotated image
- A4 page format

![image](https://github.com/user-attachments/assets/984560d0-486d-423d-b558-72b1037f525c)

## Installation

### Option 1: GitHub Pages (Recommended)

1. Fork this repository
2. Go to Settings > Pages
3. Set source to main branch
4. Your site will be published to `https://[your-username].github.io/image-to-pdf-converter`

### Option 2: Local Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/image-to-pdf-converter.git
```

2. Open `index.html` in a modern web browser

## Technical Details

### Libraries Used

- **PDF-Lib** (v1.17.1) - PDF generation
- **FileSaver.js** (v2.0.5) - File downloading

### Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Limitations

- Maximum PDF size depends on browser memory
- Processing large images may take some time
- Font selection limited to browser defaults

### File Structure

```
├── index.html    # Main application
├── README.md     # This file
└── LICENSE       # License file
```

### Local Development

1. Clone the repository
2. Make changes to `index.html`
3. Refresh browser to see changes

## Support

If you encounter any issues or have questions:
1. Check existing GitHub issues
2. Create a new issue with:
   - Browser version
   - Steps to reproduce
   - Expected behavior
   - Actual behavior

## Roadmap

- [ ] Add image reordering
- [ ] Support for custom header styles
- [ ] Batch processing improvements
- [ ] Custom page size options
- [ ] Save processing preferences

---

Made with ❤️ by Juicy
