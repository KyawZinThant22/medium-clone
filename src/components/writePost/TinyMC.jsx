import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyMC({ setBody }) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setBody(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="bc2sqv5g9p0kc037m0jpryvu5um84gktzqskpgi6ryeowjl5"
        onInit={(evt, editor) => (editorRef.current = editor)}
        onChange={log}
        init={{
          height: 250,
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
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
}
