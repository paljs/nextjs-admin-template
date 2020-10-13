import React from 'react';
import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import Link from 'next/link';

import Layout from 'Layouts';
import Auth, { Group } from 'components/Auth';

export default function ResetPassword() {
  return (
    <Layout title="Change Password">
      <Auth title="Change Password" subTitle="Please set a new password">
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
    </Layout>
  );
}
