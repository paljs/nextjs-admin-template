import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Home Page',
    icon: { name: 'home' },
    link: { to: '/dashboard' },
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Extra Components',
    icon: { name: 'star-outline' },
    children: [
      {
        title: 'Accordion',
        link: { to: '/extra-components/accordion' },
      },
      {
        title: 'Actions',
        link: { to: '/extra-components/actions' },
      },
      {
        title: 'Alert',
        link: { to: '/extra-components/alert' },
      },
      {
        title: 'List',
        link: { to: '/extra-components/list' },
      },
      {
        title: 'Spinner',
        link: { to: '/extra-components/spinner' },
      },
      {
        title: 'Progress Bar',
        link: { to: '/extra-components/progress' },
      },
      {
        title: 'Tabs',
        link: { to: '/extra-components/tabs' },
      },
      {
        title: 'Chat',
        link: { to: '/extra-components/chat' },
      },
      {
        title: 'Cards',
        link: { to: '/extra-components/cards' },
      },
      {
        title: 'Flip Card',
        link: { to: '/extra-components/flip-card' },
      },
      {
        title: 'Reveal Card',
        link: { to: '/extra-components/reveal-card' },
      },
    ],
  },
  {
    title: 'Forms',
    icon: { name: 'edit-2-outline' },
    children: [
      {
        title: 'Inputs',
        link: { to: '/forms/inputs' },
      },
      {
        title: 'Layout',
        link: { to: '/forms/form-layout' },
      },
      {
        title: 'Buttons',
        link: { to: '/forms/buttons' },
      },
      {
        title: 'Select',
        link: { to: '/forms/select' },
      },
    ],
  },
  {
    title: 'UI Features',
    icon: { name: 'keypad-outline' },
    children: [
      {
        title: 'Grid',
        link: { to: '/ui-features/grid' },
      },
      {
        title: 'Animated Searches',
        link: { to: '/ui-features/search' },
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: { name: 'browser-outline' },
    children: [
      {
        title: 'Popover',
        link: { to: '/modal-overlays/popover' },
      },
      {
        title: 'Tooltip',
        link: { to: '/modal-overlays/tooltip' },
      },
      {
        title: 'Toastr',
        link: { to: '/modal-overlays/toastr' },
      },
    ],
  },
  {
    title: 'Editors',
    icon: { name: 'text-outline' },
    children: [
      {
        title: 'TinyMCE',
        link: { to: '/editors/tinymce' },
      },
      {
        title: 'CKEditor',
        link: { to: '/editors/ckeditor' },
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: '404',
        link: { to: '/miscellaneous/404' },
      },
    ],
  },
  {
    title: 'Auth',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Login',
        link: { to: '/auth/login' },
      },
      {
        title: 'Register',
        link: { to: '/auth/register' },
      },
      {
        title: 'Request Password',
        link: { to: '/auth/request-password' },
      },
      {
        title: 'Reset Password',
        link: { to: '/auth/reset-password' },
      },
    ],
  },
];

export default items;
