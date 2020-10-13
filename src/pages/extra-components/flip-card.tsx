import { Card, CardBody, CardHeader, CardFooter } from '@paljs/ui/Card';
import FlipCard from '@paljs/ui/FlipCard';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import Layout from 'Layouts';

export default function FlipCards() {
  return (
    <Layout title="FlipCards">
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <FlipCard>
            <Card>
              <CardHeader>Front</CardHeader>
              <CardBody>Hello Card component this body of card</CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
            <Card>
              <CardHeader>Back</CardHeader>
              <CardBody>Hello Card component this body of card</CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </FlipCard>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <FlipCard button="bottom">
            <Card status="Info" accent="Primary">
              <CardHeader>Front</CardHeader>
              <CardBody>Hello Card component this body of card</CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
            <Card status="Primary" accent="Info">
              <CardHeader>Back</CardHeader>
              <CardBody>Hello Card component this body of card</CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </FlipCard>
        </Col>
      </Row>
    </Layout>
  );
}
