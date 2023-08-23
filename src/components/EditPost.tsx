"use client";
import { AuthUser } from "@/model/user";
import { DragEvent, ChangeEvent, useState, FormEvent, useRef } from "react";
import PostUserAvatar from "./PostUserAvatar";
import Button from "./ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GridLoader } from "react-spinners";
import usePost from "@/hooks/usePost";

type Props = {
  user: AuthUser;
  id: string;
};

export default function EditPost({ user: { username, image }, id }: Props) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const [loading, setLooading] = useState(false);
  const [error, setError] = useState<string>();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const { post } = usePost(id);
  const placeholder = post && post.comments[0].comment;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDragging(false);
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleDrag = (e: DragEvent) => {
    if (e.type === "dragenter") {
      setDragging(true);
    } else if (e.type === "dragleave") {
      setDragging(false);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setLooading(true);
    const formData = new FormData();
    formData.append("postId", id);
    formData.append("newFile", file);
    formData.append("newText", textRef.current?.value ?? "");

    fetch("/api/posts/", { method: "PUT", body: formData })
      .then((res) => {
        if (!res.ok) {
          setError(`${res.status} ${res.statusText}`);
          return;
        }
        router.push("/");
      })
      .catch((err) => setError(err.toString()))
      .finally(() => setLooading(false));
  };

  return (
    <section className="flex flex-col items-center w-full max-w-3xl mx-auto mt-6 ">
      {loading && (
        <div className="absolute inset-0 z-20 text-center pt-[30%] bg-sky-500/20">
          <GridLoader />
        </div>
      )}

      {error && (
        <p className="w-full p-4 mb-4 font-bold text-center text-red-600 bg-red-100">
          {error}
        </p>
      )}
      <PostUserAvatar username={username} image={image ?? ""} />
      <form
        className="flex flex-col justify-center w-full mt-2 md:items-center md:flex-row"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center">
          <input
            className="hidden"
            type="file"
            accept="image/*"
            name="input"
            id="input-upload"
            onChange={handleChange}
          />
          <label
            className={`flex flex-col items-center justify-center w-[400px] h-96 ${
              !file && "border-2 border-dashed"
            }`}
            htmlFor="input-upload"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {dragging && (
              <div className="absolute inset-0 z-10 pointer-events-none bg-sky-500/30" />
            )}
            {!file && post?.image && (
              <div className="relative w-full h-full">
                <Image
                  src={post.image}
                  alt="ArtImage"
                  fill
                  priority
                  className="absolute object-contain w-full h-auto"
                />
              </div>
            )}
            {file && (
              <div className="relative w-full h-full">
                <Image
                  className="object-contain"
                  src={URL.createObjectURL(file)}
                  alt="localfile"
                  fill
                  sizes="650px"
                />
              </div>
            )}
          </label>
        </div>
        <div className="flex flex-col items-center justify-between w-full h-full md:justify-center">
          <textarea
            className="w-[400px] h-full border p-3 outline-none texg-lg border-neutral-300"
            name="text"
            id="input-text"
            required
            rows={10}
            ref={textRef}
            placeholder={placeholder}
          />
          <div className="w-full h-[50px]">
            <Button text="등록하기" onClick={() => {}} />
          </div>
        </div>
      </form>
    </section>
  );
}
