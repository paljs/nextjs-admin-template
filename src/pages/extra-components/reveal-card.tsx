import { Card, CardBody, CardHeader, CardFooter } from '@paljs/ui/Card';
import RevealCard from '@paljs/ui/RevealCard';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React from 'react';
import SEO from '../../components/SEO';

export default function RevealCards() {
  return (
    <>
      <SEO title="RevealCards" />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <RevealCard>
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
          </RevealCard>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <RevealCard button="bottom">
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
          </RevealCard>
        </Col>
      </Row>
    </>
  );
}
