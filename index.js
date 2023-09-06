let about = `Manbru Associates is a leading firm that specializes in providing comprehensive legal, 
Chartered Accountant (CA), and Company Secretary (CS) services under one roof. With a team
of highly skilled professionals, including experienced lawyers, certified accountants, and 
company secretaries, we offer integrated solutions to meet the diverse needs of our clients. 
Our firm is committed to delivering exceptional services that are tailored to the unique requirements
of each client, whether they are individuals, small businesses, or large corporations. We combine our 
legal expertise with financial acumen and corporate governance knowledge to provide comprehensive solutions
for legal compliance, taxation matters, company formations, regulatory filings, and more. At Manbru Associates, 
we strive to be a trusted partner for our clients, ensuring their legal, financial, and regulatory needs are met
efficiently and effectively.`


const content = `These terms and conditions ("Agreement") govern your use of <b>Manbru Associates</b> ("Website") operated by  <b>Manbru Associates</b> ("Company"). By accessing or using the Website, you agree to be bound by this Agreement. If you disagree with any part of these terms and conditions, please refrain from using the Website.
<br><br>
    <b>Intellectual Property</b>
    <br><br>
    a. All content, including text, graphics, logos, images, videos, and software, on the Website is the property of the Company or its licensors and is protected by intellectual property laws.
   <br>
    b. You may not reproduce, modify, distribute, or republish any content from the Website without prior written permission from the Company.
    <br><br>
    <b>User Conduct</b>
    <br><br>
    a. You agree to use the Website in a lawful and responsible manner.
    <br>
    b. You shall not engage in any activity that may disrupt or interfere with the proper functioning of the Website or violate the rights of other users or the Company.
    <br><br>
    <b>Privacy Policy</b>
    <br><br>
    a. The Company's Privacy Policy, available on the Website, outlines the collection, use, and protection of personal information provided by users. By using the Website, you consent to the Company's collection and use of your personal information as described in the Privacy Policy.
    <br><br>
    <b>Disclaimer of Liability</b>
    <br><br>
    a. The Website and its content are provided on an "as is" basis without any warranties, expressed or implied. The Company disclaims all liability for any damages, losses, or claims arising from the use of the Website.
    <br>
    b. The Company does not guarantee the accuracy, completeness, or timeliness of the information presented on the Website.
    <br><br>
    <b>Modifications and Termination</b>
    <br><br>
    a. The Company reserves the right to modify, suspend, or terminate the Website or any part of it without prior notice. The Company shall not be liable for any modification, suspension, or termination of the Website.
    <br><br>
    <b>Governing Law and Jurisdiction</b>
    <br><br>
    a. This Agreement shall be governed by and construed in accordance with the laws of [your jurisdiction]. Any disputes arising from this Agreement shall be subject to the exclusive jurisdiction of the courts in [your jurisdiction].
    <br><br>
    <b>Entire Agreement</b>
    <br><br>
    a. This Agreement constitutes the entire agreement between you and the Company regarding your use of the Website and supersedes any prior agreements or understandings.
    <br><br>
    The information provided on this website is for general informational purposes only and does not constitute legal advice. This website is not intended to solicit legal business or advertise legal services. Any communication through this website does not establish an attorney-client relationship. We cannot guarantee the confidentiality or security of any communication sent through this website. We make no warranty or representation regarding the accuracy or timeliness of the information on this website. By using this website, you agree to the terms of this Non-Solicitation Statement.
    <br>
    `
    
    let terms = document.getElementById('termsContent')

    terms.innerHTML = content



let aboutEle = document.getElementById('aboutPara')

let popup = document.getElementById("popup")

function openPopup(){
    popup.classList.add("popup-open")
    window.scrollTo(0,100)
}

function closePopup(){
    popup.classList.remove("popup-open")
}

aboutEle.textContent = about


