import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/../keystatic.config";

export type Blog = {
  id: number;
  description: string;
  url: string;
};

const reader = createReader(process.cwd(), keystaticConfig);

export const getBlogs = async function (): Promise<Blog[]> {
  try {
    const blogsData = await reader.collections.blogs.all();
    return blogsData
      .map((blog) => ({
        id: Number(blog.entry.id),
        description: blog.entry.description,
        url: blog.entry.url,
      }))
      .sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error("Error reading blogs from Keystatic:", error);
    return [];
  }
};
