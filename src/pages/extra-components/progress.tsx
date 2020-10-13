import Progress from '@paljs/ui/ProgressBar';
import { Status } from '@paljs/ui/types';
import { Card, CardBody } from '@paljs/ui/Card';
import { Actions } from '@paljs/ui/Actions';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Layout from 'Layouts';

const Container = styled.div`
  display: flex;
  align-items: center;
  .bar {
    flex: 1;
  }
`;

export default function ProgressPage() {
  const [value, setValue] = useState(25);
  const [status, setStatus] = useState<Status>('Danger');

  useEffect(() => {
    if (value <= 25) {
      setStatus('Danger');
    } else if (value <= 50) {
      setStatus('Warning');
    } else if (value <= 75) {
      setStatus('Info');
    } else {
      setStatus('Success');
    }
  }, [value]);

  const setProgressValue = (newValue: number) => {
    setValue(Math.min(Math.max(newValue, 0), 100));
  };

  const style = { marginBottom: '1rem' };
  return (
    <Layout title="Progress">
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Progress Status</header>
            <CardBody>
              <Progress style={style} value={20} status="Primary">
                Primary
              </Progress>
              <Progress style={style} value={40} status="Success">
                Success
              </Progress>
              <Progress style={style} value={60} status="Danger">
                Danger
              </Progress>
              <Progress style={style} value={80} status="Info">
                Info
              </Progress>
              <Progress style={style} value={100} status="Warning">
                Warning
              </Progress>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Progress Bar Size</header>
            <CardBody>
              <Progress style={style} value={20} size="Tiny">
                XS
              </Progress>
              <Progress style={style} value={40} size="Small">
                SM
              </Progress>
              <Progress style={style} value={60} size="Medium">
                MD
              </Progress>
              <Progress style={style} value={80} size="Large">
                LG
              </Progress>
              <Progress style={style} value={100} size="Giant">
                XL
              </Progress>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Progress Bar Value</header>
            <CardBody>
              <Progress style={style} value={20} displayValue />
              <Progress style={style} value={40}>
                Custom value
              </Progress>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Progress Bar Interactive</header>
            <CardBody>
              <Container>
                <Actions
                  size="Medium"
                  actions={[
                    {
                      icon: 'arrow-down',
                      url: { onClick: () => setProgressValue(value - 25) },
                    },
                  ]}
                />
                <Progress className="bar" value={value} status={status} displayValue />
                <Actions
                  size="Medium"
                  actions={[
                    {
                      icon: 'arrow-up',
                      url: { onClick: () => setProgressValue(value + 25) },
                    },
                  ]}
                />
              </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
