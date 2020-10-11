import React from 'react';
import { Card, CardBody } from '@paljs/ui/Card';
import SEO from '../../components/SEO';

const isSSR = typeof window === 'undefined';
const CKEditor = !isSSR ? require('@ckeditor/ckeditor5-react') : <div />;
const ClassicEditor = !isSSR ? require('@ckeditor/ckeditor5-build-classic') : <div />;

export default function CKEditorPage() {
  return (
    <Card>
      <SEO title="CKEditor" />
      <header>CKEditor</header>
      <CardBody>
        {!isSSR && (
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onInit={(editor: any) => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event: any, editor: { getData: () => any }) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event: any, editor: any) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event: any, editor: any) => {
              console.log('Focus.', editor);
            }}
          />
        )}
      </CardBody>
    </Card>
  );
}
