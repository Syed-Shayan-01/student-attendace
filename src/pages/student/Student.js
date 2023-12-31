import { MdAccountCircle } from "react-icons/md";
import Buttons from "../../components/buttons/Buttons";
import Logo from "../../components/logo/Logo";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import List from "../../components/list/List";
const { Header, Sider, Content } = Layout;

export const Student = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const StudentContent = () => {
        return (
            <>
                <div className="flex justify-between pr-72 shadow-lg  text-white bg-blue-500 w-full h-10 rounded-lg">
                    <List itemTxt={'id'} />
                    <List itemTxt={'Profile Img'} />
                    <List itemTxt={'Name'} />
                    <List itemTxt={'Course Name'} />
                </div>

                <div className="flex mt-8 justify-between pr-72 shadow-lg w-full h-10 rounded-lg">
                    <List itemTxt={'id'} />
                    <List itemTxt={'Profile Img'} />
                    <List itemTxt={'Name'} />
                    <List itemTxt={'Course Name'} />
                </div>
            </>
        )
    }
    const StudentHeader = () => {
        return (
            <nav className="flex justify-between items-center mx-24">
                {/* <div className=" flex items-center  text-[2rem] text-gray-500  font-bold">
            <MdAccountCircle className="mr-2 text-blue-500 text-[3.2rem]" />Students
        </div>
        <Buttons /> */}
                <div className={'flex items-center  text-[2rem] text-gray-500  font-bold'}>
                    <MdAccountCircle className="mr-2 text-blue-500 text-[3.2rem]" />  <Logo />
                </div>
                <Buttons />
            </nav>
        )
    }
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout style={{ height: '100%' }}>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <StudentHeader />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        // minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        height: '100%',
                    }}
                >
                    <StudentContent />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Student;