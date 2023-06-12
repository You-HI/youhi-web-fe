import { Layout as AntDLayout } from 'antd';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AntDLayout>
      <Header />
      <AntDLayout.Content style={{ padding: '0 50px' }}>{children}</AntDLayout.Content>
      <Footer />
    </AntDLayout>
  );
};

export default Layout;
