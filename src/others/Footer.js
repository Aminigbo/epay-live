import React from 'react'
import "./style/footer.css"
import { Link, useNavigate, useParams } from "react-router-dom";

const Footer = ({ content }) => {
  window.scrollTo(0, 0);
  const navigate = useNavigate()

  return (
    <>

      <div id="faq" class="faq-body">
        <div class="faq-header">
          <h3 class="faq-title"> {content}</h3>
          <div class="seperator"></div>
        </div>


        {content != "FAQ's" ? <>
          {content == "About Us" && <>
            Epay Installment Company Nig ltd. is a retail online and offline store that deals all kinds of
            electronics, furniture, mattress, Handset, groceries etc. where you can buy and pay on installment
            (pay small small) for a long period of time. Over the years we have empowered and rendered services
            to more than 2000 people. Please visit our Instagram page to see previous deliveries.
          </>}
          {content == "T & C" && <>

            Before you begin take note of our rules:
            ZERO TOLERANCE TO NON-COMPLIANCE:
            <br /><br />
            <li>
              Wed on’t tolerate Non-compliance even if your excuses for non-compliance are genuine.

            </li><br />

            <li>
              <b>SELF-DISCIPLINE.SELF-RETURN</b><br />
              We may send our recovery team (10men squad)to visit your place of residence for recovery and;

            </li>
            <br />
            <li>
              <b>DEFAULT CHARGES/FINE.</b><br />
              After paying up all outstanding balance,we may charge an additional fine of NGN10,000(or more)before we
              release item(s) back to you.

            </li>
            <br />
            <li>
              <b> OUT OF SIGHT RE-SALE:</b><br />
              We shall re-sell retrieved item(s) if customer fails to come for recovered item(s) within 4months and shall
              refund in parts only 60% to customer at our convenience.

            </li>
            <br />
            <li>
              <b> WE PUBLISH AFTER WITHIN 20DAYS OF NON-COMPLIANCE:</b><br />
              For customers who for any reason whatsoever denied us access to our item(s) uponarrival at residence.
              would have their Names,phonenumbers and picture posted on all our social media platforms with bulk
              sms sent to millions of contacts identifying defaulter as a debtor,criminal or “419”etc.

            </li>
            <br />
            <li>
              If you don’t trust your cash flow please don’t begin.
              _If you must,stay true to your promise. Be Nice…
            </li>
          </>}
          {content == "Epay return policy" && <>

            EPay offers a 5 day return window for items that meet our requirements for return.
            Please contact us via any of our contact channels within five days of delivery and we
            will ensure you get satisfactory resolution. <br /> <br />

            <b>Acceptable conditions for return</b> <br /> <br />

            <li>
              Product (including product package) must be in a good condition just as it was delivered to you.
            </li> <br />

            <li>
              Reasons for return must not be traced to buyers error, negligence or mistake in selection or decision.

            </li> <br />
            <li>
              Product seal must not be tampered with or broken but returned with seal intact and content not damaged.
            </li> <br />
            <li>
              Perishable goods cannot be returned except a valid reason is raised at the point of delivery with affirmation from the dispatcher.
            </li> <br />
            <li>
              Jewellery, innerwear, bed sheets, lingerie and socks Can not be retureturned.
            </li> <br />
            <li>
              Products outside warranty period can not be returned.
            </li> <br />
            <li>
              products still within warranty period with faults should be taken to brand  care center within city of purchase by the customers except
              for care centers not within the city where or state where product was purchased.
            </li> <br />
            <li>
              Product(s) without warranty (Fairly used or Belgium inclusive) are not eligible for return.
            </li> <br />
          </>}
          {content == "Privacy Policy" && <>

            <b> PRIVACY POLICY FOR EPAY INSTALLMENT COMPANY NIGERIA LIMITED</b><br /><br />


            1.	Introduction

            Our Privacy Policy (“Policy”) and any other documents referred to in this Policy sets out the foundation on which any personal data that Epay Installment Company Nigeria Limited gathers from you or you provide to us, will be processed. Kindly read the following cautiously to understand our views and practices as regards your personal information and how we will handle it.
            <br /><br />

            2. Consent

            You agree to this Privacy Policy when you give consent upon access to our website, digital and non-digital platforms or visit any of our offices for official purposes.

            Note that you can withdraw your consent at anytime, however such withdrawal of consent would not affect the lawfulness of processing the information based on consent given before its withdrawal.
            <br /><br />
            3. Who We Are

            Our Corporate website address is www.epayinstallment.com

            <br /><br />
            4. Collecting of Personal Information

            We collect and process individually identifiable information (as well as but not limited to email address, name, phone number, physical address, location, photo, video, banking details (when you make purchases), online identifiers, etc.) from you when you set up a free account with EPay Installment.com. Although you can browse a few sections of our site even when you are not a registered member; however, placing an order, require registration. Your contact information will be use to send you offers that are similar to those you have already purchased or enquired about. Note that the information and personal data are deemed freely provided by you to us through JWT Web Token (it’s a token that only the server can generate) etc.
            <br /><br />
            5.  How We Use Your Personal Information

            We make use of personal information to provide your desired services, provide you with the information about other goods and services that you request from us, notify you about changes to our services, ensure that content from our product is presented in the most effective manner for you, administer our product for internal operations, including   troubleshoot, data analysis, help promote a safe service; collect fees owed, measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions  as  described to you at the time of collection. In our efforts to continually improve on the services we offer, we will collect and analyze demographic and profile data about our users' activity on our website, office or the use of our products; including the internet protocol (IP) address you used to connect to the internet, your login information browser type, time zone setting, operating system and platforms and use your IP address to help identify problems with our server, and to administer our website. Your IP address is also used to help identify you and to gather broad demographic information. We will occasionally ask you to complete optional online surveys. These surveys may ask you for contact information and demographic information (like location, local government area, age, or income level). We use this data to modify your experience at our site, providing you with content that we think might interest you and to display content according to your preferences. We may work with third party/parties recurrently and shall notify when we receive information about you from them and the rationale for which we intend to use such information. If you do not want us to use your data this way, or pass your details on to third parties for marketing purposes, you may unsubscribe from promotional email via a link provided in the email.
            <br /><br />
            6.  Use of Cookies

Cookies are text files made up of tiny bits of data. It allows a web server to transfer data to a computer or device for record keeping and other purposes. Cookies are useful for enabling the browser to remember information specific to a given user. EpayInstallment.com places both permanent and temporary cookies in your computer's hard drive for the purpose of ease of flow in transactions and to improve your browsing experience. Accepting Cookies will give you the best user experience on the website, while declining cookies could potentially interfere with your use of the site. For example, online shopping, cookies enable the site to keep track of all the items you’ve placed in your cart while you continue to browse. Peradventure you do not want information collected through the use of cookies; there is a simple formula in most browsers that allows you to decline the use of cookies. To learn more about Cookies please visit https://support.google.com>answer or http://www.allaboutcookies.org/.
            <br /><br />
            7.  Legal Basis for Processing of Personal Information

            Your delicate statistics on Epayinstallment.com shall be composed and processed in concurrence with the lawful purpose. This will apply where you have given your data for some specific purposes such as,

            I.	Contract Performance: This will apply where processing is necessary for the performance of a contract to which you are a party or in order to take steps before entering into a contract with you.
            II.	Protection of Vital Interest: This is where processing is needed for the protection of your vital interests.
            III.	Public Interest:  Where processing is required for the performance of a task or function done in the interest of the public.
            <br /><br />
            8. Video/Photo Sharing

            We will usually not use your photo or video for promotions, adverts   and such activities directly related to the business of Epay Installment Company Nig Ltd without your consent duly sought and obtained. Nevertheless, customer should not unnecessarily withhold such consent.  Besides, intent must be clearly communicated via email info@epayinstallment.com  coupled with a voice call to any of our help lines 0703 8145052, 08169739760
            <br /><br />
            9. Disclosure of Your Information

            The company may decide to disclose your private information to other third parties, corporate bodies and associates, in the following circumstances; <br />
            i.	In order to help discern and forestall impersonation, and other probable illicit acts. <br />
            ii.	Connect related or several accounts to avoid abuse of our services. <br />
            iii.	To link Companies with common or co-branded services that you searched for. These entities and affiliates need not advertise to you as a result of such sharing except you openly opt-in.<br />
            iv.	Where there is a court order or summons to disclose same. <br />
            v.	For the purpose of facilitating the services of any of our associate and or contractor as it relates to the business of the company. <br />
            vi.	Reply to claims that an advertisement, posting or other content violates third party’s right. <br />
            vii.	Protect the rights or personal safety of our users or the general public. <br />
            viii.	Peradventure there is a merger or acquisition of the Company, in which case personal data held by it regarding its clients will be one of the transferred assets. <br />
            ix.	We may entertain third -party sponsor of our events such as, conferences and seminars etc. Should you register for one of those events, your details may be shared with
            those third parties or that business entity eventually the third-party may adopt this privacy policy with respect to your private data. <br />
            <br /><br />
            10. Retention of Information

            Epayinstallment.com will not retain your personal  information longer than necessary for the purposes for which it was processed, unless a longer retention period is mandated or permitted by law (such as tax, accounting or other legal requirements). Subject to request for account closure, your account will be closed, but this closure will not involve deletion of historical records of the account for the reasons already stated. However, except as may be required by law or law enforcement agents and/or regulators, further processing of the personal information related to the account will cease from time of closure.

            <br /><br />
            11. Your Rights

            The law gives you certain rights, in respect of the information we hold about you in some circumstances as provided under the Nigeria
            Data Protection Regulation or any other applicable law. You may object to the processing of your personal information or request to delete
            already inputted personal data. To make this request take the following simple steps: <br />

            I.	Send an email to info@epayinstallment.com<br />
            II.	Title your email delete my personal data<br />
            III.	We will act upon your request in accordance with the provision of the National Information Technology Development Agency (NITDA) <br />

            Where we do not act on your request to exercise any of your rights, we shall notify you within one month of the receipt of your request, of the reason(s) for not taking action and on the possibility of lodging a complaint with NITDA.

            <br /><br />
            12. Privacy Design

            When designing and implementing a new business or technical process involving the collection or use of personal data, we will take into consideration among others, the need for structured privacy planning for this process. For instance, the company shall consider collecting only the types of information required for a business process in the first instance.
            <br /><br />
            13. Security

            We adopt robust technologies and policies to ensure the personal information we hold about you is adequately secured. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access. However, bear in mind that we cannot guarantee that the internet in itself is 100% protected and so we cannot take responsibility for the illegal acts of hackers as long as we have taken the necessary and reasonable precautions. Although we have taken measure to comply with global information security management systems (ISMS) we have also put in place digital and physical security measures to limit possibilities of data privacy breach incidents. You should only access our site or services through and within a secure environment. When you have chosen a password that allows you to access certain parts of the website and mobile applications you are responsible for keeping the password confidential. We advice you do not share your password with anyone.
            <br /><br />
            14. Opt-Out

            Epayinstallment.com provides all users with the prospect to opt-out of receiving particularly non-essential (promotional and marketing-related) communications from us and on behalf of our partners, after setting up an account. If you wish to take out your contact information from all Epayinstallment.com lists and newsletters, visit https://www.epayinstallment.com/unsubscribe. In the future, you can opt-in by sending “I would like to receive newsletters and promotional marketing related adverts” or by clicking the one-click subscription button located at the bottom.
            <br /><br />
            15. Advertisements on Epayinstallment.com

            We use third-party advertising networks to serve ads when you visit our website. We do not disclose information about identifiable individuals to our advertisers, but we will provide them with aggregate information to help advertisers reach their target audience.
            <br /><br />
            16. Questions and Answers

            In the event you have questions and comments regarding this privacy policy, kindly lodge same via our herein address: info@epayinstallment.com. Our Data Protection Officer shall attend to them.
            <br /><br />
            17. Changes to Our Privacy Policy

            Epayinstallment.com reserves the right to make changes and/or updates this Privacy Policy from time to time, without prior notice; the said changes will be posted on this page and where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to this policy.

          </>}
          {content == "About Us" && <></>}

        </> : <>
          <div class="faq-list">
            <div>
              <details open>
                <summary title="what is CGi?">what is CGi?</summary>
                <p class="faq-content">
                  CGi is an acronym for Carry Go installment - it refers to your initial deposit prior delivery.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="How many day does it take to get my product delivered?">How many day does it take to get my product delivered?</summary>
                <p class="faq-content">
                  Within 3 to 5 work days within Rivers state while within 8 days outside Rivers state.
                  For items built from scratch (set of sofa chairs and other wood or metal works) we deliver within 14 to 21 days.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="Do you render pay on delivery services?">Do you render pay on delivery services?</summary>
                <p class="faq-content">
                  Yes we do but for some items within Rivers state only.</p>
              </details>
            </div>
            <div>
              <details>
                <summary title="Do I need to come to the office before I subscribe to CGi deals?">Do I need to come to the office before I subscribe to CGi deals?</summary>
                <p class="faq-content">
                  No you don't! as long as the information we gather from you is sufficient enough to establish trust. </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="Is Delivery free of charge?">Is Delivery free of charge?</summary>
                <p class="faq-content">
                  For Outright deals yes it is but for our installment or CGi deals, its NOT FREE. </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="can I go with the product after first installment or complete payment before delivery?">can I go with the product after first installment or complete payment before delivery?</summary>
                <p class="faq-content">
                  Choice is yours! We deliver to you after first deposit haven met all conditions required for delivery.</p>
              </details>
            </div>


            <div>
              <details>
                <summary title="Do I have to present any colletorial prior transaction?">Do I have to present any colletorial prior transaction?</summary>
                <p class="faq-content">
                  No you don't. Kindly visit our terms and condition page to see
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="Are you brands original?">Are you brands original?</summary>
                <p class="faq-content">
                  Yes! We buy directly from manufacturers to avoid fake brands
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="Do you have a physical store?">Do you have a physical store?</summary>
                <p class="faq-content">
                  Yes we do have physical stores/offices when you can meet with us.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="How many years have you been in operation?">How many years have you been in operation?</summary>
                <p class="faq-content">
                  We have been existing for more than 5 years but officially 5 years old this year.
                </p>
              </details>
            </div>



            <div>
              <details>
                <summary title="Do you give cash loans?">Do you give cash loans?</summary>
                <p class="faq-content">
                  No we don't! We are not a financial institution. However,  products handed over to you can later be translated to loans in other to recover our funds via banks.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="Do you deliver to other states?">Do you deliver to other states?</summary>
                <p class="faq-content">
                  Yes we do waybill to all states in Nigeria (soon global)
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="Do you offer more than 4 months installment?">Do you offer more than 4 months installment?</summary>
                <p class="faq-content">
                  Yes we do (special deals)
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="Do you have car slots?">Do you have car slots?</summary>
                <p class="faq-content">
                  At the moment we don't though we do have a dealership/affiliate program with jiji/Cars45
                </p>
              </details>
            </div>











            <div>
              <details>
                <summary title="I forgot my withdrawal pin; how do I recover it? ">I forgot my withdrawal pin; how do I recover it? </summary>
                <p class="faq-content">

                  You can use the recover password option to create a new one.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title=" 	Can I bet outside Nigeria?"> 	Can I bet outside Nigeria?</summary>
                <p class="faq-content">
                  Yes, at this beta testing stage, everyone both inside and outside Nigeria can bet.

                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title=" What is the minimum amount I can withdraw?"> What is the minimum amount I can withdraw?</summary>
                <p class="faq-content">

                  The minimum amount you can withdraw is N500.
                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title=" Is there any limit to withdrawal in a day?">Is there any limit to withdrawal in a day? </summary>
                <p class="faq-content">
                  Yes, for now, a user cannot withdraw more than N100, 000.

                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title=" Is there any charge while withdrawing?">Is there any charge while withdrawing? </summary>
                <p class="faq-content">
                  Not all.

                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title=" Will my money enter into my local account after withdrawing or do I need to open any other account?"> Will my money enter into my local account after withdrawing or do I need to open any other account?</summary>
                <p class="faq-content">
                  You can withdraw money directly into your local bank account. You don’t have to open another account.

                </p>
              </details>
            </div>
            <div>
              <details>
                <summary title="How do I protect my account? "> How do I protect my account?</summary>
                <p class="faq-content">
                  Ensure that you don’t share login details, especially your transaction pin with anyone. OgaPredictor will never call you

                </p>
              </details>
            </div>





            <div>
              <details>
                <summary title=" 	Can I have multiple accounts with Ogapredictor?">	Can I have multiple accounts with Ogapredictor?</summary>
                <p class="faq-content">
                  Well, it is not advisable for you to have multiple accounts because, at the point of withdrawal, Ogapredictor says the name you signed up with must correspond with your bank details.

                </p>
              </details>
            </div>


            <div>
              <details>
                <summary title="	Do your platform give odds? ">	Do your platform give odds?</summary>
                <p class="faq-content">
                  No. In Ogapredictor you can only bet for Home-Win, Draw, or Away-Win.

                </p>
              </details>
            </div>




          </div>
        </>}

      </div>









      <div className="footer-form">
        <button onClick={() => {
          navigate(-1)
        }} >Back to home</button>
      </div>
    </>
  )
}

export default Footer