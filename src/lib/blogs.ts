import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/../keystatic.config";

export type Blog = {
  id: string;
  title: string;
  url: string | null;
};

const reader = createReader(process.cwd(), keystaticConfig);

export const getBlogs = async function (): Promise<Blog[]> {
  try {
    const blogsData = await reader.collections.blogs.all();
    return blogsData
      .map((blog) => ({
        id: blog.entry.id,
        title: blog.entry.title,
        url: blog.entry.url.value,
      }))
  } catch (error) {
    console.error("Error reading blogs from Keystatic:", error);
    return [];
  }
};
