fetch("http://localhost:8080/users/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: '{"username":"dragon","password":"123123123"}'
})
  .catch((error) => {
    throw new Error("conection error");
  })
  .then((response) => {
    const { status } = response;

    if (status === 200)
      return response.json()
        .catch((error) => {
          throw new Error("json error");
        })
        .then((userId) => userId);

    return response.json()
      .catch((error) => {
        throw new Error("json error");
      })
      .then(body => {
        const { error, message } = body;

        throw new Error(message);
      });
  })
  .then((userId) => console.log("user authenticated", userId))
  .catch((error) => console.log(error));
