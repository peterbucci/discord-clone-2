import FriendsListBody from "../../../components/FriendsListBody";
import Avatar from "../../../fragments/Avatar";
import { useStateValue } from "../../../providers/StateProvider";

export default function Friend({ id }) {
  const {
    state: { user, users, conversations, friendsListTab },
  } = useStateValue();
  const friend = users[id];
  const conversation = Object.values(conversations).find((conversation) => {
    return conversation.users[id] === null && conversation.users[user] === null;
  });

  return (
    <FriendsListBody.ListItem
      visible={!(friendsListTab === "Online" && friend.status === "Offline")}
      to={`/channels/@me/${conversation.id}`}
    >
      <FriendsListBody.AvatarWrapper>
        <Avatar
          status={friend.status}
          image={friend.avatar ?? `default_avatars/${friend.tag % 6}`}
        />
      </FriendsListBody.AvatarWrapper>
      <FriendsListBody.ListItemText>
        <FriendsListBody.ListItemTextRow>
          <FriendsListBody.ListItemTextSpan>
            {friend.name}
          </FriendsListBody.ListItemTextSpan>
          <FriendsListBody.ListItemTextSpan tag={true}>
            #{friend.tag}
          </FriendsListBody.ListItemTextSpan>
        </FriendsListBody.ListItemTextRow>
        <FriendsListBody.ListItemTextRow fontSize="13px" color="#B9BBBE">
          {friend.status}
        </FriendsListBody.ListItemTextRow>
      </FriendsListBody.ListItemText>
    </FriendsListBody.ListItem>
  );
}
