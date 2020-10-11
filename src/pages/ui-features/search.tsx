import { Search, SearchProps } from '@paljs/ui/Search';
import { Card, CardBody } from '@paljs/ui/Card';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import React, { useState } from 'react';
import SEO from '../../components/SEO';

export default function SearchPage() {
  const [value, setValue] = useState('');
  const submitHandle = (sentValue: string) => setValue(sentValue);
  const type: SearchProps['type'][] = [
    'rotate-layout',
    'modal-zoomin',
    'modal-move',
    'modal-drop',
    'modal-half',
    'curtain',
    'column-curtain',
  ];
  return (
    <>
      <SEO title="Animated Searches" keywords={['OAH', 'application', 'react']} />
      <Row>
        {type.map((key) => (
          <Col breakPoint={{ xs: 12, md: 6 }} key={key}>
            <Card>
              <header>{key} Search</header>
              <CardBody>
                <Search submit={(v) => submitHandle(v)} type={key} placeholder="Search..." hint="Hit Enter to search" />
              </CardBody>
              <footer>You Search for: {value}</footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
