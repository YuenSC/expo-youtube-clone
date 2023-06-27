import { faker } from "@faker-js/faker";

const createRandomUser = () => {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

export const users = Array.from({ length: 10 }, createRandomUser);

export const currentUser = users[0];
