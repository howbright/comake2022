import Head from 'next/head';
import dynamic from "next/dynamic";
import { OutputData } from '@editorjs/editorjs';
import React from 'react';
import { Button } from '@mui/material';
import { NextPage } from 'next';
import interact from '@interactjs/interactjs';
import { BasicDemo } from "../components/BasicDemo";

interface SignSettingProps {}
const SignSetting: NextPage = (props: SignSettingProps) => { 




  return (
    <div style={{ width: '100%', maxWidth: '900px', padding: '20px', margin: '0 auto', backgroundColor: '#fff' }}>
      <Head>
        <title>Create new blog</title>
      </Head>
      <BasicDemo></BasicDemo>
    </div>
  );
};

export default SignSetting;
