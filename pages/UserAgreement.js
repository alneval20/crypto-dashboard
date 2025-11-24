import React from 'react'
import Authentication from './Authentication'
import Eligibility from './Eligibility'


function UserAgreement() {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-[#141416]'>
        <div className='w-[1000px]  flex flex-col gap-5  bg-[#18191D] rounded-[16px]'>
            <div className='flex flex-col gap-2 px-10 py-10 '>
             <h3 className='text-[#FCFCFD] text-[24px] font-bold leading-4 tracking-normal'>User Agreement</h3>
            <span className='text-[#B1B5C3] text-[14px] '>Last Update: 10 July, 2024</span>
            </div>

            <div className='w-[970px] h-[48px] rounded-[8px] bg-[#1C1E24] px-5  relative'>
                <div className='w-10 h-[48px] bg-[linear-gradient(90deg,_#4779F6_0%,_#4779F6_10%,_rgba(0,2,140,0.5)_50%,_rgba(0,2,140,0)_100%)] absolute rounded-[16px]'>
                </div>
                  <p className='text-[#FCFCFD] text-[16px] text-start ml-10 mt-3'>IMPORTANT</p>
            </div>

            <p className=' px-10  text-[#FCFCFD] text-[14px] leading-7'>It is your sole responsibility ensure that the computer used for the trade and liquidity of Digital Assets is secure. Due to web page display and safety considerations, it is strongly recommended that Users utilize the latest version of Google Chrome to login to FALCONX. Users shall bear the responsibility themselves for the losses or damages suffered as a result thereof.</p>


            <div className='w-[970px] h-[48px] rounded-[8px] bg-[#1C1E24] px-5  relative'>
                <div className='w-10 h-[48px] bg-[linear-gradient(90deg,_#4779F6_0%,_#4779F6_10%,_rgba(0,2,140,0.5)_50%,_rgba(0,2,140,0)_100%)] absolute rounded-[16px]'>
                </div>
                  <p className='text-[#FCFCFD] text-[16px] text-start ml-10 mt-3'>PROHIBITED COUNTRIES</p>
            </div>

            <div>
                <p className='w-[980px] px-8 text-[#FCFCFD] text-[14px] leading-7'>1) You must ensure that you are not resident of Prohibited Countries. Currently, FALCONX does not provide Services, nor do we accept registration of Users or trade applications, in the following countries: North Korea, Cuba, Sudan, Syria, Iran, Crimea, Mainland China, Indonesia, Singapore, Venezuela, the United States, the United Kingdom, and Canada (altogether referred to as 'Prohibited Countries'). For the sake of clarification, the Prohibited Countries list is non-exclusive and is subject to change, at any time and from time to time, by FALCONX in its absolute sole discretion may decide, taking into account legal and compliance considerations. You understand and acknowledge that if it is determined that you have given false representations of your location or place of residence, we reserve the right to take any appropriate actions in compliance with applicable laws and regulations, including termination of any Account immediately and liquidating any open positions. You undertake to inform FALCONX at the earliest possible opportunity if you have become resident in any of the foregoing Prohibited Countries.</p>
            </div>


            <div className='w-[970px] h-[48px] rounded-[8px] bg-[#1C1E24] px-5  relative'>
                <div className='w-10 h-[48px] bg-[linear-gradient(90deg,_#4779F6_0%,_#4779F6_10%,_rgba(0,2,140,0.5)_50%,_rgba(0,2,140,0)_100%)] absolute rounded-[16px]'>
                </div>
                  <p className='text-[#FCFCFD] text-[16px] text-start ml-10 mt-3'>RISK DISCLOSURE</p>
            </div>

            <div>
                <p className='text-[#FCFCFD] text-[14px] w-[970px] px-8 leading-7'>2) Notwithstanding our Risk Disclosure Statement available at: https://www.FalconX.com/risk to further your understanding of the risks associated with trading in Digital Assets, FALCONX hereby reminds you of the following:</p>
            </div>

            <div className='bg-gradient-to-r from-[#FCEAC8] to-[#FADFB0]/10 w-[30px] rounded-[16px] px-8 relative '>
                <p className='w-[970px] text-[#FCEAC8] font-medium z-50 text-[14px] leading-7'>You must fully understand and assess the risks in digital assets trading before conducting any trading activities or using our services; you must assess your risk tolerance carefully before engaging in digital assets trading.</p>
            </div>
        
        <Authentication title={[
            "3) Notwithstanding the foregoing, when using our Services, you may face risks regarding policy, regulatory compliance, investment yield, trading, and force majeure, etc, the non-exhaustive details of which are as follows:",
            "(a) POLICY RISK: Users of FALCONX may encounter losses due to the amendment of national laws, regulations or macro-policies which may influence the normal trade of Digital Assets.",
            "(b) COMPLIANCE RISK: Users of FALCONX may encounter losses if the User’s Digital Assets trade violates national laws or regulations.",
            "(c) INVESTMENT YIELD RISK: the Digital Asset market has its uniqueness: it never closes, with Digital Assets prices fluctuating in a very wide range. Users may encounter losses in the market.",
            "(d) TRADING RISK: Your successful transfer is dependent on mutual assent of the parties to the transfer and FALCONX does not commit to or guarantee any successful transfer.",
            "(e) FORCE MAJEURE RISK: When natural disasters, war, strikes, cyber attacks and other unpredictable, unavoidable and unformidable situations occur, FALCONX may not be able to operate normally and this may result in Users' losses. For the User’s losses caused by force majeure, FALCONX will not assume any civil liabilities.",
            "(f) RISK OF DELISTING: When a Digital Assets project party faces bankruptcy, liquidation and dissolution, or violates national laws & regulations, or under the request of the project party, FALCONX will delist such Digital Assets, which may cause losses for Users.",
            "(g) TECHNICAL RISK: Although the chance of technical fault is remote during the Digital Assets trade, we can not exclude such possibility. If such has happened, the User’s interests may be affected.",
            "(h) OPERATIONS RISK: Users may face risks due to operational error, such as transfers to wrong accounts, violations in operation regulations, etc.",
            "(i) RISK OF ACCOUNT BEING FROZEN: User’s account may be frozen or forcefully confiscated by judicial institutions in the event of debt fraud or alleged crimes."
        ]}/>

          <div className='w-[970px] h-[48px] rounded-[8px] bg-[#1C1E24] px-5  relative'>
                <div className='w-10 h-[48px] bg-[linear-gradient(90deg,_#4779F6_0%,_#4779F6_10%,_rgba(0,2,140,0.5)_50%,_rgba(0,2,140,0)_100%)] absolute rounded-[16px]'>
                </div>
                  <p className='text-[#FCFCFD] text-[16px] text-start ml-10 mt-3'>Eligibility and Registration</p>
            </div>

        <Eligibility article={[
            "4) By registering for an FALCONX Account or using or otherwise accessing FALCONX Services, you represent and warrant that: (i) as an individual, you are of legal age to form a binding contract under applicable laws; (ii) as an individual, legal person, or other organization, you have full legal capacity and sufficient authorizations to enter into this Agreement; (iii) you have not been previously suspended or removed from using FALCONX Platform or related Services; (iv) you do not have an existing FALCONX Account; (v) you are not resident, located in or otherwise attempting to access FALCONX Platform or FALCONX Services from, or otherwise acting on behalf of a person or legal entity that is resident or located in, a Prohibited Country; (vi) if you act as an employee or agent of a legal entity, and enter into these Agreements on their behalf, you represent and warrant that you have all the necessary rights and authorizations to bind such legal entity and to access and use FALCONX Platform and FALCONX Services on behalf of such legal entity; and (vii) your use of FALCONX Platform and FALCONX Services will not violate any and all laws and regulations applicable to you or the legal entity on whose behalf you are acting, including but not limited to regulations on anti-money laundering, anti-corruption, and counter-terrorist financing.",
            "5) All Users must apply for an FALCONX Account before using FALCONX Services. When you register an FALCONX Account, you must provide the information identified in this Agreement or otherwise as requested by FALCONX, and accept this Agreement, the Privacy Policy, and other FALCONX Legal Documents. FALCONX may refuse, in its absolute sole discretion, to open an FALCONX Account for you. You agree to provide complete and accurate information when opening an FALCONX Account, and agree to timely update any information you provide to FALCONX to maintain the integrity and accuracy of the information. Each User (including natural person, business or legal entity) may maintain only one main account at any given time. The registration, use, protection and management of such trading accounts are equally governed by the provisions of this Agreement, unless otherwise stated in this Agreement or the Legal Documents.",
            "6) Please note that there are legal requirements in various countries which may restrict the products and services that FALCONX can lawfully provide. Accordingly, some products and services and certain functionality within FALCONX Platform may not be available or may be restricted in certain jurisdictions or regions or to certain Users. You shall be responsible for informing yourself about and observing any restrictions and/or requirements imposed with respect to the access to and use of FALCONX Platform and FALCONX Services in each country from which FALCONX Platform and FALCONX Services are accessed by you or on your behalf. FALCONX reserves the right to change, modify or impose additional restrictions with respect to the access to and use of FALCONX Platform and/or FALCONX Services from time to time at their discretion at any time without prior notification."
        ]}/>

           
        </div>
    </div>
  )
}

export default UserAgreement
