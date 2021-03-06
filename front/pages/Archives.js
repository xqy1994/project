import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import { Row, Col, BackTop, Timeline } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Footer from '../components/Footer';
// import { CalendarOutlined,TagOutlined} from '@ant-design/icons';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import '../public/style/pages/index.css';
import '../public/style/pages/archives.css';
const Archives = (list) => {
    const [mylist, setMylist] = useState(list.data);
    return (
        <>
            <Head>
                <title>xqy`s blog</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <Timeline mode="left" className="time-line">
                        <Timeline.Item label="2015"> 
                            <span className="time">05-20</span>
                            <span>Create a services</span> 
                        </Timeline.Item>
                        <Timeline.Item label="2016">
                            <span className="time">05-20</span>
                            <span>Create a services</span>
                        </Timeline.Item>
                        <Timeline.Item>
                            <span className="time">05-20</span>
                            <span>Create a services</span>
                        </Timeline.Item>
                        <Timeline.Item label="2017">
                            <span className="time">05-20</span>
                            <span>Create a services</span>
                        </Timeline.Item>
                        <Timeline.Item label="2018">
                            <span className="time">05-20</span>
                            <span>Create a services</span>
                        </Timeline.Item>
                        <Timeline.Item label="2019">
                            <span className="time">05-20</span>
                            <span>Create a services</span>
                        </Timeline.Item>
                        <Timeline.Item>
                            <span className="time">05-20</span>
                            <span>Create a services</span>
                        </Timeline.Item>
                        <Timeline.Item label="2020">
                            <span className="time">05-20</span>
                            <span>Create a services</span>
                        </Timeline.Item>
                    </Timeline>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                </Col>
            </Row>
            <Footer />
            <BackTop />
        </>
    );
};
Archives.getInitialProps = async () => {
    const res = await axios(servicePath.getArticleList);
    return { data: res.data.data };
};

export default Archives;
