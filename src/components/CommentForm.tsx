import { FormEvent, useState } from "react";
import Avatar from "./Avatar";

type Props = {
  image?: string;
  onPostComment: (comment: string) => void;
};

export default function CommentForm({ image, onPostComment }: Props) {
  const [comment, setComment] = useState("");
  const buttonDisabled = comment.length === 0;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onPostComment(comment);
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center px-4 border-t border-neutral-300"
    >
      <div>{image && <Avatar image={image} size="xsmall" highlight />}</div>
      <input
        className="w-full p-3 ml-2 border-none outline-none"
        type="text"
        placeholder="Add a comment..."
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className={`ml-2 font-bold ${
          buttonDisabled ? "opacity-40" : "opacity-100"
        }`}
        disabled={buttonDisabled}
      >
        Post
      </button>
    </form>
  );
}
