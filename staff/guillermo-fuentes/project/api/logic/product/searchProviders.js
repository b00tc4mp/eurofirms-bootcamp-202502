import { Provider, User } from "../../data/index.js";
import { NotFoundError, SystemError, validate } from "com";

export const searchProviders = (userId, query) => {
  validate.userId(userId);
  validate.query(query);

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError("mongo error");
    })
    .then((user) => {
      if (!user) throw new NotFoundError("user not found");

      return Provider.find({ name: { $regex: query, $options: "i" } })
        .select("name _id")
        .lean()
        .catch((error) => {
          throw new SystemError("mongo error");
        })
        .then((providers) => {
          providers.forEach((provider) => {
            provider.id = provider._id.toString();
            delete provider._id;
            delete provider.__v;
          });

          return providers;
        });
    });
};
