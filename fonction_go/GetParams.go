package fonction_go

import (
	"net/http"
)

type queryParams struct {
}

func extractQueryParams(r *http.Request) queryParams {
	params := queryParams{}

	return params
}
