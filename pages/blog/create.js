import Head from 'next/head';
import dynamic from "next/dynamic";

const CreateBlog = (props) => { 
  let CustomEditor = dynamic(() => import('../../components/Editor/Editor'), {
    ssr: false
});

  const onSaveHandler = async (blogData, title, description) => {

    const toSaveData = {
      title,
      blogData,
      description,
    };

    console.log(toSaveData);
    //make your ajax call to send the data to your server and save it in a database
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Head>
        <title>Create new blog</title>
      </Head>
      <h1>Create Blog</h1>
      {/* <Editor
        onSave={(editorData, title, description) =>
          onSaveHandler(editorData, title, description)
        }
      /> */}
      <CustomEditor />
    </div>
  );
};

export default CreateBlog;
