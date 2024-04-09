import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function Blog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [thumbnail, setThumbnail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Manipulate the content to update image URLs
    let updatedContent = content.replace(
      /(src=")(?!.*?cloudinary)(.*?)(")/g,
      (match, p1, p2, p3) => {
        console.log("p2:- ", p2);
        let newImageUrls = p2;
        try {
          // const newImageUrls = updateBlogImage(id, p2);
          newImageUrls = "cloudinary";
          console.log("New Image URLs:- ", newImageUrls);
        } catch (err) {
          console.error("Error while updating image URL:- ", err);
        }
        console.log("here newImageUrls:- ", newImageUrls);
        return `${p1}${newImageUrls}${p3}`;
      }
    );
    // Set the updated content back to the editor
    setContent(updatedContent);
    console.log("Updated Content:", content);
  };

  return (
    <div className="py-3 mx-auto w-[80%]">
      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
          type="text"
          id="Title"
          placeholder="Title..."
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
          type="text"
          id="Description"
          placeholder="Description..."
        />
        <Editor
          apiKey="8neuuq3iq3wr5ph47gk5s2giqwx919yvy51ikmh82znw9oom"
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 400,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={(newContent, editor) => setContent(newContent)}
        />
        <div className="flex gap-4">
          <button
            onClick={(e) => {
              setStatus("Draft");
            }}
            className="bg-red-500 px-4 py-1 rounded-md"
          >
            Save as Draft
          </button>
          <button
            onClick={(e) => {
              setStatus("published");
            }}
            className="bg-green-500 px-4 py-1 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
