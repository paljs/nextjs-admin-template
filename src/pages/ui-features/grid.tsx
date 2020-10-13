import { Card, CardBody } from '@paljs/ui/Card';
import { breakpointUp } from '@paljs/ui/breakpoints';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import styled, { css } from 'styled-components';
import React from 'react';

import Layout from 'Layouts';

interface BoxProps {
  nested?: boolean;
  container?: boolean;
  row?: boolean;
  large?: boolean;
}

const Box = styled.div<BoxProps>`
  ${({ theme, nested, container, row, large }) => css`
    position: relative;
    box-sizing: border-box;
    min-height: 1rem;
    overflow: hidden;
    text-align: center;
    background: ${theme.colorBasic600};
    padding: 0.75rem 0.25rem;
    border-radius: 0.25rem;
    ${large && 'height: 8rem;'};
    ${row && 'margin-bottom: 1rem  !important;'};
    ${container && 'padding: .5em;'};
    ${nested && `background-color: ${theme.colorBasic200};`};
    ${breakpointUp('md')`
      padding: 1rem;
    `}
  `}
`;

const GridPage = () => {
  return (
    <Layout title="Grid">
      <Row>
        <Col breakPoint={{ xs: 12 }}>
          <Card>
            <header>Grid System</header>
            <CardBody>
              <h2>Responsive</h2>
              <p>
                Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at
                xs, sm, md & lg viewport widths.
              </p>
              <Row>
                <Col breakPoint={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <Box row />
                </Col>
                <Col breakPoint={{ xs: 6, sm: 6, md: 8, lg: 6 }}>
                  <Box row />
                </Col>
                <Col breakPoint={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <Box row />
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <Box row />
                </Col>
                <Col breakPoint={{ xs: 12, sm: 6, md: 8, lg: 9 }}>
                  <Box row />
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: 8, sm: 6, md: 8, lg: 9 }}>
                  <Box row />
                </Col>
                <Col breakPoint={{ xs: 4, sm: 6, md: 4, lg: 3 }}>
                  <Box row />
                </Col>
              </Row>
              <h2>Offsets</h2>
              <p>Offset a column.</p>
              <Row>
                {Array.from(Array(11), (_v, i) => {
                  return (
                    <Col key={i} offset={{ xs: 11 - i }} breakPoint={{ xs: i + 1 }}>
                      <Box row />
                    </Col>
                  );
                })}
              </Row>
              <h2>Auto Width</h2>
              <p>Add any number of auto sizing columns to a row. Let the grid figure it out.</p>
              <Row>
                <Col breakPoint={{ xs: true }}>
                  <Box row>xs</Box>
                </Col>
                <Col breakPoint={{ xs: true }}>
                  <Box row>xs</Box>
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: true }}>
                  <Box row>xs</Box>
                </Col>
                <Col breakPoint={{ xs: true }}>
                  <Box row>xs</Box>
                </Col>
                <Col breakPoint={{ xs: true }}>
                  <Box row>xs</Box>
                </Col>
              </Row>
              <h2>Alignment</h2>
              <p>
                Add classes to align elements to the start or end of row as well as the top, bottom, or center of a
                column
              </p>
              <h3>
                <code>.start-</code>
              </h3>
              <Row>
                <Col breakPoint={{ xs: 12 }}>
                  <Box container>
                    <Row start="xs">
                      <Col breakPoint={{ xs: 6 }}>
                        <Box nested>start=&quot;xs&quot;</Box>
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <h3>
                <code>.center-</code>
              </h3>
              <Row>
                <Col breakPoint={{ xs: 12 }}>
                  <Box container>
                    <Row center="xs">
                      <Col breakPoint={{ xs: 6 }}>
                        <Box nested>center=&quot;xs&quot;</Box>
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <h3>
                <code>.end-</code>
              </h3>
              <Row>
                <Col breakPoint={{ xs: 12 }}>
                  <Box container>
                    <Row end="xs">
                      <Col breakPoint={{ xs: 6 }}>
                        <Box nested>end=&quot;xs&quot;</Box>
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <h3>
                <code>.top-</code>
              </h3>
              <Row top="xs">
                <Col breakPoint={{ xs: 6 }}>
                  <Box large>top=&quot;xs&quot;</Box>
                </Col>
                <Col breakPoint={{ xs: 6 }}>
                  <Box>top=&quot;xs&quot;</Box>
                </Col>
              </Row>
              <h3>
                <code>.middle-</code>
              </h3>
              <Row middle="xs">
                <Col breakPoint={{ xs: 6 }}>
                  <Box large>middle=&quot;xs&quot;</Box>
                </Col>
                <Col breakPoint={{ xs: 6 }}>
                  <Box>middle=&quot;xs&quot;</Box>
                </Col>
              </Row>
              <h3>
                <code>.bottom-</code>
              </h3>
              <Row bottom="xs">
                <Col breakPoint={{ xs: 6 }}>
                  <Box large>bottom=&quot;xs&quot;</Box>
                </Col>
                <Col breakPoint={{ xs: 6 }}>
                  <Box>bottom=&quot;xs&quot;</Box>
                </Col>
              </Row>
              <h2>Distribution</h2>
              <p>Add classes to distribute the contents of a row or column.</p>
              <h3>
                <code>.around-</code>
              </h3>
              <Row>
                <Col breakPoint={{ xs: 12 }}>
                  <Box container>
                    <Row around="xs">
                      <Col breakPoint={{ xs: 2 }}>
                        <Box nested />
                      </Col>
                      <Col breakPoint={{ xs: 2 }}>
                        <Box nested />
                      </Col>
                      <Col breakPoint={{ xs: 2 }}>
                        <Box nested />
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <h3>
                <code>.between-</code>
              </h3>
              <Row>
                <Col breakPoint={{ xs: 12 }}>
                  <Box container>
                    <Row between="xs">
                      <Col breakPoint={{ xs: 2 }}>
                        <Box nested />
                      </Col>
                      <Col breakPoint={{ xs: 2 }}>
                        <Box nested />
                      </Col>
                      <Col breakPoint={{ xs: 2 }}>
                        <Box nested />
                      </Col>
                    </Row>
                  </Box>
                </Col>
              </Row>
              <h2>Hide</h2>
              <p>
                You can simply hide some elements for a given breakpoint by passing `false` to the breakpoint
                properties.
              </p>
              <Row>
                <Col breakPoint={{ xs: 12, md: 6 }}>
                  <Box row />
                </Col>
                <Col breakPoint={{ xs: false, md: 6 }}>
                  <Box row>xs=false</Box>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
export default GridPage;
