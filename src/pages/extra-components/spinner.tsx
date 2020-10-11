import { Button } from '@paljs/ui/Button';
import Spinner from '@paljs/ui/Spinner';
import { Tabs, Tab } from '@paljs/ui/Tabs';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { Card, CardBody } from '@paljs/ui/Card';
import React, { useState } from 'react';
import SEO from '../../components/SEO';

const SpinnerPage = () => {
  const [show, setShow] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const onClick = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  const onSelect = (i: number) => {
    setShowTab(true);
    setActiveTab(i);
    setTimeout(() => {
      setShowTab(false);
    }, 5000);
  };

  return (
    <>
      <SEO title="Spinner" />
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card style={{ position: 'relative' }}>
            <CardBody>Some card content.</CardBody>
            <Spinner>Loading...</Spinner>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card style={{ position: 'relative' }}>
            <CardBody>Some card content.</CardBody>
            <Spinner size="Tiny">Loading...</Spinner>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card style={{ position: 'relative' }}>
            <CardBody>Some card content.</CardBody>
            <Spinner size="Small">Loading...</Spinner>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card style={{ position: 'relative' }}>
            <CardBody>Some card content.</CardBody>
            <Spinner size="Medium">Loading...</Spinner>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card style={{ position: 'relative' }}>
            <CardBody>Some card content.</CardBody>
            <Spinner size="Large">Loading...</Spinner>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card style={{ position: 'relative' }}>
            <CardBody>Some card content.</CardBody>
            <Spinner size="Giant">Loading...</Spinner>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <CardBody>
              <Row>
                <Col breakPoint={{ xs: 6, md: 4 }}>
                  <Button onClick={onClick} style={{ position: 'relative' }} fullWidth status="Primary">
                    Primary
                    {show && <Spinner size="Medium" status="Primary" />}
                  </Button>
                </Col>
                <Col breakPoint={{ xs: 6, md: 4 }}>
                  <Button onClick={onClick} style={{ position: 'relative' }} fullWidth status="Success">
                    Primary
                    {show && <Spinner size="Medium" status="Success" />}
                  </Button>
                </Col>
                <Col breakPoint={{ xs: 6, md: 4 }}>
                  <Button onClick={onClick} style={{ position: 'relative' }} fullWidth status="Danger">
                    Primary
                    {show && <Spinner size="Medium" status="Danger" />}
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <Tabs activeIndex={activeTab} fullWidth onSelect={(i) => onSelect(i)}>
              <Tab title="Tab 1" badge={{ status: 'Danger', title: '11', position: 'topStart' }} responsive>
                <div style={{ position: 'relative' }}>
                  <h1>Content 1</h1>
                  {showTab && <Spinner size="Large" status="Danger" />}
                </div>
              </Tab>
              <Tab title="Tab 2" badge={{ status: 'Info', title: '11', position: 'bottomEnd' }} responsive>
                <div style={{ position: 'relative' }}>
                  <h1>Content 2</h1>
                  {showTab && <Spinner size="Large" status="Danger" />}
                </div>
              </Tab>
              <Tab title="Tab 3" badge={{ status: 'Success', title: '11', position: 'topStart' }} responsive>
                <div style={{ position: 'relative' }}>
                  <h1>Content 3</h1>
                  {showTab && <Spinner size="Large" status="Danger" />}
                </div>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default SpinnerPage;
