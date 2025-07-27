curl -X PATCH http://localhost:8080/orders/6884fb0e76854a7063b3f33c \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODczZjBmMTUyZWM3OWI5NTBjNzdjYzkiLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTc1MzU0NTM2NX0.FRfGBLCBRjYylViO6p1h6GtOIGHexDYdt3mtBnYov3o" \
  -H "Content-Type: application/json" \
  -d '{"newState":"completed"}'
