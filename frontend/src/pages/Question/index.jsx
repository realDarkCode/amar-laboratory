import { Button, Container, Input } from "@material-ui/core";
import ChatMsg from "@mui-treasury/components/chatMsg/ChatMsg";
import React from "react";
import robotIcon from "./robot.png";
import "./style.css";
const QuestionPage = () => {
  document.title = "জিজ্ঞাসা";

  return (
    <div style={{ paddingTop: "1rem" }}>
      <div className="section-title">
        <h2>জিজ্ঞাসা</h2>
      </div>
      <Container maxWidth="md" className="chat-page mt-4">
        <ChatMsg side={"right"} messages={["দ্রবণের  ঘনমাত্রা কি?"]} />
        <ChatMsg
          avatar={robotIcon}
          messages={[
            "কোন নির্দিষ্ট তাপমাত্রায় এক লিটার দ্রবণের মধ্যে যত মূল দ্রব্য দ্রবীভূত থাকে,সেই মোল সংখ্যকে ঐ দ্রবণের মোলারিটি বা ঘনমাত্রা বলে। একে M দ্বারা প্রকাশ করা হয়। যার SI একক mol/L বা mol / dm 3 ।",
          ]}
        />
        <ChatMsg side={"right"} messages={["15% NaOH দ্রবণ বলতে কি বুঝায়,"]} />
        <ChatMsg
          avatar={robotIcon}
          messages={[
            "15% NaOH দ্রবণ মানে,.",
            "NaOH এর পরিমাণ,W=15gm এবং NaOH এর আয়তন,V=100ml.",
            "আমরা জানি, NaOH এর আনবিক ভর, M=40gm.",
            "এবার,ঘনমাত্রা, S= 1000w÷MV = (1000×15)÷(40×100)",
            "=3.75 M; সুতরাং, NaOH এর ঘনমাত্রা 3.75 M",
          ]}
        />
        <div className="chat-input">
          <Input type="text" placeholder="তোমার প্রশ্নটি এই বক্সে লিখ" />
          <Button type="button"> অনুসন্ধান</Button>
        </div>
      </Container>
    </div>
  );
};

export default QuestionPage;
