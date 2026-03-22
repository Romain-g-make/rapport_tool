from spire.pdf import *
from spire.pdf.common import *
import tkinter as tk

root = tk.Tk()

# Page de garde :

titleTextSubject = tk.StringVar()

targetName = tk.StringVar()
date = tk.StringVar()
classification = tk.StringVar()

# Résumé exécutif :

resumePara = "<PARAGRAPHE DE RESUME>"
targetInfo = "<QUI EST LA CIBLE DE FACONS RESUME>"
risksLevel = "<NIVEAU DE RISQUE/D'EXPOSITION>"
conclusion = "<COURTE CONCLUSION>"

# Métodologie utilisées :

sources = "<SOURCES UTILISEES>"
technique = "<TECHNIQUES APPLIQUEES>"
limitation = "<LES LIMITES DE L'ENQUETE>"

# Information sur le personne :

nom = "<NOM>"
prenom = "<PRENOM>"
pseudo = "<PSEUDO>"
email = "<EMAIL>"
phoneNumber = "<NUMERO DE TELEPHONE>"
adresse = "<ADRESSE>"
dateNaissance = "<DATE DE NAISSANCE>"
job = "<METIER>"

profilInstagram = "<INSTA>"
infoInstagram = "<INFORMATION INSTAGRAM>"
linkInstagram = "LIEN INSTA"

profilFacebook = "<FACEBOOK>"
infoFacebook = "<INFORMATION FACEBOOK>"
linkFacebook = "LIEN FACEBOOK"

profilX = "<X>"
infoX = "<INFORMATION X>"
linkX = "LIEN X"

profilLinkedin = "<LINKEDIN>"
infoLinkedin = "<INFORMATION LINKEDIN>"
linkLinkedin = "LIEN LINKEDIN"

photographie = "<PHOTOS>"

# Corrélations & Analyse :

pseudoNotUnique = "<PSEUDO REUTILISE>"
dataLeak = "<FUITE DE DONNEES>"
analyse = "<ANALYSE>"

# Conclusion :

paraConclusion = "<CONCLUSION>"

def interfaceInit() :
    root.title("Rapport Tool")
    root.geometry("600x600")
    root.config(background = "white")

    title = tk.Label(root, text="Renseignez les informations collectées :")
    title.pack()

    titleTitleTextSubject = tk.Label(root, text="Titre de l'enquete :")
    titleTitleTextSubject.pack()
    entryTitleTextSubject = tk.Entry(root, textvariable=titleTextSubject)
    entryTitleTextSubject.pack()

    titleEntryTargetName = tk.Label(root, text="Nom de la cible :")
    titleEntryTargetName.pack()
    entryTargetName = tk.Entry(root, textvariable=targetName)
    entryTargetName.pack()

    titleEntryDate = tk.Label(root, text="Date de l'enquete :")
    titleEntryDate.pack()
    entryDate = tk.Entry(root, textvariable=date)
    entryDate.pack()

    titleEntryClassification = tk.Label(root, text="Classification de l'enquete :")
    titleEntryClassification.pack()
    entryClassification = tk.Entry(root, textvariable=classification)
    entryClassification.pack()

    bouton = tk.Button(root, text="Generate PDF", command=createPdf)
    bouton.pack()


def createPdf() :
    # Create a pdf document
    pdf = PdfDocument()

    # Add a page to the PDF
    page = pdf.Pages.Add()

    # Create solid brushes
    Brush = PdfSolidBrush(PdfRGBColor(Color.get_Black()))

    # Create fonts
    titleFont = PdfFont(PdfFontFamily.Helvetica, 19.0)
    titleFontBold = PdfFont(PdfFontFamily.Helvetica, 19.0, PdfFontStyle.Bold)
    numberFont = PdfFont(PdfFontFamily.Helvetica, 12.0, PdfFontStyle.Bold)

    # Set the text alignment
    textAlignment = PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle)

    # Draw title on the page
    page.Canvas.DrawString("Rapport de Renseignement d’Origine Sources Ouvertes", titleFont, Brush, page.Canvas.ClientSize.Width / 2, 200.0, textAlignment)
    page.Canvas.DrawString(titleTextSubject.get(), titleFont, Brush, page.Canvas.ClientSize.Width / 2, 230.0, textAlignment)
    page.Canvas.DrawString(date.get(), titleFont, Brush, page.Canvas.ClientSize.Width / 2, 260.0, textAlignment)

    page.Canvas.DrawString("Nom de la cible :", titleFontBold, Brush, page.Canvas.ClientSize.Width / 5, 400.0, textAlignment)
    page.Canvas.DrawString(targetName.get(), titleFont, Brush, page.Canvas.ClientSize.Width / 2, 400.0, textAlignment)
    
    page.Canvas.DrawString("Classification :", titleFontBold, Brush, page.Canvas.ClientSize.Width / 5, 430.0, textAlignment)
    page.Canvas.DrawString(classification.get(), titleFont, Brush, page.Canvas.ClientSize.Width / 2, 430.0, textAlignment)

    page.Canvas.DrawString("1.", numberFont, Brush, page.Canvas.ClientSize.Width / 20, 750.0, textAlignment)

    # Create a rectangle where the paragraph content will be placed
    rect = RectangleF(PointF(0.0, 50.0), page.Canvas.ClientSize)

    # Set the text layout
    textLayout = PdfTextLayout()
    textLayout.Layout = PdfLayoutType.Paginate

    #Save the PDF document
    pdf.SaveToFile("CreatePDF.pdf")
    pdf.Close()

interfaceInit()

root.mainloop()