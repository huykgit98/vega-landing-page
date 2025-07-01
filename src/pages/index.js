import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import UseCase from '@/components/UseCase';
import FaqItem from '@/components/FaqItem';
import Hero from '@/components/Hero';
import AppLinks from '@/components/AppLinks';
import Link from 'next/link';
import Review from '@/components/Review';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero
          title="Vega – AI Money Tracker"
          subtitle="Track every expense in seconds, let AI auto-categorize for you, and see your budget insights in real time."
        />

        <div className="text-center">
          <h2 className="h2-lg my-lg my-lg">Watch The Demo</h2>

          <iframe
            className="youtube-video"
            src="https://www.youtube.com/embed/w_H7ooZYnAY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="eager"
          ></iframe>
        </div>

        <div id={styles.section_reviews}>
          <h2 className="h2-lg my-lg text-center">What People Are Saying</h2>
          <div className="container">
            <div className="row">
              <Review
                body="Vega has completely transformed how I track my expenses. The AI categorization is incredibly accurate and saves me so much time every month."
                name="SarahFinance23"
              />
              <Review
                body="I love how Vega automatically categorizes my expenses in real-time. I can finally see where my money goes without spending hours on manual entry."
                name="BudgetMaster2024"
              />
              <Review
                body="The AI insights in Vega are amazing! It caught spending patterns I never noticed and helped me save over $200 last month."
                name="SmartSaver99"
              />
              <Review
                body="Vega makes expense tracking effortless. Just snap a photo of my receipt and it's automatically categorized and added to my budget. Brilliant!"
                name="TechSavvySpender"
              />
              <Review
                body="I've tried so many budgeting apps, but Vega's AI categorization is a game changer. It's like having a personal financial assistant."
                name="MoneyWise2025"
                className="d-none d-md-block"
              />
              <Review
                body="Vega's real-time budget insights have helped me stay on track with my financial goals. The app is intuitive and incredibly powerful."
                name="FinanciallyFit"
                className="d-none d-md-block"
              />
            </div>
          </div>
        </div>

        <div className="text-center py-5 mt-5 bg-graident">
          <Link href="https://www.f6s.com/roads-audio" target="_blank">
            <Image
              src="/images/f6s.png"
              alt="Top Telecom startups in Virginia"
              height={60}
              width={291}
            />
          </Link>
        </div>

        <div id={styles.section_features}>
          <h2 className="h2-lg my-lg text-center">How Vega Is Unique</h2>

          <div className="container">
            <div className="row justify-content-md-center">
              <div
                className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`}
              >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image
                  src="/images/phones/device_15_player_simple2.png"
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className="col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start">
                <h3>Interactive Conversations</h3>
                <p>
                  Comment on audio with your voice, creating a completely new
                  layered communication experience.
                </p>
              </div>
            </div>

            <div className="row my-5 justify-content-md-center">
              <div
                className={`${styles.backsplash_container} col-md-6 col-lg-4 offset-lg-1 text-center`}
              >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image
                  src="/images/phones/device_15_player_nested.png"
                  alt="Screenshot of Roads app showing the home page where new comments left by other users can be listened to."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>
              <div className="col-md-6 col-lg-4 my-auto order-md-first text-center text-md-start">
                <h3>Always Have Context</h3>
                <p>
                  When listening to a comment know exactly what's being
                  referenced, and easily navigate the asynchronous conversation.
                </p>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div
                className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`}
              >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image
                  src="/images/phones/device_15_channel_invite.png"
                  alt="Screenshot of Roads app showing how to select friends to add to a channel."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image} phone_shadow`}
                />
              </div>

              <div className="col-md-6 col-lg-4 offset-lg-1 my-auto text-center text-md-start">
                <h3>Control Access</h3>
                <p>
                  You control who has access to your content through channels.
                  Only invited members can listen and collaborate on your
                  conversations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id={styles.section_use_cases}>
          <h2 className="h2-lg my-lg text-center">Ways To Use Vega</h2>
          <div className="container">
            <div className="row">
              <UseCase
                imagePath="/images/icons/note.svg"
                title="Track daily expenses automatically"
              />
              <UseCase
                imagePath="/images/icons/chat.svg"
                title="Set budget goals and spending limits"
              />
              <UseCase
                imagePath="/images/icons/book.svg"
                title="Analyze spending patterns with AI insights"
              />
              <UseCase
                imagePath="/images/icons/lecture.svg"
                title="Generate financial reports and summaries"
              />
              <UseCase
                imagePath="/images/icons/team.svg"
                title="Share budgets with family members"
              />
              <UseCase
                imagePath="/images/icons/podcast.svg"
                title="Get personalized saving recommendations"
              />
            </div>
          </div>
        </div>

        <div id={styles.section_faq}>
          <h2 className="h2-lg my-lg text-center">FAQ&apos;s</h2>
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-6">
              <div className="accordion" id="faq_accordion">
                <FaqItem
                  itemNum="one"
                  question="How do I start tracking expenses with Vega?"
                  answer="Simply open the app and either snap a photo of your receipt, manually enter an expense, or connect your bank account. Vega's AI will automatically categorize and track everything for you."
                />
                <FaqItem
                  itemNum="two"
                  question="How accurate is the AI categorization?"
                  answer="Vega's AI is highly accurate, correctly categorizing over 95% of expenses automatically. The AI learns from your spending patterns and gets smarter over time. You can always manually adjust categories if needed."
                />
                <FaqItem
                  itemNum="three"
                  question="Can I set budget limits and get notifications?"
                  answer="Yes! You can set monthly budget limits for different categories like groceries, entertainment, or dining out. Vega will send you smart notifications when you're approaching your limits or have unusual spending patterns."
                />
                <FaqItem
                  itemNum="four"
                  question="Is my financial data secure?"
                  answer="Absolutely. Vega uses bank-level encryption and security measures to protect your data. We never store your banking credentials, and all data is encrypted both in transit and at rest."
                />
                <FaqItem
                  itemNum="five"
                  question="Can I share budgets with family members?"
                  answer="Yes, Vega supports family budget sharing. You can invite family members to view and contribute to shared budgets, perfect for managing household expenses together."
                />
                <FaqItem
                  itemNum="seven"
                  question="Does Vega offer a free version?"
                  answer="Vega offers a free tier with core expense tracking and basic AI categorization. Premium features like advanced analytics, unlimited budget categories, and family sharing are available with our paid plans."
                />
                <FaqItem
                  itemNum="eight"
                  question="How can I delete my account and data?"
                  answer={
                    <span>
                      You can delete your account anytime in the app settings
                      under <strong>Account Management</strong>. This will
                      permanently delete all your data from our servers.{' '}
                      <Link href="/delete-account">
                        View detailed instructions here.
                      </Link>
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div id={styles.section_wait_list}>
          <h2 className="h2-lg my-lg text-center text-primary">
            Take Control of Your Finances
          </h2>
          <AppLinks />
        </div>
      </main>
    </>
  );
}
