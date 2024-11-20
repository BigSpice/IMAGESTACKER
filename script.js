const uploadArea = document.getElementById("upload-area");
const fileInput = document.getElementById("file-input");
const imageList = document.getElementById("image-list");
const progressContainer = document.getElementById("progress-container");
const progressText = document.getElementById("progress-text");
const generatePdfBtn = document.getElementById("generate-pdf-btn");
const reorderBtn = document.getElementById("reorder-btn");

let images = [];

// Drag and Drop Handlers
uploadArea.addEventListener("click", () => fileInput.click());
uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadArea.classList.add("hover");
});
uploadArea.addEventListener("dragleave", () => uploadArea.classList.remove("hover"));
uploadArea.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadArea.classList.remove("hover");
  handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener("change", (e) => handleFiles(e.target.files));

// Handle Files
function handleFiles(files) {
  for (const file of files) {
    if (file.type.startsWith("image/") || file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = () => {
        images.push({ name: file.name, src: reader.result });
        renderImageList();
      };
      reader.readAsDataURL(file);
    }
  }
}

// Render Image List
function renderImageList() {
  imageList.innerHTML = "";
  images.forEach((image, index) => {
    const div = document.createElement("div");
    div.classList.add("image-item", "fade-in");
    div.innerHTML = `
      <span>${image.name}</span>
      <button onclick="removeImage(${index})">Remove</button>
    `;
    imageList.appendChild(div);
  });
}

// Remove Image
function removeImage(index) {
  images.splice(index, 1);
  renderImageList();
}

// Generate PDF
generatePdfBtn.addEventListener("click", async () => {
  if (images.length === 0) return alert("No images to process!");

  progressContainer.style.display = "block";
  let progress = 0;

  const pdfDoc = await PDFLib.PDFDocument.create();

  for (const image of images) {
    progress += Math.floor(100 / images.length);
    progressText.innerText = `Progress: ${progress}%`;

    const img = await pdfDoc.embedPng(image.src);
    const page = pdfDoc.addPage([img.width, img.height]);
    page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
  }

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "output.pdf";
  link.click();

  progressContainer.style.display = "none";
});
