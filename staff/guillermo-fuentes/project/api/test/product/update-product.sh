curl -X PUT http://localhost:8080/products/6866ccaaf5287d2a66f7e89a \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODVmY2VjNjM1ZWZiNWE0ZDRiN2FjYmMiLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTc1MTU2NTEzMX0.Ibi6NA14Mj4-qnkLaX_Mw5XsLNGpiVu3yxiQOrZFR9Y' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "producto actualizado desde curl",
    "description": "descripción actualizada",
    "price": 20,
    "stock": 99,
    "image": "http://example.com/nueva-imagen.jpg",
    "providerId": "6864226628bf997541d430b2"
  }' \
  -v
