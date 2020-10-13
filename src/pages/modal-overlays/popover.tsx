import React from 'react';
import ContextMenu from '@paljs/ui/ContextMenu';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Popover from '@paljs/ui/Popover';
import { Tabs, Tab } from '@paljs/ui/Tabs';
import { Card, CardBody } from '@paljs/ui/Card';
import { Button } from '@paljs/ui/Button';
import Link from 'next/link';

import Layout from 'Layouts';
import { useRouter } from 'next/router';

export default function PopoverPage() {
  const router = useRouter();
  return (
    <Layout title="Popover">
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Tiny">
            <header>Popover Position</header>
            <CardBody id="popoverScroll">
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="left"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Left</Button>
              </Popover>
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="right"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Right</Button>
              </Popover>
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Top</Button>
              </Popover>
              <Popover
                className="with-margin inline-block"
                trigger="hover"
                placement="bottom"
                overlay="Hello, how are you today?"
                eventListener="#popoverScroll"
              >
                <Button fullWidth>Bottom</Button>
              </Popover>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card size="Tiny">
            <header>Simple Popovers</header>
            <CardBody className="popoverScroll">
              <Popover
                eventListener=".popoverScroll"
                className="with-margin inline-block"
                trigger="click"
                placement="top"
                overlay={
                  <Tabs activeIndex={0} fullWidth>
                    <Tab title="Tab 1" icon="icon ion-ios-home" responsive>
                      Content 1
                    </Tab>
                    <Tab title="Tab 2" icon="icon ion-ios-star-outline" responsive>
                      Content 2
                    </Tab>
                  </Tabs>
                }
              >
                <Button fullWidth>on click</Button>
              </Popover>
              <Popover
                eventListener=".popoverScroll"
                className="with-margin inline-block"
                trigger="hover"
                placement="top"
                overlay={
                  <Card className="popover-card">
                    <header>Hello!</header>
                    <CardBody>Hello, how are you today?</CardBody>
                  </Card>
                }
              >
                <Button fullWidth>on hover</Button>
              </Popover>
              <Popover
                eventListener=".popoverScroll"
                className="with-margin inline-block"
                trigger="focus"
                placement="top"
                overlay={
                  <Card className="popover-card">
                    <header>Hello!</header>
                    <CardBody>Hello, how are you today?</CardBody>
                  </Card>
                }
              >
                <Button fullWidth>on focus</Button>
              </Popover>
              <ContextMenu
                nextJs
                currentPath={router.pathname}
                className="with-margin inline-block"
                placement="bottom"
                items={[
                  { title: 'Profile', link: { href: '/modal-overlays/tooltip' } },
                  { title: 'Log out', link: { href: '/logout' } },
                ]}
                Link={Link}
              >
                <Button fullWidth>Context Menu</Button>
              </ContextMenu>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
