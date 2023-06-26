import { faker } from "@faker-js/faker";

const createRandomVideos = () => {
  return {
    id: faker.string.uuid(),
    imageUrl: faker.image.url(),
    authorImageUrl: faker.image.avatar(),
    title: faker.lorem.sentence(30),
    author: faker.internet.userName(),
    viewCount: faker.number.int({ max: 100_000_000, min: 0 }),
    createAt: faker.date.past().toISOString(),
  };
};

export const videos = Array.from({ length: 10 }, createRandomVideos);
export type IVideo = (typeof videos)[0];
