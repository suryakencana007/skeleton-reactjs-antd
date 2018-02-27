import React from 'react';
import styled from 'styled-components';
import {
  KaoRow,
  KaoCol,
} from 'kao-components/ui';
import { SubTitle } from 'kao-components/common';

const PanelBox = styled(KaoRow)`
  border: solid 1px #f3f3f3;
  background: #fff;
  color: #4b4b4b;
`;

const FieldBox = styled(KaoRow)`
  padding: 15px 8px;
  ${KaoCol}:first-child span {
    float: left;
  }
  ${KaoCol}:last-child span {
    float: right;
  }
`;

export const PanelTaksiran = () => {
  return (
    <PanelBox>
      <KaoCol xs={24}>

        <FieldBox>
          <KaoCol md={14}>
            <span>
              Jumlah Pencairan
            </span>
          </KaoCol>
          <KaoCol md={10}>
            <span>
              Rp. 12.000.000
            </span>
          </KaoCol>
        </FieldBox>

        <FieldBox>
          <KaoCol md={14}>
            <span>
              Biaya Admin <br />
              (dibayarkan terpisah)
            </span>
          </KaoCol>
          <KaoCol md={10}>
            <span>
              Rp. 15.000.000
            </span>
          </KaoCol>
        </FieldBox>

      </KaoCol>

      <KaoCol xs={24} style={{ backgroundColor: '#f6f6f6' }}>

        <FieldBox>
          <KaoCol md={14}>
            <span>
              Jumlah Pencairan
            </span>
          </KaoCol>
          <KaoCol md={10}>
            <span>
              Rp. 15.000.000
            </span>
          </KaoCol>
        </FieldBox>

        <FieldBox>
          <KaoCol md={14}>
            <span>
              Biaya titip
            </span>
          </KaoCol>
          <KaoCol md={10}>
            <span>
              Rp. 15.000.000
            </span>
          </KaoCol>
        </FieldBox>

        <FieldBox>
          <KaoCol md={14}>
            <span>
              <SubTitle align="left" size={14} bold="true">
                Uang yang harus dibayarkan <br />
                pada 13 Juni 2017
              </SubTitle>
            </span>
          </KaoCol>
          <KaoCol md={10}>
            <span>
              <SubTitle align="left" size={14} bold="true">
              Rp. 15.000.000
              </SubTitle>
            </span>
          </KaoCol>
        </FieldBox>

      </KaoCol>
    </PanelBox>
  );
};
