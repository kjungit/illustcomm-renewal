import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import { parseDate } from "@/utils/date";
import CommentForm from "./CommentForm";
import ToggleButton from "./ui/ToggleButton";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import { Comment, SimplePost } from "@/model/post";
import usePosts from "@/hooks/usePosts";
import useMe from "@/hooks/useMe";

type Props = {
  post: SimplePost;
  children?: React.ReactNode;
  onComment: (comment: Comment) => void;
  isComment?: boolean;
};

export default function CardInfoBar({
  post,
  children,
  onComment,
  isComment = true,
}: Props) {
  const { id, likes, createdAt } = post;
  const { user, setBookmark } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(id, bookmark);
  };

  const handleComment = (comment: string) => {
    user && onComment({ comment, username: user.username, image: user.image });
  };

  return (
    <>
      <div className="flex justify-between p-3">
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
          title={liked ? "unlike" : "like"}
        />
        <ToggleButton
          toggled={bookmarked}
          onToggle={handleBookmark}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
          title={bookmarked ? "unbookmark" : "bookmark"}
        />
      </div>
      <div className="px-4 pb-4">
        <p className="font-bold">{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        {children}
        <p className="my-2 text-xs font-medium">{parseDate(createdAt)}</p>
      </div>
      {isComment && (
        <CommentForm onPostComment={handleComment} image={user?.image} />
      )}
    </>
  );
}
