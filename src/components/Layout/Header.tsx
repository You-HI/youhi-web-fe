import { Layout, Menu, MenuProps } from 'antd';
import { useRouter } from 'next/router';

import { PATH } from 'src/constants/path';

const menuItems: MenuProps['items'] = [{
  label: 'Home',
  key: PATH.home,
}, {
  label: 'Demo',
  key: 'demo',
  children: [{
    label: 'Toast UI Editor',
    key: PATH.editorDemo,
  }]
}];

export const Header = () => {
  const router = useRouter();
  return <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ color: 'white', marginRight: '32px' }}>로고</div>
    <Menu
      style={{ flex: 1 }}
      theme="dark"
      mode="horizontal"
      items={menuItems}
      selectedKeys={[router.pathname]}
      onClick={e => {
        router.push(e.key);
      }}
    />
  </Layout.Header>;
};