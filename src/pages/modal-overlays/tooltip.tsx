import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import Tooltip from '@paljs/ui/Tooltip';
import { Card, CardBody } from '@paljs/ui/Card';
import { Button } from '@paljs/ui/Button';
import React from 'react';
import SEO from '../../components/SEO';

export default function TooltipPage() {
  return (
    <>
      <SEO title="Tooltip" />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <header>Tooltip Placements</header>
            <CardBody>
              <Tooltip className="with-margin inline-block" trigger="hover" placement="left" content="hello">
                <Button>left</Button>
              </Tooltip>
              <Tooltip className="with-margin inline-block" trigger="hover" placement="right" content="hello">
                <Button>right</Button>
              </Tooltip>
              <Tooltip className="with-margin inline-block" trigger="hover" placement="top" content="hello">
                <Button>top</Button>
              </Tooltip>
              <Tooltip className="with-margin inline-block" trigger="hover" placement="bottom" content="hello">
                <Button>bottom</Button>
              </Tooltip>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <header>Tooltip With Icon</header>
            <CardBody>
              <Tooltip className="with-margin inline-block" trigger="hover" placement="top" icon="home">
                <Button>icon only</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="left"
                icon="home"
                content="hello"
              >
                <Button>icon left</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="right"
                icon="home"
                content="hello"
              >
                <Button>icon right</Button>
              </Tooltip>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <header>Tooltip Placements</header>
            <CardBody>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                status="Success"
                content="hello"
              >
                <Button>Success</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                status="Primary"
                content="hello"
              >
                <Button>Primary</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                status="Danger"
                content="hello"
              >
                <Button>Danger</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                status="Info"
                content="hello"
              >
                <Button>Info</Button>
              </Tooltip>
              <Tooltip
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                status="Warning"
                content="hello"
              >
                <Button>Warning</Button>
              </Tooltip>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
