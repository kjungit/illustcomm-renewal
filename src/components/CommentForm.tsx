import Avatar from "./Avatar";

type Props = {
  image: string;
};

export default function CommentForm({ image }: Props) {
  return (
    <form className="flex items-center border-t border-neutral-300">
      {image && <Avatar image={image} size="xsmall" highlight />}
      <input
        className="w-full p-3 ml-2 border-none outline-none"
        type="text"
        placeholder="Add a comment..."
      />
      <button className="ml-2 font-bold">Post</button>
    </form>
  );
}
