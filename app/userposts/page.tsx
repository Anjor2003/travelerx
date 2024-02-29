import prisma from "@/lib/prismadb";
import getCurrentUser from "../actions/getCurrentUser";
import BlogCard from "@/components/shared/BlogCard";
import Posts from "@/components/shared/Posts";
import DeletePosts from "@/components/shared/DeletePosts";
import { VscSignIn } from "react-icons/vsc";

const page = async () => {
  const user = await getCurrentUser();
  const posts = await prisma.blog.findMany({
    where: {
      userEmail: user?.email ?? undefined,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  return (
    <div className="w-full">
      {!user ? (
        <div className="h-screen flex justify-center items-center">
          <VscSignIn size={100}/>
          <h1 className="text-3xl font-extrabold">Sign in to view your post!</h1>
        </div>
      ) : (
        <div className="max-w-[90%] mx-auto">
          <div className="w-full text-center mb-10">
            <h1 className="text-3xl font-extrabold text-tertiary">
              Hello {user?.name}
            </h1>
            <span className="text-lg">
              You have published {posts.length} posts
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
            {posts.map((post) => (
              <div key={post.id} className="relative">
                <BlogCard post={post as any} />
                <DeletePosts post={post as any} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
