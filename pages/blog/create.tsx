import Head from "next/head";
import dynamic from "next/dynamic";
import { OutputData } from "@editorjs/editorjs";
import React from "react";
import { Button } from "@mui/material";

interface CreateBlogProps {}
const CreateBlog = (props: CreateBlogProps) => {
  let ReactEditor = dynamic(
    () => import("../../components/Editor/ReactEditor"),
    {
      ssr: false,
    }
  );

  // const onSaveHandler = async (blogData, title, description) => {

  //   const toSaveData = {
  //     title,
  //     blogData,
  //     description,
  //   };

  //   console.log(toSaveData);
  //   //make your ajax call to send the data to your server and save it in a database
  // };

  interface EditorCore {
    destroy(): Promise<void>;

    clear(): Promise<void>;

    save(): Promise<OutputData>;

    render(data: OutputData): Promise<void>;
  }

  const editorCore: any = React.useRef(null);

  const handleInitialize = React.useCallback((instance: EditorCore) => {
    editorCore.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.save();
  }, []);


  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        padding: "20px",
        margin: "0 auto",
        backgroundColor: "#fff",
      }}
    >
      <Head>
        <title>Create new blog</title>
      </Head>
      <h1>Create Blog!!</h1>
      <button onClick={handleSave}>저장</button>
      <ReactEditor onInitialize={handleInitialize} />
    </div>
  );
};

export default CreateBlog;
