import PostsTabel from "@/components/posts/PostsTabel";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTabel />
      <PostsPagination />
    </>
  );
};

export default PostsPage;
