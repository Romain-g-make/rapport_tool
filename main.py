from fpdf import FPDF

pdf = FPDF()

pdf.add_page()
pdf.set_font("Arial", size=16)

pdf.cell(22, 10, txt="Ceci est un test", align="C")

pdf.output("test.pdf")