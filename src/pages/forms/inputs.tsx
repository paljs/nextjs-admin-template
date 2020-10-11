import Select from '@paljs/ui/Select';
import { Radio } from '@paljs/ui/Radio';
import { Card, CardBody } from '@paljs/ui/Card';
import { Checkbox } from '@paljs/ui/Checkbox';
import { InputGroup } from '@paljs/ui/Input';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React, { useState } from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;

const InputPage = () => {
  const [checkbox, setCheckbox] = useState({
    1: false,
    2: false,
    3: false,
  });

  const onChangeCheckbox = (value: boolean, name: number) => {
    setCheckbox({ ...checkbox, [name]: value });
  };
  const onChangeRadio = (_value: any) => {
    // value will be item value
  };
  return (
    <>
      <SEO title="Input" />
      <Row>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <header>Input status</header>
            <CardBody>
              <Input fullWidth size="Small">
                <input type="text" placeholder="Size small" />
              </Input>
              <Input fullWidth size="Medium">
                <input type="text" placeholder="Size Medium" />
              </Input>
              <Input fullWidth size="Large">
                <input type="text" placeholder="Size Large" />
              </Input>
              <Input fullWidth shape="Rectangle">
                <input type="text" placeholder="Rectangle border" />
              </Input>
              <Input fullWidth shape="SemiRound">
                <input type="text" placeholder="SemiRound border" />
              </Input>
              <Input fullWidth shape="Round">
                <input type="text" placeholder="Round border" />
              </Input>
              <Row>
                <Col breakPoint={{ xs: 12, md: 6 }}>
                  <Input fullWidth>
                    <input type="text" disabled />
                  </Input>
                </Col>
                <Col breakPoint={{ xs: 12, md: 6 }}>
                  <Input fullWidth>
                    <input type="text" disabled placeholder="Disabled Input" />
                  </Input>
                </Col>
              </Row>
              <Select fullWidth placeholder="Select" options={options} />
              <Input fullWidth shape="Round">
                <textarea rows={5} placeholder="Text Area" />
              </Input>
            </CardBody>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card>
            <header>Validation States</header>
            <CardBody>
              <Input fullWidth status="Info">
                <input type="text" placeholder="Input with Info" />
              </Input>
              <Input fullWidth status="Warning">
                <input name="text" placeholder="Input with Warning" />
              </Input>
              <Input fullWidth status="Success">
                <input type="text" placeholder="Input with Success" />
              </Input>
              <Input fullWidth status="Danger">
                <input type="text" placeholder="Input with Danger" />
              </Input>
              <Row>
                <Col breakPoint={{ xs: 12 }}>
                  <Radio
                    name="radio"
                    onChange={onChangeRadio}
                    options={[
                      {
                        value: 'value 1',
                        label: 'option 1',
                        checked: true,
                      },
                      {
                        value: 'value 2',
                        label: 'option 2',
                        status: 'Info',
                      },
                      {
                        value: 'value 3',
                        label: 'option 3',
                        status: 'Danger',
                      },
                    ]}
                  />
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: 12, sm: 4 }}>
                  <Checkbox checked={checkbox[1]} status="Success" onChange={(value) => onChangeCheckbox(value, 1)}>
                    Success
                  </Checkbox>
                </Col>
                <Col breakPoint={{ xs: 12, sm: 4 }}>
                  <Checkbox checked={checkbox[2]} status="Danger" onChange={(value) => onChangeCheckbox(value, 2)}>
                    Danger
                  </Checkbox>
                </Col>
                <Col breakPoint={{ xs: 12, sm: 4 }}>
                  <Checkbox checked={checkbox[3]} status="Warning" onChange={(value) => onChangeCheckbox(value, 3)}>
                    Warning
                  </Checkbox>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default InputPage;
