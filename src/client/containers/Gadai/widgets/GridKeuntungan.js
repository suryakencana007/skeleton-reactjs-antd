import React from 'react';
import { KaoIcon, SubTitle } from 'kao-components/common';
import {
  KaoFlex,
  KaoCol,
} from 'kao-components/ui';

import IcPrinsip from 'kao-assets/icons/ic-sesuai-prinsip.svg';
import IcMedal from 'kao-assets/icons/ic-bronze-medal.svg';
import IcTransparant from 'kao-assets/icons/ic-transparant.svg';

const styles = {
  subTitle: {
    color: 'rgba(0, 0, 0, 0.5)',
    minWidth: 250,
    lineHeight: 1.57,
  }
};

export const GridKeuntungan = () => {
  return (
    <KaoFlex justify="center">
      <KaoCol xs={24} md={8}>
        <KaoIcon image={IcPrinsip} size={145} center="true" />
        <SubTitle size={16}>Sesuai Prinsip Syariah</SubTitle>
        <SubTitle size={14} style={styles.subTitle}>
          Semua kegiatan pembiayaan bebas dari riba dan pastinya sesuai dengan ketentuan syariat islam
        </SubTitle>
      </KaoCol>
      <KaoCol xs={24} md={8}>
        <KaoIcon image={IcMedal} size={145} center="true" />
        <SubTitle size={16}>Nilai Pencairan Tinggi</SubTitle>
        <SubTitle size={14} style={styles.subTitle}>
          Karena barang yang diterima hanya perhiasan dan logam mulia
        </SubTitle>
      </KaoCol>
      <KaoCol xs={24} md={8}>
        <KaoIcon image={IcTransparant} size={145} center="true" />
        <SubTitle size={16}>Transparansi</SubTitle>
        <SubTitle size={14} style={styles.subTitle}>
          Pemaparan secara jelas dan pemilihan biaya terkait penitipan barang gadai diketahui dan disetujui oleh nasabah
        </SubTitle>
      </KaoCol>
    </KaoFlex>
  );
};
