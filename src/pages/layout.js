// import React, { useState } from 'react';
// import {
//     MenuFoldOutlined,
//     MenuUnfoldOutlined,
//     UploadOutlined,
//     UserOutlined,
//     VideoCameraOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, Button, theme } from 'antd';
// import Student from './student/Student';
// const { Header, Sider, Content } = Layout;
// const LayoutPage = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const {
//         token: { colorBgContainer, borderRadiusLG },
//     } = theme.useToken();
//     return (
//         <Layout style={{ height: '100vh' }}>
//             <Sider trigger={null} collapsible >
//                 <div className="demo-logo-vertical" />
//                 <Menu
//                     theme="dark"
//                     mode="inline"
//                     defaultSelectedKeys={['1']}
//                     items={[
//                         {
//                             key: '1',
//                             icon: <UserOutlined />,
//                             label: 'nav 1',
//                         },
//                         {
//                             key: '2',
//                             icon: <VideoCameraOutlined />,
//                             label: 'nav 2',
//                         },
//                         {
//                             key: '3',
//                             icon: <UploadOutlined />,
//                             label: 'nav 3',
//                         },
//                     ]}
//                 />
//             </Sider>
//             <Layout style={{ height: '100%' }}>
//                 <Header
//                     style={{
//                         padding: 0,
//                         background: colorBgContainer,
//                     }}
//                 >
//                     <Student />
//                 </Header>
//                 <Content
//                     style={{
//                         margin: '24px 16px',
//                         padding: 24,
//                         // minHeight: 280,
//                         background: colorBgContainer,
//                         borderRadius: borderRadiusLG,
//                         height: '100%',
//                     }}
//                 >
//                    <Student />
//                 </Content>
//             </Layout>
//         </Layout>
//     );
// };
// export default LayoutPage;