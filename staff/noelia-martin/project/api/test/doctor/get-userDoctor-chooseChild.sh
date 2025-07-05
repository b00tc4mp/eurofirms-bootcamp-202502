curl -X POST http://localhost:8080/userDoctor/self/chooseChild \
  -H "Content-Type: application/json" \
  -d '{"healthCareNumber":"AN123456789"}' -v