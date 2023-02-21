import updateUser from "api/update_user";
import Layout from "components/Layout";
import * as Icons from "assets/icons/index";

export default function Head({ sender, recipient }) {
  return (
    <Layout.RightHead>
      <Layout.RightHeadTitle>
        <Layout.RightHeadIconWrapper>
          <Icons.At />
        </Layout.RightHeadIconWrapper>
        <Layout.RightHeadRecipient>
          {recipient && recipient.name}
        </Layout.RightHeadRecipient>
        <Layout.RightHeadRecipientStatus>
          <Icons.Offline />
        </Layout.RightHeadRecipientStatus>
      </Layout.RightHeadTitle>
      <Layout.RightHeadToolbar>
        <Layout.RightHeadIconWrapper>
          <Icons.VoiceCall />
        </Layout.RightHeadIconWrapper>
        <Layout.RightHeadIconWrapper>
          <Icons.VideoCall />
        </Layout.RightHeadIconWrapper>
        <Layout.RightHeadIconWrapper>
          <Icons.PinnedMessages />
        </Layout.RightHeadIconWrapper>
        <Layout.RightHeadIconWrapper>
          <Icons.AddFriend />
        </Layout.RightHeadIconWrapper>
        <Layout.RightHeadIconWrapper
          highlighted={!sender.hideUserProfile}
          onClick={() =>
            updateUser(sender.id, { hideUserProfile: !sender.hideUserProfile })
          }
        >
          <Icons.HideProfile />
        </Layout.RightHeadIconWrapper>
        <Layout.RightHeadSearchWrapper></Layout.RightHeadSearchWrapper>
        <Layout.RightHeadIconWrapper>
          <Icons.Inbox />
        </Layout.RightHeadIconWrapper>
        <Layout.RightHeadIconWrapper>
          <Icons.Help />
        </Layout.RightHeadIconWrapper>
      </Layout.RightHeadToolbar>
    </Layout.RightHead>
  );
}
