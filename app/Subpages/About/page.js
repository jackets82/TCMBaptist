import AboutSections from "./AboutSections";

function page() {
  return (
    <div className=" text-white [&>*:nth-child(even)]:bg-purple-600 [&>*:nth-child(odd)]:bg-purple-800">
      <AboutSections title="Baptism" link="#">
        The Lord Jesus committed two ordinances to the church as permanent
        practices: The Lord’s Supper and baptism (Matt. 28:19-20; Acts 2:38-42;
        1 Cor. 11:23-26). Baptism is a visible symbol of God’s saving work
        within a person. It is a solemn and beautiful testimony of a believer
        who has been saved by grace from the judgment for sin (Rom. 3:23; 6:23).
        It publicly declares that those who have repented and put their faith in
        Jesus Christ gladly identify with the Lord Jesus, the Head of the
        Church, and his body. (Acts 2:37-39; Rom. 6:1-3).
      </AboutSections>
      <AboutSections title="Membership" link="#">
        At TCM Baptist Church, we believe that God desires every believer to be
        committed to one another in the local church. We teach that church
        membership is a biblical and beneficial way to express this commitment.{" "}
        <br />
        <br />
        Christians who do not join the local church in membership tend to be
        irregular attenders and they miss out on the advantages that accompany a
        membership commitment. In keeping with our mission to be a church
        established on the Word of God, we are committed to practising
        meaningful church membership. <br />
        <br /> Scripture teaches that once a person is born again, he is
        baptised into the body of Christ (Rom. 6:1-5; 1 Cor. 12:13). The thought
        of a nomadic, self-sufficient believer is foreign to Scripture. The
        desire of Christians is to gather together for biblical fellowship and
        worship. <br />
        <br /> We believe it is the joy and the responsibility of every believer
        to commit to church membership, to an identifiable, local body of
        believers who have joined together for specific, divinely ordained
        purposes. <br />
        <br />
      </AboutSections>
      <AboutSections title="Our history">
        The Thomas Cooper Memorial Baptist Church has a long association with
        Lincoln. However, the present building only opened its doors in 1972.{" "}
        <br />
        <br />
        Prior to this the church building was situated in St Benedict’s Square,
        further north along the High Street, in the square behind St Benedict’s
        Church. This area now accommodates Marks and Spencer and the Wigford Way
        relief road. <br />
        <br />
        The church was built in the mid 1800s on the banks of the Brayford Pool,
        but when the building developed structural issues the church took an
        opportunity to move further down Lincoln High Street to where it can be
        found today.
      </AboutSections>
    </div>
  );
}

export default page;
