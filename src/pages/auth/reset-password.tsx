import React from 'react';
import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import Link from 'next/link';

import SEO from '../../components/SEO';
import Auth, { Group } from '../../components/Auth';

export default function ResetPassword() {
  return (
    <Auth title="Change Password" subTitle="Please set a new password">
      <SEO title="Change Password" keywords={['OAH', 'application', 'react']} />
      <form>
        <InputGroup fullWidth>
          <input type="password" placeholder="New Password" />
        </InputGroup>
        <InputGroup fullWidth>
          <input type="password" placeholder="Confirm Password" />
        </InputGroup>
        <Button status="Success" type="button" shape="SemiRound" fullWidth>
          Change Password
        </Button>
      </form>
      <Group>
        <Link href="/auth/login">
          <a>Back to Log In</a>
        </Link>
        <Link href="/auth/register">
          <a>Register</a>
        </Link>
      </Group>
    </Auth>
  );
}
