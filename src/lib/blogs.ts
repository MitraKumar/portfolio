export type Blog = {
  id: number;
  description: string;
  url: string;
};
const blogs: Blog[] = [
  {
    id: 1,
    description:
      "Using markdown to manage content to NextJS App Router",
    url: "https://dev.to/mitrakumar/using-markdown-to-manage-content-to-nextjs-app-router-420j",
  },
  {
    id: 2,
    description: "Use bunx for running npm packages with lightning fast speed.",
    url: "https://dev.to/mitrakumar/use-bunx-for-running-npm-packages-with-lightning-fast-speed-2p32",
  },
  {
    id: 3,
    description:
      "Journey of creating and publishing a nodejs package with typescript & eslint support",
    url: "https://dev.to/mitrakumar/journey-of-creating-and-publishing-a-nodejs-package-with-typescript-eslint-support-3gh7",
  },
];

export const getBlogs = function (): Blog[] {
  return blogs;
};
