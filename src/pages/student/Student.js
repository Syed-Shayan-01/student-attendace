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
import 'reactjs-popup/dist/index.css';
import AttendForm from "../attendaceForm/AttendForm";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import baseUrl from "../../config/BaseUrl";
const { Header, Sider, items } = Layout;

const Student = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const StudentHeader = () => {
        return (
            <nav className="flex justify-between items-center mx-24">
                {/* <div className=" flex k-center  text-[2rem] text-gray-500  font-bold">
            <MdAccountCircle className="mr-2 text-blue-500 text-[3.2rem]" />Students
        </div>
        <Buttons /> */}
                <div className={'flex items-center  text-[2rem] text-gray-500  font-bold'}>
                    <MdAccountCircle className="mr-2 text-blue-500 text-[3.2rem]" />  <Logo />
                </div>
                <Link to={'/form'}><Buttons /></Link>
            </nav>
        )
    }

    const Studentitems = () => {
        const [data, setData] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(`${baseUrl}user/`); // Use the correct endpoint for fetching all users
                    const userData = await response.json();
                    setData(userData);
                } catch (error) {
                    console.error("Error:", error);
                }
            };
            fetchData();
        }, []);
        if (!data) {
            return <div>Loading..</div>;
        }
        return (
            <>
                <div className="flex justify-between pr-72 shadow-lg  text-white bg-blue-500 w-full h-10 rounded-lg">
                    <List itemTxt={'id'} />
                    <List itemTxt={'Profile Img'} />
                    <List itemTxt={'Name'} />
                    <List itemTxt={'Course Name'} />
                </div>

                {data.map((items) => {
                    const id = items._id.match(1);

                    return (
                        <div key={items._id} className="flex justify-between mt-8  pr-72 shadow-lg w-full h-10 rounded-lg" >
                            <List itemTxt={`${id}`} />
                            <img src={`${items.ProfileImg}`} className=" w-6 h-7 mx-10" />
                            <List itemTxt={`${items.name}`} />
                            <List itemTxt={`${items.course}`} />
                        </div >
                    )
                })
                }

            </>
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
                <items
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        // minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        height: '100%',
                    }}
                >
                    <Studentitems />
                </items>
            </Layout>
        </Layout>
    );
};

export default Student;