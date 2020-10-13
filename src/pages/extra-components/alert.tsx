import Alert from '@paljs/ui/Alert';
import { Card, CardBody } from '@paljs/ui/Card';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';

const alert = () => {
  return (
    <Layout title="Alert">
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Alert Status</header>
            <CardBody>
              <Alert closable status="Success">
                You have been successfully authenticated!
              </Alert>
              <Alert status="Danger">You have been successfully authenticated!</Alert>
              <Alert status="Primary">You have been successfully authenticated!</Alert>
              <Alert status="Info">You have been successfully authenticated!</Alert>
              <Alert status="Warning">You have been successfully authenticated!</Alert>
              <Alert status="Basic">You have been successfully authenticated!</Alert>
              <Alert status="Control">You have been successfully authenticated!</Alert>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Alert Accent</header>
            <CardBody>
              <Alert accent="Danger" status="Success">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Primary" status="Danger">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Info" status="Primary">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Warning" status="Info">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Danger" status="Warning">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Basic" status="Control">
                You have been successfully authenticated!
              </Alert>
              <Alert accent="Control" status="Basic">
                You have been successfully authenticated!
              </Alert>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Alert Outline</header>
            <CardBody>
              <Alert outline="Success">You have been successfully authenticated!</Alert>
              <Alert outline="Danger">You have been successfully authenticated!</Alert>
              <Alert outline="Primary">You have been successfully authenticated!</Alert>
              <Alert outline="Info">You have been successfully authenticated!</Alert>
              <Alert outline="Warning">You have been successfully authenticated!</Alert>
              <Alert outline="Basic">You have been successfully authenticated!</Alert>
              <Alert outline="Control">You have been successfully authenticated!</Alert>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Alert Size</header>
            <CardBody>
              <Alert status="Danger" size="Tiny">
                You have been successfully authenticated!
              </Alert>
              <Alert status="Primary" size="Small">
                You have been successfully authenticated!
              </Alert>

              <Alert status="Success" size="Medium">
                You have been successfully authenticated!
              </Alert>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default alert;
