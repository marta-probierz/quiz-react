import React from 'react';
import { useTranslation } from 'react-i18next';

import { Foot } from '../styles';

export const Footer = () => {
  const { t } = useTranslation();
  return <Foot>{t`components.footer.footer`}</Foot>;
};
