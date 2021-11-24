import React from 'react'
import CEH from "../Components/Images/CEHv11.png";
import "../Components/style.css";
import Footer from "../Components/Footer/Footer";

const Home = () => {
    return (
        <div className="main">
            <div className="Heading">
                EC-Council CEH (CEH v11) Certification
            </div>
            <div className="content">
                <img src={CEH} alt="Pic" className="Right" width="200px" height="190px"/>
                <div className="content-heading-left">
                    Use this quick start guide to collect all the information about EC-Council CEH (312-50) Certification exam. This study guide provides a list of objectives and resources that will help you prepare for items on the 312-50 EC-Council Certified Ethical Hacker exam. The Sample Questions will help you identify the type and difficulty level of the questions and the Practice Exams will make you familiar with the format and environment of an exam. You should refer this guide carefully before attempting your actual EC-Council CEH v11 certification exam.
                <br/>
                </div>
            </div>
            <div className="content-heading-left-2">
                The EC-Council CEH certification is mainly targeted to those candidates who want to build their career in Cyber Security domain. The EC-Council Certified Ethical Hacker (CEH) exam verifies that the candidate possesses the fundamental knowledge and proven skills in the area of EC-Council CEH v11.
            </div>
            {/* Some More Content */}
            <div className="Content-Question">
                What Exactly Is Certification?
            </div>
            <div className="Content-Answer">
                Certification is an amazing pathway to getting a high paying career in some of the best jobs in the world without spending thousands of dollars attending a four-year college. The process is pretty simple actually. Candidates select a certificate they want such as CCNA. They train for it, pay a fee to take an exam, meet a list of requirements, and voila! They are certified in a specific field. There are literally hundreds of certifications in almost any subject involving high-level skills. From networking with Cisco to running a cloud server with Amazon AWS, certifications exist at every level of the industry.
            </div>
            
            <div className="Content-Question">
                Why Would I Ever Want To Get Certified?
            </div>
            <div className="Content-Answer">
                You may know “what,” certs are but you are probably curious as to “why,” they matter. Did you know that millions of high-paying tech jobs went unfilled in 2018? Employers are desperate to hire skilled workers who possess tangible proof they can perform well on the job. Imagine working in an office making $60,000$ or $70,000 annually, after spending only a few intensive months getting certified. With certifications from providers like CompTIA, that is a reality. Better yet, the certification path never plateaus. It’s a lifelong process where you can test, study, and acquire numerous certs advancing your skillset and increasing your value as an employee. Some certs like ISACA take many years to earn but you make a large six-figure sum annually and are a hot commodity on the market.
            </div>

            <div className="Content-Question">
                Why EC-Council?
            </div>
            <div className="Content-Answer">
                Certification takes time and money, so you want to pick a certificate awarding institution that has real world value. ECCouncil is known for offering quality exams that give a variety of amazing certifications. You’ll get world class work by taking any certification path they offer and hopefully learn some new incredible skills along the way! After all, ECCouncil is industry renowned and produces employees that work all across the world in different tech niches. Whether it’s one exam or many, you’ll find everything ECCouncil offers on ExamTopics so you can begin your journey to a rewarding career.
            </div>

            <div className="Heading-2">
                EC-Council CEH (CEH v11) Exam Syllabus
            </div>

        {/*Table For Syllabus*/}
        <table className="s-table" width="80%" cellPadding="50px">
            <tr>
                <th className="s-topic">Topic</th>
                <th className="s-details">Details</th>
            </tr>

            <tr>
                <td>Introduction to Ethical Hacking</td>
                <td>
                    <ul>
                        <li>Information Security Overview</li>
                        <li>Cyber Kill Chain Concepts</li>
                        <li>Hacking Concepts</li>
                        <li>Ethical Hacking Concepts</li>
                        <li>Information Security Controls</li>
                        <li>Information Security Laws and Standards</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Footprinting and Reconnaissance</td>
                <td>
                    <ul>
                        <li>Footprinting Concepts</li>
                        <li>Footprinting Methodology</li>
                        <li>Footprinting through Search Engines</li>
                        <li>Footprinting through Web Services</li>
                        <li>Footprinting through Social Networking Sites</li>
                        <li>Website Footprinting</li>
                        <li>Email Footprinting</li>
                        <li>Whois Footprinting</li>
                        <li>DNS Footprinting</li>
                        <li>Network Footprinting</li>
                        <li>Footprinting through Social Engineering</li>
                        <li>Footprinting Tools</li>
                        <li>Footprinting Countermeasures</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Scanning Networks</td>
                <td>
                    <ul>
                        <li>Network Scanning Concepts</li>
                        <li>Scanning Tools</li>
                        <li>Host Discovery</li>
                        <li>Port and Service Discovery</li>
                        <li>OS Discovery (Banner Grabbing/OS Fingerprinting)</li>
                        <li>Scanning Beyond IDS and Firewall</li>
                        <li>Draw Network Diagrams</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Enumeration</td>
                <td>
                    <ul>
                        <li>Enumeration Concepts</li>
                        <li>NetBIOS Enumeration</li>
                        <li>SNMP Enumeration</li>
                        <li>LDAP Enumeration</li>
                        <li>NTP and NFS Enumeration</li>
                        <li>SMTP and DNS Enumeration</li>
                        <li>Other Enumeration Techniques (IPsec, VoIP, RPC, Unix/Linux, Telnet, FTP, TFTP, SMB, IPv6, and BGP enumeration)</li>
                        <li>Enumeration Countermeasures</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Vulnerability Analysis</td>
                <td>
                    <ul>
                        <li>Vulnerability Assessment Concepts</li>
                        <li>Vulnerability Classification and Assessment Types</li>
                        <li>Vulnerability Assessment Solutions and Tools</li>
                        <li>Vulnerability Assessment Reports</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>System Hacking</td>
                <td>
                    <ul>
                        <li>System Hacking Concepts</li>
                        <li>Gaining Access</li>
                        <li>Cracking Passwords</li>
                        <li>Vulnerability Exploitation</li>
                        <li>Escalating Privileges</li>
                        <li>Maintaining Access</li>
                        <li>Executing Applications</li>
                        <li>Hiding Files</li>
                        <li>Clearing Logs</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Malware Threats</td>
                <td>
                    <ul>
                        <li>Malware Concepts</li>
                        <li>APT Concepts</li>
                        <li>Trojan Concepts</li>
                        <li>Virus and Worm Concepts</li>
                        <li>File-less Malware Concepts</li>
                        <li>Malware Analysis</li>
                        <li>Malware Countermeasures</li>
                        <li>Anti-Malware Software</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Sniffing</td>
                <td>
                    <ul>
                        <li>Sniffing Concepts</li>
                        <li>Sniffing Technique: MAC Attacks</li>
                        <li>Sniffing Technique: DHCP Attacks</li>
                        <li>Sniffing Technique: ARP Poisoning</li>
                        <li>Sniffing Technique: Spoofing Attacks</li>
                        <li>Sniffing Technique: DNS Poisoning</li>
                        <li>Sniffing Tools</li>
                        <li>Sniffing Countermeasures</li>
                        <li>Sniffing Detection Techniques</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Social Engineering</td>
                <td>
                    <ul>
                        <li>Social Engineering Concepts</li>
                        <li>Social Engineering Techniques</li>
                        <li>Insider Threats</li>
                        <li>Impersonation on Social</li>
                        <li>Networking Sites</li>
                        <li>Identity Theft</li>
                        <li>Social Engineering Countermeasures</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Denial-of-Service</td>
                <td>
                    <ul>
                        <li>DoS/DDoS Concepts</li>
                        <li>DoS/DDoS Attack Techniques</li>
                        <li>Botnets</li>
                        <li>DDoS</li>
                        <li>Case Study</li>
                        <li>DoS/DDoS Attack Tools</li>
                        <li>DoS/DDoS Countermeasures</li>
                        <li>DoS/DDoS Protection Tools</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Session Hijacking </td>
                <td>
                    <ul>
                        <li>Session Hijacking Concepts</li>
                        <li>Application Level Session Hijacking</li>
                        <li>Network Level Session Hijacking</li>
                        <li>Session Hijacking Tools</li>
                        <li>Session Hijacking Countermeasures</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Evading IDS, Firewalls, and Honeypots</td>
                <td>
                    <ul>
                        <li>IDS, IPS, Firewall, and Honeypot Concepts</li>
                        <li>IDS, IPS, Firewall, and Honeypot Solutions</li>
                        <li>Evading IDS</li>
                        <li>Evading Firewalls</li>
                        <li>IDS/Firewall Evading Tools</li>
                        <li>Detecting Honeypots</li>
                        <li>IDS/Firewall Evasion Countermeasures</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Hacking Web Servers</td>
                <td>
                    <ul>
                        <li>Web Server Concepts</li>
                        <li>Web Server Attacks</li>
                        <li>Web Server Attack Methodology</li>
                        <li>Web Server Attack Tools</li>
                        <li>Web Server Countermeasures</li>
                        <li>Patch Management</li>
                        <li>Web Server Security Tools</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Hacking Web Applications</td>
                <td>
                    <ul>
                        <li>Web App Concepts</li>
                        <li>Web App Threats</li>
                        <li>Web App Hacking Methodology</li>
                        <li>Footprint Web Infrastructure</li>
                        <li>Analyze Web Applications</li>
                        <li>Bypass Client-Side Controls</li>
                        <li>Attack Authentication Mechanism</li>
                        <li>Attack Authorization Schemes</li>
                        <li>Attack Access Controls</li>
                        <li>Attack Session Management Mechanism</li>
                        <li>Perform Injection Attacks</li>
                        <li>Attack Application Logic Flaws</li>
                        <li>Attack Shared Environments</li>
                        <li>Attack Database Connectivity</li>
                        <li>Attack Web App Client</li>
                        <li>Attack Web Services</li>
                        <li>Web API, Webhooks and Web Shell</li>
                        <li>Web App Security</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>SQL Injection</td>
                <td>
                    <ul>
                        <li>SQL Injection Concepts</li>
                        <li>Types of SQL Injection</li>
                        <li>SQL Injection Methodology</li>
                        <li>SQL Injection Tools</li>
                        <li>Evasion Techniques</li>
                        <li>SQL Injection Countermeasures</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Hacking Wireless Networks</td>
                <td>
                    <ul>
                        <li>Wireless Concepts</li>
                        <li>Wireless Encryption</li>
                        <li>Wireless Threats</li>
                        <li>Wireless Hacking Methodology</li>
                        <li>Wireless Hacking Tools</li>
                        <li>Bluetooth Hacking</li>
                        <li>Wireless Countermeasures</li>
                        <li>Wireless Security Tools</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Hacking Mobile Platforms</td>
                <td>
                    <ul>
                        <li>Mobile Platform Attack Vectors</li>
                        <li>Hacking Android OS</li>
                        <li>Hacking iOS</li>
                        <li>Mobile Device Management</li>
                        <li>Mobile Security Guidelines and Tools</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>IoT and OT Hacking</td>
                <td>
                    <ul>
                        <li>IoT Concepts</li>
                        <li>IoT Attacks</li>
                        <li>IoT Hacking Methodology</li>
                        <li>IoT Hacking Tools</li>
                        <li>IoT Countermeasures</li>
                        <li>IOT Concepts</li>
                        <li>IOT Attacks</li>
                        <li>IOT Hacking Methodology</li>
                        <li>IOT Hacking Tools</li>
                        <li>IOT Countermeasures</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Cloud Computing</td>
                <td>
                    <ul>
                        <li>Cloud Computing Concepts</li>
                        <li>Container Technology</li>
                        <li>Serverless Computing</li>
                        <li>Cloud Computing Threats</li>
                        <li>Cloud Hacking</li>
                        <li>Cloud Security</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td>Cryptography</td>
                <td>
                    <ul>
                        <li>Cryptography Concepts</li>
                        <li>Encryption Algorithms</li>
                        <li>Cryptography Tools</li>
                        <li>Public Key Infrastructure (PKI)</li>
                        <li>Email Encryption</li>
                        <li>Disk Encryption</li>
                        <li>Cryptanalysis</li>
                        <li>Countermeasures</li>
                    </ul>
                </td>
            </tr>
        </table>
        <Footer></Footer>
        </div>
    )
}
export default Home;
