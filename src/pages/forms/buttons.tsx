import { Status, Size, Shape } from '@paljs/ui/types';
import { Card, CardBody } from '@paljs/ui/Card';
import { Button, ButtonLink } from '@paljs/ui/Button';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React from 'react';
import Layout from 'Layouts';
import { useRouter } from 'next/router';

const style = { marginBottom: '1.5rem' };

export default function ButtonPage() {
  const router = useRouter();
  const status: Status[] = ['Info', 'Success', 'Danger', 'Primary', 'Warning', 'Basic', 'Control'];
  return (
    <Layout title="Button">
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Button Hero</header>
            <CardBody>
              <Row>
                {status.map((state) => (
                  <Col key={state} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth appearance="hero" status={state}>
                      {state}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Button Colors</header>
            <CardBody>
              <Row>
                {status.map((state) => (
                  <Col key={state} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth status={state}>
                      {state}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Button Outline</header>
            <CardBody>
              <Row>
                {status.map((state) => (
                  <Col key={state} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth appearance="outline" status={state}>
                      {state}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Button Size</header>
            <CardBody>
              <Row middle="xs">
                {(['Tiny', 'Small', 'Medium', 'Large', 'Giant'] as Size[]).map((size) => (
                  <Col key={size} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth size={size}>
                      {size}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Button Shape</header>
            <CardBody>
              <Row middle="xs">
                {(['Rectangle', 'SemiRound', 'Round'] as Shape[]).map((shape) => (
                  <Col key={shape} style={style} breakPoint={{ xs: true }}>
                    <Button fullWidth shape={shape}>
                      {shape}
                    </Button>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Button Elements</header>
            <CardBody>
              <Row middle="xs">
                <Col style={style} breakPoint={{ xs: true }}>
                  <Button fullWidth shape="Rectangle">
                    Button
                  </Button>
                </Col>
                <Col style={style} breakPoint={{ xs: true }}>
                  <ButtonLink onClick={() => router.push('/')} fullWidth shape="Rectangle">
                    Link
                  </ButtonLink>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
