import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

document.getElementById("generatePdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;

  // Initialize PDF (A4, portrait, millimeters)
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // ===== TEXT & STYLING =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(242, 92, 63); // RGB values
  doc.text("Hello World PDF", 20, 30);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text("This PDF was generated with jsPDF in the browser.", 20, 45);

  // ===== DRAWING A CARD (Rectangle + Text) =====
  doc.setDrawColor(200, 200, 200);
  doc.setFillColor(248, 249, 250);
  doc.roundedRect(20, 55, 170, 30, 3, 3, "FD"); // x, y, width, height, rx, ry, style

  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text("This is a card component — a rectangle with text inside.", 30, 72);

  // ===== ADDING AN IMAGE =====
  // Use a base64 string or URL (must be same-origin or CORS-enabled)
  const logoBase64 = "data:image/png;base64,..."; // Your base64 image
  doc.addImage(logoBase64, "PNG", 20, 95, 40, 15);

  // ===== TABLE WITH AUTOTABLE =====
  doc.autoTable({
    startY: 100,
    head: [["Name", "Email", "Role"]],
    body: [
      ["Alice", "alice@example.com", "Developer"],
      ["Bob", "bob@example.com", "Designer"],
      ["Charlie", "charlie@example.com", "Manager"],
    ],
    headStyles: { fillColor: [242, 92, 63] },
    margin: { left: 20, right: 20 },
  });

  // ===== ADDING A NEW PAGE =====
  doc.addPage();

  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text("Page 2: Additional Content", 20, 30);

  doc.setFontSize(12);
  doc.text("Use doc.addPage() to create multi-page documents.", 20, 45);

  // ===== DRAWING LINES =====
  doc.setDrawColor(242, 92, 63);
  doc.setLineWidth(0.5);
  doc.line(20, 55, 190, 55); // x1, y1, x2, y2

  // Save the PDF
  doc.save("hello-world.pdf");
});