"use client";
import { AuthUser } from "@/model/user";
import { DragEvent, ChangeEvent, useState, FormEvent, useRef } from "react";
import PostUserAvatar from "./PostUserAvatar";
import FileIcon from "./ui/icons/FileIcon";
import Button from "./ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GridLoader } from "react-spinners";

type Props = {
  user: AuthUser;
};

export default function NewPost({ user: { username, image } }: Props) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const [loading, setLooading] = useState(false);
  const [error, setError] = useState<string>();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDragging(false);
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
      console.log(files[0]);
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
      console.log(files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setLooading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("text", textRef.current?.value ?? "");

    fetch("/api/posts/", { method: "POST", body: formData })
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
    <section className="flex flex-col items-center w-full max-w-xl mx-auto mt-6">
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
      <form className="flex flex-col w-full mt-2" onSubmit={handleSubmit}>
        <input
          className="hidden"
          type="file"
          accept="image/*"
          name="input"
          id="input-upload"
          onChange={handleChange}
        />
        <label
          className={`flex flex-col items-center justify-center w-full h-96 ${
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
          {!file && (
            <div>
              <FileIcon />
              <p>여기에 이미지 Drag & Drop 하기</p>
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
        <textarea
          className="border outline-none texg-lg border-neutral-300"
          name="text"
          id="input-text"
          required
          rows={10}
          placeholder={"작품 문구를 작성해주세요."}
          ref={textRef}
        />
        <Button text="등록하기" onClick={() => {}} />
      </form>
    </section>
  );
}
