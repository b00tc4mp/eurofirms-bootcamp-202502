curl -X POST http://localhost:8080/orders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODczZjBmMTUyZWM3OWI5NTBjNzdjYzkiLCJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTc1MzU0NTM2NX0.FRfGBLCBRjYylViO6p1h6GtOIGHexDYdt3mtBnYov3o" \
  -d '{
    "numberOrder": "ORD-0002",
    "stateOrder": "In progress",
    "total": 10.00,
    "saleId": null,
    "currency": "EUR",
    "pagoId": null,
    "isCar": false,
    "products": [
      {
        "product": "68755a8237606761ef88b37a",
        "quantity": 2,
        "priceAtOrderTime": 5.0
      }
    ]
  }'
