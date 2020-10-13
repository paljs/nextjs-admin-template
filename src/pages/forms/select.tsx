import Select from '@paljs/ui/Select';
import { Card, CardBody } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React from 'react';
import styled from 'styled-components';
import Layout from 'Layouts';

export const SelectStyled = styled(Select)`
  margin-bottom: 1rem;
`;

export default function SelectPage() {
  const positionOptions = [
    { value: 'topRight', label: 'Top-Right' },
    { value: 'topLeft', label: 'Top-Left' },
    { value: 'bottomRight', label: 'Bottom-Right' },
    { value: 'bottomLeft', label: 'Bottom-Left' },
    { value: 'topStart', label: 'Top-Start' },
    { value: 'topEnd', label: 'Top-End', selected: true },
    { value: 'bottomStart', label: 'Bottom-Start', selected: true },
    { value: 'bottomEnd', label: 'Bottom-End', selected: true },
  ];
  const statusOption = [
    { label: 'Clean' },
    { value: 'Info', label: 'Info' },
    { value: 'Success', label: 'Success' },
    { value: 'Danger', label: 'Danger' },
    { value: 'Primary', label: 'Primary' },
    { value: 'Warning', label: 'Warning' },
    { value: 'Default', label: 'Default' },
  ];
  return (
    <Layout title="Select">
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card size="Small">
            <CardBody>
              <SelectStyled options={statusOption} placeholder="Select" />
              <Select options={positionOptions} isMulti multiple placeholder="Select multiple" />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
