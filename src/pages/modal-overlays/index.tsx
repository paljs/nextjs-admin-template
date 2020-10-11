import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function Index() {
  useEffect(() => {
    navigate('/modal-overlays/popover');
  }),
    [];
  return <div />;
}
