/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Card, CardBody } from '@paljs/ui/Card';
import Layout from 'Layouts';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyMCE() {
  const handleEditorChange = (content: any, _editor: any) => {
    console.log('Content was updated:', content);
  };
  return (
    <Layout title="Tiny MCE editor">
      <Card>
        <header>Tiny MCE</header>
        <CardBody>
          <Editor
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help',
            }}
            onEditorChange={handleEditorChange}
          />
        </CardBody>
      </Card>
    </Layout>
  );
}
