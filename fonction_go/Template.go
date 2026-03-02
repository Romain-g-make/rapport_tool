package fonction_go

import (
	"html/template"
	"log"
	"net/http"
)

func RenderTemplate(w http.ResponseWriter, r *http.Request) {

	params := extractQueryParams(r)

	if err := tmpl.Execute(w, data); err != nil {
		handleError(w, "Erreur lors de l'exécution du template", http.StatusInternalServerError, err)
		return
	}
}

func handleError(w http.ResponseWriter, message string, statusCode int, err error) {
	http.Error(w, message, statusCode)
	if err != nil {
		log.Printf("%s: %v", message, err)
	}
}
