import AboutSections from "./AboutSections";
import AboutTeam from "./AboutTeam";

function page() {
  return (
    <div>
      <div className=" text-black [&>*:nth-child(even)]:bg-yellow-600 [&>*:nth-child(odd)]:bg-rose-800">
        <AboutSections title="Baptism" link="#">
          The Lord Jesus committed two ordinances to the church as permanent
          practices: The Lord’s Supper and baptism (Matt. 28:19-20; Acts
          2:38-42; 1 Cor. 11:23-26). Baptism is a visible symbol of God’s saving
          work within a person. It is a solemn and beautiful testimony of a
          believer who has been saved by grace from the judgment for sin (Rom.
          3:23; 6:23). It publicly declares that those who have repented and put
          their faith in Jesus Christ gladly identify with the Lord Jesus, the
          Head of the Church, and his body. (Acts 2:37-39; Rom. 6:1-3).
        </AboutSections>
        <AboutSections title="Membership" link="#">
          At TCM Baptist Church, we believe that God desires every believer to
          be committed to one another in the local church. We teach that church
          membership is a biblical and beneficial way to express this
          commitment. <br />
          <br />
          Christians who do not join the local church in membership tend to be
          irregular attenders and they miss out on the advantages that accompany
          a membership commitment. In keeping with our mission to be a church
          established on the Word of God, we are committed to practising
          meaningful church membership. <br />
          <br /> Scripture teaches that once a person is born again, he is
          baptised into the body of Christ (Rom. 6:1-5; 1 Cor. 12:13). The
          thought of a nomadic, self-sufficient believer is foreign to
          Scripture. The desire of Christians is to gather together for biblical
          fellowship and worship. <br />
          <br /> We believe it is the joy and the responsibility of every
          believer to commit to church membership, to an identifiable, local
          body of believers who have joined together for specific, divinely
          ordained purposes. <br />
          <br />
        </AboutSections>
        <AboutSections title="Our history">
          The Thomas Cooper Memorial Baptist Church has a long association with
          Lincoln. However, the present building only opened its doors in 1972.{" "}
          <br />
          <br />
          Prior to this the church building was situated in St Benedict’s
          Square, further north along the High Street, in the square behind St
          Benedict’s Church. This area now accommodates Marks and Spencer and
          the Wigford Way relief road. <br />
          <br />
          The church was built in the mid 1800s on the banks of the Brayford
          Pool, but when the building developed structural issues the church
          took an opportunity to move further down Lincoln High Street to where
          it can be found today.
        </AboutSections>
        <AboutSections title="Mission partners">
          In Matthew 28:19 God’s command, to the disciples and to us, makes it
          clear that we are all to be involved in the task of proclaiming and
          sharing the good news of Jesus Christ. <br />
          <br />
          Mission and missionary are very evocative words. They can conjure up
          in our minds pictures of far-away lands, alien cultures and
          unattainable skill sets, and it can be easy to feel that we have no
          part to play in mission. So the challenge to us is to live lives in
          which we seek to advance the gospel at every opportunity. That does
          not mean that we will all become super-evangelists, but it does mean
          that we need to be ready and willing for God to work through us and to
          use all the gifts He has given to us for His glory in the saving and
          building up of His people.
        </AboutSections>
      </div>
      <div className="my-5 flex flex-col gap-5 bg-red-600 max-w-5xl mx-auto">
        <h3>Pastor</h3>
        <AboutTeam name="Greg DeWeese">
          Greg was called to serve as Pastor of TCM from the United States in
          May 2020 and arrived during the Covid lockdown in late October 2020.
          <br />
          <br />
          Greg is married to Laile and they have two sons. In addition to
          outdoor activities like camping and hiking with his family, he enjoys
          running. When he has free time, he likes to read history, Christian
          biography, and especially Puritan classics. He enjoys exploring
          historical sites significant to Christianity around the UK.
          <br />
          <br />
          Greg holds an M.A. in Theological/Biblical Studies from Talbot School
          of Theology, Biola University and an MDiv. from The Master’s Seminary
          in Los Angeles, CA.
        </AboutTeam>
        <AboutTeam name="Ian Kirkby">
          Greg was called to serve as Pastor of TCM from the United States in
          May 2020 and arrived during the Covid lockdown in late October 2020.
          <br />
          <br />
          Greg is married to Laile and they have two sons. In addition to
          outdoor activities like camping and hiking with his family, he enjoys
          running. When he has free time, he likes to read history, Christian
          biography, and especially Puritan classics. He enjoys exploring
          historical sites significant to Christianity around the UK.
          <br />
          <br />
          Greg holds an M.A. in Theological/Biblical Studies from Talbot School
          of Theology, Biola University and an MDiv. from The Master’s Seminary
          in Los Angeles, CA.
        </AboutTeam>
      </div>
    </div>
  );
}

export default page;
