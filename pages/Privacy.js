import React from 'react'
import ListBlock from './ListBlock'
import ACCESS from './ACCESS'

function Privacy() {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-[#141416]  '>
      <div className='w-[1000px]  my-10  flex flex-col  bg-[#18191D] rounded-[16px]'>
        <div className='flex flex-col px-10 py-5'>
            <h3 className='text-[#FCFCFD] text-[30px] font-bold'>Privacy Policy</h3>
            <span className='text-[#B1B5C3] text-[16px] mt-3'>Last Update: 10 July, 2024</span>
        </div>
        <div className='w-[900px] h-[48px] bg-[#1C1E24] rounded-[8px] ml-10 relative'>
            <div className='w-[14px]  h-[48px] rounded-[16px] absolute bg-[linear-gradient(90deg,_#4779F6_0%,_#4779F6_10%,_rgba(0,2,140,0.5)_50%,_rgba(0,2,140,0)_100%)]'></div>
            <span className='text-[#FCFCFD] text-[20px] px-6 mt-2 absolute'>INTRODUCTION</span>
        </div>
        <div className='w-[970px] h-[270px] px-10 mt-10  '>
            <span className='text-[#FCFCFD] text-[16px] '>Thank you for visiting FALCONX Trading Platform (“FALCONX”). By visiting, accessing, or using FALCONX and associated application program interface or mobile applications (“Site”), you consent to the policies and practices of our privacy policy (the “Privacy Policy”), PLEASE READ THIS PRIVACY POLICY CAREFULLY. This Privacy Policy explains how FALCONX uses your Personal Data (defined below) as we provide you with access and utility through our digital asset trading platform via software, API (application program interface), technologies, products and/or functionalities (“Service”). In the course of providing you our Service, to abide by the laws in the jurisdictions that we operate, and to improve our services, we need to collect and maintain personal information about you. As a rule, we never disclose any personal information about our customers to any non-affiliated third parties, except as described below. We may update this Privacy Policy at any time and from time to time by posting the amended version on this site.</span>
        </div>

        <div className='w-[900px] h-[48px] bg-[#1C1E24] rounded-[8px] ml-10  relative'>
            <div className='w-[14px]  h-[48px] rounded-[16px] absolute bg-[linear-gradient(90deg,_#4779F6_0%,_#4779F6_10%,_rgba(0,2,140,0.5)_50%,_rgba(0,2,140,0)_100%)]'></div>
            <span className='text-[#FCFCFD] text-[20px] px-6 mt-2 absolute'>DATA WE COLLECT</span>
        </div>

        <ListBlock description="FALCONX collects, processes, and stores Personal Data collected from you via your use of the Service or where you have given your consent. This Personal Data may include:"
        items={[
            "-Virtual Identity: FALCONX Account/ Password, FALCONX Nickname.",
            "-Financial Information: Bank account information, payment card primary account number (PAN), account assets, transaction history, trading data, and/or tax identification.",
            "-Transaction Information: Information about the transactions you make on the Platform, such as the name of the recipient, your name, the amount, and/or timestamp.",
            "-Message Content: Feedback, Email, SMS, App Rating, Comments.",
            "-Application Activity: Browsers and tap records, search history, installed apps, running apps, crash logs, user-generated content, favorites, mouse movement, scroll position, key events, and touch events.",
            "-Device Information: Carrier, brand, software version, model name, manufacturer, system language, OS version, locale, fingerprint, Build ID, baseband version, SIM country, SIM serial number, battery status, network, OAID, IMEI, GUID, MAC address, Android ID, SSID, Advertising ID and gyroscope/accelerometer data.",
            "-Correspondence: Survey responses, information provided to our support team or user research team.",
            "-Audio, electronic, visual and similar information, such as call and video recordings.",
            "-Biometric data about yourself, including facial recognition data, fingerprint data, or other biometric data that may be used as a method of authentication on the Device used to access the Platform."
        ]}

        secondDescription= "We may collect information you provide during the FALCONX onboarding process, which may be a completed, incomplete, or abandoned process. Offering services to residents in certain jurisdictions, we collect, store, and process your personal information in accordance with the provisions of your local data protection laws such as General Data Protection Regulation (GDPR) and Data Protection Act." />

    <ListBlock title="In addition, in order to stay in compliance to applicable Anti-Money Laundering laws and regulations, we may collect the following Personal Information:"

    items={[
        "Individual customers:",
        "-Email address",
        "-Mobile phone number",
        "-Full legal name (including former name, and names in local language)",
        "-Nationality",
        "-Passport number, or any government issued ID number",
        "-Date of birth (“DOB”)",
        "-Proof of identity (e.g. passport, driver’s license, or government-issued ID)",
        "-Residential address",
        "-Proof of residency"
    ]}/>

        <div className='w-[900px] h-[48px] bg-[#1C1E24] rounded-[8px] ml-10 mt-5 relative'>
            <div className='w-[14px]  h-[48px] rounded-[16px] absolute bg-[linear-gradient(90deg,_#4779F6_0%,_#4779F6_10%,_rgba(0,2,140,0.5)_50%,_rgba(0,2,140,0)_100%)]'></div>
            <span className='text-[#FCFCFD] text-[16px] px-6 mt-2 absolute'>ACCESS, CORRECTION, DELETION AND OTHER RIGHTS RELATING TO YOUR PERSONAL DATA</span>
        </div>

        <ACCESS article="Subject to applicable law, as outlined below, you have a number of rights in relation to your privacy and the protection of your Personal Data. You have the right to request access to, correct, and delete your Personal Data, and to ask for data portability. You may also object to our processing of your Personal Data or ask that we restrict the processing of your Personal Data in certain instances. In addition, when you consent to our processing of your Personal Data for a specified purpose, you may withdraw your consent at any time. If you want to exercise any of your rights outlined below, please contact our Data Protection Officer by email via: dataprotect@FalconX.com. These rights may be limited in some situations - for example, where we are required by applicable laws or AML compliance practices to process your Personal Data."

        title={
            [
                "-Right to access: you have the right to obtain confirmation that your Personal Data are processed and to obtain a copy of it as well as certain information related to its processing;",
                "-Right to rectify: you can request the rectification of your Personal Data which are inaccurate, and also add to it. You can also change your Personal Data in your Account at any time.",
                "-Right to delete: you can, in some cases, have your Personal Data deleted;",
                "-Right to object: you can object, for reasons relating to your particular situation, to the processing of your Personal Data. For instance, you have the right to object where we rely on legitimate interest or where we process your Personal Data for direct marketing purposes;",
                "-Right to restrict processing: You have the right, in certain cases, to temporarily restrict the processing of your Personal Data by us, provided there are valid grounds for doing so. We may continue to process your Personal Data if it is necessary for the defense of legal claims, or for any other reasons permitted by applicable law;",
                "-Right to portability: in some cases, you can ask to receive your Personal Data which you have provided to us in a structured, commonly used and machine-readable format, or, when this is possible, that we communicate your Personal Data on your behalf directly to another data controller;",
                "-Right to withdraw your consent: for processing requiring your consent, you have the right to withdraw your consent at any time. Exercising this right does not affect the lawfulness of the processing based on the consent given before the withdrawal of the latter.",
                "Exercising of your rights above may impact the form and substance of the Services we provide to you, and in some circumstances, such exercise may mean that we will not be able to continue providing the Services to you, and we may need to terminate the contract you have with us.",
                "We may charge you a reasonable fee for the handling and processing of your requests to access your personal data. If we choose to charge a fee, we will provide you with a written estimate of the fee that we will be charging. Please note that we are not required to respond to or deal with your request for access unless you have agreed to pay the fee."
            ]
        }/>
      </div>
    </div>
  )
}

export default Privacy
