import React from 'react'
import {RiFileZipFill} from 'react-icons/ri';
import {AiOutlineDownload} from 'react-icons/ai';
import '../Components/style.css';
import Footer from "../Components/Footer/Footer";

const About = () => {
    return (
        <div className="main">
            {/* Top Download box */}
            <div className="box1">
                <RiFileZipFill size="55px" className="rar-logo" />
                <div className="name">
                    EC Council Handouts
                </div>
                <br/>
                <div className="download-button-1">
                    <form action="/simple_function">
                    <button>
                        Download <AiOutlineDownload/>
                    </button>  
                    </form> 
                </div>
            </div>
            <div className="a-content">Related Content:</div>
            <table className="s-table" width="80%" cellPadding="50px">
                <tr>
                    <td className="a-con">Cryptography and Network Security</td>
                    <td className="a-link"><a href="/">Link</a></td>
                </tr>
                <tr>
                    <td className="a-con">Ethical Hacking and Penetration Testing</td>
                    <td className="a-link"><a href="/">Link</a></td>
                </tr><tr>
                    <td className="a-con">Virtualization and Cloud Computing</td>
                    <td className="a-link"><a href="/">Link</a></td>
                </tr><tr>
                    <td className="a-con">Digital Forensics</td>
                    <td className="a-link"><a href="/">Link</a></td>
                </tr><tr>
                    <td className="a-con">Information Security Governance</td>
                    <td className="a-link"><a href="/">Link</a></td>
                </tr><tr>
                    <td className="a-con">Malware Analysis</td>
                    <td className="a-link"><a href="/">Link</a></td>
                </tr><tr>
                    <td className="a-con">Burp Suite for penetration testing</td>
                    <td className="a-link"><a href="/">Link</a></td>
                </tr><tr>
                    <td className="a-con">Operating System</td>
                    <td className="a-link"><a href="/">Link</a></td>
                </tr><tr>
                    <td className="a-con">Microsoft Baseline Security Analyzer</td>
                    <td className="a-link"><a href="/">Link</a></td>
                </tr><tr>
                    <td className="a-con">OWASP Top Ten Web Application Security Risks</td>
                    <td className="a-link"><a href="/">Link</a></td>
                </tr>
                
            </table>
            <Footer></Footer>
        </div>
    )
}

export default About;
