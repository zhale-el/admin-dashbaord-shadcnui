import PostsTabel from "@/components/posts/PostsTabel";
import BackButton from "@/components/BackButton";
const PostsPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTabel />
    </>
  );
};

export default PostsPage;
