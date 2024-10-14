export default function RootLayout({ children }: any) {
  return (
    <section className="bg-[#F8FCFF] py-8 sm:py-12">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 2xl:px-0">
        <div className="max-w-4xl p-6 sm:p-8 md:px-16 md:py-12 xl:px-24 xl:py-16 mx-auto shadow-[0px_0px_75px_0px_rgba(0,0,0,0.07)] bg-white border rounded-xl border-primary-500/15">
          <h1 className="text-2xl sm:text-4xl xl:text-[42px] leading-tight font-bold tracking-tighter text-primary-500">
            Privacy Polic
          </h1>
          <p className="mt-4 text-base font-medium sm:text-lg text-[#474368]">
            Welcome to AI Headshot Generator Free ("the Website"). We value your privacy and are committed to protecting your personal information. This Privacy Policy ("Policy") outlines how we collect, use, store, and share your personal data. Please read this Policy carefully before using the Website to ensure you understand and agree with its terms.
          </p>
          <div className="prose text-[#474368] mx-auto mt-4 prose-headings:text-primary-500 nuxt-content">
            <h2 className="font-bold xl:py-6">
              1. Information Collection
            </h2>
            <p>
              When you use the Website, we may collect the following types of information:
            </p>
            <p className="xl:py-2"><span className="font-bold">Account Information: </span>When you register or log in, we may collect your name, email address, username, and password.</p>
            <p className="xl:py-2"><span className="font-bold">Image Data:</span> When you upload a photo to generate a headshot, we process the image solely for the purpose of generating the headshot and do not use it for any other purposes.</p>
            <p className="xl:py-2"><span className="font-bold">Technical Information: </span>We may automatically collect technical details such as your IP address, browser type, device identifier, and operating system version.</p>
            <p className="xl:py-2"><span className="font-bold">Usage Information:</span> We may gather data on your interactions with the Website, including pages visited, features used, and links clicked.</p>



            <h2 className="font-bold xl:py-6">
              2. Use of Information
            </h2>
            <p>
              We utilize the collected information for the following purposes:
            </p>
            <p className="xl:py-2"><span className="font-bold">Service Provision and Maintenance:  </span>To provide and maintain the AI headshot generation service.</p>
            <p className="xl:py-2"><span className="font-bold">Service Improvement: </span>To analyze user feedback and behavior in order to enhance and improve Website functionalities and user experience.</p>
            <p className="xl:py-2"><span className="font-bold">Security:  </span>To detect, prevent, and respond to security threats and fraudulent activities.</p>
            <p className="xl:py-2"><span className="font-bold">Communication: </span>To contact you via email with service updates, feature changes, promotional information, or account-related notifications.</p>


            <h2 className="font-bold xl:py-6">
              3. Information Sharing
            </h2>
            <p>
              We do not sell, rent, or share your personal information with third parties, except in the following circumstances:
            </p>
            <p className="xl:py-2"><span className="font-bold">With Your Consent: </span>We will share your information if we have your explicit consent.</p>
            <p className="xl:py-2"><span className="font-bold">Legal Requirements: </span>We may disclose your personal data if required by law or in response to a valid request from a governmental authority.</p>
            <p className="xl:py-2"><span className="font-bold">Service Providers: </span>We may share your information with third-party service providers (e.g., cloud storage services, image processing tools) to assist in providing our services. These providers are obligated to process your data solely based on our instructions and adhere to strict privacy agreements.</p>


            <h2 className="font-bold xl:py-6">
              4. Data Storage and Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to safeguard your personal information against unauthorized access, alteration, disclosure, or destruction. While we strive to ensure the security of your data, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <p>The images you upload are used exclusively for generating headshots and are deleted from our servers within a reasonable time after the headshot is generated.</p>
            <h2 className="font-bold xl:py-6">
              5. Cookies and Similar Technologies
            </h2>
            <p>We may use cookies and similar technologies to enhance your user experience, provide personalized services, and analyze Website traffic. You can manage or disable cookies through your browser settings; however, this may affect your ability to use certain features of the Website.</p>
            <h2 className="font-bold xl:py-6">
              6. User Rights
            </h2>
            <p>In accordance with applicable data protection laws, you have the following rights:</p>
            <p className="xl:py-2"><span className="font-bold">Access: </span>You have the right to access the personal information we hold about you.</p>
            <p className="xl:py-2"><span className="font-bold">Correction: </span>You can request corrections to any inaccurate personal data.</p>
            <p className="xl:py-2"><span className="font-bold">Deletion: </span>Under certain circumstances, you may request the deletion of your personal information.</p>
            <p className="xl:py-2"><span className="font-bold">Restriction: </span>You can request restrictions on the processing of your personal data.</p>
            <p className="xl:py-2"><span className="font-bold">Withdrawal of Consent: </span>If we are processing your data based on your consent, you have the right to withdraw that consent at any time.</p>

            <h2 className="font-bold xl:py-6">
              7. Children's Privacy
            </h2>
            <p>
              The Website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such information, we will promptly delete it.
            </p>

            <h2 className="font-bold xl:py-6">
              8. Changes to the Privacy Policy
            </h2>
            <p>
              We reserve the right to update this Policy as necessary. The updated Policy will be posted on the Website with the effective date indicated. We encourage you to review this Policy periodically to stay informed about how we protect your personal information.
            </p>

            <h2 className="font-bold xl:py-6">
              9. Contact Us
            </h2>
            <p>
              If you have any questions or need to exercise your user rights, you can contact us at:
            </p>
            <p className="xl:py-2"><span className="font-bold">Email: </span>aiheadshot.suppot@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
