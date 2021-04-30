import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2019 - 2020'} 
                        title={'Associate Software Engineer'}
                        subTitle={'Accenture India Pvt Ltd (SAP EWM/SAP SD)'}
                        text={'Managing Inbound Process and Outbound Process. Handling Replenishment,Transport Unit,Job Checking.Sale Order Management,Order to Cash,Billing and Pricing Procedure,Master Data,Partner Function.Handled and resolved different kinds of incidents such as: IDOC,No Data,TRFC Monitor ,analyze and report performance statistics for whole H&M OneWMS AO Store Consult and contribute to external users who were using H&M OneWMS AO Store and warehouse Handling detailed report related to warehouse,(Replenishment report,Stock discrepancy advice,Unadvised known/unkonwn,cross dock report).Creating clean,well-documented and  resilient report for the warehouse regularly.'} 
                    />
                   
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2016 - 2019'} 
                        title={'Degree In Computer Engineering'}
                        subTitle={'Smt. Kashibai Navale College Of Engineering Vadgaon BK, Pune University'}
                        text={'Completed graduation with distinction. Participated in extra curricular activities. Achieved overall CGPA grade pointer of 7.20 .'} 
                    />
                    <ResumeItem 
                        year={'2013 - 2016'} 
                        title={'Diploma In Computer Engineering'}
                        subTitle={'Government Polytechnic Pune'}
                        text={'Completed diploma with distinction. Participated in extra curricular activities. Achieved overall grade percentage of 79.13 .'} 
                    />
                    <ResumeItem 
                        year={'2012 - 2013'} 
                        title={'Secondary School Certificate'}
                        subTitle={'S.V.C.K. School'}
                        text={'Completed SSC with 91.09 percentile. Participated in extra curricular activities. '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
