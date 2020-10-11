import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import Link from 'next/link';

import Auth, { Group } from '../../components/Auth';
import Socials from '../../components/Auth/Socials';
import SEO from '../../components/SEO';

export default function Login() {
  const onCheckbox = () => {
    // v will be true or false
  };
  return (
    <Auth title="Login" subTitle="Hello! Login with your email">
      <SEO title="Login" keywords={['OAH', 'application', 'react']} />
      <form>
        <InputGroup fullWidth>
          <input type="email" placeholder="Email Address" />
        </InputGroup>
        <InputGroup fullWidth>
          <input type="password" placeholder="Password" />
        </InputGroup>
        <Group>
          <Checkbox checked onChange={onCheckbox}>
            Remember me
          </Checkbox>
          <Link href="/auth/request-password">
            <a>Forgot Password?</a>
          </Link>
        </Group>
        <Button status="Success" type="button" shape="SemiRound" fullWidth>
          Login
        </Button>
      </form>
      <Socials />
      <p>
        Don&apos;t have account?{' '}
        <Link href="/auth/register">
          <a>Register</a>
        </Link>
      </p>
    </Auth>
  );
}
