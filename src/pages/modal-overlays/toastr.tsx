import React, { useRef, useState } from 'react';
import { Toastr, ToastrRef, ToastrProps } from '@paljs/ui/Toastr';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { Card, CardBody } from '@paljs/ui/Card';
import { Button } from '@paljs/ui/Button';
import { Checkbox } from '@paljs/ui/Checkbox';
import { InputGroup } from '@paljs/ui/Input';
import Select from '@paljs/ui/Select';
import styled from 'styled-components';

const SelectStyled = styled(Select)`
  margin-bottom: 1rem;
`;

export default function ToastrPage() {
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState('HI there!');
  const [message, setMessage] = useState('cool toaster');

  const [data, setData] = useState<ToastrProps>({
    position: 'topEnd',
    status: 'Primary',
    duration: 2000,
    hasIcon: true,
    destroyByClick: true,
    preventDuplicates: false,
  });

  type Option = { value: any; label: any };

  const toastrRef = useRef<ToastrRef>(null);

  const showToastr = () => {
    setCount(count + 1);
    toastrRef.current?.add(message, title + count, { ...data });
  };

  const onChangeHandle = (name: keyof ToastrProps, value: any) => {
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  const positionOptions: Option[] = [
    { value: 'topRight', label: 'Top-Right' },
    { value: 'topLeft', label: 'Top-Left' },
    { value: 'bottomRight', label: 'Bottom-Right' },
    { value: 'bottomLeft', label: 'Bottom-Left' },
    { value: 'topStart', label: 'Top-Start' },
    { value: 'topEnd', label: 'Top-End' },
    { value: 'bottomStart', label: 'Bottom-Start' },
    { value: 'bottomEnd', label: 'Bottom-End' },
  ];
  const statusOption: Option[] = [
    { value: 'Info', label: 'Info' },
    { value: 'Success', label: 'Success' },
    { value: 'Danger', label: 'Danger' },
    { value: 'Primary', label: 'Primary' },
    { value: 'Warning', label: 'Warning' },
    { value: 'Default', label: 'Default' },
  ];

  return (
    <Row>
      <Col breakPoint={{ xs: 12 }}>
        <Toastr ref={toastrRef} />
        <Card>
          <header>Toaster configuration</header>
          <CardBody>
            <Row>
              <Col breakPoint={{ xs: 12, md: 6 }}>
                <SelectStyled
                  fullWidth
                  placeholder="Place to show toast"
                  options={positionOptions}
                  value={positionOptions.find((position) => position.value === data.position)}
                  onChange={(v: Option) => onChangeHandle('position', v.value)}
                />
                <InputGroup fullWidth>
                  <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </InputGroup>
                <InputGroup fullWidth>
                  <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </InputGroup>
                <InputGroup fullWidth>
                  <input
                    placeholder="Time to hide toast, ms. 0 to persistent toast"
                    type="number"
                    value={data.duration}
                    onChange={(e) => onChangeHandle('duration', e.target.valueAsNumber)}
                  />
                </InputGroup>
              </Col>
              <Col breakPoint={{ xs: 12, md: 6 }}>
                <SelectStyled
                  fullWidth
                  placeholder="Toast Status"
                  options={statusOption}
                  value={statusOption.find((state) => state.value === data.status)}
                  onChange={(v: Option) => onChangeHandle('status', v.value)}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Checkbox checked={!!data.destroyByClick} onChange={(v) => onChangeHandle('destroyByClick', v)}>
                    Hide on click
                  </Checkbox>
                  <Checkbox checked={!!data.preventDuplicates} onChange={(v) => onChangeHandle('preventDuplicates', v)}>
                    Prevent arising of duplicate toast
                  </Checkbox>
                  <Checkbox checked={!!data.hasIcon} onChange={(v) => onChangeHandle('hasIcon', v)}>
                    Show toast with icon
                  </Checkbox>
                </div>
              </Col>
            </Row>
          </CardBody>
          <footer>
            <Button onClick={showToastr}>Show Toastr</Button>
          </footer>
        </Card>
      </Col>
    </Row>
  );
}
