import Link from "next/link";
import SubpageHeader from "../../SubpageHeader";

function page() {
  return (
    <div>
      <SubpageHeader title="Membership" />
      <div className="  flex justify-center my-20">
        <div className=" prose">
          <p>
            At TCM Baptist Church, we believe that God desires every believer to
            be committed to one another in the local church. We teach that
            church membership is a biblical and beneficial way to express this
            commitment. <br />
            <br /> Christians who do not join the local church in membership
            tend to be irregular attenders and they miss out on the advantages
            that accompany a membership commitment. In keeping with our mission
            to be a church established on the Word of God, we are committed to
            practising meaningful church membership. Scripture teaches that once
            a person is born again, he is baptised into the body of Christ (Rom.
            6:1-5; 1 Cor. 12:13). The thought of a nomadic, self-sufficient
            believer is foreign to Scripture. The desire of Christians is to
            gather together for biblical fellowship and worship. We believe it
            is the joy and the responsibility of every believer to commit to
            church membership, to an identifiable, local body of believers who
            have joined together for specific, divinely ordained purposes.
          </p>
          <h2>Basis for Church Membership</h2>
          <p>
            Although Scripture does not contain an explicit command to formally
            join a local church, the biblical foundation for church membership
            permeates the New Testament. This biblical basis can be seen most
            clearly in (1) the example of the early church, (2) the existence of
            church government, (3) the exercise of church discipline, and (4)
            the exhortation to mutual edification.
          </p>
          <h2>Benefits of Church Membership</h2>
          <p>
            Far more than a disimpassioned duty, membership is a gateway to
            biblically defined benefits. Some of these benefits include:
          </p>
          <ul>
            <li>
              <h3>Loving Accountability.</h3>
              <p>
                Commitment in membership naturally leads to richer fellowship.
                God wants you to belong to a Christian family to help you live
                for Him (1 Thessalonians 5:11; Galatians 6:1). You have brothers
                and sisters in Christ who can help you fight off sin and hold
                you accountable.
              </p>
            </li>
            <li>
              <h3>Mutual Edification.</h3>
              <p>
                Each believer is given spiritual gifts for the “common good” (1
                Corinthians 12:7). We benefit from other Christians who use
                their spiritual gifts to serve, sharpen, and encourage us. We,
                in turn, have the privilege of doing the same for others.
                Neglecting membership is a lose-lose situation for you and the
                other believers in the body.
              </p>
            </li>
            <li>
              <h3>Theological Guardrails.</h3>
              <p>
                You make yourself easy prey for false teachers when you are
                disconnected from leaders and other Christians who can help you
                discern biblical truth. Isolation naturally leads to wrong
                beliefs. Committing yourself to other believers (especially
                those more mature and discerning) submits your life to
                correction and edification in the truth.
              </p>
            </li>
            <li>
              <h3>Biblical Preaching.</h3>
              <p>
                The Word of God sanctifies believers (John 17:17). Sitting under
                the regular, expository preaching of God’s Word with other
                Christians will expose your sin and instruct you on how to grow
                in Christlikeness. Every Christian needs a steady diet of
                spiritual nourishment if they are going to grow spiritually (1
                Peter 2:1–3).
              </p>
            </li>
            <li>
              <h3>Corporate Worship.</h3>
              <p>
                We were made to worship God. While all of life should be an act
                of worship (Romans 12:1–2), God places a special emphasis on the
                importance of the regular gathering of His people where we sing
                together (Colossians 3:16), sit under the preaching of God’s
                Word (1 Timothy 4:13), and fellowship with and serve one another
                as the body of Christ (1 Corinthians 12:12–27; Hebrews
                10:24–25). During spiritually dry times, that we all go through,
                being with other worshippers can reignite passionate worship in
                your heart. There is a reason God commands believers to not
                neglect gathering with others believers (Hebrews 10:24)
              </p>
            </li>
            <li>
              <h3>Consistent Giving.</h3>
              <p>
                Staying at one local church gives you the unique opportunity to
                witness the specific ways God uses the church’s offerings to
                further the ministry there. Here at TCM, we have the opportunity
                to see disciples made and equipped both locally and around the
                world.
              </p>
            </li>
            <li>
              <h3>Effective Evangelism.</h3>
              <p>
                For many believers, sharing the gospel is not easy. Being alone
                only enhances our fear and laziness toward evangelism. Yet when
                we unite in the purpose of sharing the gospel, we walk in a
                manner worthy of our heavenly citizenship (Philippians 1:27).
                Evangelising alongside other Christians emboldens us when we are
                fearful and spurs us on when we are lazy.
              </p>
            </li>
          </ul>
          <p>
            Please look at our FAQ’s page to find out more about why membership
            is both biblical and beneficial.
          </p>
          <h3>Application Process</h3>
          <p>
            The first step in becoming a member of TCM Baptist Church is to
            contact us at{" "}
            <span className=" text-orange-600 italic font-bold">
              admin@tcmlincoln.co.uk
            </span>
            . We will note your interest and get you an application form. Then,
            you will attend our membership Nuts and Bolts classes. These classes
            are held throughout the year and are designed to teach you all that
            you need to know about biblical church membership. Once you have
            completed the classes, we will schedule a time for you to meet with
            one of the church elders. The last step in the process is to be
            received publicly into membership during a Lord’s Day worship
            service. <br />
            <br /> Looking for more detail? Check out our
            <span className=" ">
              {" "}
              <Link
                href="#"
                className=" text-orange-600 font-bold"
                scroll={false}
              >
                Membership FAQ
              </Link>{" "}
            </span>
            article.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
