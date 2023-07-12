import { Layout, Menu } from 'antd';

export const Header = () => {
  return (
    <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ color: 'white', marginRight: '32px' }}>로고</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(5).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Layout.Header>
  );
};
